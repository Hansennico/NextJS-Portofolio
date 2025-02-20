export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-gray-50 dark:bg-black transition-colors duration-200">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-6 gap-4">
        {/* left side */}
        <div className="col-start-1 col-end-3 ...">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I&apos;m Nicolas Hansen
          </h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-300">
            A Software and Web Developer,
            <br />I love to learn new things
          </h2>
        </div>
        {/* right side */}
        <div className="col-span-2 col-end-7 ...">
          <h1>test</h1>
        </div>
      </div>
    </main>
  );
}
