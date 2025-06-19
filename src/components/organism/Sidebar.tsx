import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Sidebar() {
  return (
    <aside className='w-60 py-6'>
      <div className='mt-9'>
        <Image src={'/images/logo.png'} width={280} height={280} alt='logo' className='size-16 mx-auto' />
        <h3 className='text-2xl text-center font-bold text-[var(--color-primary)]'>
          Jong<span className='mt-1 text-white'>Skill</span>
        </h3>
        <div className='flex flex-col gap-4 pl-6 mt-10'>
          <Link
            href={`#`}
            className='text-white text-xl bg-[var(--color-primary)] font-semibold rounded-l-full flex items-center gap-6 py-5 pl-5'
          >
            <Image src={`/icons/ic-home.svg`} width={20} height={20} alt='icon' className='size-5' />
            Home
          </Link>
          <Link
            href={`#`}
            className='text-white text-xl font-semibold rounded-l-full flex items-center gap-6 py-5 pl-5'
          >
            <Image src={`/icons/ic-course.svg`} width={20} height={20} alt='icon' className='size-5' />
            Courses
          </Link>
          <Link
            href={`#`}
            className='text-white text-xl font-semibold rounded-l-full flex items-center gap-6 py-5 pl-5'
          >
            <Image src={`/icons/ic-message.svg`} width={20} height={20} alt='icon' className='size-5' />
            Messages
          </Link>
        </div>
      </div>
    </aside>
  );
}
