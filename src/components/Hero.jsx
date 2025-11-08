import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/HldEaEeFcKnMlQB3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white dark:from-neutral-950/80 dark:via-neutral-950/40 dark:to-neutral-950" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for freelance & full-time
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            Full‑Stack Developer crafting AI‑driven experiences
          </h1>
          <p className="mt-5 text-neutral-700 dark:text-neutral-300 max-w-xl">
            I build modern web apps that blend robust backend systems with delightful, interactive frontends. From prototypes to production, I ship fast and iterate with data.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition">Start a project</a>
            <a href="#projects" className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur hover:shadow-sm transition">View work</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
