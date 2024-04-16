import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
    title: 'get in touch',
    subtitle: "what's next",
    paragraphs: [
    'Have questions or want to learn more about FOR-AIM?',
    'Get in touch with us today! Reach out to our team via email at [email protected] or follow us on social media for the latest updates and announcements.',
    ],
    link: `mailto:${author.email}`,
};