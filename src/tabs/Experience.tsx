import { Box, Typography } from '@mui/material'
import { WorkOutlined, FiberManualRecord, CalendarTodayOutlined, BusinessOutlined, RocketLaunchOutlined, EmojiEventsOutlined } from '@mui/icons-material'

const EXPERIENCES = [
    {
        period: 'August 2026 — Present',
        role: 'Sr. Full Stack Engineer',
        company: 'Connecting Cyber Networks PVT LTD',
        type: 'Full-time',
        current: true,
        tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'AWS'],
        projects: [
            'Cloud-native security dashboard with real-time threat monitoring',
            'Automated vulnerability scanning platform with AWS Lambda',
        ],
        achievements: [
            'Led migration of monolith to microservices, reducing deploy time by 60%',
            'Architected CI/CD pipeline serving 50+ internal services',
        ],
    },
    {
        period: 'May 2023 — July 2025',
        role: 'Full Stack Javascript & Python Developer',
        company: 'Kritrima Prajna Innovations PVT LTD',
        type: 'Full-time',
        current: false,
        tags: ['JavaScript', 'Python', 'React', 'Node.js', 'REST APIs'],
        projects: [
            'AI-powered e-learning platform with adaptive content delivery',
            'Real-time collaboration tool with WebSocket integration',
        ],
        achievements: [
            'Built core product from scratch, scaling to 10K+ active users',
            'Reduced API response times by 40% through query optimization',
        ],
    },
    {
        period: 'Dec 2023 — Feb 2024',
        role: 'NextJS Developer',
        company: 'Lead Catalyst',
        type: 'Part-time · Remote',
        current: false,
        tags: ['Next.js', 'React', 'Python'],
        projects: [
            'Lead generation SaaS platform with SSR and SEO optimization',
        ],
        achievements: [
            'Improved page load speed by 55% using Next.js ISR',
        ],
    },
    {
        period: 'Jul 2022 — Sep 2022',
        role: 'ReactJS Developer',
        company: 'Articuno Coding',
        type: 'Freelance · Remote',
        current: false,
        tags: ['React.js', 'SASS', 'Material UI', 'Figma'],
        projects: [
            'Responsive coding education platform with interactive UI',
        ],
        achievements: [
            'Delivered pixel-perfect Figma-to-code implementation ahead of deadline',
        ],
    },
    {
        period: 'Jan 2022 — Feb 2022',
        role: 'Full Stack Developer',
        company: 'Skelly Entertainment',
        type: 'Internship · Remote',
        current: false,
        tags: ['React.js', 'Node.js'],
        projects: [
            'Entertainment content management system with REST API backend',
        ],
        achievements: [
            'Shipped MVP in 4 weeks as sole developer on the project',
        ],
    },
]

