// eslint-disable-next-line no-use-before-define
import * as React from 'react'

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[]
}

const TextField: React.FC<SelectProps> = ({ options, ...props }) => {
  return (
    <select>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  )
}

export default TextField
