import React from 'react';
import Link from 'next/link'; 

export default function Contact() {
  return (
    <>
      <p className="text-2xl mt-20 mb-2 font-semibold flex justify-between" id="contact">
        contact me ✉️
      </p>
      <p className="text-sm dark:text-gray-300 text-gray-700">
        If you would like to get in touch with me, feel free to send me an email
        at{' '}
        <Link  href="mailto:rishith.gandham@gmail.com" className='text-blue-300 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-300'>
          rishith.gandham@gmail.com
        </Link>
      </p>
    </>
  );
}
