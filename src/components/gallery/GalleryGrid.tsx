'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { Camera, Instagram } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { Button } from '@/components/shared/Button'
import { galleryPhotos, type GalleryCategory } from '@/lib/data/gallery'

const categories = ['all', 'academic', 'family', 'speaking'] as const
type FilterCategory = (typeof categories)[number]

function getCategoryGradient(category: GalleryCategory): string {
  switch (category) {
    case 'academic':
      return 'from-warm-gray-400 to-warm-gray-600'
    case 'family':
      return 'from-dusty-rose to-dusty-rose-light'
    case 'speaking':
      return 'from-sage-300 to-sage-500'
  }
}

function getCategoryIcon(category: GalleryCategory): string {
  switch (category) {
    case 'academic':
      return '🎓'
    case 'family':
      return '👨‍👩‍👧‍👦'
    case 'speaking':
      return '🎤'
  }
}

export function GalleryGrid() {
  const { t, locale } = useLanguage()
  const [filter, setFilter] = useState<FilterCategory>('all')
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const filtered =
    filter === 'all'
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === filter)

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src))
  }

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={t.gallery.pageTitle} subtitle={t.gallery.pageSubtitle} as="h1" />

        {/* Category filter */}
        <AnimateOnScroll className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                filter === cat
                  ? 'bg-sage text-white shadow-sm'
                  : 'bg-warm-gray-100 text-warm-gray-500 hover:bg-warm-gray-200 hover:text-charcoal'
              }`}
            >
              {t.gallery.categories[cat as keyof typeof t.gallery.categories]}
            </button>
          ))}
        </AnimateOnScroll>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((photo, i) => (
              <motion.div
                key={photo.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="break-inside-avoid"
              >
                <div
                  className={`relative rounded-2xl overflow-hidden group ${
                    photo.span === 'tall' ? 'aspect-[3/4]' : photo.span === 'wide' ? 'aspect-[4/3]' : 'aspect-square'
                  }`}
                >
                  {/* Gradient placeholder (shown when image hasn't loaded or doesn't exist) */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${getCategoryGradient(
                      photo.category
                    )} flex flex-col items-center justify-center text-white/90 transition-opacity duration-300 ${
                      loadedImages.has(photo.src) ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    <span className="text-4xl mb-3">{getCategoryIcon(photo.category)}</span>
                    <span className="text-sm font-medium px-4 text-center">
                      {photo.alt[locale]}
                    </span>
                  </div>

                  {/* Actual image */}
                  <Image
                    src={photo.src}
                    alt={photo.alt[locale]}
                    fill
                    className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                      loadedImages.has(photo.src) ? 'opacity-100' : 'opacity-0'
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onLoad={() => handleImageLoad(photo.src)}
                  />

                  {/* Hover overlay (only when image is loaded) */}
                  {loadedImages.has(photo.src) && (
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300 flex items-end">
                      <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                        <p className="text-white text-sm font-medium drop-shadow-lg">
                          {photo.alt[locale]}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Coming soon CTA */}
        <AnimateOnScroll className="text-center mt-16 py-12 border-t border-sage-100">
          <Camera className="w-8 h-8 text-sage-400 mx-auto mb-4" />
          <h3 className="text-xl font-serif font-semibold text-charcoal mb-2">
            {t.gallery.comingSoon}
          </h3>
          <p className="text-warm-gray-400 mb-6 max-w-md mx-auto">
            {t.gallery.comingSoonSub}
          </p>
          <Button href="https://instagram.com/cellinewijaya.md" external>
            <Instagram className="w-4 h-4" />
            @cellinewijaya.md
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
