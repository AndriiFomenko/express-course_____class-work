import { type UserInterface } from '../App'

const UserList = ({ users }: { users: UserInterface[] }) => {
  return (
    <div className="app-container">
      <h1 className="app-title">Спільнота Користувачів</h1>
      <div className="users-grid">
        {users.map(({ id, name, age, gender, city }: UserInterface) => (
          <div key={id} className="user-card">
            <div className="user-header">
              <h2 className="user-name">{name}</h2>
              <span className="user-id" title={id}>
                #{id.slice(0, 8)}...
              </span>
            </div>

            <div className="user-info-row">
              <span className="info-label">Вік:</span>
              <span>{age} років</span>
            </div>

            <div className="user-info-row">
              <span className="info-label">Стать:</span>
              <span>{gender === 'male' ? 'Чоловіча' : 'Жіноча'}</span>
            </div>

            <div className="user-city">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {city}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList
