import Image from 'next/image';
import React from 'react';

export default function MainDashboardPage() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className=''>
          <p className='text-base text-[var(--color-shades-600)]'>Hello Mahdy, Welcome back.</p>
          <h3 className='font-semibold text-[28px] text-[var(--color-secondary)]'>Your Dashboard today</h3>
        </div>
        <div className='flex items-center gap-3'>
          <Image src={`/images/user.jpg`} width={100} height={100} alt='profile' className='size-10 rounded-full' />
          <div className=''>
            <p className='font-medium text-base'>Mahdy Mubasyir</p>
            <p className='text-xs text-[var(--color-shades-600)]'>Level 3</p>
          </div>
        </div>
      </div>
      <section className='mt-4 grid grid-cols-4 gap-4'>
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
          <div className='mt-4 grid grid-cols-2 gap-4 h-96'>
            <div className='relative self-stretch h-full'>
              <Image
                src={'/images/course-1.png'}
                width={395}
                height={390}
                alt='course'
                className='absolute inset-0 w-full h-full object-cover rounded-2xl'
              />
              <div className='absolute inset-0 p-2 lg:p-4 xl:p-6 bg-gradient-to-b from-black/50 to-[#FBFBFB]/30 rounded-2xl flex flex-col justify-between'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <Image
                      src={`/images/user.jpg`}
                      width={100}
                      height={100}
                      alt='profile'
                      className='size-6 md:size-8 lg:size-10 xl:size-12 rounded-full border-2 border-[var(--color-primary)]'
                    />
                    <div className=''>
                      <p className='font-semibold text-white text-xs md:text-sm lg:text-base xl:text-lg'>
                        Mahdy Mubasyir
                      </p>
                      <p className='text-xs xl:text-sm text-white'>@mubasyirmahdy</p>
                    </div>
                  </div>
                  <button className='bg-[var(--color-secondary)] rounded-lg text-center text-white text-xs xl:text-base font-bold py-1 px-1.5 lg:py-2 xl:py-2.5 lg:px-2 xl:px-4'>
                    76 min
                  </button>
                </div>
                <div className='bg-[#99A7A2]/50 backdrop-blur-sm rounded-2xl py-4 px-6'>
                  <p className='text-white text-sm md:text-base lg:text-xl xl:text-2xl font-medium'>
                    Digital Marketing Pro: Mastering the Online Landscape
                  </p>
                </div>
              </div>
            </div>
            <div className='relative self-stretch h-full'>
              <Image
                src={'/images/course-2.png'}
                width={395}
                height={390}
                alt='course'
                className='absolute inset-0 w-full h-full object-cover rounded-2xl'
              />
              <div className='absolute inset-0 p-2 lg:p-4 xl:p-6 bg-gradient-to-b from-black/50 to-[#FBFBFB]/30 rounded-2xl flex flex-col justify-between'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <Image
                      src={`/images/user.jpg`}
                      width={100}
                      height={100}
                      alt='profile'
                      className='size-6 md:size-8 lg:size-10 xl:size-12 rounded-full border-2 border-[var(--color-primary)]'
                    />
                    <div className=''>
                      <p className='font-semibold text-white text-xs md:text-sm lg:text-base xl:text-lg'>
                        Mahdy Mubasyir
                      </p>
                      <p className='text-xs xl:text-sm text-white'>@mubasyirmahdy</p>
                    </div>
                  </div>
                  <button className='bg-[var(--color-secondary)] rounded-lg text-center text-white text-xs xl:text-base font-bold py-1 px-1.5 lg:py-2 xl:py-2.5 lg:px-2 xl:px-4'>
                    82 min
                  </button>
                </div>
                <div className='bg-[#99A7A2]/50 backdrop-blur-sm rounded-2xl py-4 px-6'>
                  <p className='text-white text-sm md:text-base lg:text-xl xl:text-2xl font-medium'>
                    Digital Dynamo: Unleash Your Online Potential
                  </p>
                </div>
              </div>
            </div>
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
          <div className='mt-6 grid grid-cols-2 gap-4'>
            <div className='bg-[var(--color-shades-100)] rounded-2xl p-6'>
              <div className='flex items-center gap-5'>
                <Image
                  src={'/images/course-1.png'}
                  width={50}
                  height={50}
                  alt='community'
                  className='size-24 rounded-xl'
                />
                <div className='space-y-1'>
                  <p className='text-lg text-[var(--color-title)] font-medium'>Evan Lindsey</p>
                  <p className='text-sm text-[var(--color-paragraph)] font-medium'>Start: 17 April</p>
                  <p className='text-base text-[var(--color-primary)] font-medium'>$159</p>
                </div>
              </div>
              <p className='mt-2.5 text-sm md:text-base lg:text-lg xl:text-xl text-[var(--color-shades-600)] font-semibold'>
                Digital Marketing Ethics: Navigating the Ethical Landscape
              </p>
            </div>
            <div className='bg-[var(--color-shades-100)] rounded-2xl p-6'>
              <div className='flex items-center gap-5'>
                <Image
                  src={'/images/course-1.png'}
                  width={50}
                  height={50}
                  alt='community'
                  className='size-24 rounded-xl'
                />
                <div className='space-y-1'>
                  <p className='text-lg text-[var(--color-title)] font-medium'>Evan Lindsey</p>
                  <p className='text-sm text-[var(--color-paragraph)] font-medium'>Start: 17 April</p>
                  <p className='text-base text-[var(--color-primary)] font-medium'>$159</p>
                </div>
              </div>
              <p className='mt-2.5 text-sm md:text-base lg:text-lg xl:text-xl text-[var(--color-shades-600)] font-semibold'>
                Pay-Per-Click Powerhouse: Crafting Profitable Campaigns
              </p>
            </div>
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
