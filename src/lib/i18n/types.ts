export type Locale = 'id' | 'en'

export interface Translations {
  nav: {
    home: string
    about: string
    impact: string
    gallery: string
    mediaKit: string
    contact: string
  }
  hero: {
    title: string
    tagline: string
    subtitle: string
    cta: {
      instagram: string
      youtube: string
      collaborate: string
    }
    stats: {
      followers: string
      harvard: string
      harvardSub: string
      organizations: string
      organizationsSub: string
      halfMarathon: string
    }
  }
  highlights: {
    sectionTitle: string
    sectionSubtitle: string
    medicine: {
      title: string
      description: string
    }
    creator: {
      title: string
      description: string
    }
    organizations: {
      title: string
      description: string
    }
    runner: {
      title: string
      description: string
    }
  }
  orgsPreview: {
    sectionTitle: string
    sectionSubtitle: string
    viewAll: string
  }
  featuredIn: {
    sectionTitle: string
  }
  featuredStats: {
    sectionTitle: string
    followers: string
    subscribers: string
    countries: string
    countriesSub: string
    scholarships: string
    scholarshipsSub: string
  }
  about: {
    pageTitle: string
    bioTitle: string
    bio: string[]
    timelineTitle: string
    personalTitle: string
    personalSubtitle: string
    running: {
      title: string
      description: string
    }
    family: {
      title: string
      description: string
    }
    teaching: {
      title: string
      description: string
    }
  }
  impact: {
    pageTitle: string
    pageSubtitle: string
    researchTitle: string
    researchSubtitle: string
    thesisTitle: string
    thesisDescription: string
    teachingTitle: string
    teachingDescription: string
  }
  mediaKit: {
    pageTitle: string
    pageSubtitle: string
    platformsTitle: string
    audienceTitle: string
    audienceAge: string
    audienceGender: string
    audienceLocation: string
    audienceAgeSub: string
    audienceGenderSub: string
    audienceLocationSub: string
    followersLabel: string
    subscribersLabel: string
    collaborationTitle: string
    collaborationSubtitle: string
    collaborationTypes: string[]
    ctaButton: string
  }
  contact: {
    pageTitle: string
    pageSubtitle: string
    form: {
      name: string
      email: string
      subject: string
      message: string
      send: string
      sending: string
      success: string
      error: string
      sendAnother: string
    }
    info: {
      title: string
      email: string
      location: string
      social: string
    }
  }
  footer: {
    navigation: string
    harvardAlumna: string
    copyright: string
    madeWith: string
  }
  gallery: {
    pageTitle: string
    pageSubtitle: string
    categories: {
      all: string
      running: string
      academic: string
      family: string
      speaking: string
    }
    photoAlt: string
    comingSoon: string
    comingSoonSub: string
  }
  common: {
    learnMore: string
    viewAll: string
    backToHome: string
  }
  notFound: {
    title: string
    subtitle: string
    backHome: string
  }
}
