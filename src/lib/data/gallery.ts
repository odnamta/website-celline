export type GalleryCategory = 'running' | 'academic' | 'family' | 'speaking'

export interface GalleryPhoto {
  src: string
  alt: { id: string; en: string }
  category: GalleryCategory
  span?: 'tall' | 'wide'
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: '/images/gallery/running-01.jpg',
    alt: { id: 'Half marathon finish line', en: 'Half marathon finish line' },
    category: 'running',
    span: 'tall',
  },
  {
    src: '/images/gallery/academic-01.jpg',
    alt: { id: 'Wisuda Harvard University', en: 'Harvard University graduation' },
    category: 'academic',
    span: 'wide',
  },
  {
    src: '/images/gallery/family-01.jpg',
    alt: { id: 'Bersama Alma dan Sofia', en: 'With Alma and Sofia' },
    category: 'family',
  },
  {
    src: '/images/gallery/speaking-01.jpg',
    alt: { id: 'Speaking di konferensi kesehatan', en: 'Speaking at health conference' },
    category: 'speaking',
  },
  {
    src: '/images/gallery/running-02.jpg',
    alt: { id: 'Dokter Pelari community run', en: 'Dokter Pelari community run' },
    category: 'running',
  },
  {
    src: '/images/gallery/academic-02.jpg',
    alt: { id: 'Mengajar di FK Universitas Ciputra', en: 'Teaching at UC School of Medicine' },
    category: 'academic',
  },
  {
    src: '/images/gallery/family-02.jpg',
    alt: { id: 'Momen keluarga', en: 'Family moment' },
    category: 'family',
    span: 'tall',
  },
  {
    src: '/images/gallery/speaking-02.jpg',
    alt: { id: 'Webinar kesehatan global', en: 'Global health webinar' },
    category: 'speaking',
    span: 'wide',
  },
]
