const HIGHLIGHTS = [
  {
    title: 'Kedokteran & Akademik',
    description: 'Dokter umum yang menempuh S2 Global Health di Harvard University melalui beasiswa LPDP. Memulai residensi OBGYN di 2026.',
    icon: '🩺',
  },
  {
    title: 'Konten Kreator',
    description: 'Mengedukasi 250K+ pengikut di Instagram & TikTok tentang kesehatan, gaya hidup sehat, dan perjalanan akademik.',
    icon: '📱',
  },
  {
    title: 'Empower Organization',
    description: 'Mendirikan Empower untuk memberikan beasiswa kepada individu berbakat dari latar belakang ekonomi terbatas.',
    icon: '🌟',
  },
  {
    title: 'Dokter Pelari',
    description: 'Komunitas yang menggabungkan dunia kedokteran dan olahraga lari, membuktikan bahwa dokter juga bisa aktif berolahraga.',
    icon: '🏃‍♀️',
  },
]

export function Highlights() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Menginspirasi dari Berbagai Sisi
        </h2>
        <p className="text-center text-[var(--color-warm-gray)] mb-12 max-w-xl mx-auto">
          Dokter, kreator, ibu, pelari — setiap peran adalah panggung untuk menginspirasi.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-[var(--color-sage-light)]/40 hover:border-[var(--color-sage)]/60 transition-colors"
            >
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--color-warm-gray)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
