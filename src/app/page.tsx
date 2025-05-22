"use client";

import Heading from '@/components/global/heading';
import Header from '@/components/header';
import React, { useState } from 'react';
import Hero from '@/components/hero';

const Page = () => {
  const [open, setOpen] = useState(false);
  const [activeItem] = useState(0);
  const [route, setRoute] = useState('login');

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
        route={route}
        setRoute={setRoute}
      />
      <Hero />
    </div>
  )
}

export default Page;
