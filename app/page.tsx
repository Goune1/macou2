"use client"

import Image from "next/image";
import Hero from '@/components/hero'
import Nav from '@/components/nav'


export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav/>

      <Hero/>
    </div>
  );
}
