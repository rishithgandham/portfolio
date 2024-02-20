import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/16/solid';




export default function AboutMeSection(props: any) {


  return (
    <>
      <section className="relative bg-gradient-to-tr from-slate-700 to-black antialiased text-slate-300">
        {/* shape divider */}
        <div className="custom-shape-divider-top-1708400667">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        {/* shape divider */}

        <div className="lg:p-20 px-10 py-28 mt-32">
          <p className="text-4xl font-extrabold mb-10">
            A{' '}
            <span className="bg-gradient-to-r text-transparent  bg-clip-text from-indigo-400 to-sky-400">
              glimpse
            </span>{' '}
            into my background.
          </p>

          <div className="grid xl:grid-cols-10 grid-cols-1  min-h-[100px]">
            <div className="col-span-5">
              <div className="flex-col w-full justify-start items-start">
                <div className="w-full  flex items-start justify-start">
                  <Image
                    src="/me2.png"
                    alt=""
                    height={500}
                    width={1000}
                    className="w-full h-2/3 rounded-xl "
                  />
                </div>
              </div>
            </div>

            <div className="col-span-5 xl:px-10 px-5 xl:mt-0 mt-10">
              <div className="flex-col flex w-full justify-center items-start">
                <p className="font-bold xl:text-2xl text-lg">
                  {about_texts.about}
                </p>

                <div className="flex mt-10 gap-2 items-center text-indigo-300">
                  <Link href="#" >
                    <ion-icon  name="logo-github"></ion-icon>
                  </Link>
                  <Link href="#">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </Link>
                  <Link href="#">
                    <ion-icon name="mail-open-outline"></ion-icon>
                  </Link>
                  <Link href="#">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </Link>
                  <Link href="#">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </Link>
                  <Link href="#">
                    <ion-icon name="logo-snapchat"></ion-icon>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* shape divider */}
        <div className="custom-shape-divider-bottom-1708400190">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      {/* shape divider */}
    </>
  );
}

const about_texts = {
  about: `Im Rishith, a 15 year old freshman from Deep Run High School. From a young age, my fascination with computers sparked a passion for web development. When I'm not coding, you'll often find me on the basketball court, swimming laps at the pool, or losing myself in the melodies of my favorite tunes. These diverse interests not only bring balance to my life but also fuel my creativity and drive to learn more.`,
};


