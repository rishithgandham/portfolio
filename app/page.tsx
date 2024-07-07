'use client';

import AboutMe from './components/about_me';
import Contact from './components/contact';
import Toolbox from './components/toolbox';
import WorkSection from './components/work_section';

export default function Page() {
  return (
    <>
      <AboutMe />
      <Toolbox />
      <WorkSection />
      <Contact/>
    </>
  );
}
