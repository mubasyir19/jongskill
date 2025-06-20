import Image from 'next/image';
import React from 'react';

interface CourseCardProps {
  tag: string;
  thumbnail: string;
  title: string;
  lessonsLength: number;
  hours: number;
  price: number;
}

export default function CourseCard({ tag, thumbnail, title, lessonsLength, hours, price }: CourseCardProps) {
  return (
    <div id='card-course' className='bg-white p-2.5 rounded-2xl'>
      <div id='card-header' className='relative'>
        <Image
          src={`/images/${thumbnail}`}
          width={240}
          height={160}
          alt='course'
          className='w-full h-auto rounded-2xl'
        />
        <div className='absolute top-2.5 left-2.5 px-2.5 py-1 bg-white/30 backdrop-blur-xl rounded-md text-black text-xs'>
          {tag}
        </div>
      </div>
      <div id='card-content' className='pt-4 pb-2.5 px-0.5'>
        <p id='title' className='text-black text-[15px] font-medium'>
          {title}
        </p>
        <div className='mt-3.5 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Image
              src={`/icons/ic-movie.svg`}
              width={14}
              height={12}
              alt='profile'
              className='w-3.5 h-3 rounded-full'
            />
            <p className='text-sm text-[var(--color-paragraph)]'>
              {lessonsLength} Lessons ({hours})
            </p>
          </div>
          <p className='font-medium text-sm text-[var(--color-primary)]'>${price}</p>
        </div>
      </div>
    </div>
  );
}
