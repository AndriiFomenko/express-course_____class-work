import { use } from 'react'

interface UserInterface {
  id: number
  name: string
  age: number
  skills: string[]
}

const API_URL = 'http://localhost:3000/api/users'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function getUsers(): Promise<UserInterface[]> {
  await delay(1000)
  const response = await fetch(API_URL)
  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }
  return await response.json()
}

const userPromise: Promise<UserInterface[]> = getUsers()

const UserList = () => {
  const users = use(userPromise)

  return (
    <div className="app-container">
      <h1 className="app-title">Наші користувачі</h1>
      <div className="users-grid">
        {users.map(({ id, name, age, skills }) => (
          <div key={id} className="user-card">
            <h2 className="user-name">{name}</h2>
            <p className="user-age">Вік: {age} років</p>
            <div className="user-skills">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList
