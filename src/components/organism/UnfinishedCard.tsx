import Image from 'next/image';
import React from 'react';

interface UnfinishedCardProps {
  thumbnail: string;
  photoMentor: string;
  nameMentor: string;
  socmedMentor: string;
  duration: number;
  titleCourse: string;
}

export default function UnfinishedCard({
  thumbnail,
  photoMentor,
  nameMentor,
  socmedMentor,
  duration,
  titleCourse,
}: UnfinishedCardProps) {
  return (
    <div className='relative self-stretch h-full'>
      <Image
        src={`/images/${thumbnail}`}
        width={395}
        height={390}
        alt='course'
        className='absolute inset-0 w-full h-full object-cover rounded-2xl'
      />
      <div className='absolute inset-0 p-2 lg:p-4 bg-gradient-to-b from-black/50 to-[#FBFBFB]/30 rounded-2xl flex flex-col justify-between'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Image
              src={`/images/${photoMentor}`}
              width={100}
              height={100}
              alt='profile'
              className='size-6 md:size-8 lg:size-10 rounded-full border-2 border-[var(--color-primary)]'
            />
            <div className=''>
              <p className='font-semibold text-white text-xs md:text-sm lg:text-base'>{nameMentor}</p>
              <p className='text-xs text-white'>@{socmedMentor}</p>
            </div>
          </div>
          <button className='bg-[var(--color-secondary)] rounded-lg text-center text-white text-xs lg:text-sm font-semibold py-1 px-1.5 lg:py-2 xl:py-2.5 lg:px-2 xl:px-4'>
            {duration} min
          </button>
        </div>
        <div className='bg-[#99A7A2]/50 backdrop-blur-sm rounded-md lg:rounded-2xl py-2 px-4'>
          <p className='text-white text-sm md:text-base lg:text-lg xl:text-xl font-medium line-clamp-2'>
            {titleCourse}
          </p>
        </div>
      </div>
    </div>
  );
}
