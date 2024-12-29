import avatar from '@/assets/images/Avatar.png'; 
import Image from "next/image";
import ArrowDownIcon from '@/assets/icons/arrow-down.svg';
import { TextShimmer } from '@/components/core/text-shimmer';

export function HeroSection() {
  return (
    <div className="py-32">
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
          <TextShimmer 
            className="font-mono text-3xl font-bold text-center mt-10 tracking-wide
              [--base-color:theme(colors.violet.600)]
              [--base-gradient-color:theme(colors.violet.200)]
              dark:[--base-color:theme(colors.violet.700)]
              dark:[--base-gradient-color:theme(colors.violet.400)]"
            duration={2}
          >
            Passionate Software Engineer & Problem Solver
          </TextShimmer>
          <p className="text-center text-white/60 mt-4">
            I’m a Computer Engineering student with expertise in full-stack development, DevOps, and AI. As a problem solver, I focus on creating efficient, scalable solutions to real-world challenges. I’m passionate about leveraging technology to drive innovation and contribute to impactful projects.
          </p>
          <div className="flex flex-col items-center mt-8 gap-4">
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