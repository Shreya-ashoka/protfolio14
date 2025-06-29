"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Shreya Ashoka!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m specializing in{" "}
            <span className="font-semibold text-violet-500">
              Artificial Intelligence and Machine Learning{" "}
            </span>
            with experience in developing intelligent systems and full-stack web applications. My work includes using technologies such as Python, React, LangChain, and various machine learning frameworks to build scalable and efficient solutions. I focus on delivering clean, functional, and well-structured code for real-world applications.
          </p>
          <div className="md:mt-2 md:w-1/2">
          <Image
            src="/portf.png"                                                                                                                // Ensure the image is placed in the /public folder
            alt="Shreya"
            width={425} 
            height={425}
            className="rounded-full shadow-2xl"
          />
        </div>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-violet-500 rounded shadow hover:bg-violet-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
