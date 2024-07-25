import React from 'react'
import './App.css'
import LandingPage from './pages/landingPage'
import CreateTodo from './components/createTodo'
import SignUpPage from './pages/signupPage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/createTodo' element={<CreateTodo/>} />
        <Route path='/signup' element={<SignUpPage/>} />
      </Routes>
    </Router>
  )
}

export default App
