export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-sage-light)]/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        {/* Photo placeholder */}
        <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-[var(--color-sage-light)]/40 border-4 border-white shadow-lg flex items-center justify-center">
          <span className="text-4xl text-[var(--color-sage-dark)]">CW</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-charcoal)] mb-4 leading-tight">
          dr. Celline Wijaya, M.Sc.
        </h1>

        <p className="text-lg sm:text-xl text-[var(--color-warm-gray)] max-w-2xl mx-auto mb-8 leading-relaxed">
          Dokter. Creator. Pelari. Harvard Global Health alumna.
          <br />
          Membangun jembatan antara kedokteran, edukasi, dan inspirasi.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="https://instagram.com/cellinewijaya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-sage)] text-white rounded-full text-sm font-medium hover:bg-[var(--color-sage-dark)] transition-colors active:scale-95"
          >
            Instagram — 157K
          </a>
          <a
            href="https://tiktok.com/@cellinewijaya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-sage)] text-[var(--color-sage-dark)] rounded-full text-sm font-medium hover:bg-[var(--color-sage-light)]/30 transition-colors active:scale-95"
          >
            TikTok — 105K
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-warm-gray)]/30 text-[var(--color-warm-gray)] rounded-full text-sm font-medium hover:border-[var(--color-charcoal)] hover:text-[var(--color-charcoal)] transition-colors active:scale-95"
          >
            Kolaborasi
          </a>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { value: '250K+', label: 'Followers' },
            { value: 'Harvard', label: 'M.Sc. Global Health' },
            { value: '2', label: 'Organisasi' },
            { value: '21K+', label: 'Half Marathon' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-[var(--color-sage-dark)]">{stat.value}</div>
              <div className="text-xs text-[var(--color-warm-gray)] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
