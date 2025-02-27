import Image from "next/image";
import coding from "@/Public/copilot-man-coding.webp";

export default function Home() {
  return (
    <main>
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:grid md:grid-cols-2 gap-4">
        <div>
          <h1>Hi, I&apos;m Nicolas Hansen</h1>
          <p>
            A Software and Web Developer,
            <br />
            Currently studying at the Bina Nusantara University
            <br />I love to code and solve problems
            <br />
            build things and make them work
            <br />
            and learn new things.
          </p>
          <br />

          <h1>Technical Skill</h1>
          <div className="grid grid-cols-2 grid-rows-1 gap-4">
            <div>
              <p>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
              </p>
            </div>
            <div>
              <p>
                <li>SQL</li>
                <li>Laravel Framwork</li>
                <li>Spring boot Framework</li>
              </p>
            </div>
          </div>
          <br />

          <h1>Familiar Tools</h1>
          <p>
            <li>Git</li>
            <li>Docker</li>
            <li>Vercel</li>
          </p>
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
    </main>
  );
}
