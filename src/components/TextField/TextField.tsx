// eslint-disable-next-line no-use-before-define
import * as React from 'react'

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const TextField: React.FC<TextFieldProps> = ({ label, ...props }) => {
  return (
    <label>
      {label}
      <input {...props} />
    </label>
  )
}

export default TextField
