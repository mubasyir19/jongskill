import CourseCard from '@/components/organism/CourseCard';
import { DataCourse } from '@/data/data';
import Image from 'next/image';
import React from 'react';

export default function CoursePage() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className=''>
          <h3 className='font-semibold md:text-xl lg:text-2xl xl:text-[28px] text-[#181B1A]'>Courses</h3>
        </div>
        <div className='flex items-center gap-3'>
          <Image src={`/images/user.jpg`} width={100} height={100} alt='profile' className='size-10 rounded-full' />
          <div className=''>
            <p className='font-medium text-base'>Mahdy Mubasyir</p>
            <p className='text-xs text-[var(--color-shades-600)]'>Level 3</p>
          </div>
        </div>
      </div>
      <section className='mt-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-5'>
            <div className='bg-white py-2.5 px-4 rounded-xl flex items-center gap-1'>
              <label className='text-black font-medium text-sm'>Sort by : </label>
              <select name='' id='' className='text-sm outline-none'>
                <option value='' className='text-[var(--color-paragraph)]'>
                  Popular
                </option>
                <option value='#'>Rating</option>
                <option value='#'>Review</option>
                <option value='#'>Content</option>
              </select>
            </div>
            <div className='bg-white py-2.5 px-4 rounded-xl'>
              <select name='' id='' className='text-sm outline-none'>
                <option value='#' className='text-[var(--color-paragraph)]'>
                  Courses
                </option>
                <option value='#'>Rating</option>
                <option value='#'>Review</option>
                <option value='#'>Content</option>
              </select>
            </div>
            <div className='bg-white py-2.5 px-4 rounded-xl flex items-center gap-1'>
              <label className='text-black font-medium text-sm'>Category: </label>
              <select name='' id='' className='text-sm outline-none'>
                <option value='' className='text-[var(--color-paragraph)]'>
                  All Category
                </option>
                <option value='#'>Rating</option>
                <option value='#'>Review</option>
                <option value='#'>Content</option>
              </select>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <button className='bg-white py-2.5 px-4 rounded-xl text-[var(--color-paragraph)] text-sm'>Filter</button>
            <button className='bg-white p-4 rounded-xl text-[var(--color-paragraph)] flex items-center justify-center'>
              <Image src={`/icons/ic-grid.svg`} width={14} height={14} alt='icon' className='size-3.5' />
            </button>
          </div>
        </div>
        <div className='mt-6 grid grid-cols-4 gap-6'>
          {DataCourse.map((data) => (
            <CourseCard
              key={data.id}
              tag={data.tag}
              thumbnail={data.thumbnail}
              title={data.title}
              lessonsLength={data.lessons.length}
              hours={data.duration}
              price={data.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
