export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white">About</h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I’m a product‑minded engineer who enjoys turning complex problems into elegant, performant software. I work across the stack—designing schemas, writing APIs, and building polished interfaces. I value clear communication, strong testing practices, and iterative delivery.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <li className="rounded-md border border-black/10 dark:border-white/10 p-3 bg-white/70 dark:bg-neutral-900/70">TypeScript / React</li>
            <li className="rounded-md border border-black/10 dark:border-white/10 p-3 bg-white/70 dark:bg-neutral-900/70">FastAPI / Python</li>
            <li className="rounded-md border border-black/10 dark:border-white/10 p-3 bg-white/70 dark:bg-neutral-900/70">MongoDB / SQL</li>
            <li className="rounded-md border border-black/10 dark:border-white/10 p-3 bg-white/70 dark:bg-neutral-900/70">LLMs / Vector Search</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
          <h3 className="font-medium text-neutral-900 dark:text-white">What I bring</h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
            <li>• Systems thinking with a strong foundation in data modeling.</li>
            <li>• Pragmatic AI integration using embeddings, RAG, and tools.</li>
            <li>• Performance‑minded UI that feels fast and fluid.</li>
            <li>• Collaborative workflows and documentation first.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
