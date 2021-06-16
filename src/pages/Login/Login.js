import React from 'react'

import Button from '../../components/Button /Button'
import { Create } from '../../components/CreateAcount/CreateAcount'
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
        <hr />
        <span className="Text-or">OR</span>
        <hr />
      </div>
      <Create />
    </div>
  )
}