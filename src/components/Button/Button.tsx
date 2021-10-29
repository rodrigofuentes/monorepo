// eslint-disable-next-line no-use-before-define
import * as React from 'react'

import './Button.css'
import { ButtonProps } from './Button.types'

const Button: React.FC<ButtonProps> = ({ type, text, onClick }) => {
  return (
    <button type='button' className={`Button Button-${type}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
