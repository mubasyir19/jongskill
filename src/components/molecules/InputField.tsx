import React from 'react';

interface InputFieldProps {
  label: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: string;
}

export default function InputField({ label, type, name, value, placeholder, onChange, error }: InputFieldProps) {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={name} className='text-black'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`rounded-lg border p-4 text-[var(--color-shades-900)] placeholder:text-[var(--color-shades-800)] focus:outline-none ${
          error
            ? 'border-[var(--color-error)] focus:ring-[var(--color-error)] focus:border-[var(--color-error)]'
            : 'border-[var(--color-shades-800)] focus:border-[var(--color-primary)] focus:ring focus:ring-[var(--color-primary)]'
        }`}
      />
      {error && <p className='mt-0.5 text-sm text-[var(--color-error)]'>{error}</p>}
    </div>
  );
}
