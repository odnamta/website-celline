export type GalleryCategory = 'running' | 'academic' | 'family' | 'speaking'

export interface GalleryPhoto {
  src: string
  alt: { id: string; en: string }
  category: GalleryCategory
  span?: 'tall' | 'wide'
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: '/images/gallery/harvard-medical-school.jpg',
    alt: { id: 'Wisuda Harvard Medical School', en: 'Harvard Medical School Graduation' },
    category: 'academic',
    span: 'tall',
  },
  {
    src: '/images/gallery/graduation-with-alma.jpg',
    alt: { id: 'Wisuda bersama Alma', en: 'Graduation day with Alma' },
    category: 'family',
    span: 'tall',
  },
  {
    src: '/images/gallery/harvard-graduation.jpg',
    alt: { id: 'Wisuda Harvard University', en: 'Harvard University Commencement' },
    category: 'academic',
    span: 'wide',
  },
  {
    src: '/images/gallery/celline-casual.jpg',
    alt: { id: 'Potret di Harvard', en: 'Portrait at Harvard' },
    category: 'speaking',
  },
]
