'use client'

import React, { useState } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between w-full px-5 py-4">
        <div>
          
        </div>
        <nav>
          <ul className="flex gap-5 dark:text-gray-300 text-gray-700">
            <li className="text-md font-semibold ">About</li>
            <li className="text-md font-semibold">Skills</li>
            <li className="text-md font-semibold ">Work</li>
            <li className="text-md font-semibold t">Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
