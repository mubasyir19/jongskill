import React from 'react';

interface InputFieldProps {
  label: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function InputField({ label, type, name, value, placeholder, onChange }: InputFieldProps) {
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
        className='rounded-lg border border-[var(--color-shades-800)] bg-secondary-1 p-4 text-[var(--color-shades-900)] placeholder:text-[var(--color-shades-800)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]'
      />
    </div>
  );
}
