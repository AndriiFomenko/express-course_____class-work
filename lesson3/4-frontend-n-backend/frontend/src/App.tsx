import { Suspense } from 'react'
import UserList from './components/UserList'

const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="spinner"></div>
    <p className="loading-text">Завантаження користувачів...</p>
  </div>
)

const App = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <UserList />
    </Suspense>
  )
}

export default App
