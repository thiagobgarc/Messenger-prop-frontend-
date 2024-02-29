import { useState } from 'react'
import './App.css'
import AuthPage from './AuthPage'
import ChatsPage from './ChatsPage'

function App() {
  const [user, setUser] = useState(undefined)

  {
    return !user ? <AuthPage onAuth={setUser} /> : <ChatsPage user={user} />
  }
}

export default App
