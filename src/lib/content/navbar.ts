import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
    navLinks: [
        { name: 'About Foraim', url: '/#about'},
        { name: 'Events', url: '/#skills'},
        { name: 'Core Committee Members', url: '/#experience' },
        { name: 'Projects', url: '/#projects' },
        { name: 'contact', url: '/#contact' },
    ],
    cta: {
        title: 'Event List',
        url: `/${resumeFileName}`,
    },
}