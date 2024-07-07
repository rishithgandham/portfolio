'use client';

import React, { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { BiMoon, BiSun } from 'react-icons/bi';
import { useLocalStorage } from 'usehooks-ts';

import Link  from 'next/link';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between w-full  py-4">
        
          <ThemeSwitch />
        
        <nav>
          <ul className="flex gap-5 md:text-md text-sm dark:text-gray-300 text-gray-700">
            <Link href="#about"className="md:text-md text-sm font-semibold ">About</Link>
            <Link href="#skills" className=" font-semibold">Skills</Link>
            <Link href="#work" className=" font-semibold ">Work</Link>
            <Link  href="#contact"className=" font-semibold t">Contact</Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function ThemeSwitch() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    if (dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.add('light');
    }
  }, [dark]);

  const [enabled, setEnabled] = useState(dark);

  const handleThemeChange = (enabled: boolean) => {
    if (enabled) {
      setDark(true);
    } else {
      setDark(false);
    }
    setEnabled(enabled);
  };

  return (
    <Switch
      checked={enabled}
      onChange={handleThemeChange}
      className={classNames(
        enabled ? 'bg-white/10' : 'bg-yellow-600',
        'relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out'
      )}
    >
      <span
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-full w-8 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      >
        <span
          className={classNames(
            enabled
              ? 'opacity-0 duration-100 ease-out'
              : 'opacity-100 duration-200 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <BiSun className="h-3 w-3 text-yellow-300" />
        </span>
        <span
          className={classNames(
            enabled
              ? 'opacity-100 duration-200 ease-in'
              : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <BiMoon className="h-3 w-3 text-gray-700" />
        </span>
      </span>
    </Switch>
  );
}
