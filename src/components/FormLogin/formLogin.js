import React from 'react'

import "./formLogin.scss"


export function Form(){
  return (
    <div className="formularios">
      <input type="text" placeholder="Telefone, nome de usuário ou email"  className="inputEmail"/>
      <input type="password"  placeholder="Password" className="inputSenha"/>
    </div>
  )
}