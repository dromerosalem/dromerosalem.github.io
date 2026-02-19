import labsHero from '../assets/labs.png';
import spacexHero from '../assets/space-x.png';
import triviaHero from '../assets/trivia1.png';
import spacezHero from '../assets/space-z.png';
import wondersHero from '../assets/wonders-hero.png';
import nomadsync1 from '../assets/nomadsync-1.png';
import nomadsync2 from '../assets/nomadsync-2.png';
import nomadsync3 from '../assets/nomadsync-3.png';
import killbill1 from '../assets/killbill-1.png';
import killbill2 from '../assets/killbill-2.png';
import hipotecaHero from '../assets/hipoteca-hero.png';

export type ProjectCategory = 'raw' | 'vibe';

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    githubLink?: string;
    image?: string;
    images?: string[];
    category: ProjectCategory;
    isMobile?: boolean;
    challenge?: string;
    solution?: string;
}

export const projects: Project[] = [
    // RAW Code Projects
    {
        id: 'labs',
        title: 'LABS',
        description: "An appointment booking platform built for ALSALEM, an actual business in the healthcare industry. By using Django for back end and React Hooks for front end, where the users are able to book medical appointments and review the list of the exams' prices.",
        tags: ['Django', 'React', 'PostgreSQL', 'Docker'],
        githubLink: 'https://github.com/dromerosalem/project-4',
        image: labsHero,
        category: 'raw',
        challenge: 'Simplifying complex medical scheduling while ensuring data integrity across a multi-tenant environment.',
        solution: 'Architected a robust relational schema in PostgreSQL with Django signal-driven atomic updates for real-time booking availability.'
    },
    {
        id: 'space-x',
        title: 'SPACE-X',
        description: "A space rocket flight tracker with the Space-X API's, which updates with new flights and stores past flights. This project was developed using REACT.js with different functionalities such as getting detailed information for each launch.",
        tags: ['React', 'REST API', 'Data Viz'],
        githubLink: 'https://github.com/dromerosalem/project-2',
        image: spacexHero,
        category: 'raw'
    },
    {
        id: 'trivia',
        title: 'TRIVIA GAME',
        description: "A trivia game with an approach for mobile first where we were using React, Express and Mongo for the back end, fed by a free API for the quiz questions and creating a Login and Registration page to keep the records and scores of the users.",
        tags: ['MongoDB', 'Express', 'React', 'Node.js'],
        githubLink: 'https://github.com/dromerosalem/project-3',
        image: triviaHero,
        category: 'raw'
    },
    {
        id: 'space-z',
        title: 'SPACE-Z',
        description: "Based on the space invaders original game, this project was built with JavaScript, CSS and HTML. This game was later adapted by a blogger with my permission, and went viral in Mexico (coronagame.net).",
        tags: ['Vanilla JS', 'HTML5 Canvas', 'Game Loop'],
        githubLink: 'https://github.com/dromerosalem/project-1',
        link: 'https://dromerosalem.github.io/project-1',
        image: spacezHero,
        category: 'raw'
    },

    // VIBE Code Projects
    {
        id: 'nomadsync',
        title: 'NomadSync',
        description: 'A comprehensive travel orchestration platform for digital nomads. Features real-time group synchronization, AI-powered receipt scanning, and interactive globe mapping. Optimized for MOBILE-VIEW.',
        tags: ['Ionic', 'Supabase', 'React', 'Google Gemini', 'PWA', 'Leaflet'],
        link: 'https://www.nomadsync.co',
        githubLink: 'https://github.com/dromerosalem/NomadSync',
        images: [nomadsync1, nomadsync2, nomadsync3],
        category: 'vibe',
        isMobile: true,
        challenge: 'Synchronizing real-time travel itineraries across group members with intermittent network connectivity.',
        solution: 'Implemented an offline-first sync engine using Supabase real-time subscriptions and optimistic state updates via custom React hooks.'
    },
    {
        id: 'kill-bill',
        title: 'Kill Bill',
        description: 'An AI-driven group expense splitter built for quick, on-the-go billing management. Cinematic UI with high-contrast design inspired by minimalist aesthetics. Optimized for MOBILE-VIEW.',
        tags: ['Ionic', 'React', 'Google GenAI', 'Vite', 'Tailwind'],
        link: 'https://kill-bill-wheat.vercel.app/',
        githubLink: 'https://github.com/dromerosalem/Kill-Bill',
        images: [killbill1, killbill2],
        category: 'vibe',
        isMobile: true,
        challenge: 'Automating complex debt simplification algorithms while maintaining a low-latency user experience on mobile.',
        solution: 'Deployed a custom graph-based settlement algorithm and integrated Gemini-Pro for intelligent receipt parsing via serverless Edge Functions.'
    },
    {
        id: 'wonders',
        title: 'Wonders Travel',
        description: 'A premium travel exploration platform showcasing global landmarks through high-performance visual storytelling and immersive transitions. Built with a focus on core web vitals and premium UX.',
        tags: ['React', 'Framer Motion', 'Tailwind', 'Vercel Analytics'],
        link: 'https://wonders-travel.vercel.app/',
        githubLink: 'https://github.com/dromerosalem/wonders-travel',
        image: wondersHero,
        category: 'vibe'
    },
    {
        id: 'hipoteca',
        title: 'Mortgage Simulator AI',
        description: 'Advanced financial R&D tool providing real-time mortgage projections through interactive data visualization and AI analysis. Simplifies complex debt modeling for approachable decision making.',
        tags: ['React', 'Google GenAI', 'Recharts', 'Vite', 'TypeScript'],
        link: 'https://simulador-de-hipoteca.vercel.app/',
        githubLink: 'https://github.com/dromerosalem/Simulador-de-Hipoteca',
        image: hipotecaHero,
        category: 'vibe',
        challenge: 'Transforming dense financial algorithms into interactive, high-performance visualizations without UI stutter.',
        solution: 'Utilized Recharts for SVG rendering and memoized calculation workers to handle complex debt amortizations on the fly.'
    }
];
