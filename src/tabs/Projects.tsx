import { Box, Typography } from '@mui/material'
import { RocketLaunchOutlined, GitHub, Language, PhoneAndroid, GetApp, Description, BusinessOutlined, WebOutlined, PhoneIphoneOutlined, DesktopWindowsOutlined, ScienceOutlined, SmartToyOutlined, BarChartOutlined, AutoAwesomeOutlined } from '@mui/icons-material'
import { C } from '../theme'

type ProjectType = 'web' | 'app' | 'desktop' | 'research' | 'robotics' | 'data science' | 'ai'

interface ProjectLink {
    label: 'GitHub' | 'Live' | 'App Store' | 'Play Store' | 'Download' | 'Paper'
    url: string
}

interface Project {
    name: string
    description: string
    usedAt: string
    type: ProjectType
    skills: string[]
    links: ProjectLink[]
    images: string[]
    featured?: boolean
}

const PROJECTS: Project[] = [
    {
        name: 'CyberShield Dashboard',
        description: 'Cloud-native security monitoring dashboard with real-time threat detection, incident response workflows, and automated alerting across multi-cloud environments.',
        usedAt: 'Connecting Cyber Networks',
        type: 'web',
        skills: ['React', 'TypeScript', 'Node.js', 'AWS Lambda', 'DynamoDB', 'WebSocket'],
        links: [
            { label: 'Live', url: '#' },
        ],
        images: ['https://cdn-icons-png.flaticon.com/512/8136/8136031.png'],
        featured: true,
    },
    {
        name: 'LearnAI Platform',
        description: 'AI-powered adaptive e-learning platform that personalizes course content based on learner behavior, with real-time progress tracking and smart assessments.',
        usedAt: 'Kritrima Prajna Innovations',
        type: 'ai',
        skills: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'TensorFlow', 'Redis'],
        links: [
            { label: 'GitHub', url: '#' },
            { label: 'Live', url: '#' },
        ],
        images: ['https://cdn-icons-png.flaticon.com/512/8136/8136031.png'],
        featured: true,
    },
    {
        name: 'VulnScan Automator',
        description: 'Automated vulnerability scanning platform that integrates with CI/CD pipelines, generates compliance reports, and prioritizes fixes using ML-based risk scoring.',
        usedAt: 'Connecting Cyber Networks',
        type: 'web',
        skills: ['Python', 'AWS Lambda', 'Docker', 'React', 'MongoDB'],
        links: [
            { label: 'GitHub', url: '#' },
        ],
        images: ['https://cdn-icons-png.flaticon.com/512/8136/8136031.png'],
    },
    {
        name: 'CollabSync',
        description: 'Real-time collaboration tool with WebSocket-powered live editing, presence indicators, inline commenting, and version history for distributed teams.',
        usedAt: 'Kritrima Prajna Innovations',
        type: 'web',
        skills: ['React', 'Node.js', 'Socket.io', 'Redis', 'PostgreSQL'],
        links: [
            { label: 'GitHub', url: '#' },
            { label: 'Live', url: '#' },
        ],
        images: ['https://cdn-icons-png.flaticon.com/512/8136/8136031.png'],
    },
    {
        name: 'LeadFlow SaaS',
        description: 'Lead generation and nurturing platform with server-side rendering, SEO optimization, automated email sequences, and conversion analytics dashboard.',
        usedAt: 'Lead Catalyst',
        type: 'web',
        skills: ['Next.js', 'React', 'Python', 'Prisma', 'Vercel'],
        links: [
            { label: 'Live', url: '#' },
        ],
        images: ['https://cdn-icons-png.flaticon.com/512/8136/8136031.png'],
    },
    {
        name: 'DevFlow CLI',
        description: 'Developer productivity CLI that automates project scaffolding, environment setup, deployment workflows, and generates boilerplate with custom templates.',
        usedAt: 'Open Source',
        type: 'desktop',
        skills: ['Node.js', 'TypeScript', 'Shell', 'Docker'],
        links: [
            { label: 'GitHub', url: '#' },
            { label: 'Download', url: '#' },
        ],
        images: ['https://cdn-icons-png.flaticon.com/512/8136/8136031.png'],
    },
    {
        name: 'FinTrack Mobile',
        description: 'Cross-platform personal finance tracker with offline-first architecture, biometric auth, expense categorization, and interactive spending analytics.',
        usedAt: 'Personal',
        type: 'app',
        skills: ['React Native', 'TypeScript', 'SQLite', 'Firebase'],
        links: [
            { label: 'GitHub', url: '#' },
            { label: 'Play Store', url: '#' },
        ],
        images: ['https://cdn-icons-png.flaticon.com/512/8136/8136031.png'],
    },
    {
        name: 'SentimentScope',
        description: 'NLP pipeline for real-time social media sentiment analysis with custom-trained transformer models, trend visualization, and exportable reports.',
        usedAt: 'Personal',
        type: 'data science',
        skills: ['Python', 'PyTorch', 'Hugging Face', 'Streamlit', 'Pandas'],
        links: [
            { label: 'GitHub', url: '#' },
            { label: 'Paper', url: '#' },
        ],
        images: ['https://cdn-icons-png.flaticon.com/512/8136/8136031.png'],
    },
    {
        name: 'Portfolio v3',
        description: 'This portfolio site — built with React, MUI, and Vite. Features dark theme, smooth animations, responsive layout, and modular tab-based architecture.',
        usedAt: 'Personal',
        type: 'web',
        skills: ['React', 'TypeScript', 'MUI', 'Vite'],
        links: [
            { label: 'GitHub', url: '#' },
            { label: 'Live', url: '#' },
        ],
        images: ['https://cdn-icons-png.flaticon.com/512/8136/8136031.png'],
    },
]

