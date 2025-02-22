import Image from "next/image";
import coding from "@/Public/copilot-man-coding.webp";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-gray-50 dark:bg-black transition-colors duration-200">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I&apos;m Nicolas Hansen
            </h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-300">
              A Software and Web Developer,
              <br />
              Currently studying at the Bina Nusantara University
              <br />I love to code and solve problems
              <br />
              build things and make them work
              <br />
              and learn new things.
            </h2>
            <br />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skill
            </h1>
            <div className="grid grid-cols-2 grid-rows-1 gap-4">
              <div>
                <h2 className="text-xl text-gray-600 dark:text-gray-300">
                  <li>C++</li>
                  <li>Java</li>
                  <li>Python</li>
                </h2>
              </div>
              <div>
                <h2 className="text-xl text-gray-600 dark:text-gray-300">
                  <li>SQL</li>
                  <li>Laravel Framwork</li>
                  <li>Spring boot Framework</li>
                </h2>
              </div>
            </div>
            <br />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Familiar Tools
            </h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-300">
              <li>Git</li>
              <li>Docker</li>
              <li>Vercel</li>
            </h2>
          </div>
          <div className="md:justify-self-end">
            <br />
            <Image
              style={{ borderRadius: "20px", overflow: "hidden" }}
              src={coding}
              width={450}
              height={450}
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}
