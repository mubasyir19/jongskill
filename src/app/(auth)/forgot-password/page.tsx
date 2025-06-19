import InputField from '@/components/molecules/InputField';
import React from 'react';

export default function ForgotPasswordPage() {
  return (
    <div className='flex-1 flex flex-col'>
      <div className='mt-4'>
        <h3 className='font-bold text-[var(--color-shades-900)] text-2xl text-center'>Forgot Password</h3>
        <p className='text-center mt-4'>Enter the email you used when you joined and we”ll send you a new password.</p>
      </div>
      <form className='mt-4 flex-1 flex flex-col justify-between'>
        <div>
          <InputField label='Email ID' type='email' placeholder='Enter your email' />
        </div>
        <div className='flex items-center gap-4 mt-4'>
          <button className='border border-[var(--color-primary)] font-bold rounded-full w-full py-5 text-[var(--color-primary)] cursor-pointer'>
            Cancel
          </button>
          <button className='bg-[var(--color-primary)]/50 font-bold rounded-full w-full py-5 text-white hover:bg-[var(--color-primary)] cursor-pointer transition-all duration-300'>
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