const TYPE_CONFIG: Record<ProjectType, { color: string; bg: string; icon: typeof WebOutlined }> = {
    web: { color: '#2563eb', bg: '#dbeafe', icon: WebOutlined },
    app: { color: '#16a34a', bg: '#dcfce7', icon: PhoneIphoneOutlined },
    desktop: { color: '#9333ea', bg: '#f3e8ff', icon: DesktopWindowsOutlined },
    research: { color: '#ca8a04', bg: '#fef9c3', icon: ScienceOutlined },
    robotics: { color: '#dc2626', bg: '#fee2e2', icon: SmartToyOutlined },
    'data science': { color: '#0891b2', bg: '#cffafe', icon: BarChartOutlined },
    ai: { color: '#ea580c', bg: '#ffedd5', icon: AutoAwesomeOutlined },
}

const LINK_ICONS: Record<string, typeof GitHub> = {
    GitHub, Live: Language, 'App Store': PhoneAndroid, 'Play Store': PhoneAndroid, Download: GetApp, Paper: Description,
}

// Each card gets a unique bento size: 'hero' (2x2), 'wide' (2x1), 'tall' (1x2), 'small' (1x1)
type BentoSize = 'hero' | 'wide' | 'tall' | 'small'
const BENTO_MAP: BentoSize[] = ['hero', 'wide', 'wide', 'tall', 'tall', 'hero', 'wide', 'wide', 'wide']

