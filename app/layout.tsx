import type { Metadata } from 'next';
import { DM_Sans, Inter, Noto_Sans, Rubik, Tenor_Sans } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { GeistSans } from 'geist/font/sans';
import Navbar from './components/navbar';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });
const rubik = Rubik({ subsets: ['latin'] });
const gs = Tenor_Sans({ subsets: ['latin'], weight: '400' });
const noto = Noto_Sans({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  metadataBase: new URL('https://rishithgandham.vercel.app'),
  title: 'Rishith Gandham',
  description: 'Hi, I am Rishith Gandham, a 15 year old full web developer stack developer from Virginia.',
  creator: "Rishith Gandham",
  keywords: ['Rishith', 'Gandham'],
  alternates: {
    canonical: './'
  },
  twitter: {
    card: 'summary_large_image',
    description: 'Hi, I am Rishith Gandham, a 15 year old full web developer stack developer from Virginia.',
  },
  openGraph: {
    title: 'Rishith Gandham',
    description: 'Hi, I am Rishith Gandham, a 15 year old full web developer stack developer from Virginia.',
    url: './',
    type: 'website',
    images: {
      url: '/young_photo.jpg',
      alt: 'a photo of me when I was young'
    }

  }

  
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className=" h-screen" lang="en">
      <head>
      </head>
      <body className={inter.className + ' h-screen  w-screen '}>
        <main className=" text-black dark:text-white bg-gray-100 dark:bg-black  flex flex-col items-center min-h-screen  w-full py-20 px-5 ">
          <section className="lg:w-[54rem] w-full ">
            <Navbar />
            {children}
            <Footer/>
          </section>
        </main>

        
      </body>
    </html>
  );
}
// 2xl:px-[30rem] xl:px-60 lg:px-32 md:px-20  pt-20
