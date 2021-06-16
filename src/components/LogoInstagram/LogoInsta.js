import React from 'react'

import Logo from "../../assets/Instagram-logo.png"

import "./InstagramLogoStyles.scss"

export function LogoMain(){
  return (
    <img src={Logo} alt="" className="logo-main"/>
  )
}