export default function Projects() {
    return (
        <Box sx={{
            mx: 'auto',
            px: { xs: 2, md: 15 },
            py: { xs: 4, md: 6 },
            background: '#00ff',
        }}>
            {/* Section header */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '32px' }}>
                <Box sx={{
                    width: 36, height: 36, borderRadius: '9px',
                    background: `linear-gradient(145deg, ${C.accentBright}, ${C.accentDim})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 0 16px ${C.accentGlow}`,
                }}>
                    <RocketLaunchOutlined sx={{ fontSize: 18, color: '#fff' }} />
                </Box>
                <Typography sx={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em', color: C.text }}>
                    Projects
                </Typography>
                <Box sx={{ ml: 'auto', px: '10px', py: '3px', borderRadius: '8px', background: '#030376', border: '1px solid #A7A7A700' }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#FEFEFF', fontWeight: 600 }}>
                        {PROJECTS.length} projects
                    </Typography>
                </Box>
            </Box>

            {/* Bento Grid */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                gridAutoRows: { xs: 'auto', md: '200px' },
                gap: '10px',
            }}>
                {PROJECTS.map((project, i) => {
                    const { name, description, usedAt, type, skills, links, images, featured } = project
                    const tc = TYPE_CONFIG[type]
                    const TypeIcon = tc.icon
                    const size = BENTO_MAP[i] || 'small'

                    const colSpan = (size === 'hero' || size === 'wide') ? 'span 2' : 'span 1'
                    const rowSpan = (size === 'hero' || size === 'tall') ? 'span 2' : 'span 1'

                    // HERO: big image card with overlay text
                    if (size === 'hero') return (
                        <Box key={name} sx={{
                            gridColumn: { xs: 'span 1', sm: 'span 2', md: colSpan },
                            gridRow: { xs: 'span 1', md: rowSpan },
                            borderRadius: '18px', overflow: 'hidden', position: 'relative',
                            cursor: 'pointer',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.01)',
                                boxShadow: `0 20px 50px ${tc.color}30`,
                                '& .hero-img': { transform: 'scale(1.05)' },
                            },
                        }}>
                            <Box className="hero-img" sx={{
                                width: '100%', height: '100%', position: 'absolute',
                                transition: 'transform 0.5s',
                                aspectRatio: '16/9', overflow: 'hidden', flexShrink: 0,
                            }}>
                                {images.length > 0 && (
                                    <Box component="img" src={images[0]} alt={name} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                )}
                            </Box>
                            {/* Dark overlay */}
                            <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${tc.color}, ${tc.color}88 50%, ${tc.color}33)` }} />
                            <Box sx={{ position: 'relative', zIndex: 1, p: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                {featured && (
                                    <Box sx={{ position: 'absolute', top: 14, right: 14, px: '10px', py: '3px', borderRadius: '6px', background: '#fff', color: tc.color, fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.06em' }}>
                                        FEATURED
                                    </Box>
                                )}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', mb: '8px' }}>
                                    <TypeIcon sx={{ fontSize: 16, color: '#fff' }} />
                                    <Typography sx={{ fontSize: '0.6rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                                        {type}
                                    </Typography>
                                </Box>
                                <Typography sx={{ fontSize: '1.15rem', fontWeight: 900, color: '#fff', mb: '4px', lineHeight: 1.2 }}>
                                    {name}
                                </Typography>
                                <Typography sx={{ fontSize: '0.72rem', color: '#fff', lineHeight: 1.5, mb: '10px' }}>
                                    {description}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: '5px', flexWrap: 'wrap', mb: '10px' }}>
                                    {skills.map(skill => (
                                        <Box key={skill} sx={{ px: '8px', py: '3px', borderRadius: '6px', background: '#fff', color: tc.color, fontSize: '0.6rem', fontWeight: 700 }}>
                                            {skill}
                                        </Box>
                                    ))}
                                </Box>
                                <Box sx={{ display: 'flex', gap: '6px' }}>
                                    {links.map(({ label, url }) => {
                                        const Icon = LINK_ICONS[label] || Language
                                        return (
                                            <Box key={label} component="a" href={url} target="_blank" rel="noopener noreferrer" sx={{
                                                display: 'flex', alignItems: 'center', gap: '4px',
                                                px: '10px', py: '5px', borderRadius: '8px',
                                                background: '#fff', color: tc.color,
                                                textDecoration: 'none', fontWeight: 700, fontSize: '0.63rem',
                                                transition: 'transform 0.15s',
                                                '&:hover': { transform: 'scale(1.06)' },
                                            }}>
                                                <Icon sx={{ fontSize: 13, color: tc.color }} />
                                                {label}
                                            </Box>
                                        )
                                    })}
                                </Box>
                            </Box>
                        </Box>
                    )

                    // TALL: colored top panel + content below
                    if (size === 'tall') return (
                        <Box key={name} sx={{
                            gridColumn: { xs: 'span 1', md: colSpan },
                            gridRow: { xs: 'span 1', md: rowSpan },
                            borderRadius: '18px', overflow: 'hidden', background: '#fff',
                            border: '2px solid #e5e7eb', display: 'flex', flexDirection: 'column',
                            transition: 'transform 0.25s, box-shadow 0.25s',
                            '&:hover': { transform: 'translateY(-3px)', boxShadow: `0 12px 32px ${tc.color}20`, borderColor: tc.color },
                        }}>
                            <Box sx={{ position: 'relative', flexShrink: 0, overflow: 'hidden' }}>
                                {images.length > 0 && (
                                    <Box sx={{ aspectRatio: '16/9' }}>
                                        <Box component="img" src={images[0]} alt={name} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                    </Box>
                                )}
                                <Box sx={{ position: 'absolute', inset: 0, background: tc.color, opacity: images.length > 0 ? 0 : 1 }} />
                                <Box sx={{ position: 'absolute', bottom: 8, left: 8, px: '8px', py: '3px', borderRadius: '6px', background: tc.color, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <TypeIcon sx={{ fontSize: 12, color: '#fff' }} />
                                    <Typography sx={{ fontSize: '0.55rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{type}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ p: '14px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, color: '#111827', mb: '2px' }}>{name}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', mb: '6px' }}>
                                    <BusinessOutlined sx={{ fontSize: 10, color: tc.color }} />
                                    <Typography sx={{ fontSize: '0.63rem', color: tc.color, fontWeight: 700 }}>{usedAt}</Typography>
                                </Box>
                                <Typography sx={{ fontSize: '0.68rem', color: '#4b5563', lineHeight: 1.5, mb: '10px' }}>{description}</Typography>
                                <Box sx={{ display: 'flex', gap: '4px', flexWrap: 'wrap', mb: '10px' }}>
                                    {skills.map((s, si) => (
                                        <Box key={s} sx={{ px: '7px', py: '2px', borderRadius: '5px', background: si === 0 ? tc.color : '#f3f4f6', color: si === 0 ? '#fff' : '#374151', fontSize: '0.58rem', fontWeight: 700 }}>{s}</Box>
                                    ))}
                                </Box>
                                <Box sx={{ display: 'flex', gap: '6px', mt: 'auto' }}>
                                    {links.map(({ label, url }) => {
                                        const Icon = LINK_ICONS[label] || Language
                                        return (
                                            <Box key={label} component="a" href={url} target="_blank" rel="noopener noreferrer" sx={{
                                                display: 'flex', alignItems: 'center', gap: '4px', px: '9px', py: '4px', borderRadius: '7px',
                                                background: label === 'GitHub' ? '#111827' : tc.color, textDecoration: 'none',
                                                transition: 'transform 0.15s', '&:hover': { transform: 'scale(1.05)' },
                                            }}>
                                                <Icon sx={{ fontSize: 11, color: '#fff' }} />
                                                <Typography sx={{ fontSize: '0.6rem', color: '#fff', fontWeight: 700 }}>{label}</Typography>
                                            </Box>
                                        )
                                    })}
                                </Box>
                            </Box>
                        </Box>
                    )

                    // WIDE: horizontal layout with image left
                    if (size === 'wide') return (
                        <Box key={name} sx={{
                            gridColumn: { xs: 'span 1', sm: 'span 2', md: colSpan },
                            gridRow: { xs: 'span 1', md: rowSpan },
                            borderRadius: '18px', overflow: 'hidden', background: '#fff',
                            border: '2px solid #e5e7eb', display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            transition: 'transform 0.25s, box-shadow 0.25s',
                            '&:hover': { transform: 'translateY(-3px)', boxShadow: `0 12px 32px ${tc.color}20`, borderColor: tc.color },
                        }}>
                            {images.length > 0 && (
                                <Box sx={{
                                    width: { xs: '100%', sm: '40%' },
                                    flexShrink: 0, background: tc.bg, position: 'relative', overflow: 'hidden',
                                    aspectRatio: { xs: '16/9', sm: 'auto' }, minHeight: { sm: '100%' },
                                }}>
                                    <Box component="img" src={images[0]} alt={name} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <Box sx={{ position: 'absolute', top: 8, left: 8, px: '8px', py: '3px', borderRadius: '6px', background: tc.color, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <TypeIcon sx={{ fontSize: 11, color: '#fff' }} />
                                        <Typography sx={{ fontSize: '0.55rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{type}</Typography>
                                    </Box>
                                </Box>
                            )}
                            <Box sx={{ p: '14px 16px', flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                                <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, color: '#111827', mb: '2px', lineHeight: 1.3 }}>{name}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', mb: '6px' }}>
                                    <BusinessOutlined sx={{ fontSize: 10, color: tc.color }} />
                                    <Typography sx={{ fontSize: '0.63rem', color: tc.color, fontWeight: 700 }}>{usedAt}</Typography>
                                </Box>
                                <Typography sx={{ fontSize: '0.68rem', color: '#4b5563', lineHeight: 1.5, mb: '8px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                    {description}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: '4px', flexWrap: 'wrap', mb: '8px' }}>
                                    {skills.slice(0, 4).map((s, si) => (
                                        <Box key={s} sx={{ px: '7px', py: '2px', borderRadius: '5px', background: si === 0 ? tc.color : '#f3f4f6', color: si === 0 ? '#fff' : '#374151', fontSize: '0.58rem', fontWeight: 700 }}>{s}</Box>
                                    ))}
                                    {skills.length > 4 && <Box sx={{ px: '7px', py: '2px', borderRadius: '5px', background: '#f3f4f6', color: '#6b7280', fontSize: '0.58rem', fontWeight: 700 }}>+{skills.length - 4}</Box>}
                                </Box>
                                <Box sx={{ display: 'flex', gap: '6px', mt: 'auto' }}>
                                    {links.map(({ label, url }) => {
                                        const Icon = LINK_ICONS[label] || Language
                                        return (
                                            <Box key={label} component="a" href={url} target="_blank" rel="noopener noreferrer" sx={{
                                                display: 'flex', alignItems: 'center', gap: '4px', px: '9px', py: '4px', borderRadius: '7px',
                                                background: label === 'GitHub' ? '#111827' : tc.color, textDecoration: 'none',
                                                transition: 'transform 0.15s', '&:hover': { transform: 'scale(1.05)' },
                                            }}>
                                                <Icon sx={{ fontSize: 11, color: '#fff' }} />
                                                <Typography sx={{ fontSize: '0.6rem', color: '#fff', fontWeight: 700 }}>{label}</Typography>
                                            </Box>
                                        )
                                    })}
                                </Box>
                            </Box>
                        </Box>
                    )

                    // SMALL: compact text-only card with colored left accent
                    return (
                        <Box key={name} sx={{
                            gridColumn: 'span 1',
                            gridRow: 'span 1',
                            borderRadius: '18px', overflow: 'hidden', background: '#fff',
                            border: '2px solid #e5e7eb', display: 'flex', flexDirection: 'column',
                            transition: 'transform 0.25s, box-shadow 0.25s',
                            '&:hover': { transform: 'translateY(-3px)', boxShadow: `0 12px 32px ${tc.color}20`, borderColor: tc.color },
                        }}>
                            {/* Image */}
                            {images.length > 0 && (
                                <Box sx={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                                    <Box component="img" src={images[0]} alt={name} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                    <Box sx={{ position: 'absolute', top: 6, left: 6, px: '6px', py: '2px', borderRadius: '5px', background: tc.color, display: 'flex', alignItems: 'center', gap: '3px' }}>
                                        <TypeIcon sx={{ fontSize: 10, color: '#fff' }} />
                                        <Typography sx={{ fontSize: '0.5rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{type}</Typography>
                                    </Box>
                                </Box>
                            )}
                            {images.length === 0 && <Box sx={{ height: '4px', background: tc.color }} />}
                            <Box sx={{ p: '10px 12px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <Typography sx={{ fontSize: '0.82rem', fontWeight: 800, color: '#111827', lineHeight: 1.3, mb: '2px' }}>{name}</Typography>
                                <Typography sx={{ fontSize: '0.63rem', color: tc.color, fontWeight: 700, mb: '4px' }}>{usedAt}</Typography>
                                <Typography sx={{ fontSize: '0.65rem', color: '#4b5563', lineHeight: 1.5, mb: '8px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                    {description}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: '4px', flexWrap: 'wrap', mb: '8px' }}>
                                    {skills.slice(0, 3).map((s, si) => (
                                        <Box key={s} sx={{ px: '6px', py: '2px', borderRadius: '4px', background: si === 0 ? tc.color : '#f3f4f6', color: si === 0 ? '#fff' : '#374151', fontSize: '0.56rem', fontWeight: 700 }}>{s}</Box>
                                    ))}
                                    {skills.length > 3 && <Box sx={{ px: '6px', py: '2px', borderRadius: '4px', background: '#f3f4f6', color: '#6b7280', fontSize: '0.56rem', fontWeight: 700 }}>+{skills.length - 3}</Box>}
                                </Box>
                                <Box sx={{ display: 'flex', gap: '5px', mt: 'auto' }}>
                                    {links.map(({ label, url }) => {
                                        const Icon = LINK_ICONS[label] || Language
                                        return (
                                            <Box key={label} component="a" href={url} target="_blank" rel="noopener noreferrer" sx={{
                                                display: 'flex', alignItems: 'center', gap: '3px', px: '8px', py: '3px', borderRadius: '6px',
                                                background: label === 'GitHub' ? '#111827' : tc.color, textDecoration: 'none',
                                                transition: 'transform 0.15s', '&:hover': { transform: 'scale(1.05)' },
                                            }}>
                                                <Icon sx={{ fontSize: 10, color: '#fff' }} />
                                                <Typography sx={{ fontSize: '0.56rem', color: '#fff', fontWeight: 700 }}>{label}</Typography>
                                            </Box>
                                        )
                                    })}
                                </Box>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}
