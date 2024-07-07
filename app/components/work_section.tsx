import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { HiLink } from 'react-icons/hi';

import volunex from '@/app/(images)/volunex.png';

export default function WorkSection() {
  return (
    <>
      <p className="text-2xl mt-20  font-semibold flex justify-between">
        my work 🧑‍💻
      </p>

      <ul className=" w-full space-y-10 mt-10">
        <li className="w-full rounded-xl grid lg:grid-cols-2 grid-cols-1 space-x-2 bg-slate-100 dark:border-white dark:bg-gray-900 border border-black p-5">
          <div className="">
            <p className="text-xl font-semibold">Volunex</p>
            <p className="text-sm  mt-2 ">
              Volunex is an app made to help volunteers connect with
              organizations to acquire volunteer hours. Organizations can create
              volunteering events and validate requests for volunteering hours
              made by students. Students can view events and request hours. This
              was my submission to the 2023 Congressional App Challenge. I built
              this app using Next.js, Firebase for authentication and database,
              Tailwind CSS, and TypeScript.
            </p>
            <div className="flex justify-start gap-5 items-center mt-6">
              <i className="devicon-nextjs-plain colored"></i>
              <i className="devicon-firebase-plain colored"></i>
              <i className="devicon-tailwindcss-plain colored"></i>
              <i className="devicon-typescript-plain colored"></i>
            </div>
            <div className="flex  gap-5 items-center mt-5 ">
              <Link
                href="https://github.com/rishithgandham/volunex"
                className="bg-black hover:scale-105 transition-all ease-in-out text-white font-bold text-lg rounded-xl py-2 px-4 flex justify-center items-center"
              >
                <i className="devicon-github-original "></i>
              </Link>
              <Link
                href="https://volunex.vercel.app/"
                className="bg-indigo-500 hover:scale-105 transition-all ease-in-out text-white font-bold text-lg rounded-xl py-2 px-4 flex justify-center items-center"
              >
                <HiLink />
              </Link>
            </div>
          </div>
          <div className="lg:mt-0 mt-5">
            <Image
              src={volunex}
              alt="volunex"
              className="aspect-video w-full rounded-xl"
            />
          </div>
        </li>
        <li className="w-full rounded-xl grid lg:grid-cols-2 grid-cols-1 space-x-2 bg-slate-100 dark:bg-gray-900 border border-black dark:border-white p-5">
          <div className="">
            <p className="text-xl font-semibold">Tutoring App </p>
            <p className="text-sm  mt-2 ">
              Volunex is an app made to help volunteers connect with
              organizations to acquire volunteer hours. Organizations can create
              volunteering events and validate requests for volunteering hours
              made by students. Students can view events and request hours. This
              was my submission to the 2023 Congressional App Challenge. I built
              this app using Next.js, Firebase for authentication and database,
              Tailwind CSS, and TypeScript.
            </p>
            <div className="flex justify-start gap-5 items-center mt-6">
              <i className="devicon-nextjs-plain colored"></i>
              <i className="devicon-firebase-plain colored"></i>
              <i className="devicon-tailwindcss-plain colored"></i>
              <i className="devicon-typescript-plain colored"></i>
            </div>
            <div className="flex  gap-5 items-center mt-5 ">
              <Link
                href="https://github.com/rishithgandham/volunex"
                className="bg-black hover:scale-105 transition-all ease-in-out text-white font-bold text-lg rounded-xl py-2 px-4 flex justify-center items-center"
              >
                <i className="devicon-github-original "></i>
              </Link>
              <Link
                href="https://volunex.vercel.app/"
                className="bg-indigo-500 hover:scale-105 transition-all ease-in-out text-white font-bold text-lg rounded-xl py-2 px-4 flex justify-center items-center"
              >
                <HiLink />
              </Link>
            </div>
          </div>
          <div className="lg:mt-0 mt-5">
            <Image
              src={volunex}
              alt="volunex"
              className="aspect-video w-full rounded-xl"
            />
          </div>
        </li>
      </ul>
    </>
  );
}
