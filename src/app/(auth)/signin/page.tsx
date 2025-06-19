import InputField from '@/components/molecules/InputField';
import Link from 'next/link';
import React from 'react';

export default function SignInPage() {
  return (
    <>
      <div className='mt-4'>
        <h3 className='font-bold text-[var(--color-shades-900)] text-2xl text-center'>Learner Login</h3>
        <p className='text-center mt-4'>Sign In to your Account</p>
      </div>
      <form className='mt-4'>
        <InputField label='Email ID' type='email' placeholder='Enter your email' />
        <div className='h-7'></div>
        <InputField label='Password' type='password' placeholder='Enter your password' />
        <div className='flex justify-between mt-7 items-center'>
          <div className='flex items-center gap-3'>
            <input type='checkbox' className='size-4 accent-[var(--color-primary)]/75' />
            <label className='text-black text-base'>Remember Me</label>
          </div>
          <Link href={`/forgot-password`} className='text-[var(--color-secondary)] font-bold'>
            Forgot Password
          </Link>
        </div>
        <button className='bg-[var(--color-primary)]/50 font-bold mt-16 rounded-full w-full py-5 text-white hover:bg-[var(--color-primary)] cursor-pointer transition-all duration-300'>
          Sign in
        </button>
      </form>
    </>
  );
}
