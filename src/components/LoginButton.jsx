import React from 'react'

const LoginButton = ({className, text}) => {
  return (
    <button type="button" className={className}>{text}</button>
  )
}

export default LoginButton