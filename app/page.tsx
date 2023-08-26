"use client";

import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import AOS from "aos";
import { TypeAnimation } from "react-type-animation";
import Rellax from "rellax";
import axios from "axios";
import { createOffer } from "@/utils/sanity";
import Cover from "./components/Cover";
import Fog from "./components/Fog";
import Offers from "./components/Offers";
import Branches from "./components/Branches";
import Gravestone from "./components/Gravestone";
import Footer from "./components/Footer";;
import Butterflies from "./components/Butterflies";
import LeaveOffer from "./components/LeaveOffer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 280,
      once: true,
    });

    const rellax = new Rellax(".rellax", {
      speed: 10,
      center: false,
      vertical: true,
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center relative z-10">
      {/* <Cover /> */}
      <Butterflies />
      <Fog />
      <Branches />
      <Gravestone />
      <Offers />
      <LeaveOffer />
      <Footer />
    </main>
  );
}
