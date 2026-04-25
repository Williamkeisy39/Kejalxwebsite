import Image from 'next/image';
import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-white/40 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-ink-700 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/kej.png" alt="Kejalux.com" width={210} height={60} className="h-10 w-auto" />
            <span className="text-lg font-bold tracking-wide text-ink-900">Kejalux.com</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-right text-ink-600">
          <a href="mailto:info@kejalux.com" className="hover:text-ink-900">
            info@kejalux.com
          </a>
          <a href="tel:+254769041607" className="hover:text-ink-900">
            +254 769 041607
          </a>
        </div>
      </div>
      <div className="border-t border-ink-900/5 py-4 text-center text-xs text-ink-500">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span>&copy; {new Date().getFullYear()} Kejalux.com. All rights reserved.</span>
          <Link href="/terms" className="hover:text-ink-900 transition">Terms &amp; Conditions</Link>
          <Link href="/privacy" className="hover:text-ink-900 transition">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
