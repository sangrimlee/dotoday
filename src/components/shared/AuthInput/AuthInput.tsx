import React, { InputHTMLAttributes } from 'react';

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  required?: boolean;
}

const AuthInput = React.forwardRef<HTMLInputElement, AuthInputProps>(
  (
    {
      id,
      name,
      className,
      onChange,
      onBlur,
      label,
      errorMessage,
      required = false,
      ...inputProps
    },
    ref,
  ) => {
    return (
      <div className={className}>
        <label
          htmlFor={id}
          className={`block mb-2 font-medium text-sm ${
            required && 'label-required'
          }`}
        >
          {label}
        </label>
        <input
          id={id}
          name={name}
          ref={ref}
          onBlur={onBlur}
          onChange={onChange}
          className={`auth-input ${
            errorMessage && 'auth-input-invalid'
          } ${className}`}
          {...inputProps}
        />
        {errorMessage && (
          <p className="text-xs text-red mb-1">{errorMessage}</p>
        )}
      </div>
    );
  },
);

export default AuthInput;
