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
import ProjectIndex from '../components/projectIndex'
import { useRouter } from 'next/router';

import { useEffect, useState } from "react";

interface ProjectData {
  id: string | number;
  title: string;
  desc: string;
  img: string;
  tags: string[];
}
export default function Home() {

  const router = useRouter();
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  useEffect(() => {
    // Make sure router is ready and has query parameters
    if (!router.isReady) return;

    const { id, title, desc, img, tags } = router.query;

    // Check if required parameters exist
    if (typeof id === 'string' &&
      typeof title === 'string' &&
      typeof desc === 'string' &&
      typeof img === 'string' &&
      typeof tags === 'string') {

      // Parse tags from JSON string back to array
      try {
        const parsedTags = JSON.parse(tags);

        setProjectData({
          id,
          title,
          desc,
          img,
          tags: Array.isArray(parsedTags) ? parsedTags : []
        });
      } catch (e) {
        console.error("Error parsing tags:", e);
        setProjectData({
          id,
          title,
          desc,
          img,
          tags: []
        });
      }
    }
  }, [router.isReady, router.query]);

  if (!projectData) return <div>Loading...</div>;

  return (
    <div className="bg-[#DAE3E7] h-full flex-col space-y-2">
      <div >

        <Hero />


      </div>
      <section className={`px-20 space-y-2  `}>

        {/* <ProjectIndex 
        isOpen={isModalOpen}
        onClose={closeModal}
        img={img}
        title={title}
        desc={desc}
        tags={tags}
       /> */}
        <div className="flex space-x-2 drop-shadow-sm">
          <div className="w-1/4">
            <LeftSide />
          </div>

          <div className="w-3/4 bg-white rounded-lg">
            <div className="container mx-auto p-4">
              <h1 className="text-4xl font-bold mb-6">{projectData.title}</h1>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <img
                    src={projectData.img}
                    alt={projectData.title}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="md:w-1/2">
                  <p className="text-lg mb-4">{projectData.desc}</p>

                  <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Technologies</h2>
                    <div className="flex flex-wrap gap-2">
                      {projectData.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => router.back()}
                className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Back
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
