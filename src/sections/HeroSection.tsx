"use client";

import React from 'react';
import Image from "next/image";
import { ArrowDownIcon, GithubIcon, DockerIcon, AngularIcon, GraphQLIcon, SpringBootIcon, TypeScriptIcon, MongoDBIcon, NextJSIcon } from '@/components/icons';
import { TextShimmer } from '@/components/core/text-shimmer';
import avatar from '@/assets/images/Avatar.png'; 
import VioletBackgroundTwo from '@/assets/images/Violet-background-texture-vr2.png';
import { OrbitIcon } from '@/components/core/orbit-icon';
import StarsBackground from '@/components/ui/stars-background';
import { ShootingStars } from '@/components/ui/shooting-stars';

export function HeroSection() {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <StarsBackground />
        <ShootingStars 
          minSpeed={10}
          maxSpeed={30}
          minDelay={1200}
          maxDelay={4200}
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          starWidth={10}
          starHeight={1}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 -z-30 opacity-[0.02]">
          <Image 
            src={VioletBackgroundTwo.src} 
            alt="Violet Background" 
            width={1920}
            height={1080}
            className="w-full h-full object-cover" 
            priority
          />
        </div>
        <div className="deformed-oval size-[650px]">
          <OrbitIcon 
            icon={SpringBootIcon}
            size={10}
            duration={30}
            iconSize={6}
            className="text-white/90"
            startAngle={0}
            reverse={true}
          />
        </div>
        <div className="deformed-oval size-[850px]">
          <OrbitIcon 
            icon={DockerIcon}
            size={10}
            duration={35}
            iconSize={6}
            className="text-white/90"
            startAngle={90}
          />
        </div>
        <div className="deformed-oval size-[1050px]">
          <OrbitIcon 
            icon={GithubIcon}
            size={10}
            duration={40}
            iconSize={6}
            className="text-white/90"
            startAngle={180}
            reverse={true}
          />
        </div>
        <div className="deformed-oval size-[1250px]">
          <OrbitIcon 
            icon={GraphQLIcon}
            size={10}
            duration={45}
            iconSize={6}
            className="text-white/90"
            startAngle={270}
          />
        </div>
        <div className="deformed-oval size-[1450px]">
        </div>
        <div className="deformed-oval size-[1650px]">
        </div>
      </div>
      
      <div className="container">
        <div className="flex flex-col items-center">
          <Image 
            src={avatar}
            alt="Avatar" 
            className="size-[100px]"
            style={{
              clipPath: "path('M 0,50 C 0,25 25,0 50,0 75,0 100,25 100,50 100,75 75,100 50,100 25,100 0,75 0,50 Z')",
            }}
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-violet-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Seeking a end-of-studies internship
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <TextShimmer 
            className="font-mono text-3xl font-bold md:text-5xl text-center mt-10 tracking-wide
              [--base-color:theme(colors.violet.600)]
              [--base-gradient-color:theme(colors.violet.200)]
              dark:[--base-color:theme(colors.violet.700)]
              dark:[--base-gradient-color:theme(colors.violet.400)]"
            duration={2}
          >
            Passionate Software Engineer & Problem Solver
          </TextShimmer>
          <p className="text-center text-white/60 mt-4 md:text-lg">
            I'm a Computer Engineering student who loves exploring new technologies and building cool things. I enjoy creating well-designed websites and tackling the complexity of systems.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">What I Do</span>
            <ArrowDownIcon className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Contact Me</span>
          </button>
        </div>
      </div>
    </div>
  );
}

