export function Footer() {
  return (
    <footer className="py-12 bg-[var(--color-charcoal)] text-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-6 mb-6">
          <a href="https://instagram.com/cellinewijaya" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Instagram
          </a>
          <a href="https://tiktok.com/@cellinewijaya" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            TikTok
          </a>
          <a href="https://linkedin.com/in/cellinewijaya" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} dr. Celline Wijaya, M.Sc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
