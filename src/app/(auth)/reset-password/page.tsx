import InputField from '@/components/molecules/InputField';
import React from 'react';

export default function ResetPasswordPage() {
  return (
    <>
      <div className='flex-1 flex flex-col'>
        <div className='mt-4'>
          <h3 className='font-bold text-[var(--color-shades-900)] text-2xl text-center'>Reset Password</h3>
          <p className='text-center mt-4 w-3/4 mx-auto'>
            Password must include atleast 8 characters including 1 number and 1 special character
          </p>
        </div>
        <form className='mt-4 flex-1 flex flex-col justify-between'>
          <div className=''>
            <InputField label='New Password' type='password' placeholder='Enter your New Password' />
            <div className='h-7'></div>
            <InputField label='Confirm New Password' type='password' placeholder='Confirm your New Password' />
          </div>
          <button className='bg-[var(--color-primary)] font-bold rounded-full w-1/2 mx-auto py-5 text-white hover:bg-[var(--color-primary)] cursor-pointer transition-all duration-300'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
