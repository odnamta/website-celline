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
    year: '2012',
    title: {
      id: 'Masuk FK Universitas Airlangga',
      en: 'Entered Airlangga University Medical School',
    },
    description: {
      id: 'Memulai pendidikan kedokteran di FK Universitas Airlangga, Surabaya pada usia 15 tahun.',
      en: 'Started medical education at Airlangga University Faculty of Medicine, Surabaya at the age of 15.',
    },
  },
  {
    year: '2017',
    title: {
      id: 'Sarjana Kedokteran',
      en: 'Bachelor of Medicine',
    },
    description: {
      id: 'Menyelesaikan gelar Sarjana Kedokteran di Universitas Airlangga.',
      en: 'Completed Bachelor of Medicine at Airlangga University.',
    },
  },
  {
    year: '2019',
    title: {
      id: 'Dokter Umum — Termuda di Angkatan',
      en: 'Medical Doctor — Youngest in Class',
    },
    description: {
      id: 'Lulus sebagai Dokter Umum dari FK Universitas Airlangga pada usia 21 tahun, termuda di angkatannya.',
      en: 'Graduated as Medical Doctor from Airlangga University at age 21, the youngest in the class.',
    },
  },
  {
    year: '2021',
    title: {
      id: 'Beasiswa LPDP & Harvard',
      en: 'LPDP Scholarship & Harvard',
    },
    description: {
      id: 'Menerima beasiswa LPDP dan memulai Master of Medical Sciences in Global Health Delivery di Harvard Medical School.',
      en: 'Received LPDP scholarship and started Master of Medical Sciences in Global Health Delivery at Harvard Medical School.',
    },
  },
  {
    year: '2022',
    title: {
      id: 'Mendirikan Empower Indonesia',
      en: 'Founded Empower Indonesia',
    },
    description: {
      id: 'Mendirikan organisasi non-profit untuk meningkatkan akses pendidikan perempuan di Indonesia.',
      en: 'Founded a non-profit organization dedicated to enhancing women\'s educational access in Indonesia.',
    },
  },
  {
    year: '2023',
    title: {
      id: 'Content Creator & DokterPelari',
      en: 'Content Creator & DokterPelari',
    },
    description: {
      id: 'Mulai aktif di media sosial dan mendirikan DokterPelari, platform edukasi lari berbasis bukti ilmiah.',
      en: 'Became active on social media and founded DokterPelari, an evidence-based running education platform.',
    },
  },
  {
    year: '2024',
    title: {
      id: 'Lulus Harvard & Riset di HSPH',
      en: 'Harvard Graduation & HSPH Research',
    },
    description: {
      id: 'Menyelesaikan MMSc dari Harvard Medical School dan bergabung sebagai Research Assistant di Harvard T.H. Chan School of Public Health.',
      en: 'Completed MMSc from Harvard Medical School and joined Harvard T.H. Chan School of Public Health as Research Assistant.',
    },
  },
  {
    year: '2025',
    title: {
      id: 'Dosen FK UC & 370K+ Followers',
      en: 'UC Med School Lecturer & 370K+ Followers',
    },
    description: {
      id: 'Bergabung sebagai dosen di FK Universitas Ciputra Surabaya dan mencapai 370K+ followers di media sosial.',
      en: 'Joined University of Ciputra School of Medicine as lecturer and reached 370K+ social media followers.',
    },
  },
]
