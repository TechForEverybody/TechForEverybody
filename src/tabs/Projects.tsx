import { Box, Typography } from '@mui/material'
import { RocketLaunchOutlined, OpenInNew } from '@mui/icons-material'
import { C } from '../theme'

const PLACEHOLDER_PROJECTS = [
    { title: 'Project Alpha', desc: 'A full-stack web application with modern architecture.', tags: ['React', 'Node.js', 'MongoDB'], featured: true },
    { title: 'Project Beta', desc: 'Real-time data processing system built for scale.', tags: ['Python', 'Kafka', 'Redis'], featured: true },
    { title: 'Project Gamma', desc: 'Mobile-first PWA with offline support.', tags: ['TypeScript', 'PWA', 'IndexedDB'], featured: false },
    { title: 'Project Delta', desc: 'CLI tool to automate developer workflows.', tags: ['Go', 'Shell', 'Docker'], featured: false },
    { title: 'Project Epsilon', desc: 'API gateway with rate limiting and auth.', tags: ['Java', 'Spring', 'JWT'], featured: false },
    { title: 'Project Zeta', desc: 'Design system and component library.', tags: ['React', 'Storybook', 'CSS'], featured: false },
]

export default function Projects() {
    return (
        <Box sx={{
            maxWidth: 1100,
            mx: 'auto',
            px: { xs: 3, md: 4 },
            py: { xs: 6, md: 8 },
        }}>
            {/* Section header */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '40px' }}>
                <Box sx={{
                    width: 36, height: 36, borderRadius: '9px',
                    background: `linear-gradient(145deg, ${C.accentBright}, ${C.accentDim})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 0 16px ${C.accentGlow}`,
                }}>
                    <RocketLaunchOutlined sx={{ fontSize: 18, color: '#fff' }} />
                </Box>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', color: C.text }}>
                    Projects
                </Typography>
            </Box>

            {/* Grid */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' },
                gap: '16px',
            }}>
                {PLACEHOLDER_PROJECTS.map(({ title, desc, tags, featured }) => (
                    <Box key={title} sx={{
                        p: '20px',
                        borderRadius: '14px',
                        background: C.surface2,
                        border: `1px solid ${featured ? C.borderMid : C.border}`,
                        boxShadow: featured ? `0 8px 32px rgba(0,0,0,0.4)` : '0 2px 8px rgba(0,0,0,0.2)',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        '&:hover': {
                            transform: 'translateY(-3px)',
                            boxShadow: `0 16px 40px rgba(0,0,0,0.5)`,
                        },
                        '&::before': featured ? {
                            content: '""',
                            position: 'absolute',
                            top: 0, left: 0, right: 0,
                            height: '2px',
                            background: `linear-gradient(90deg, ${C.accentDim}, ${C.accentBright}, ${C.accentDim})`,
                        } : {},
                    }}>
                        {/* Top row */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: '10px' }}>
                            <Typography sx={{ fontSize: '0.9375rem', fontWeight: 700, color: C.text }}>
                                {title}
                            </Typography>
                            <OpenInNew sx={{ fontSize: 14, color: C.textMuted, flexShrink: 0, mt: '2px' }} />
                        </Box>

                        <Typography sx={{ fontSize: '0.8rem', color: C.textSub, mb: '16px', lineHeight: 1.6 }}>
                            {desc}
                        </Typography>

                        {/* Tags */}
                        <Box sx={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                            {tags.map(tag => (
                                <Box key={tag} sx={{
                                    px: '7px', py: '2px',
                                    borderRadius: '4px',
                                    background: C.surface3,
                                    border: `1px solid ${C.borderMid}`,
                                    fontSize: '0.68rem',
                                    color: C.textSub,
                                    fontWeight: 500,
                                }}>
                                    {tag}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
