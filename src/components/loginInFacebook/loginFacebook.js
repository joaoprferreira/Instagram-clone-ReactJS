import React from 'react'

import "./LoginStyles.scss"

import IconFacebook from "../../assets/Facebookicon.png";

export function LoginFacebook(){
  return (
    <div className="ComponentLoginInFacebook">
    <img src={IconFacebook} alt=""  className="icon"/>
    <a href=" " className="Text">Log in with Facebook</a>
    </div>
  )
}