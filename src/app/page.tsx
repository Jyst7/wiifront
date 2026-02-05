// page.tsx
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center py-20 px-6 text-center max-w-4xl">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-7xl">
          Build something <span className="text-blue-600">amazing.</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          This is where your subheadline goes. Make it catchy and explain what you do.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="rounded-md bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-500">
            Get Started
          </button>
          <button className="rounded-md px-6 py-3 border border-zinc-300 dark:border-zinc-700 font-semibold">
            Learn More
          </button>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="w-full max-w-5xl py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl">Feature 1 content...</div>
          <div className="p-6 border rounded-xl">Feature 2 content...</div>
          <div className="p-6 border rounded-xl">Feature 3 content...</div>
        </div>
      </section>
    </main>
  );
};