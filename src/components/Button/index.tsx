import type { ComponentProps } from "react";
import './styles.css';


interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'transparent'; 
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', ...rest } = props;

  return (
    <button
      className={`p-3 border rounded button button--${variant}`}
      {...rest }
    />
  )
}
