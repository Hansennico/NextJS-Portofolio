import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Page",
  description:
    "This page will show all the project that i have done in the past",
};

export default function Projects() {
  return (
    <main>
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16">
        <h1>Projects Page</h1>
      </div>
    </main>
  );
}
