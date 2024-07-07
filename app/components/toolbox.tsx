import React from 'react';

import { DiFirebase, DiReact } from 'react-icons/di'
import { RiFirebaseLine, RiNextjsLine, RiReactjsLine, RiTailwindCssLine } from 'react-icons/ri';
import { SiCss3, SiGithub, SiHtml5, SiMongodb, SiTypescript, SiVercel } from 'react-icons/si';

export default function Toolbox() {
  return (
    <>
      <p className="text-2xl mt-20 mb-2 font-semibold flex justify-between">
        my toolbox 🔨✂️🔦
      </p>
      <p className="text-sm dark:text-gray-300 text-gray-700">
        These are the frameworks and tools that I use on a day to day basis for
        web development. Currently, I like to build web applications with
        next.js and firebase. I love the styling freedom that Tailwind CSS gives
        me, and that is why I use it for every app.
      </p>
      <div className="grid grid-cols-4 gap-3 mt-5">
        
        <ToolIcon icon={ <RiNextjsLine className="text-3xl text-gray-800 dark:text-gray-100"/>} name='Next.js' />
        <ToolIcon icon={ <RiFirebaseLine className="text-3xl text-gray-800 dark:text-gray-100"/>} name='Firebase'/>
        <ToolIcon icon={ <RiTailwindCssLine className="text-3xl text-gray-800 dark:text-gray-100"/>} name='Tailwind Css'/>
        <ToolIcon icon={ <SiTypescript className="text-3xl text-gray-800 dark:text-gray-100"/>} name='Typescript'/>
        <ToolIcon icon={ <RiReactjsLine className="text-3xl text-gray-800 dark:text-gray-100"/>} name='React.js'/>
        <ToolIcon icon={ <SiGithub className="text-3xl text-gray-800 dark:text-gray-100"/>} name='Github'/>
        <ToolIcon icon={ <SiVercel className="text-3xl text-gray-800 dark:text-gray-100"/>} name="Vercel"/>
        <ToolIcon icon={ <SiHtml5 className="text-3xl text-gray-800 dark:text-gray-100"/>} name='Html 5' />
        <ToolIcon icon={ <SiCss3 className="text-3xl text-gray-800 dark:text-gray-100"/>} name='Css 3' />
        <ToolIcon icon={ <SiMongodb className="text-3xl text-gray-800 dark:text-gray-100"/>} name='Mongo DB' />


        
      </div>
    </>
  );
}

function ToolIcon({icon, name}: {icon: JSX.Element, name: string}) {
    return (
        <div className="w-full hover:scale-[103%] transition-all ease-in-out h-28 flex flex-col justify-center items-center bg-gray-300 dark:bg-gray-800 rounded-lg">
            {icon}
            <p className="text-sm text-black dark:text-white dar mt-2 font-bold">{name}</p>
        </div>
    )
}
