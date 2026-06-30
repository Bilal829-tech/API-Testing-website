// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Users from './pages/users'
import SignUp from './pages/signUp'
import Profile from './pages/profile' 
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="mesh-gradient min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App