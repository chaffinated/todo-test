import type { ReactElement } from "react";

interface InputProps extends ReactElement<HTMLInputElement> {
  value: string;
  label: string;
}

export function Input(props: InputProps) {
  return (
    <input
      className='p-3 border rounded'
      {...props}
    />
  )
}
