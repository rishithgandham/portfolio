import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { HiLink } from 'react-icons/hi';

import volunex from '@/app/(images)/volunex.png';
import evergreen from '@/app/(images)/evergreen.png';

import { DiGithub } from 'react-icons/di';
import {
  SiFirebase,
  SiGithub,
  SiGooglecloud,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { RiNextjsLine } from 'react-icons/ri';

export default function WorkSection() {
  return (
    <>
      <p
        className="text-2xl mt-20  font-semibold flex justify-between"
        id="work"
      >
        my work 🧑‍💻
      </p>

      <ul className=" w-full space-y-10 mt-10">
        <li className="w-full rounded-xl grid lg:grid-cols-2 grid-cols-1 space-x-2 bg-slate-100  border border-black dark:border-gray-500 dark:bg-white/10 p-5">
          <div className="">
            <p className="text-2xl font-semibold">volunex </p>
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
              <RiNextjsLine />
              <SiFirebase />
              <SiTailwindcss />
              <SiTypescript />
              <SiVercel />
            </div>
            <div className="flex  gap-5 items-center mt-5 ">
              <Link
                href="https://github.com/rishithgandham/volunex"
                className="bg-black hover:scale-105 transition-all ease-in-out text-white font-bold text-lg rounded-xl py-2 px-4 flex justify-center items-center"
              >
                <SiGithub />
              </Link>
              <Link
                href="https://volunex.vercel.app/"
                className="bg-black/50   hover:scale-105 transition-all ease-in-out text-white font-bold text-lg rounded-xl py-2 px-4 flex justify-center items-center"
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
        <li className="w-full rounded-xl grid lg:grid-cols-2 grid-cols-1 space-x-2 bg-slate-100  border border-black dark:border-gray-500 dark:bg-white/10 p-5">
          <div className="">
            <p className="text-xl font-semibold">evergreen 🌿</p>
            <p className="text-sm  mt-2 ">
              Evergreen was my submission to the 2024 Virginia TSA State
              Conference for the challenge Webmaster. The website is meant to
              highlight the importance of sustainability and the environment,
              and it received a second place award. I built this website using
              Next.js, Google APIs, Tailwind CSS, and TypeScript.
            </p>
            <div className="flex justify-start gap-5 items-center mt-6">
              <RiNextjsLine />
              <SiTailwindcss />
              <SiTypescript />
              <SiGooglecloud/>
              <SiVercel/>
            </div>
            <div className="flex  gap-5 items-center mt-5 ">
              <Link
                href="https://github.com/rishithgandham/volunex"
                className="bg-black hover:scale-105 transition-all ease-in-out text-white font-bold text-lg rounded-xl py-2 px-4 flex justify-center items-center"
              >
                <SiGithub />
              </Link>
              <Link
                href="https://evergreentsa.com/"
                className="bg-black/50   hover:scale-105 transition-all ease-in-out text-white font-bold text-lg rounded-xl py-2 px-4 flex justify-center items-center"
              >
                <HiLink />
              </Link>
            </div>
          </div>
          <div className="lg:mt-0 mt-5">
            <Image
              src={evergreen}
              alt="volunex"
              className="aspect-video w-full rounded-xl"
            />
          </div>
        </li>
      </ul>
    </>
  );
}
