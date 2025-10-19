import type { ComponentProps, ReactElement } from "react";
import './styles.css'


interface InputProps extends ComponentProps<'input'> {
  className?: string;
}

export function Input(props: InputProps) {
  const {
    className = '',
    type: inputType = 'text',
    ...rest
  } = props;
  return (
    <input
      className={`input input--${inputType} ${className}`}
      type={inputType}
      {...rest}
    />
  )
}
