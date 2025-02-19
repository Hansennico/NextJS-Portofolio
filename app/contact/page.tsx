import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact page",
  description: "This page will show form to send me a message",
};

export default function Contact() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-gray-50 dark:bg-black transition-colors duration-200">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Page
        </h1>
      </div>
    </main>
  );
}
