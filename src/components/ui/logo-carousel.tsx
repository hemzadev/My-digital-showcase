"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { JSX, SVGProps } from "react";
import { GithubIcon, DockerIcon, AngularIcon, GraphQLIcon, SpringBootIcon, TypeScriptIcon, MongoDBIcon, NextJSIcon } from '@/components/icons';

// Define types
interface Logo {
  id: number;
  name: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

interface LogoColumnProps {
  logos: Logo[];
  columnIndex: number;
  currentTime: number;
  className?: string;
}

// Main component
export function LogoCarousel({ columns = 2 }: { columns?: number }) {
  const [logoColumns, setLogoColumns] = useState<Logo[][]>([]);
  const [time, setTime] = useState(0);
  const CYCLE_DURATION = 2000; // 2 seconds per logo

  // Define logos using SVG components
  const logos = useMemo<Logo[]>(
    () => [
      { id: 1, name: "Github", icon: GithubIcon },
      { id: 2, name: "Docker", icon: DockerIcon },
      { id: 3, name: "Angular", icon: AngularIcon },
      { id: 4, name: "GraphQL", icon: GraphQLIcon },
      { id: 5, name: "Spring Boot", icon: SpringBootIcon },
      { id: 6, name: "TypeScript", icon: TypeScriptIcon },
      { id: 7, name: "MongoDB", icon: MongoDBIcon },
      { id: 8, name: "Next.js", icon: NextJSIcon },
    ],
    []
  );

  // Distribute logos across columns
  const distributeLogos = useCallback(
    (logos: Logo[]) => {
      const shuffled = [...logos].sort(() => Math.random() - 0.5);
      const result: Logo[][] = Array.from({ length: columns }, () => []);

      shuffled.forEach((logo, index) => {
        result[index % columns].push(logo);
      });

      // Ensure equal length columns
      const maxLength = Math.max(...result.map((col) => col.length));
      result.forEach((col) => {
        while (col.length < maxLength) {
          col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
        }
      });

      return result;
    },
    [columns]
  );

  // Initialize logo columns
  useEffect(() => {
    setLogoColumns(distributeLogos(logos));
  }, [logos, distributeLogos]);

  // Update time for animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-4">
      {logoColumns.map((columnLogos, index) => (
        <LogoColumn
          key={index}
          logos={columnLogos}
          columnIndex={index}
          currentTime={time}
        />
      ))}
    </div>
  );
}

// Column component
function LogoColumn({ logos, columnIndex, currentTime }: LogoColumnProps) {
  const CYCLE_DURATION = 2000;
  const columnDelay = columnIndex * 200;
  const adjustedTime =
    (currentTime + columnDelay) % (CYCLE_DURATION * logos.length);
  const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION);
  const currentLogo = logos[currentIndex];

  return (
    <motion.div
      className="relative h-9 w-10 sm:h-9 sm:w-16 md:h-7 md:w-20 lg:h-7 lg:w-20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: columnIndex * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentLogo.id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          exit={{
            y: "-100%",
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        >
          <currentLogo.icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-7 md:w-7 lg:h-7 lg:w-7 text-white" />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

