import React from 'react'
import Button from './components/Button /Button'
import { LoginFacebook } from './components/loginInFacebook/loginFacebook'

import Login from "./pages/Login/Login"

export default function App() {
  return (
    <div>
      <LoginFacebook />
      <Button />
      <Login />
    </div>
  )
}
