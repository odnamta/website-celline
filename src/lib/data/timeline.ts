export interface TimelineEvent {
  year: string
  title: {
    id: string
    en: string
  }
  description: {
    id: string
    en: string
  }
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2017',
    title: {
      id: 'Lulus Kedokteran',
      en: 'Medical Degree',
    },
    description: {
      id: 'Menyelesaikan pendidikan kedokteran dan menjadi dokter umum.',
      en: 'Completed medical education and became a general practitioner.',
    },
  },
  {
    year: '2019',
    title: {
      id: 'Mendirikan Empower Indonesia',
      en: 'Founded Empower Indonesia',
    },
    description: {
      id: 'Memulai organisasi beasiswa untuk individu berbakat dari latar belakang ekonomi terbatas.',
      en: 'Started a scholarship organization for talented individuals from economically disadvantaged backgrounds.',
    },
  },
  {
    year: '2020',
    title: {
      id: 'Beasiswa LPDP',
      en: 'LPDP Scholarship',
    },
    description: {
      id: 'Menerima beasiswa LPDP untuk melanjutkan studi di Harvard University.',
      en: 'Received LPDP scholarship to pursue studies at Harvard University.',
    },
  },
  {
    year: '2021',
    title: {
      id: 'Harvard University',
      en: 'Harvard University',
    },
    description: {
      id: 'Memulai Master of Medical Sciences in Global Health Delivery di Harvard.',
      en: 'Started Master of Medical Sciences in Global Health Delivery at Harvard.',
    },
  },
  {
    year: '2022',
    title: {
      id: 'Lulus dari Harvard',
      en: 'Harvard Graduation',
    },
    description: {
      id: 'Menyelesaikan MMSc in Global Health Delivery dari Harvard University.',
      en: 'Completed MMSc in Global Health Delivery from Harvard University.',
    },
  },
  {
    year: '2023',
    title: {
      id: 'Content Creator & Organisasi',
      en: 'Content Creator & Organizations',
    },
    description: {
      id: 'Mulai aktif di media sosial dan mendirikan Dokter Pelari serta Celline Runs.',
      en: 'Became active on social media and founded Dokter Pelari and Celline Runs.',
    },
  },
  {
    year: '2024',
    title: {
      id: 'Dosen FK Universitas Ciputra',
      en: 'Lecturer at UC School of Medicine',
    },
    description: {
      id: 'Bergabung sebagai dosen di Fakultas Kedokteran Universitas Ciputra Surabaya.',
      en: 'Joined as a lecturer at the University of Ciputra School of Medicine, Surabaya.',
    },
  },
  {
    year: '2025',
    title: {
      id: '300K+ Followers & Healthworks',
      en: '300K+ Followers & Healthworks',
    },
    description: {
      id: 'Mencapai 300K+ followers di media sosial dan mendirikan Healthworks Indonesia.',
      en: 'Reached 300K+ social media followers and founded Healthworks Indonesia.',
    },
  },
]
