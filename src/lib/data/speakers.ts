export interface SpeakingEngagement {
  title: {
    id: string
    en: string
  }
  venue: string
  type: {
    id: string
    en: string
  }
}

export const speakingEngagements: SpeakingEngagement[] = [
  {
    title: {
      id: 'Seminar Kesehatan dalam Rangka Bulan K3 Nasional',
      en: 'Health Seminar for National Occupational Safety Month',
    },
    venue: 'PT Berau Coal Indonesia',
    type: { id: 'Seminar', en: 'Seminar' },
  },
  {
    title: {
      id: 'Speaker di BeautyFestAsia Surabaya',
      en: 'Speaker at BeautyFestAsia Surabaya',
    },
    venue: 'BeautyFestAsia',
    type: { id: 'Festival', en: 'Festival' },
  },
  {
    title: {
      id: 'Study Abroad ke AS bagi Mahasiswa Kedokteran',
      en: 'Study Abroad in the US for Medical Students',
    },
    venue: 'EducationUSA & FK UNAIR',
    type: { id: 'Seminar', en: 'Seminar' },
  },
  {
    title: {
      id: 'Health System of Indonesia',
      en: 'Health System of Indonesia',
    },
    venue: 'FK Universitas Ciputra — Guest Lecture',
    type: { id: 'Guest Lecture', en: 'Guest Lecture' },
  },
  {
    title: {
      id: 'Accelerating Indonesian Women Empowerment through Education',
      en: 'Accelerating Indonesian Women Empowerment through Education',
    },
    venue: 'SEA Today News',
    type: { id: 'TV', en: 'TV' },
  },
  {
    title: {
      id: 'Graduate Studies in the US for Medical Graduates',
      en: 'Graduate Studies in the US for Medical Graduates',
    },
    venue: 'EducationUSA & FK UNAIR',
    type: { id: 'Seminar', en: 'Seminar' },
  },
  {
    title: {
      id: 'S2 di Harvard University',
      en: "Master's at Harvard University",
    },
    venue: 'Podcast IDI Jawa Timur',
    type: { id: 'Podcast', en: 'Podcast' },
  },
  {
    title: {
      id: 'Guide to Apply for Master\'s with LPDP Scholarship',
      en: 'Guide to Apply for Master\'s with LPDP Scholarship',
    },
    venue: 'Glints Experts Class',
    type: { id: 'Webinar', en: 'Webinar' },
  },
]
