import { Metadata } from "next";
import Image from "next/image";
import mypicture from "@/Public/about.jpg";

export const metadata: Metadata = {
  title: "About page",
  description:
    "This page will show all the project that i have done in the past",
};

const date = new Date();
const year = date.getFullYear();
const age = year - 2004;

export default function About() {
  return (
    <main>
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16">
        <h1>About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Image
              src={mypicture}
              width={400}
              alt="my self"
              className="md:h-auto object-cover object-center"
            />
          </div>
          {/* Right side */}
          <p>
            Hello! my name is Nicolas Hansen, you can call me Hansen. I am a
            Software & Web developer live in indonesia. I am {age} years old and
            currently studying at the Bina Nusantara University. My hobby is
            playing game. When i have free time i love learning new things like
            learn new programming languange or trying something new. When I was
            in college, I often made assignments or projects about software and
            websites, but since my old laptop stolen so i lost all the data on
            the old laptop, now I&apos;am recreating the project project I have
            created and uploading it to github. And my conclusion, I&apos;m more
            interested in the backend because i love to solve and make things
            work. Now i&apos;m looking for opportunity & working experience
          </p>
        </div>
      </div>
    </main>
  );
}
