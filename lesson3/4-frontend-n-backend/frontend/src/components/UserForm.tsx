import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { type UserInterface } from '../App'

type UserFormDataType = Omit<UserInterface, 'id'>

const UserForm = ({ onUserAdded }: { onUserAdded: () => void }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<UserFormDataType>({
    name: 'Олеся',
    age: 22,
    gender: 'female',
    city: 'Львів'
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        toast.success('Користувача успішно додано!', {
          autoClose: 3000
        })
        onUserAdded()

        toast.info('Вас буде перенаправлено на список через 5 секунд...', {
          autoClose: 4500
        })

        setTimeout(() => {
          navigate('/')
        }, 5000)
      } else {
        toast.error('Помилка при додаванні користувача', {
          autoClose: 3000
        })
      }
    } catch (error) {
      console.error('Помилка:', error)
      toast.error('Неможливо з’єднатися з сервером', {
        autoClose: 3000
      })
    }
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev: UserFormDataType) => ({
      ...prev,
      [name]: name === 'age' ? Number(value) : value
    }))
  }

  return (
    <div className="app-container">
      <h2
        className="app-title"
        style={{ fontSize: '2rem', marginBottom: '1.5rem' }}
      >
        Додати користувача
      </h2>
      <form
        onSubmit={handleSubmit}
        className="user-card"
        style={{ maxWidth: '400px', margin: '0 auto' }}
      >
        <div className="user-info-row">
          <label className="info-label">Ім'я:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'white',
              borderRadius: '8px',
              padding: '5px'
            }}
          />
        </div>

        <div className="user-info-row">
          <label className="info-label">Вік:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'white',
              borderRadius: '8px',
              padding: '5px'
            }}
          />
        </div>

        <div className="user-info-row">
          <label className="info-label">Стать:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={{
              background: '#1e293b',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'white',
              borderRadius: '8px',
              padding: '5px'
            }}
          >
            <option value="male">Чоловіча</option>
            <option value="female">Жіноча</option>
          </select>
        </div>

        <div className="user-info-row">
          <label className="info-label">Місто:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'white',
              borderRadius: '8px',
              padding: '5px'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            marginTop: '1rem',
            padding: '12px',
            borderRadius: '12px',
            border: 'none',
            background: 'linear-gradient(90deg, #6366f1, #ec4899)',
            color: 'white',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'opacity 0.2s'
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Відправити дані
        </button>
      </form>
    </div>
  )
}

export default UserForm
