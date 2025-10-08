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
    console.log('username:', username)
    console.log('password:', password)
    if (username === fakeUser.username && password === fakeUser.password) {
      return done(null, fakeUser)
    }

    return done(null, false, { message: 'Невірні дані для авторизації' })
  })
)

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

app.post('/login', (req, res, next) => {
  const { username, password } = req.body

  if (!username && !password) {
    return res.status(400).send('Введіть імʼя користувача та пароль')
  }

  if (!username) {
    return res.status(400).send('Поле "username" є обовʼязковим')
  }

  if (!password) {
    return res.status(400).send('Поле "password" є обовʼязковим')
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err)
    }

    if (!user) {
      const message = info?.message ?? 'Аутентифікація не була успішною'
      return res.status(401).send(message)
    }

    req.logIn(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr)
      }

      res.send('Аутентифікація пройшла успішно')
    })
  })(req, res, next)
})

app.get('/protected', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('Ми успішно зайшли на захищену сторінку')
  } else {
    res.status(401).send('Недостатньо прав для доступу')
  }
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
