export interface Organization {
  id: string
  name: {
    id: string
    en: string
  }
  tagline: {
    id: string
    en: string
  }
  description: {
    id: string
    en: string
  }
  icon: string
  color: string
  url?: string
}

export const organizations: Organization[] = [
  {
    id: 'empower',
    name: { id: 'Empower Indonesia', en: 'Empower Indonesia' },
    tagline: {
      id: 'Beasiswa untuk yang berbakat',
      en: 'Scholarships for the talented',
    },
    description: {
      id: 'Organisasi yang memberikan beasiswa dan pemberdayaan kepada individu berbakat dari latar belakang ekonomi terbatas. Telah memberikan 100+ beasiswa sejak didirikan.',
      en: 'Organization providing scholarships and empowerment to talented individuals from economically disadvantaged backgrounds. Has awarded 100+ scholarships since its founding.',
    },
    icon: 'heart',
    color: '#8B9D83',
    url: 'https://instagram.com/empower_id',
  },
  {
    id: 'dokter-pelari',
    name: { id: 'Dokter Pelari', en: 'Dokter Pelari' },
    tagline: {
      id: 'Ketika dokter berlari',
      en: 'When doctors run',
    },
    description: {
      id: 'Komunitas yang menggabungkan dunia kedokteran dan olahraga lari. Membuktikan bahwa tenaga kesehatan juga bisa menjalani gaya hidup aktif dan sehat.',
      en: 'A community blending medicine and running. Proving that healthcare professionals can also lead active, healthy lifestyles.',
    },
    icon: 'activity',
    color: '#E4405F',
    url: 'https://instagram.com/dokterpelari',
  },
  {
    id: 'celline-runs',
    name: { id: 'Celline Runs', en: 'Celline Runs' },
    tagline: {
      id: 'Berlari untuk inspirasi',
      en: 'Running for inspiration',
    },
    description: {
      id: 'Platform komunitas lari yang menginspirasi siapa saja untuk memulai gaya hidup aktif, dari pemula hingga half-marathoner.',
      en: 'A running community platform inspiring anyone to start an active lifestyle, from beginners to half-marathoners.',
    },
    icon: 'trending-up',
    color: '#F59E0B',
    url: 'https://instagram.com/celline.runs',
  },
]
