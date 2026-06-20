import React from 'react';
import './Input.css';

export type InputProps = {
  type?: 'text' | 'password' | 'search' | 'email';
  size?: 'sm' | 'md';
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  /** Helper text shown under the input. Hidden when `error` is set. */
  helperText?: string;
  /** Error message. Presence flips the input into the error state. */
  error?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  id?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  type = 'text',
  size = 'sm',
  value,
  defaultValue,
  placeholder,
  label,
  helperText,
  error,
  disabled = false,
  leftIcon,
  rightIcon,
  id,
  name,
  onChange,
}) => {
  const reactId = React.useId();
  const inputId = id ?? reactId;
  const helpId = `${inputId}-help`;
  const hasError = Boolean(error);
  const helpText = error ?? helperText;

  return (
    <div
      className="ux-input"
      data-size={size}
      data-error={hasError || undefined}
      data-disabled={disabled || undefined}
    >
      {label && (
        <label className="ux-input__label" htmlFor={inputId}>
          {label}
        </label>
      )}

      <div className="ux-input__control">
        {leftIcon && (
          <span className="ux-input__icon ux-input__icon--left" aria-hidden="true">
            {leftIcon}
          </span>
        )}

        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          className="ux-input__field"
          aria-invalid={hasError || undefined}
          aria-describedby={helpText ? helpId : undefined}
        />

        {rightIcon && (
          <span className="ux-input__icon ux-input__icon--right" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </div>

      {helpText && (
        <p id={helpId} className="ux-input__help" data-error={hasError || undefined}>
          {helpText}
        </p>
      )}
    </div>
  );
};

export default Input;
