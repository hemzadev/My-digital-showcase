import test from '@/assets/images/Violet-background-texture-vr3.png';
import Image from 'next/image';
import { CheckIcon } from '@/components/icons';

const portfolioProjects = [
    {
      company: "Avantages SARL",
      year: "2024",
      title: "Chatbot for Generating and Executing SQL Queries",
      description: "An AI-powered solution for translating natural language instructions into SQL queries, providing an enhanced user experience and secure database access.",
      results: [
        { title: "Enhanced user experience" },
        { title: "Implemented a model capable of understanding natural language and translating it into SQL queries" },
        { title: "Improved security for database access using robust authentication mechanisms" },
      ],
      stack: "Spring Boot, Next.js, SQL Server, Rasa Framework, OpenAI",
      image: test, // Replace 'test' with the actual image path or import
    },
    {
      company: "Personal Project",
      year: "2024",
      title: "Centralized Car Rental Magazine Application",
      description: "A platform designed to centralize car rental services, improve customer reach, and provide a seamless user interface for administrators and customers.",
      results: [
        { title: "Boosted sales by 20% through an intuitive booking interface" },
        { title: "Expanded customer reach by 35% via responsive design" },
        { title: "Increased brand awareness by 15% through a scalable architecture" },
      ],
      stack: "Spring Boot, Angular, PostgreSQL, Docker",
      image: test, // Replace 'test' with the actual image path or import
    },
    {
      company: "Personal Project",
      year: "2024",
      title: "Property Rental Listing Management Platform",
      description: "An online platform to simplify property rentals with a robust backend and interactive frontend optimized for mobile traffic.",
      results: [
        { title: "Enhanced user experience by 40%" },
        { title: "Improved site speed by 50% through efficient API integration" },
        { title: "Increased mobile traffic by 35% via a mobile-first design approach" },
      ],
      link: "https://youtu.be/Z7I5uSRHMHg", // Link to a demo or presentation
      stack: "Spring Boot, Angular, TailwindCSS, JWT",
      image: test, // Replace 'test' with the actual image path or import
    },
    {
      company: "Personal Project",
      year: "2023",
      title: "Online Course Sales Platform",
      description: "A user-friendly platform for managing course sales with seamless API integration and responsive design.",
      results: [
        { title: "Improved course management through centralized operations" },
        { title: "Enhanced cross-device experience with Razor and Bootstrap" },
      ],
      stack: "ASP.NET, Razor, Bootstrap, MSSQL",
      image: test, // Replace 'test' with the actual image path or import
    },
    {
      company: "Personal Project",
      year: "2023",
      title: "Online Library System",
      description: "A Django-based system for managing book loans and reservations with efficient MVC architecture.",
      results: [
        { title: "Streamlined library operations with an intuitive UI" },
        { title: "Improved user experience through structured templates" },
      ],
      stack: "Django, SQLite, Bootstrap",
      image: test,
    },
  ];
  
export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-500 to-blue-500 text-transparent  bg-clip-text text-center">What I've done</p>
        </div>
        <h2 className="font-sans font-bold text-4xl text-center mt-6 md:text-5xl">Featured Projects</h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">I've worked on a wide range of projects, from small personal projects to large enterprise projects. Here are some of my most notable projects.</p>
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
            {portfolioProjects.map(project => (
                <div key={project.title} className="bg-gray-800 border rounded-3xl relative z-0  overflow-hidden after:z-10 after:border-l after:border-gray-800 after:animate-shimmer after:bg-gradient-to-r after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline-offset-2 after:outline after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none">
                        <div className="absolute inset-0 -z-10 opacity-5" style={{
                          backgroundImage: `url(${test.src})`,
                        }}></div>
                        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                          <div className="lg:pb-16">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                            <span>{project.company}</span>
                            <span>&bull;</span>
                            <span>{project.year}</span>
                        </div>
                    <h3 className="font-mono text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>                    
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                        {project.results.map(result => (
                            <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                                <CheckIcon className="size-5 md:size-6"/>
                                <span>{result.title}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold mt-4">See more</button>
                    </div>
                    <div className="relative">
                    <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
                    </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};