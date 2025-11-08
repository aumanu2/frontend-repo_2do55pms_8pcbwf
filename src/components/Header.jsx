import { useEffect, useState } from 'react';
import { Moon, Sun, Rocket } from 'lucide-react';

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-emerald-400 text-white">
            <Rocket size={18} />
          </div>
          <span>Flames · Blue</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <a href="#projects" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">Projects</a>
          <a href="#about" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">Contact</a>
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="inline-flex items-center justify-center rounded-md border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 h-9 w-9 shadow-sm hover:shadow transition-all"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        <div className="lg:hidden flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="inline-flex items-center justify-center rounded-md border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 h-9 w-9 shadow-sm"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 h-9 w-9 shadow-sm"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1">
              <span className="block w-5 h-0.5 bg-current"></span>
              <span className="block w-5 h-0.5 bg-current"></span>
              <span className="block w-5 h-0.5 bg-current"></span>
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-black/5 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            <a onClick={() => setOpen(false)} href="#projects" className="py-2">Projects</a>
            <a onClick={() => setOpen(false)} href="#about" className="py-2">About</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-2">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
