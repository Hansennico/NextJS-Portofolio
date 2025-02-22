import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact page",
  description: "This page will show form to send me a message",
};

export default function Contact() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-gray-50 dark:bg-black transition-colors duration-200">
      <div className="p-4 mx-auto max-w-xl dark:bg-white bg-gray-800 border font-[sans-serif] rounded-xl">
        <h1 className="text-4xl font-bold dark:text-gray-900 text-white mb-4">
          Contact me
        </h1>
        <h2 className="text-xl dark:text-gray-600 text-gray-300">
          Feel free to ask me anything
        </h2>
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all rounded-lg"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all rounded-lg"
          />
          <textarea
            placeholder="Message"
            className="w-full px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm pt-3 outline-none transition-all rounded-lg"
            rows={4}
          ></textarea>
          <button
            type="button"
            className="dark:text-white dark:bg-black text-black bg-blue-400 hover:bg-gray-900 hover:text-white tracking-wide text-sm px-4 py-2.5 w-full outline-none rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
