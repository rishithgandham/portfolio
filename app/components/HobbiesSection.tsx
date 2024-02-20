import React from 'react';
import Image from 'next/image';

export default function HobbiesSection() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-black to-slate-700 antialiased text-white w-full">
        {/* shape divider */}
        <div className="custom-shape-divider-top-1708400313">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        {/* shape divider */}

        <div className="px-20 lg:py-20 py-52 ">
          <p className="text-4xl font-extrabold mb-10  xl:text-right ">
            My hobbies/ extracurricular{'  '}
            <span className="bg-gradient-to-r text-transparent  bg-clip-text from-indigo-400 to-sky-400">
              activities
            </span>{' '}
          </p>
          <div className="grid xl:grid-cols-4 gap-10 mt-20 ">
            <HobbyCard
              name="basketball"
              emoji="🏀⛹️‍♂️"
              text="Whether im shooting hoops in my backyard, playing pickup at the
                YMCA, in the driveway with my friends, or in a rec league,
                basketball is my favorite sport, and I never get bored playing
                it. I watch loads of NBA, and players I love watching include
                Steph Curry, Luka Doncic, DeMar Derozan, Trae Young, and more."
            />
            <HobbyCard
              name="swimming"
              emoji="🌊🏊"
              text="Whether im shooting hoops in my backyard, playing pickup at the
                YMCA, in the driveway with my friends, or in a rec league,
                basketball is my favorite sport, and I never get bored playing
                it. I watch loads of NBA, and players I love watching include
                Steph Curry, Luka Doncic, DeMar Derozan, Trae Young, and more."
            />
            <HobbyCard
              name="music"
              emoji="🎧🎵"
              text="If there is one thing thats universal across all my hobbies, it is listening to music. 
              I enjoy listening to rap from artists like 21 savage, King Von, Key Glock, BabyTron Gunna, Youngboy, 
              Uzi, Travis, DaBaby, Yachty and many more. I also occasionally listen to Telugu and Hindi music."
            />
            <HobbyCard
              name="cricket"
              emoji="🏏"
              text="Although I dont play much, I also love watching international cricket and IPL. My favorite players are Kohli, Shubman Gill, Bumrah, and many more"
            />
          </div>
        </div>
        {/* shape divider */}
        <div className="custom-shape-divider-bottom-1708461604">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        {/* shape divider */}
      </section>
    </>
  );
}

const HobbyCard = ({
  name,
  emoji,
  text,
  color,
}: {
  name: string;
  emoji: string;
  text: string;
  color?: string;
}) => {
  return (
    <>
      <div className="">
        <p className=" ml-1 xl:text-3xl text-2xl font-extrabold text-center">
          <span
            className={` bg-gradient-to-r text-transparent from-indigo-400 to-sky-400 bg-clip-text  mr-2 `}
          >
            {name}
          </span>
          {emoji}
        </p>

        <p className=" mt-2 text-center text-md font-bold">{text}</p>
      </div>
    </>
  );
};
