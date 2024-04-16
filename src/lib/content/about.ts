import { AboutSectionType } from '@/lib/types/sections'

export const aboutSection: AboutSectionType = {
    title: 'About Us',
    // Paragraphs need to be changed from containers/About.tsx
    // Because it wasn't possible to insert anchor tags like this
    list: {
    title: 'Here are a few Event Names We Have Conducted:',
    items: [
        'DevFest 2023',
        'Blood Donation (NSS x FOR-AIM)',
        '75th Republic Day Celebration',
        'Virtual Harvest Fest',
        'Innovision',
        'Freshers Party',
    ],
    },
    img: '/Foraim.jpg',
};