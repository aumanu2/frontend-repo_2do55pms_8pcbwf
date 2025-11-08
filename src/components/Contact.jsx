import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      setStatus('Sending...');
      // This demo just simulates a successful submit.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Thanks! I will get back to you soon.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white">Contact</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">Have an idea in mind? Let’s turn it into a product.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 sm:max-w-xl">
          <input name="name" required placeholder="Name" className="h-11 px-3 rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80" />
          <input name="email" required type="email" placeholder="Email" className="h-11 px-3 rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80" />
          <textarea name="message" required placeholder="Tell me about your project" rows={5} className="px-3 py-2 rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80" />
          <button type="submit" className="inline-flex items-center gap-2 justify-center h-11 px-4 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition">
            <Send size={18} /> Send
          </button>
          {status && <p className="text-sm text-neutral-600 dark:text-neutral-300">{status}</p>}
        </form>

        <footer className="mt-16 pt-8 border-t border-black/5 dark:border-white/10 text-sm text-neutral-600 dark:text-neutral-300">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </div>
    </section>
  );
}
