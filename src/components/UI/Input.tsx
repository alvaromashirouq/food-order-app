import { forwardRef, InputHTMLAttributes } from 'react';

interface InputI {
  input: InputHTMLAttributes<HTMLInputElement>;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputI>((props, ref) => {
  return (
    <div>
      <label className="capitalize font-bold" htmlFor={props.input.id}>
        {props.label}
      </label>
      <input id={props.input.id} {...props.input} ref={ref} />
    </div>
  );
});
