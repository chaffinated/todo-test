import type { ReactElement } from "react";

interface ButtonProps extends ReactElement<HTMLButtonElement> {
  
}

export function Button(props: ButtonProps) {

  return (
    <button
      className='p-3 border rounded'
      {...props }
    />
  )
}
