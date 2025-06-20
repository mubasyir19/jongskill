import Image from 'next/image';
import React from 'react';

interface PopularCardProps {
  thumbnail: string;
  nameMentor: string;
  price: number;
  release: string;
  titleCourse: string;
}

export default function PopularCard({ thumbnail, nameMentor, price, release, titleCourse }: PopularCardProps) {
  return (
    <div className='bg-[var(--color-shades-100)] rounded-2xl p-6'>
      <div className='flex items-center gap-5'>
        <Image
          src={`/images/${thumbnail}`}
          width={50}
          height={50}
          alt='community'
          className='lg:size-16 xl:size-20 rounded-xl object-cover'
        />
        <div className='space-y-1'>
          <p className='text-sm lg:text-base xl:text-lg text-[var(--color-title)] font-medium'>{nameMentor}</p>
          <p className='text-[8px] lg:text-xs xl:text-sm text-[var(--color-paragraph)] font-medium'>Start: {release}</p>
          <p className='text-xs lg:textsm xl:text-base text-[var(--color-primary)] font-medium'>${price}</p>
        </div>
      </div>
      <p className='mt-2.5 text-sm md:text-base lg:text-lg text-[var(--color-shades-600)] font-semibold line-clamp-2'>
        {titleCourse}
      </p>
    </div>
  );
}
