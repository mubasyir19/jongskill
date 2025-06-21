import { messages } from '@/data/data';
import Image from 'next/image';
import React from 'react';

export default function MessagePage() {
  return (
    <div className='flex items-stretch gap-4'>
      <div className='w-80 h-full bg-white rounded-2xl py-5 px-3 overflow-auto'>
        <div className='flex items-center justify-between'>
          <p className='text-base font-medium text-[var(--color-title)]'>Message</p>
          <button className='size-6 rounded-full cursor-pointer bg-[#4C6FFF] flex items-center justify-center'>
            <p className='text-white text-sm'>+</p>
          </button>
        </div>
        <div className='bg-[#F8F8FB] rounded-lg py-2 px-4 flex items-center gap-3 mt-5'>
          <Image src={'/icons/ic-search.svg'} width={14} height={14} alt='search' className='size-3' />
          <input
            type='text'
            placeholder='Search'
            className='border-none w-full focus:outline-none placeholder:text-xs placeholder:text-[var(--color-paragraph)] text-sm'
          />
        </div>
        <div className='flex flex-col mt-5'>
          <button id='chat' className='flex gap-2.5 items-center px-4 py-5 rounded-lg hover:bg-[#4C6FFF]/5'>
            <div className=''>
              <Image
                src={'/images/user.jpg'}
                width={50}
                height={50}
                alt='search'
                className='size-12 rounded-full border border-[#4C6FFF]/10'
              />
            </div>
            <div className='flex-1'>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-medium text-[var(--color-title)]'>Mahdy Mubasyir</p>
                <p className='text-[10px] text-[var(--color-title)]/50'>8:10 PM</p>
              </div>
              <p className='line-clamp-1 text-start mt-1 text-xs text-[var(--color-title)]'>
                The passage experienced a surge in popularity during the
              </p>
            </div>
          </button>
          <button id='chat' className='flex gap-2.5 items-center px-4 py-5 rounded-lg hover:bg-[#4C6FFF]/5'>
            <div className=''>
              <Image
                src={'/images/user.jpg'}
                width={50}
                height={50}
                alt='search'
                className='size-12 rounded-full border border-[#4C6FFF]/10'
              />
            </div>
            <div className='flex-1'>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-medium text-[var(--color-title)]'>Mahdy Mubasyir</p>
                <p className='text-[10px] text-[var(--color-title)]/50'>8:10 PM</p>
              </div>
              <p className='line-clamp-1 text-start mt-1 text-xs text-[var(--color-title)]'>
                The passage experienced a surge in popularity during the
              </p>
            </div>
          </button>
          <button id='chat' className='flex gap-2.5 items-center px-4 py-5 rounded-lg hover:bg-[#4C6FFF]/5'>
            <div className=''>
              <Image
                src={'/images/user.jpg'}
                width={50}
                height={50}
                alt='search'
                className='size-12 rounded-full border border-[#4C6FFF]/10'
              />
            </div>
            <div className='flex-1'>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-medium text-[var(--color-title)]'>Mahdy Mubasyir</p>
                <p className='text-[10px] text-[var(--color-title)]/50'>8:10 PM</p>
              </div>
              <p className='line-clamp-1 text-start mt-1 text-xs text-[var(--color-title)]'>
                The passage experienced a surge in popularity during the
              </p>
            </div>
          </button>
          <button id='chat' className='flex gap-2.5 items-center px-4 py-5 rounded-lg hover:bg-[#4C6FFF]/5'>
            <div className=''>
              <Image
                src={'/images/user.jpg'}
                width={50}
                height={50}
                alt='search'
                className='size-12 rounded-full border border-[#4C6FFF]/10'
              />
            </div>
            <div className='flex-1'>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-medium text-[var(--color-title)]'>Mahdy Mubasyir</p>
                <p className='text-[10px] text-[var(--color-title)]/50'>8:10 PM</p>
              </div>
              <p className='line-clamp-1 text-start mt-1 text-xs text-[var(--color-title)]'>
                The passage experienced a surge in popularity during the
              </p>
            </div>
          </button>
          <button id='chat' className='flex gap-2.5 items-center px-4 py-5 rounded-lg hover:bg-[#4C6FFF]/5'>
            <div className=''>
              <Image
                src={'/images/user.jpg'}
                width={50}
                height={50}
                alt='search'
                className='size-12 rounded-full border border-[#4C6FFF]/10'
              />
            </div>
            <div className='flex-1'>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-medium text-[var(--color-title)]'>Mahdy Mubasyir</p>
                <p className='text-[10px] text-[var(--color-title)]/50'>8:10 PM</p>
              </div>
              <p className='line-clamp-1 text-start mt-1 text-xs text-[var(--color-title)]'>
                The passage experienced a surge in popularity during the
              </p>
            </div>
          </button>
        </div>
      </div>
      <div className='flex-1 h-screen bg-white rounded-2xl flex flex-col overflow-auto'>
        <div id='head-chat' className='flex p-5 items-center justify-between'>
          <div className='flex items-center gap-2.5'>
            <div className=''>
              <Image
                src={'/images/user.jpg'}
                width={50}
                height={50}
                alt='search'
                className='size-12 rounded-full border border-[#4C6FFF]/10'
              />
            </div>
            <div className=''>
              <p className='text-base font-medium text-[var(--color-title)]'>Mahdy Mubasyir</p>
              <p className='line-clamp-1 text-start mt-1 text-xs text-[var(--color-title)]/50'>Online</p>
            </div>
          </div>
          <div className=''>
            <div className='bg-[#F8F8FB] size-9 rounded-full flex items-center justify-center'>
              <Image src={'/icons/ic-more.svg'} width={1} height={12} alt='more' className='h-4 w-auto' />
            </div>
          </div>
        </div>
        <div id='body-chat' className='flex-1 overflow-y-auto px-5'>
          {messages.map((msg, idx) => (
            <div key={idx} className='mb-1 bg-[#4C6FFF] text-white py-2 text-sm px-4 w-fit rounded-lg shadow'>
              {msg}
            </div>
          ))}
        </div>
        <div id='message-chat' className='px-5 pb-5'>
          <div className='w-full bg-[#FAFAFB] rounded-lg p-4 flex items-center gap-3'>
            <div className=''>
              <button className='cursor-pointer'>
                <Image src={'/icons/ic-paperclip.svg'} width={15} height={16} alt='search' className='size-3.5' />
              </button>
            </div>
            <input
              type='text'
              placeholder='Type a message...'
              className='flex-1 focus:outline-none text-sm lg:placeholder:text-xs xl:placeholder:text-sm placeholder:text-[var(--color-title)]/50'
            />
            <div className=''>
              <button className='cursor-pointer'>
                <Image src={'/icons/ic-send.svg'} width={18} height={18} alt='search' className='size-5' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
