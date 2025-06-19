import Link from 'next/link';
import React from 'react';

export default function VerifyEmailPage() {
  return (
    <div className='flex-1 flex flex-col'>
      <div className='mt-4'>
        <h3 className='font-bold text-[var(--color-shades-900)] text-2xl text-center'>Verify Your Email</h3>
        <p className='text-center mt-4'>We have send you the validation code to</p>
        <div className='flex items-center justify-center mt-4 gap-x-3'>
          <p className='text-center font-bold text-[var(--color-shades-900)]'>m.mubasyir19@gmail.com</p>
          <Link href={`#`}>
            <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M8 13.3333H14' stroke='#0B00AE' strokeWidth='1.7' strokeLinecap='round' strokeLinejoin='round' />
              <path
                d='M11 2.33334C11.2652 2.06813 11.6249 1.91913 12 1.91913C12.1857 1.91913 12.3696 1.95571 12.5412 2.02678C12.7128 2.09785 12.8687 2.20202 13 2.33334C13.1313 2.46466 13.2355 2.62057 13.3066 2.79215C13.3776 2.96373 13.4142 3.14762 13.4142 3.33334C13.4142 3.51906 13.3776 3.70296 13.3066 3.87454C13.2355 4.04612 13.1313 4.20202 13 4.33334L4.66667 12.6667L2 13.3333L2.66667 10.6667L11 2.33334Z'
                stroke='#0B00AE'
                strokeWidth='1.7'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        </div>
      </div>
      <form className='mt-6 flex-1 flex flex-col justify-between'>
        <div>
          <div className='w-fit mx-auto'>
            <label className='text-black block'>Enter OTP</label>
            <div className='flex items-center  mt-2 gap-1.5'>
              <input
                type='text'
                inputMode='numeric'
                maxLength={1}
                className='size-14 text-center border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]'
              />
              <input
                type='text'
                inputMode='numeric'
                maxLength={1}
                className='size-14 text-center border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]'
              />
              <input
                type='text'
                inputMode='numeric'
                maxLength={1}
                className='size-14 text-center border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]'
              />
              <input
                type='text'
                inputMode='numeric'
                maxLength={1}
                className='size-14 text-center border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]'
              />
              <input
                type='text'
                inputMode='numeric'
                maxLength={1}
                className='size-14 text-center border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]'
              />
              <input
                type='text'
                inputMode='numeric'
                maxLength={1}
                className='size-14 text-center border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]'
              />
            </div>
          </div>
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
