import { Code2, Database, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description:
      'Cross‑platform editor with operational transforms, live cursors, and CRDT sync backed by WebSockets and Redis.',
    tags: ['React', 'FastAPI', 'WebSockets', 'Redis'],
    icon: Code2,
  },
  {
    title: 'AI Content Orchestrator',
    description:
      'Workflow engine that chains LLMs, embeddings search, and vector storage for multi‑step content generation.',
    tags: ['Python', 'OpenAI', 'Qdrant', 'Workers'],
    icon: Cpu,
  },
  {
    title: 'Headless Commerce Backend',
    description:
      'Modular catalogs, carts, and payments with event‑driven architecture and analytics pipelines.',
    tags: ['FastAPI', 'MongoDB', 'Stripe', 'Kafka'],
    icon: Database,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white">Selected Work</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
              A few projects that highlight my approach to scalable architectures, DX, and user‑centric design.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-3 py-2 rounded-md border border-black/10 dark:border-white/10 hover:shadow-sm">Let’s collaborate</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-5 hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-emerald-400 text-white">
                  <p.icon size={18} />
                </div>
                <h3 className="font-medium text-neutral-900 dark:text-white">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded border border-black/10 dark:border-white/10">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
