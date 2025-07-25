import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import localFont from "next/font/local";
import Hero from "@/components/Hero"
import LeftSide from '@/components/leftinfo'
import AboutMe from '@/components/AboutMe'
import KeyCompetences from '@/components/KeyCompetences'
import Projects from '@/components/Projects'
import Certifications from '@/components/Cirtifications'
import Education from '@/components/Education'
import GitHubCal from '@/components/githubCalander'
import { useRouter } from "next/router";

export default function Home() {
  // Create refs for each section
  const aboutRef = useRef<HTMLDivElement>(null);
  const competencesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'home', label: 'Home', icon: '🏠', ref: homeRef },
    { id: 'about', label: 'About Me', icon: '👨‍💻', ref: aboutRef },
     { id: 'education', label: 'Education', icon: '🎓', ref: educationRef },
    { id: 'competences', label: 'Key Competences', icon: '🎯', ref: competencesRef },
    { id: 'projects', label: 'Projects', icon: '🚀', ref: projectsRef },
    { id: 'certifications', label: 'Certifications', icon: '🏆', ref: certificationsRef },
    
  ];

  // Scroll to section on nav click
  const handleSectionClick = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    section?.ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 shadow-2xl">
              <div className="flex space-x-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    className={`
                      relative px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300
                      text-gray-300 hover:bg-white/10 hover:text-white
                      group overflow-hidden
                    `}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <div className="relative flex items-center justify-center space-x-2">
                      <span className="text-base">{section.icon}</span>
                      <span className="hidden sm:inline">{section.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with top padding to account for fixed nav */}
      <div ref={homeRef} className="pt-20">
        <Hero />
      </div>

      {/* Main Content */}
      <div className="flex flex-col">
        <main className="w-full">
          <div ref={aboutRef} className="animate-fadeIn scroll-mt-24"><AboutMe /></div>
          <div ref={educationRef} className="animate-fadeIn scroll-mt-24"><Education /></div>
          <div ref={competencesRef} className="animate-fadeIn scroll-mt-24"><KeyCompetences /></div>
          <div ref={projectsRef} className="animate-fadeIn scroll-mt-24"><Projects /></div>
          <div ref={certificationsRef} className="animate-fadeIn scroll-mt-24"><Certifications /></div>
          
        </main>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .scroll-mt-24 {
          scroll-margin-top: 6rem;
        }
      `}</style>
    </div>
  );
}