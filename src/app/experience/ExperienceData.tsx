// experienceData.ts
import { Database } from 'lucide-react';
import { IconType } from 'react-icons';
import { SiNextdotjs, SiReact, SiJavascript,  SiPython } from 'react-icons/si';

export interface Experience {
    companyName: string;
    position: string;
    workLocation: string;
    jobDescription: string;
    responsibilities: string[];
    languagesAndFrameworks: string[];
    timeSpan: string;            // e.g. "Sep 2024 – Present"
    startDate: string;           // e.g. "September 2024"
    endDate: string;             // e.g. "Present" or "February 2024"
    icon: IconType;              // React icon component
}

export const experienceData: Experience[] = [
    {
        companyName: 'eduCOBOT',
        position: 'AI, IOT and Robotics Programmer',
        workLocation: 'Mumbai, Maharashtra, India',
        jobDescription:
            'Create software from scratch per company requirements, including full-stack websites, mobile apps, desktop packages, and AI integrations.',
        responsibilities: [
            'Develop full-stack web applications (database, backend, frontend)',
            'Build mobile apps for Android & iOS platforms',
            'Package desktop software as MSI, EXE and macOS DMG installers',
            'Integrate AI systems into websites, mobile apps, and desktop applications'
        ],
        languagesAndFrameworks: ['React.js', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'AI/ML'],
        startDate: 'September 2024',
        endDate: 'Present',
        timeSpan: 'Sep 2024 – Present',
        icon: SiPython
    },
    {
        companyName: 'eduCOBOT',
        position: 'Database and DevOps Administrator',
        workLocation: 'Mumbai, Maharashtra, India',
        jobDescription:
            'Maintain and optimize databases, automate deployment pipelines, and ensure reliable DevOps processes.',
        responsibilities: [
            'Administer MongoDB Atlas and PostgreSQL instances',
            'Automate CI/CD workflows and infrastructure provisioning',
            'Monitor system health and performance',
            'Implement backup, recovery, and security best practices'
        ],
        languagesAndFrameworks: ['Docker', 'Kubernetes', 'Terraform', 'SQL', 'Bash'],
        startDate: 'March 2024',
        endDate: 'Present',
        timeSpan: 'Mar 2024 – Present',
        icon: Database
    },
    {
        companyName: 'Lead Catalyst',
        position: 'Next.js Developer',
        workLocation: 'Mumbai, Maharashtra, India',
        jobDescription:
            'Developed and maintained server-rendered React applications using Next.js.',
        responsibilities: [
            'Implement page-level routing and data fetching in Next.js',
            'Optimize performance via SSR/ISR strategies',
            'Collaborate on UI/UX enhancements with design team'
        ],
        languagesAndFrameworks: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
        startDate: 'December 2023',
        endDate: 'February 2024',
        timeSpan: 'Dec 2023 – Feb 2024',
        icon: SiNextdotjs
    },
    {
        companyName: 'Articuno Coding',
        position: 'ReactJS Developer',
        workLocation: 'Madurai, Tamil Nadu, India',
        jobDescription:
            'Implemented frontend interfaces from Figma designs, ensuring responsiveness and accessibility.',
        responsibilities: [
            'Translate Figma mockups into React components',
            'Style applications with SASS and Material-UI',
            'Ensure cross-browser compatibility and responsive layouts'
        ],
        languagesAndFrameworks: ['React.js', 'SASS', 'Material-UI'],
        startDate: 'July 2022',
        endDate: 'September 2022',
        timeSpan: 'Jul 2022 – Sep 2022',
        icon: SiReact
    },
    {
        companyName: 'Skelly Entertainment',
        position: 'Full Stack Developer',
        workLocation: 'Madurai, Tamil Nadu, India',
        jobDescription:
            'Built dynamic websites from scratch, handling both frontend and backend requirements.',
        responsibilities: [
            'Develop responsive UI with HTML, CSS and JavaScript',
            'Implement backend logic and APIs for frontend needs',
            'Deploy and maintain production environments'
        ],
        languagesAndFrameworks: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Flask'],
        startDate: 'January 2022',
        endDate: 'February 2022',
        timeSpan: 'Jan 2022 – Feb 2022',
        icon: SiJavascript
    }
];
