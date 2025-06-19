import type { Metadata } from 'next';
import '../globals.css';
import { Poppins } from 'next/font/google';
import Sidebar from '@/components/organism/Sidebar';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dashboard | JongSkill',
  description: 'Skill Up, Ignite Change, Akademi Digital Terdepan untuk Skill & Inovasi.',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.className} bg-gradient-to-tl from-[var(--color-primary)] to-[var(--color-secondary)]`}
      >
        <div className='flex min-h-screen'>
          <Sidebar />
          <main className='flex flex-1 py-6 pl-6 lg:pl-0 pr-6'>
            <div className='flex-1 bg-white/90 rounded-xl lg:rounded-2xl xl:rounded-4xl p-3 lg:p-4 xl:p-6'>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
