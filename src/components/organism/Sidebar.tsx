'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className='hidden w-32 lg:w-40 xl:w-64 py-6 lg:flex flex-col justify-between'>
      <div className='mt-9'>
        <div className='flex flex-col xl:flex-row justify-center items-center gap-2'>
          <Image src={'/images/logo.png'} width={280} height={280} alt='logo' className='size-12 xl:size-16' />
          <div className=''>
            <h3 className='text-base text-center xl:text-start lg:text-lg xl:text-xl font-bold text-[var(--color-primary)]'>
              My<span className='mt-1 text-white'>Skill</span>
            </h3>
            <p className='text-[8px] xl:text-xs text-center xl:text-start text-white/70'>Skill Up, Ignite Change</p>
          </div>
        </div>
        <div className='flex flex-col gap-4 pl-2 lg:pl-3 xl:pl-6 mt-10'>
          <Link
            href={`/dashboard`}
            className={`text-white text-xs md:text-sm lg:text-base xl:text-lg font-semibold rounded-l-full flex items-center gap-2 lg:gap-3 xl:gap-4 py-2 lg:py-3 pl-2 lg:pl-3 xl:pl-5 ${
              pathname === '/dashboard' ? 'bg-[var(--color-primary)]' : 'bg-none'
            }`}
          >
            <Image src={`/icons/ic-home.svg`} width={20} height={20} alt='icon' className='size-5' />
            Home
          </Link>
          <Link
            href={`/dashboard/course`}
            className={`text-white text-xs md:text-sm lg:text-base xl:text-lg font-semibold rounded-l-full flex items-center gap-2 lg:gap-3 xl:gap-4 py-2 lg:py-3 pl-2 lg:pl-3 xl:pl-5 hover:bg-[var(--color-primary)] transition-all duration- ${
              pathname === '/dashboard/course' ? 'bg-[var(--color-primary)]' : 'bg-none'
            }`}
          >
            <Image src={`/icons/ic-course.svg`} width={20} height={20} alt='icon' className='size-5' />
            Courses
          </Link>
          <Link
            href={`/dashboard/message`}
            className={`text-white text-xs md:text-sm lg:text-base xl:text-lg font-semibold rounded-l-full flex items-center gap-2 lg:gap-3 xl:gap-4 py-2 lg:py-3 pl-2 lg:pl-3 xl:pl-5 hover:bg-[var(--color-primary)] transition-all duration-100 ${
              pathname === '/dashboard/message' ? 'bg-[var(--color-primary)]' : 'bg-none'
            }`}
          >
            <Image src={`/icons/ic-message.svg`} width={20} height={20} alt='icon' className='size-5' />
            Messages
          </Link>
        </div>
      </div>
      <div className='relative overflow-hidden mx-3 xl:mx-6 h-72 rounded-b-4xl'>
        <p className='font-medium text-lg text-white'>Support 24/7</p>
        <p className='mt-2 text-white/50 text-sm'>Contact us anytime</p>
        <button className='mt-6 bg-[var(--color-primary)] font-bold text-sm text-white rounded-lg cursor-pointer py-2 px-2.5'>
          Start
        </button>
        <Image
          src={'/images/animation.png'}
          width={124}
          height={175}
          alt='vector'
          className='absolute w-20 h-32 xl:w-32 xl:h-44 bottom-5 right-8 xl:bottom-10 z-10 xl:right-16'
        />
        <div className='absolute -bottom-48 -right-40 xl:-bottom-36 xl:-right-20 z-0 bg-white/20 size-80 rounded-full'></div>
      </div>
    </aside>
  );
}
