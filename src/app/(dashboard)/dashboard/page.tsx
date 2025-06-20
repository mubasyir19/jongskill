import PopularCard from '@/components/molecules/PopularCard';
import UnfinishedCard from '@/components/organism/UnfinishedCard';
import { PopularCourse, unfinishedCourse } from '@/data/data';
import Image from 'next/image';
import React from 'react';

export default function MainDashboardPage() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className=''>
          <p className='text-base text-[var(--color-shades-600)]'>Hello Mahdy, Welcome back.</p>
          <h3 className='font-semibold md:text-xl lg:text-2xl xl:text-[28px] text-[var(--color-secondary)]'>
            Your Dashboard today
          </h3>
        </div>
        <div className='flex items-center gap-3'>
          <Image src={`/images/user.jpg`} width={100} height={100} alt='profile' className='size-10 rounded-full' />
          <div className=''>
            <p className='font-medium text-base'>Mahdy Mubasyir</p>
            <p className='text-xs text-[var(--color-shades-600)]'>Level 3</p>
          </div>
        </div>
      </div>
      <section className='mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4'>
        <div className='bg-[var(--color-shades-100)] rounded-2xl py-6 px-4'>
          <div className='flex items-center gap-4'>
            <div className='bg-gradient-to-t from-[#17E783] to-[#20AF62] size-12 xl:size-16 flex items-center justify-center rounded-full'>
              <Image src={'/icons/ic-completed.svg'} width={18} height={18} alt='icon' className='size-4 xl:size-6' />
            </div>
            <div className=''>
              <h3 className='text-[var(--color-secondary)] text-2xl xl:text-4xl font-semibold'>03</h3>
              <p className='text-[var(--color-shades-600)] text-xs xl:text-base'>Course completed</p>
            </div>
          </div>
          <div className='flex items-center gap-1.5 mt-9'>
            <div className='h-3 w-full rounded-full bg-[#102844]/5'>
              <div className='h-3 rounded-full bg-[var(--color-info)]' style={{ width: `50%` }}></div>
            </div>
            <p className='text-sm font-medium text-[var(--color-secondary)]'>50%</p>
          </div>
        </div>
        <div className='bg-[var(--color-shades-100)] rounded-2xl py-6 px-4'>
          <div className='flex items-center gap-4'>
            <div className='bg-gradient-to-tr from-[#FFE925] to-[#FF974D] size-12 xl:size-16 flex items-center justify-center rounded-full'>
              <Image src={'/icons/ic-progress.svg'} width={22} height={10} alt='icon' className='size-4 xl:size-6' />
            </div>
            <div className=''>
              <h3 className='text-[var(--color-secondary)] text-2xl xl:text-4xl font-semibold'>02</h3>
              <p className='text-[var(--color-shades-600)] text-xs xl:text-base'>Course in progress</p>
            </div>
          </div>
          <div className='flex items-center gap-1.5 mt-9'>
            <div className='h-3 w-full rounded-full bg-[#102844]/5'>
              <div className='h-3 rounded-full bg-[var(--color-info)]' style={{ width: `40%` }}></div>
            </div>
            <p className='text-sm font-medium text-[var(--color-secondary)]'>40%</p>
          </div>
        </div>
        <div className='bg-[var(--color-shades-100)] rounded-2xl py-6 px-4'>
          <div className='flex items-center gap-4'>
            <div className='bg-gradient-to-tr from-[#FF3737] to-[#FFA674] size-12 xl:size-16 flex items-center justify-center rounded-full'>
              <Image src={'/icons/ic-certificate.svg'} width={14} height={20} alt='icon' className='size-4 xl:size-6' />
            </div>
            <div className=''>
              <h3 className='text-[var(--color-secondary)] text-2xl xl:text-4xl font-semibold'>05</h3>
              <p className='text-[var(--color-shades-600)] text-xs xl:text-base'>Certificated earned</p>
            </div>
          </div>
          <div className='flex items-center gap-1.5 mt-9'>
            <div className='h-3 w-full rounded-full bg-[#102844]/5'>
              <div className='h-3 rounded-full bg-[var(--color-info)]' style={{ width: `10%` }}></div>
            </div>
            <p className='text-sm font-medium text-[var(--color-secondary)]'>10%</p>
          </div>
        </div>
        <div className='bg-[var(--color-shades-100)] rounded-2xl py-6 px-4'>
          <div className='flex items-center gap-4'>
            <div className='bg-gradient-to-tr from-[#4C6FFF] to-[#BB65FF] size-12 xl:size-16 flex items-center justify-center rounded-full'>
              <Image src={'/icons/ic-achivement.svg'} width={18} height={18} alt='icon' className='size-4 xl:size-6' />
            </div>
            <div className=''>
              <h3 className='text-[var(--color-secondary)] text-2xl xl:text-4xl font-semibold'>10</h3>
              <p className='text-[var(--color-shades-600)] text-xs xl:text-base'>Achievement</p>
            </div>
          </div>
          <div className='flex items-center gap-1.5 mt-9'>
            <div className='h-3 w-full rounded-full bg-[#102844]/5'>
              <div className='h-3 rounded-full bg-[var(--color-info)]' style={{ width: `70%` }}></div>
            </div>
            <p className='text-sm font-medium text-[var(--color-secondary)]'>70%</p>
          </div>
        </div>
      </section>
      <section className='flex items-stretch mt-6 gap-6'>
        <div className='flex-1'>
          <div className='flex items-center justify-between'>
            <h3 className='font-semibold text-lg lg:text-xl xl:text-2xl text-[#181B1A]'>Your Unfinished Courses</h3>
            <button className='bg-[var(--color-primary)] font-bold text-xs lg:text-sm xl:text-base text-white rounded-lg cursor-pointer py-2.5 px-4'>
              See all
            </button>
          </div>
          <div className='mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 h-96'>
            {unfinishedCourse.map((uc) => (
              <UnfinishedCard
                key={uc.id}
                thumbnail={uc.thumbnail}
                photoMentor={uc.mentor.photoProfile}
                nameMentor={uc.mentor.name}
                socmedMentor={uc.mentor.socmed}
                duration={uc.duration}
                titleCourse={uc.title}
              />
            ))}
          </div>
        </div>
        <div className='w-52 lg:w-60 xl:w-96 h-full flex flex-col'>
          <h4 className='text-lg lg:text-xl xl:text-2xl text-black'>My Community</h4>
          <div className='mt-6 w-full h-full bg-[var(--color-shades-100)] rounded-2xl py-2 flex flex-col'>
            <div className='p-4 w-full flex items-center gap-4 border-b border-[var(--color-shades-200)]'>
              <Image
                src={'/images/course-1.png'}
                width={50}
                height={50}
                alt='community'
                className='size-12 rounded-xl'
              />
              <div className='flex-1'>
                <p className='font-medium text-[var(--color-title)] text-sm lg:text-base xl:text-lg'>We The Fast</p>
                <div className='mt-1 flex items-center justify-between'>
                  <p className='text-[var(--color-paragraph)] text-xs xl:text-sm'>48 Members</p>
                  <p className='text-xs xl:text-sm font-semibold text-[var(--color-primary)]'>Private</p>
                </div>
              </div>
            </div>
            <div className='p-4 w-full flex items-center gap-4 border-b border-[var(--color-shades-200)]'>
              <Image
                src={'/images/course-1.png'}
                width={50}
                height={50}
                alt='community'
                className='size-12 rounded-xl'
              />
              <div className='flex-1'>
                <p className='font-medium text-[var(--color-title)] text-sm lg:text-base xl:text-lg'>We The Fast</p>
                <div className='mt-1 flex items-center justify-between'>
                  <p className='text-[var(--color-paragraph)] text-xs xl:text-sm'>48 Members</p>
                  <p className='text-xs xl:text-sm font-semibold text-[var(--color-primary)]'>Private</p>
                </div>
              </div>
            </div>
            <div className='p-4 w-full flex items-center gap-4 border-b border-[var(--color-shades-200)]'>
              <Image
                src={'/images/course-1.png'}
                width={50}
                height={50}
                alt='community'
                className='size-12 rounded-xl'
              />
              <div className='flex-1'>
                <p className='font-medium text-[var(--color-title)] text-sm lg:text-base xl:text-lg'>We The Fast</p>
                <div className='mt-1 flex items-center justify-between'>
                  <p className='text-[var(--color-paragraph)] text-xs xl:text-sm'>48 Members</p>
                  <p className='text-xs xl:text-sm font-semibold text-[var(--color-primary)]'>Private</p>
                </div>
              </div>
            </div>
            <div className='p-4 w-full flex items-center gap-4 border-b border-[var(--color-shades-200)]'>
              <Image
                src={'/images/course-1.png'}
                width={50}
                height={50}
                alt='community'
                className='size-12 rounded-xl'
              />
              <div className='flex-1'>
                <p className='font-medium text-[var(--color-title)] text-sm lg:text-base xl:text-lg'>We The Fast</p>
                <div className='mt-1 flex items-center justify-between'>
                  <p className='text-[var(--color-paragraph)] text-xs xl:text-sm'>48 Members</p>
                  <p className='text-xs xl:text-sm font-semibold text-[var(--color-primary)]'>Private</p>
                </div>
              </div>
            </div>
            <div className='p-4 w-full flex items-center gap-4 border-b border-[var(--color-shades-200)]'>
              <Image
                src={'/images/course-1.png'}
                width={50}
                height={50}
                alt='community'
                className='size-12 rounded-xl'
              />
              <div className='flex-1'>
                <p className='font-medium text-[var(--color-title)] text-sm lg:text-base xl:text-lg'>We The Fast</p>
                <div className='mt-1 flex items-center justify-between'>
                  <p className='text-[var(--color-paragraph)] text-xs xl:text-sm'>48 Members</p>
                  <p className='text-xs xl:text-sm font-semibold text-[var(--color-primary)]'>Private</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex mt-6 items-stretch gap-6'>
        <div className='flex-1'>
          <div className='flex items-center justify-between'>
            <h3 className='font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-[#181B1A]'>
              Popular Courses
            </h3>
            <button className='bg-[var(--color-primary)] font-bold text-xs lg:text-sm xl:text-base text-white rounded-lg cursor-pointer py-2.5 px-4'>
              See all
            </button>
          </div>
          <div className='mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {PopularCourse.map((pc) => (
              <PopularCard
                key={pc.id}
                thumbnail={pc.thumbnail}
                nameMentor={pc.mentor.name}
                price={pc.price}
                release='17 April'
                titleCourse={pc.title}
              />
            ))}
          </div>
        </div>
        <div className='w-52 lg:w-60 xl:w-96'>
          <h4 className='text-base md:text-lg lg:text-xl xl:text-2xl text-black'>Activity</h4>
          <div className='mt-6 flex flex-col gap-4'>
            <div className='bg-[var(--color-shades-100)] lg:rounded-xl xl:rounded-2xl p-3'>
              <div className='flex items-center gap-2'>
                <div className='bg-[var(--color-secondary)]/13 size-7 xl:size-9 flex rounded-md xl:rounded-lg items-center justify-center'>
                  <Image src={`/icons/ic-list.svg`} width={20} height={20} alt='icon' className='size-3 xl:size-5' />
                </div>
                <p className='text-[#272835] font-semibold text-xs xl:text-sm'>
                  2 Assignment are pending of eCommerce Basics
                </p>
              </div>
              <div className='flex justify-end items-center gap-3'>
                <button className='cursor-pointer text-[var(--color-primary)] font-bold text-xs xl:text-sm'>
                  Dismiss
                </button>
                <button className='bg-[var(--color-primary)] font-bold text-xs xl:text-sm text-white rounded-lg cursor-pointer py-2 px-2.5'>
                  Send Assigment
                </button>
              </div>
            </div>
            <div className='bg-[var(--color-shades-100)] lg:rounded-xl xl:rounded-2xl p-3'>
              <div className='flex items-center gap-2'>
                <div className='bg-[var(--color-secondary)]/13 size-7 xl:size-9 flex rounded-md xl:rounded-lg items-center justify-center'>
                  <Image src={`/icons/ic-list.svg`} width={20} height={20} alt='icon' className='size-3 xl:size-5' />
                </div>
                <p className='text-[#272835] font-semibold text-xs xl:text-sm'>
                  2 Assignment are pending of eCommerce Basics
                </p>
              </div>
              <div className='flex justify-end items-center gap-3'>
                <button className='cursor-pointer text-[var(--color-primary)] font-bold text-xs xl:text-sm'>
                  Dismiss
                </button>
                <button className='bg-[var(--color-primary)] font-bold text-xs xl:text-sm text-white rounded-lg cursor-pointer py-2 px-2.5'>
                  Send Assigment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
