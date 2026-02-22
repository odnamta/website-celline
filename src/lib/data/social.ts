export interface SocialPlatform {
  name: string
  handle: string
  url: string
  followers: string
  followersNum: number
  color: string
}

export const socialPlatforms: SocialPlatform[] = [
  {
    name: 'Instagram',
    handle: '@cellinewijaya.md',
    url: 'https://instagram.com/cellinewijaya.md',
    followers: '237K',
    followersNum: 237000,
    color: '#E4405F',
  },
  {
    name: 'TikTok',
    handle: '@cellinewijaya.md',
    url: 'https://tiktok.com/@cellinewijaya.md',
    followers: '100K+',
    followersNum: 100000,
    color: '#000000',
  },
  {
    name: 'YouTube',
    handle: '@cellinewijaya',
    url: 'https://youtube.com/@cellinewijaya',
    followers: '37K+',
    followersNum: 37000,
    color: '#FF0000',
  },
  {
    name: 'LinkedIn',
    handle: 'Maria Cellina Wijaya',
    url: 'https://linkedin.com/in/maria-cellina-wijaya',
    followers: '',
    followersNum: 0,
    color: '#0A66C2',
  },
]

export const contactEmail = 'celline1130@gmail.com'

export const managerContact = {
  name: 'Adella Izdiharnada',
  email: 'adellaizdhiharnada@gmail.com',
  phone: '+62 821-2393-0563',
}

export const totalFollowers = '370K+'
export const totalFollowersNum = 374000
