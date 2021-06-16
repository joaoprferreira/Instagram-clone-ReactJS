import React from 'react'

import Button from '../../components/Button /Button'
import { Forgot } from '../../components/ForgotPassword/ForgotPassword'


import { Form } from '../../components/FormLogin/formLogin'

import { LoginFacebook } from '../../components/loginInFacebook/loginFacebook'

import { LogoMain } from '../../components/LogoInstagram/LogoInsta'

import "./stylesLogin.scss"


export default function Login() {
  return (
    <div className="container-pai">
      <LogoMain />
      <Form />
      <Forgot />
      <Button />
      <LoginFacebook />
      <div className="container-or">
        <hr width="50%" size={1} color="#000000 20%" />
        <hr width="50%" size={1} color="#000000 20%" />
      </div>
    </div>
  )
}