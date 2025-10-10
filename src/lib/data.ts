import { Instagram, Linkedin, Mail, Twitter, Code, BrainCircuit, Paintbrush, FileText, Bot, GitBranch } from 'lucide-react';
import { NextjsIcon, ReactIcon, TailwindIcon, TypescriptIcon, NodejsIcon, SupabaseIcon } from '@/components/icons/tech';

export const socialLinks = [
  { name: 'Instagram', url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#', icon: Instagram, description: 'A glimpse into my personal life, interests, and creative side.' },
  { name: 'LinkedIn', url: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#', icon: Linkedin, description: 'My professional network, career updates, and industry insights.' },
  { name: 'Twitter', url: process.env.NEXT_PUBLIC_TWITTER_URL || '#', icon: Twitter, description: 'Real-time thoughts on tech, development, and everything in between.' },
  { name: 'Email', url: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`, icon: Mail, description: 'The best way to reach me for project inquiries or collaborations.' },
];

export const services = [
  {
    title: 'Web Development',
    description: 'Building responsive, high-performance websites and web applications using modern technologies like React, Next.js, and TypeScript.',
    icon: Code,
  },
  {
    title: 'AI Integration',
    description: 'Integrating cutting-edge AI solutions, including chatbots and data analysis tools, using Genkit, Gemini, and other modern AI frameworks.',
    icon: Bot,
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces with a focus on user experience, using tools like Figma and Tailwind CSS.',
    icon: Paintbrush,
  },
  {
    title: 'Technical Writing',
    description: 'Authoring clear and concise technical documentation, blog posts, and tutorials to explain complex topics to diverse audiences.',
    icon: FileText,
  }
];

export const techStack = [
  {
    category: 'Frontend',
    items: [
      { name: 'React / React Native', icon: ReactIcon },
      { name: 'Next.js', icon: NextjsIcon },
      { name: 'TypeScript', icon: TypescriptIcon },
      { name: 'Tailwind CSS', icon: TailwindIcon },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: NodejsIcon },
      { name: 'Supabase', icon: SupabaseIcon },
      { name: 'Firebase', icon: null },
      { name: 'PostgreSQL', icon: null },
    ],
  },
  {
    category: 'AI / GenAI',
    items: [
      { name: 'Genkit', icon: null },
      { name: 'LangChain', icon: null },
      { name: 'Gemini', icon: null },
      { name: 'OpenAI', icon: null },
    ],
  },
  {
    category: 'Tools & DevOps',
    items: [
      { name: 'Git', icon: GitBranch },
      { name: 'Docker', icon: null },
      { name: 'Vercel', icon: null },
      { name: 'Figma', icon: null },
    ],
  },
];


export const projects = [];
