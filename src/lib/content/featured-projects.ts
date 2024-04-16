import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "Our Committee Projects",
  projects: [
    {
      id: getId(),
      name: 'Crowd Density Monitoring Using Deep Neural Network',
      post: '',
      description: 'An Deep Learning powered Crowd Density Monitoring System.',
      tasks:
        'There are many disaster related to over crowding to prevent those disasters I have build an AI based model to calculate an monitor crowd density to prevent disasters related to over crowding.',
      url: 'https://adityarajsingh.vercel.app/blogs/Crowed_Density_Monitor_using_Deep_Neural_Network',
      img: '/project1.png',
      tags: ['AI/ML', 'Deep Learning', 'Python', 'Data Science', 'Computer Vision'],
    },
    {
      id: getId(),
      name: 'Real Time Traning Using Depth Label Capturing.',
      post: '',
      description: 'I have created an AI model which can train itself to detect new object in real time without stoping its detection processes.',
      tasks:
        'To train a deep learning model in real time without stopping main detection model.',
      url: 'https://github.com/Aditya-Singh-AIDS',
      img: '/project2.png',
      tags: ['Depth Mapping', 'Python', 'Methamatical Algorithm', 'Deep learning', 'Parallel Processoing'],
    },
  ],
};

export default featuredProjectsSection;
