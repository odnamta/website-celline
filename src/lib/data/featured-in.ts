export interface FeaturedItem {
  name: string
  url: string
  type: 'publication' | 'media'
}

export const featuredIn: FeaturedItem[] = [
  {
    name: 'The Jakarta Post',
    url: 'https://www.thejakartapost.com/p/1232',
    type: 'publication',
  },
  {
    name: 'Kompas.com',
    url: 'https://www.kompas.com/edu/read/2022/06/25/083010471/kisah-celline-lulus-sarjana-kedokteran-unair-pada-usia-19-tahun',
    type: 'media',
  },
  {
    name: 'Detik.com',
    url: 'https://www.detik.com/edu/edutainment/d-6148627/kisah-celline-lulus-fk-unair-di-usia-19-kini-s2-di-harvard-dengan-lpdp',
    type: 'media',
  },
  {
    name: 'Harvard GHSM',
    url: 'https://ghsm.hms.harvard.edu/conversation',
    type: 'publication',
  },
  {
    name: 'Tribunnews',
    url: 'https://manado.tribunnews.com/2022/06/25/sosok-maria-cellina-wijaya-raih-sked-di-usia-19-tahun-kini-diterima-s-2-di-empat-kampus-top-as',
    type: 'media',
  },
  {
    name: 'Okezone',
    url: 'https://edukasi.okezone.com/read/2022/06/25/65/2618102/kisah-celline-lulus-sarjana-kedokteran-unair-di-usia-19-tahun-kini-dapat-beasiswa-lpdp-di-harvard',
    type: 'media',
  },
  {
    name: 'Sindonews',
    url: 'https://edukasi.sindonews.com/read/808587/211/kisah-celline-alumnus-unair-yang-sukses-kuliah-di-harvard-dengan-beasiswa-lpdp-1656144372',
    type: 'media',
  },
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=Llfk3HAAAAAJ&hl=en',
    type: 'publication',
  },
]
