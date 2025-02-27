import Image from "next/image";
import { Metadata } from "next";
import database from "@/app/projects/data";

export const metadata: Metadata = {
  title: "Projects Page",
  description:
    "This page will show all the project that i have done in the past",
};

export default function Projects() {
  return (
    <main>
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center">Projects</h1>
        <br />

        <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
          {database.map((project, index) => (
            <div
              key={index}
              className="flex flex-row 
              dark:bg-gray-900 bg-sky-300 rounded-lg overflow-hidden border 
              dark:border-gray-800 dark:hover:border-gray-700 border-gray-300 hover:border-gray-500
              transition-all duration-300"
            >
              {/* Project icon */}
              <div className="flex-shrink-0 w-20 h-full py-4 px-3 flex items-center justify-center">
                {project.image && (
                  <Image
                    src={project.image}
                    width={64}
                    height={64}
                    alt={project.name}
                    className="object-contain"
                  />
                )}
              </div>

              {/* Project information */}
              <div className="flex-grow p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2>
                      <a href={project.url} className="hover:underline">
                        {project.name}
                      </a>
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <p>{project.description}</p>

                {/* Languages section */}
                <div className="mt-3 flex flex-wrap items-center space-x-2 text-sm text-gray-400">
                  <span>languages: {project.languages}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
