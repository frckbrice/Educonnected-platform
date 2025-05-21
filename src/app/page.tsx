"use client";

import Heading from '@/components/global/heading';
import { Metadata } from 'next';
// import React, { useState } from 'react';
import Header from '@/components/header';
import { useState } from 'react';
import Hero from '@/components/hero';


type Props = {};

// set up metadata for this page
// export const metadata: Metadata = {
//   title: "EduconnectEd",
//   description: "The application to easy teaching digitization",
//   keywords: 'Programming, ReactJs, NextJs'
// };

const Page = ({ }: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div >
      <Heading
        title="EduconnectEd"
        description="The application to easy teaching digitization"
        keywords="Programming, ReactJs, NextJs"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
      />
      <Hero />
    </div>
  )
}

export default Page;
