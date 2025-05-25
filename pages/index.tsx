import Image from "next/image";
import localFont from "next/font/local";
import Hero from "@/components/Hero"
import LeftSide from '@/components/leftinfo'
import AboutMe from '@/components/AboutMe'
import KeyCompetences from '@/components/KeyCompetences'
import Projects from '@/components/Projects'
import { useInView } from "react-intersection-observer";
import Cirtifications from "@/components/Cirtifications"
import GitHubCal from '@/components/githubCalander'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {

  const { ref, inView } = useInView();
  const [notInView, setNotInView] = useState(false)

  const router = useRouter();

  // useEffect(() => {
  //   // Change the URL to a fake route without leaving the current page
  //   router.push('/fake-page', undefined, { shallow: true });
  // }, []);

  useEffect(() => {
    if (!inView) {
      setNotInView(true)
      console.log('Yees', notInView)
    } else {
      setNotInView(false)
    }
  }, [inView]);

  const [isHome, setIsHome] = useState(true)
  const [isAboutMe, setIsAbout] = useState(false)
  const [KeyCompet, setKeyCompet] = useState(false)
  const [projects, setProjects] = useState(false)
  const [Certif, setCertif] = useState(false)
  const [Github, setGitHub] = useState(false)

  const clickHome = () => {
    setIsHome(true)
    setIsAbout(false)
    setKeyCompet(false)
    setProjects(false)
    setCertif(false)
    setGitHub(false)
  }
  const clickAbout = () => {
    setIsHome(false)
    setIsAbout(true)
    setKeyCompet(false)
    setProjects(false)
    setCertif(false)
    setGitHub(false)
  }
  const clickCompet = () => {
    setIsHome(false)
    setIsAbout(false)
    setKeyCompet(true)
    setProjects(false)
    setCertif(false)
    setGitHub(false)
  }
  const clickProjects = () => {
    setIsHome(false)
    setIsAbout(false)
    setKeyCompet(false)
    setProjects(true)
    setCertif(false)
    setGitHub(false)
  }
  const clickCertifications = () => {
    setIsHome(false)
    setIsAbout(false)
    setKeyCompet(false)
    setProjects(false)
    setCertif(true)
    setGitHub(false)
  }
  const clickGitHub = () => {
    setIsHome(false)
    setIsAbout(false)
    setKeyCompet(false)
    setProjects(false)
    setCertif(false)
    setGitHub(true)
  }

  return (
    <div className="bg-[#DAE3E7] h-full flex-col space-y-2">
      <div ref={ref}>

        <Hero />


      </div>
      <section className={`px-20 space-y-2  `}>

        <section className={` ${notInView && ('fixed top-0 left-0 w-full rounded-none')}  z-50 rounded-lg drop-shadow-sm  grid grid-cols-6 gap-1 p-1 bg-white `}>
          <h1 onClick={clickHome} className={`${isHome && ('bg-gray-200')} hover:bg-gray-200 rounded-md text-black font-poppins font-semibold text-md p-2 hover:cursor-pointer items-center text-center`}>Home</h1>
          <h1 onClick={clickAbout} className={`${isAboutMe && ('bg-gray-200')} hover:bg-gray-200 rounded-md text-black font-poppins font-semibold text-md p-2 hover:cursor-pointer items-center text-center`}>About Me</h1>
          <h1 onClick={clickCompet} className={`${KeyCompet && ('bg-gray-200')} hover:bg-gray-200 rounded-md text-black font-poppins font-semibold text-md p-2 hover:cursor-pointer items-center text-center`}>Key Competences</h1>
          <h1 onClick={clickProjects} className={`${projects && ('bg-gray-200')} hover:bg-gray-200 rounded-md text-black font-poppins font-semibold text-md p-2 hover:cursor-pointer items-center text-center`}>Projects</h1>
          <h1 onClick={clickCertifications} className={`${Certif && ('bg-gray-200')} hover:bg-gray-200 rounded-md text-black font-poppins font-semibold text-md p-2 hover:cursor-pointer items-center text-center`}>Certifications</h1>
          <h1 onClick={clickGitHub} className={`${Github && ('bg-gray-200')} hover:bg-gray-200 rounded-md text-black font-poppins font-semibold text-md p-2 hover:cursor-pointer items-center text-center`}>Github Calendar</h1>

        </section>


        <div className="flex space-x-2 drop-shadow-sm">
          <div className="w-1/4">
            <LeftSide />
          </div>

          <div className="w-3/4">
            {isHome && (
              <div className="flex-col space-y-2">
                <AboutMe />
                <KeyCompetences />
                <Projects />
                <Cirtifications />
                <GitHubCal />
              </div>
            )}

            {isAboutMe && (
              <AboutMe />
            )}

            {KeyCompet && (
              <KeyCompetences />
            )}
            {projects && (
              <Projects />
            )}
            {Certif && (
              <Cirtifications />
            )}
            {Github && (
              <GitHubCal />
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
