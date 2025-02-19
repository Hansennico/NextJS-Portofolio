import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page",
  description:
    "This page will show all the project that i have done in the past",
};

export default function About() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-gray-50 dark:bg-black transition-colors duration-200">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Page
        </h1>
      </div>
    </main>
  );
}
