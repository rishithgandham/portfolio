import Link from 'next/link';
import React from 'react';




export default function Navbar() {
  return (
    <>
      <nav className="h-14 flex justify-between items-center md:px-10 px-5">
        <div className="w-1/6 ">
          <Link href="/" className={`text-lg font-bold  text-indigo-500`}>
            G
          </Link>
        </div>
        <div className="flex p-2 items-center justify-end w-5/6 bg-transparent ">
          <NavbarLink href="#mywork" name="My Work" />
          <NavbarLink href="#aboutme" name="About me" />

        
        </div>
      </nav>
    </>
  );
}

export interface NavigationLink {
  icon?: JSX.Element;
  href: string;
  name: string;
}

function NavbarLink({ icon, href, name }: NavigationLink) {
  return (
    <Link
      href={href}
      className="md:flex p-2 hidden  rounded-xl  items-center transition-all ease-in-out  m-5 hover:scale-110 hover:translate-y-1   xl:mx-10"
    >
      {icon && <p className="mr-3">{icon}</p>}
      <p className="font-semibold text-xs">{name}</p>
    </Link>
  );
}
