import avatar from '@/assets/images/Avatar.png'; 
import Image from "next/image";
import ArrowDownIcon from '@/assets/icons/arrow-down.svg';
import { TextShimmer } from '@/components/core/text-shimmer';
import VioletBackground from '@/assets/images/Violet-background-texture.png';
import VioletBackgroundTwo from '@/assets/images/Violet-background-texture-vr2.png';
import VioletBackgroundThree from '@/assets/images/Violet-background-texture-vr3.png';

export function HeroSection() {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0">
      <div className="absolute inset-0 -z-30 opacity-[0.02]">
        <Image 
          src={VioletBackgroundThree.src} 
          alt="Violet Background" 
          width={1920}
          height={1080}
          className="w-full h-full object-cover" 
          priority
        />
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
            I’m a Computer Engineering student who loves exploring new technologies and building cool things. I enjoy creating well-designed websites and tackling the complexity of systems.
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
      <div 
        className="absolute inset-0 size-[720px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-violet-500/5 shadow-[0_0_100px_inset] shadow-violet-500/5"
        style={{
          borderRadius: '60% 40% 55% 45% / 45% 55% 45% 55%',
          transform: 'translate(-50%, -50%) rotate(-5deg)',
        }}
      ></div>
    </div>
  );
}