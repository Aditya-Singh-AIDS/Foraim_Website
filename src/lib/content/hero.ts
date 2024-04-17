import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, Welcome To',
    title: 'FOR-AIM.',
    tagline: 'Forum of Recognized AI Members.',
    description:
    "FOR-AIM is a vibrant community of passionate individuals dedicated to advancing the field of Artificial Intelligence (AI). Our forum brings together professionals, researchers, students, and enthusiasts who share a common interest in AI technologies and applications.",
    specialText: 'Current Activity ',       
    cta: {
        title: 'Event List',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};
