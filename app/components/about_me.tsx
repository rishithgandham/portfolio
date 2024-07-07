import React from 'react';

import young_photo from '@/app/(images)/young_photo.jpg';
import friends from '@/app/(images)/friends.jpg';
import family from '@/app/(images)/family.jpg';
import sister from '@/app/(images)/meandsister.png';

import Image from 'next/image';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

export default function AboutMe() {
  return (
    <>
      <p className="text-2xl my-10 font-semibold flex justify-between">
        hey there, i&apos;m rishith 👋
      </p>
      <p className="text-lg font-semibold mb-5">
        Im a 15 year old freshman from Deep Run High School. From a young age,
        my fascination with computers sparked a passion for programming. This
        led me to pursue web development. Since then, I have created many web
        applications for various different events and as personal projects.
      </p>

      <p className="text-lg font-semibold mb-10">
        I also enjoy playing and watching basketball and cricket, as I am a huge
        sports enthusiast. Some of my other hobbies include cooking, swimming,
        and listening to music.
      </p>

      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300 mb-10">
        <li>
          <a
            className="flex items-center transition-all hover:text-gray-800 dark:hover:text-gray-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/rishithgandham"
          >
            <MdArrowOutward />
            <p className="ml-2 h-7">Github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/rishith-gandham-022b7b282/"
          >
            <MdArrowOutward />
            <p className="ml-2 h-7">Linked In</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:rishith.gandham@gmail.com"
          >
            <MdArrowOutward />
            <p className="ml-2 h-7">Mail</p>
          </a>
        </li>
      </ul>

      <div className="md:hidden flex justify-center">
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/friends.jpg"
          alt="friends image"
          className=" w-5/6 rounded-xl"
        />
      </div>

      <div className=" grid-cols-5 hidden md:grid grid-rows-2 gap-4 space-x-1">
        <div className="col-span-3">
          <Image
            src={young_photo}
            alt="young me riding a cycle "
            className="aspect-video h-72 rounded-xl"
          />
        </div>
        <div className="col-span-2 col-start-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/friends.jpg"
            alt="friends image"
            className="aspect-square h-72 rounded-xl"
          />
        </div>
        <div className="col-span-3 col-start-3 row-start-2">
          <Image
            src={family}
            alt="young me riding a cycle "
            className="aspect-video h-72 rounded-xl w-full"
          />
        </div>
        <div className="col-span-2 col-start-1 row-start-2">
          <Image
            src={sister}
            alt="me and my sister "
            className="aspect-video h-72 rounded-xl w-full"
          />
        </div>
      </div>
    </>
  );
}
