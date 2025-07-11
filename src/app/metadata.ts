import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'TechForEverybody – Full-Stack Engineer & AI/ML Practitioner',
    description:
        'Shivkumar Chauhan’s portfolio: Full-Stack development (React, Next.js, Node.js), AI/ML, Data Science, DevOps. Explore projects, blogs, and get in touch.',
    keywords: [
        'Full Stack Developer',
        'React',
        'Next.js',
        'Node.js',
        'JavaScript',
        'TypeScript',
        'Python',
        'AI',
        'Machine Learning',
        'Data Science',
        'Portfolio',
        'Web Development',
        'MERN Stack',
        'GraphQL',
        'DevOps',
        'Docker',
        'Cloud Computing',
        'TechForEverybody',
        'Shivkumar Chauhan'
    ],
    metadataBase: new URL('https://techforeverybody.org'),
    icons: {
        icon: '/TechForEverybody.svg',
        shortcut: '/TechForEverybody.svg',
        apple: '/TechForEverybody.svg',
    },
    openGraph: {
        title: 'TechForEverybody – Full-Stack Engineer & AI/ML Practitioner',
        description:
            'Discover Shivkumar Chauhan’s work in React, Next.js, Node.js, Python, AI/ML, Data Science & DevOps.',
        url: 'https://techforeverybody.org',
        siteName: 'TechForEverybody',
        images: [
            {
                url: '/TechForEverybody.svg',
                width: 600,
                height: 600,
                alt: 'TechForEverybody Logo',
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'TechForEverybody Portfolio',
        description:
            'Shivkumar Chauhan – Full-Stack Dev (React, Next.js, Node.js), AI/ML, Data Science.',
        images: ['/TechForEverybody.svg'],
        creator: '@Shiva995',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    }
};
