'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import AboutMeSection from './components/AboutMeSection';
import BgGradient from './components/BgGradient';
import HobbiesSection from './components/HobbiesSection';

export default function Home() {
  return (
    <>
      <div className=" relative h-screen flex-col flex justify-center items-center">
        <BgGradient/>
        <p className="text-lg font-bold tracking-tight  bg-gradient-to-r text-transparent  bg-clip-text from-indigo-400 to-sky-400 sm:text-3xl md:text-4xl lg:text-9xl mt-5">
          Rishith Gandham
        </p>
      </div>

      <AboutMeSection />
      <HobbiesSection/>
      {/* <section className="relative bg-gradient-to-r from-sky-200 to-indigo-300 antialiased text-white">
        <div className="custom-shape-divider-top-1707445265">
          <div className="custom-shape-divider-top-1707445655">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div className="min-h-[600px] p-20 pt-56 my-10">
          <div className="w-full text-center font-extrabold text-3xl">
            About me
          </div>

          <div className="grid grid-cols-5 divide-x-8 grid-rows-5 gap-x-10 gap-y-20 mt-32">
            <div className="col-span-3 row-span-2">
            
            </div>
            <div className="col-span-2 row-span-2 col-start-4">
              <p className="font-bold text-xl">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sodales,
                praesent aptent magnis cras orci nostra justo, nisi semper
                mollis purus diam sociosqu potenti. Nam himenaeos facilisis
                porttitor augue vel dis vitae magna, mus ullamcorper turpis odio
                tempus primis. Purus nisl auctor egestas pellentesque turpis
                semper placerat ac praesent, elementum tempor bibendum nam quis
                vehicula risus interdum sapien, neque senectus tempus posuere
                tellus gravida aliquam odio. Molestie
              </p>
            </div>
            <div className="col-span-3 row-span-2 col-start-3 row-start-3">
              <div className="w-full  flex items-center justify-center">
                <Image
                  src="/albums.svg"
                  alt=""
                  height={200}
                  width={600}
                  className=" rounded-xl"
                />
              </div>
            </div>
            <div className="col-span-2 row-span-2 col-start-1 row-start-3">
              <p className="font-bold text-xl">
                quis eleifend imperdiet, ullamcorper dapibus quam sem metus
                lacinia gravida orci. Nostra proin platea interdum congue
                inceptos ornare magnis cras duis, nascetur dapibus cum mus
                rutrum metus urna libero eu, vel ullamcorper enim sapien aliquam
                sociosqu id tristique.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-5 grid-rows-5 gap-4">
            <div className="col-span-3 row-span-2"></div>
            <div className="col-span-2 row-span-2 col-start-1 row-start-3"></div>
            <div className="col-span-3 row-span-2 col-start-3 row-start-3">
              7
            </div>
            <div className="col-span-2 row-span-2 col-start-4 row-start-1">
              8
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white  antialiased text-black">
        <div className=" px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight  sm:text-4xl ">
              My Work
            </h2>
          </div>

          <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <span className="bg-gray-100  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded  ">
                Alphabet Inc.
              </span>
              <h3 className="text-2xl font-bold leading-tight ">
                Official website
              </h3>
              <p className="text-lg font-normal text-gray-500 ">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
              <a

    function BgGradient({}) {
      return (<><div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{
        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
      }} />
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-slate-700 to-black opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{
      clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
    }} />
        </div></>);
    }
                  href="#"
                title=""
                className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                role="button"
              >
                View case study
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
