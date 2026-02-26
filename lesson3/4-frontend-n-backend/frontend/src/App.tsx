import { useState, useEffect, useCallback } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import UserList from './components/UserList'
import UserForm from './components/UserForm'

export interface UserInterface {
  id: string
  name: string
  age: number
  gender: string
  city: string
}

const App = () => {
  const [users, setUsers] = useState<UserInterface[]>([])

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/users')
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error('Помилка завантаження:', error)
    }
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <BrowserRouter>
      <ToastContainer position="top-right" />
      <nav className="nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link--active' : 'nav-link'
          }
        >
          👥 Користувачі
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link--active' : 'nav-link'
          }
        >
          ➕ Додати
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<UserList users={users} />} />
        <Route path="/add" element={<UserForm onUserAdded={fetchUsers} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
