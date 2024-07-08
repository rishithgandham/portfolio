import Link from 'next/link';
import React from 'react';
import { BiCopyright } from 'react-icons/bi';
import { LiaLinkedin } from 'react-icons/lia';
import { MdMail } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';

export default function Footer() {
  return (
    <>
      <footer className="w-full  dark:border-gray-500 border-t pt-10 mt-10   p-5 dark:text-white min-h-20   ">
        <div className="flex justify-center items-center flex-col">
          {/* links buttons */}
          <div className="flex justify-between items-center  gap-x-3 ">
            {icons.map((icon, i) => (
              <Icon key={i} icon={icon.icon} link={icon.link} />
            ))}
          </div>

          {/* <div className="flex justify-between items-center text-[10px] font-bold text-gray-700 gap-x-3 mt-5">
            <BiCopyright size={10} />
            <p>2024</p>
          </div> */}
        </div>
      </footer>
    </>
  );
}

type icon = { icon: JSX.Element; link: string };
const icons: icon[] = [
  {
    icon: <SiGithub size={13} />,
    link: 'https://github.com/rishithgandham',
  },
  {
    icon: <LiaLinkedin size={13} />,
    link: 'https://www.linkedin.com/in/rishith-gandham-022b7b282',
  },
{
    icon: <MdMail size={13} />,
    link: 'mailto:rishith.gandham@gmail.com',
}
];

function Icon({ icon, link }: icon) {
  return (
    <>
      <Link target="_blank" href={link}>
        <div className="w-10 h-10  font-extrabold rounded-xl hover:scale-110 transition-all ease-in-out flex justify-center items-center border dark:border-gray-500 p-2">
          {icon}
        </div>
      </Link>
    </>
  );
}