export default function Experience() {
    return (
        <Box sx={{
            mx: 'auto',
            px: { xs: 2, md: 15 },
            py: { xs: 4, md: 6 },
            background: '#FFFFFF',
        }}>
            {/* Section header */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', mb: '36px', px: { xs: 0, md: 2 } }}>
                <Box sx={{
                    width: 38, height: 38, borderRadius: '10px',
                    background: '#f97316',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 14px #f9731655',
                }}>
                    <WorkOutlined sx={{ fontSize: 19, color: '#fff' }} />
                </Box>
                <Box>
                    <Typography sx={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.02em', color: '#000' }}>
                        Experience
                    </Typography>
                    <Typography sx={{ fontSize: '0.7rem', color: '#6b7280', fontWeight: 500 }}>
                        {EXPERIENCES.length} roles · {new Date().getFullYear() - 2022}+ years
                    </Typography>
                </Box>
            </Box>

            {/* Timeline */}
            <Box sx={{ position: 'relative', pl: { xs: '28px', md: '40px' } }}>
                {/* Vertical line */}
                <Box sx={{
                    position: 'absolute',
                    left: { xs: '10px', md: '14px' },
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: 'linear-gradient(to bottom, #f97316, #f97316 20%, #1f1f2e 20%, #1f1f2e 100%)',
                }} />

                {EXPERIENCES.map(({ period, role, company, type, current, tags, projects, achievements }, i) => (
                    <Box key={i} sx={{ position: 'relative', pb: i < EXPERIENCES.length - 1 ? '28px' : 0 }}>
                        {/* Timeline dot */}
                        <Box sx={{
                            position: 'absolute',
                            left: { xs: '-24px', md: '-34px' },
                            top: '16px',
                            width:  18,
                            height:  18,
                            borderRadius: '50%',
                            // background: current ? '#f97316' : '#1f1f2e',
                            border: current ? '3px solid #f97316' : '2px solid #374151',
                            boxShadow: current ? '0 0 12px #f97316, 0 0 24px #f9731644' : 'none',
                            zIndex: 2,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            mt: current ? '-3px' : 0,
                        }}>
                            { <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />}
                        </Box>

                        {/* Connector arm */}
                        <Box sx={{
                            position: 'absolute',
                            left: { xs: '-6px', md: '-16px' },
                            top: '22px',
                            width: { xs: '6px', md: '16px' },
                            height: '2px',
                            background: current ? '#f97316' : '#1f1f2e',
                        }} />

                        {/* Card */}
                        <Box sx={{
                            borderRadius: '14px',
                            background: current ? '#000000' : '#040404',
                            border: current ? '2px solid #f97316' : '1px solid #1f1f2e',
                            overflow: 'hidden',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            boxShadow: current ? '0 8px 32px #f9731620, 0 2px 8px #00000040' : '0 2px 8px #00000030',
                            '&:hover': {
                                transform: 'translateX(4px)',
                                boxShadow: current
                                    ? '0 12px 40px #f9731630, 0 4px 12px #00000050'
                                    : '0 8px 24px #00000040',
                                borderColor: current ? '#f97316' : '#f9731688',
                            },
                        }}>
                            <Box sx={{ p: { xs: '14px', md: '16px 20px' } }}>
                                {/* Period pill */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: '8px', flexWrap: 'wrap' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <CalendarTodayOutlined sx={{ fontSize: 11, color: current ? '#f97316' : '#6b7280' }} />
                                        <Typography sx={{ fontSize: '0.68rem', color: current ? '#f97316' : '#6b7280', fontWeight: 600 }}>
                                            {period}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ width: '4px', height: '4px', borderRadius: '50%', background: '#374151' }} />
                                    <Typography sx={{ fontSize: '0.68rem', color: '#6b7280', fontWeight: 500 }}>
                                        {type}
                                    </Typography>
                                    {current && (
                                        <Box sx={{
                                            display: 'flex', alignItems: 'center', gap: '5px',
                                            px: '10px', py: '3px',
                                            borderRadius: '20px',
                                            background: '#14532d',
                                            border: '1px solid #22c55e',
                                            ml: 'auto',
                                        }}>
                                            <FiberManualRecord sx={{ fontSize: 7, color: '#4ade80', animation: 'pulse 2s infinite', '@keyframes pulse': { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.4 } } }} />
                                            <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, color: '#4ade80', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                                Current
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>

                                {/* Role */}
                                <Typography sx={{
                                    fontSize: { xs: '0.9rem', md: '0.95rem' },
                                    fontWeight: 700,
                                    color: '#fff',
                                    mb: '4px',
                                }}>
                                    {role}
                                </Typography>

                                {/* Company */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', mb: '10px' }}>
                                    <BusinessOutlined sx={{ fontSize: 13, color: current ? '#f97316' : '#6b7280' }} />
                                    <Typography sx={{ fontSize: '0.78rem', fontWeight: 600, color: current ? '#f97316' : '#9ca3af' }}>
                                        {company}
                                    </Typography>
                                </Box>

                                {/* Tags */}
                                <Box sx={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    {tags.map((tag, ti) => (
                                        <Box key={tag} sx={{
                                            px: '10px', py: '3px',
                                            borderRadius: '6px',
                                            background: current && ti === 0 ? '#431407' : '#1f1f2e',
                                            border: current && ti === 0 ? '1px solid #f97316' : '1px solid #2a2a3a',
                                            fontSize: '0.68rem',
                                            fontWeight: 600,
                                            color: current && ti === 0 ? '#fb923c' : '#9ca3af',
                                            letterSpacing: '0.02em',
                                        }}>
                                            {tag}
                                        </Box>
                                    ))}
                                </Box>

                                {/* Projects + Achievements */}
                                <Box sx={{ display: 'flex', gap: '12px', mt: '12px', flexDirection: { xs: 'column', md: 'row' } }}>
                                    <Box sx={{
                                        flex: 1,
                                        background: '#161622',
                                        border: '1px solid #2a2a3a',
                                        borderRadius: '10px',
                                        p: '10px 12px',
                                    }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', mb: '8px' }}>
                                            <RocketLaunchOutlined sx={{ fontSize: 14, color: '#f97316' }} />
                                            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                                Products Built
                                            </Typography>
                                        </Box>
                                        {projects.map((p, pi) => (
                                            <Box key={pi} sx={{ display: 'flex', gap: '6px', mb: pi < projects.length - 1 ? '5px' : 0 }}>
                                                <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: '#f97316', mt: '5px', flexShrink: 0 }} />
                                                <Typography sx={{ fontSize: '0.72rem', color: '#d1d5db', lineHeight: 1.5 }}>
                                                    {p}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>

                                    <Box sx={{
                                        flex: 1,
                                        background: '#161622',
                                        border: '1px solid #2a2a3a',
                                        borderRadius: '10px',
                                        p: '10px 12px',
                                    }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', mb: '8px' }}>
                                            <EmojiEventsOutlined sx={{ fontSize: 14, color: '#fbbf24' }} />
                                            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                                Achievements
                                            </Typography>
                                        </Box>
                                        {achievements.map((a, ai) => (
                                            <Box key={ai} sx={{ display: 'flex', gap: '6px', mb: ai < achievements.length - 1 ? '5px' : 0 }}>
                                                <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: '#fbbf24', mt: '5px', flexShrink: 0 }} />
                                                <Typography sx={{ fontSize: '0.72rem', color: '#d1d5db', lineHeight: 1.5 }}>
                                                    {a}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
