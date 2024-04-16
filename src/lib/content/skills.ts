import { SkillsSectionType } from '@/lib/types/sections'
import { AboutSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'
import Image from 'next/image';
export const skillsSection: SkillsSectionType = {
    title: 'Events',
    skills: [
    {
        id: getId(),
        title: 'FORAIM Events',
        // animation lottie file: https://lottiefiles.com/
        lottie: {
        light: '/lotties/front-end_dark.json',
        dark: '/lotties/front-end_dark.json',
        },
        paragraph: 'Stay updated on upcoming events, workshops, and seminars organized by FOR-AIM. Join us for insightful discussions, hands-on learning, and networking opportunities with industry leaders and experts.',
        points: [
        'Building responsive static websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in Express',
        ],
    },
    {
        id: getId(),
        title: 'What We Offer',
        lottie: {
        light: '/lotties/animation.json',
        dark: '/lotties/animation.json',
        },
        paragraph: 'Become a member of FOR-AIM and gain access to exclusive benefits, including discounts on events, access to member-only resources, and opportunities for professional development and growth.',
        points: [
        'Networking Opportunities: Connect with like-minded professionals and experts in the field of AI.',
        'Workshops and Training: Enhance your skills and stay updated on the latest trends and developments in AI.',
        'Research Collaboration: Collaborate on cutting-edge research projects and exchange ideas with fellow researchers.',
        'Community Engagement: Participate in community-driven initiatives and contribute to the growth and development of the AI ecosystem.',
        ],
    },
    ],
};
