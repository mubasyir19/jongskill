import type { Metadata } from 'next';
import '../globals.css';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sign In | JongSkill',
  description: 'Skill Up, Ignite Change, Akademi Digital Terdepan untuk Skill & Inovasi.',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`bg-[url('/images/auth.png')] bg-cover bg-bottom h-screen`}>
        <main className='bg-[var(--color-primary)]/30 h-full'>
          <div className='bg-gradient-to-b from-[var(--color-secondary)] via-transparent to-transparent h-full'>
            <div className={`lg:px-16 xl:px-24 h-screen ${poppins.className}`}>
              <div className='grid grid-cols-2 h-full'>
                <div className='py-20'>
                  <div className='w-fit'>
                    <Link href={`/signin`}>
                      <Image src={'/images/logo.png'} width={280} height={280} alt='logo' className='size-20 mx-auto' />
                      <h1 className='text-4xl font-bold text-[var(--color-primary)]'>
                        Jong<span className='text-white'>Skill</span>
                      </h1>
                    </Link>
                  </div>
                  <div className='mt-6'>
                    <h2 className='font-bold text-3xl text-[var(--color-primary)]'>Akademi Digital Terdepan</h2>
                    <h3 className='text-white text-2xl font-semibold mt-4'>untuk Skill & Inovasi.</h3>
                    <p className='text-base text-white font-semibold mt-3 w-11/12'>
                      Program industri yang dirancang oleh para ahli untuk mengakselerasi karier digitalmu, dan
                      menginspirasi perubahan positif.
                    </p>
                  </div>
                </div>
                <div className='bg-white rounded-2xl p-11 w-full min-h-[676px] place-self-center flex flex-col'>
                  <div className='flex items-center justify-center'>
                    <Image src={'/images/logo.png'} width={280} height={280} alt='logo' className='size-20' />
                    <div className=''>
                      <h3 className='text-3xl font-bold text-[var(--color-primary)]'>
                        Jong<span className='text-[var(--color-secondary)]'>Skill</span>
                      </h3>
                      <p className='text-sm text-[var(--color-shades-900)]'>Skill Up, Ignite Change</p>
                    </div>
                  </div>
                  <div className='flex-1 flex flex-col'>{children}</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
