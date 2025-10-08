import express from 'express'
import session from 'express-session'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

const app = express()

const fakeUser = {
  id: '123',
  username: 'admin',
  password: 'password'
}

const sessionOptions = {
  secret: 'secret_key',
  resave: false,
  saveUninitialized: false
}

passport.use(
  new LocalStrategy((username, password, done) => {
    if (username === fakeUser.username && password === fakeUser.password) {
      return done(null, fakeUser)
    }

    return done(null, false, { message: 'Невірні дані для авторизації' })
  })
)

const setFlashMessage = (req, message, type = 'error') => {
  req.session.flash = { type, message }
}

const popFlashMessage = (req) => {
  const { flash } = req.session
  delete req.session.flash
  return flash
}

const renderLoginPage = (req, res, statusCode = 200) => {
  const flash = popFlashMessage(req)
  const messageBlock = flash ? `<h2 data-type="${flash.type}">${flash.message}</p>` : ''

  res.status(statusCode).send(`
      <h1>Форма входу</h1>
      <form method="POST" action="/login">
        <div>
          <label>
            Ім'я користувача
            <input type="text" name="username" placeholder="admin" value="admin" required>
          </label>
        </div>
        <div>
          <label>
            Пароль
            <input type="password" name="password" placeholder="password" value="password" required>
          </label>
        </div>
        <button type="submit">Увійти</button>
      </form>
      ${messageBlock}
    `)
}

app.use(express.urlencoded({ extended: true }))
app.use(session(sessionOptions))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  if (id === fakeUser.id) {
    done(null, fakeUser)
  } else {
    done(new Error('Невірний ID користувача'))
  }
})

app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/protected')
  } else {
    res.redirect('/login')
  }
})

app.get('/login', (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect('/protected')
  }

  renderLoginPage(req, res)
})

app.post('/login', (req, res, next) => {
  const { username, password } = req.body

  if (!username && !password) {
    setFlashMessage(req, 'Введіть імʼя користувача та пароль')
    return res.redirect(303, '/login')
  }

  if (!username) {
    setFlashMessage(req, 'Поле "username" є обовʼязковим')
    return res.redirect(303, '/login')
  }

  if (!password) {
    setFlashMessage(req, 'Поле "password" є обовʼязковим')
    return res.redirect(303, '/login')
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err)
    }

    if (!user) {
      const message = info?.message ?? 'Аутентифікація не була успішною'
      setFlashMessage(req, message)
      return res.redirect(303, '/login')
    }

    req.logIn(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr)
      }

      setFlashMessage(req, 'Аутентифікація пройшла успішно', 'success')
      res.redirect('/protected')
    })
  })(req, res, next)
})

app.get('/protected', (req, res) => {
  if (!req.isAuthenticated()) {
    setFlashMessage(req, 'Авторизуйтеся, щоб переглянути захищену сторінку')
    return res.redirect('/login')
  }

  const flash = popFlashMessage(req)
  const messageBlock = flash ? `<p data-type="${flash.type}">${flash.message}</p>` : ''

  res.send(`
    <h1>Захищена сторінка</h1>
    ${messageBlock}
    <p>Ви успішно пройшли аутентифікацію.</p>
    <form method="POST" action="/logout">
      <button type="submit">Вийти</button>
    </form>
  `)
})

app.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err)
    }

    setFlashMessage(req, 'Ви вийшли з акаунту', 'success')
    res.redirect('/login')
  })
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
