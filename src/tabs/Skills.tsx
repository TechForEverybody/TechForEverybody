import { Box, Typography } from '@mui/material'
import { BoltOutlined } from '@mui/icons-material'
import { C } from '../theme'

const SKILL_GROUPS = [
    {
        category: 'Frontend',
        color: '#f59e0b',
        skills: ['React', 'TypeScript', 'Next.js', 'HTML5', 'CSS3', 'Tailwind'],
    },
    {
        category: 'Backend',
        color: '#10b981',
        skills: ['Node.js', 'Java', 'Spring Boot', 'Python', 'REST APIs', 'GraphQL'],
    },
    {
        category: 'Database',
        color: '#0ea5e9',
        skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase'],
    },
    {
        category: 'DevOps & Cloud',
        color: '#8b5cf6',
        skills: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx', 'Git'],
    },
    {
        category: 'Tools',
        color: '#ec4899',
        skills: ['VS Code', 'Postman', 'Jira', 'Figma', 'IntelliJ'],
    },
]

export default function Skills() {
    return (
        <Box sx={{
            maxWidth: 860,
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
                    <BoltOutlined sx={{ fontSize: 18, color: '#fff' }} />
                </Box>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', color: C.text }}>
                    Skills
                </Typography>
            </Box>

            {/* Skill groups */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {SKILL_GROUPS.map(({ category, color, skills }) => (
                    <Box key={category}>
                        {/* Category label */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: '12px' }}>
                            <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />
                            <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: C.textMuted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                {category}
                            </Typography>
                            <Box sx={{ flex: 1, height: '1px', background: C.border }} />
                        </Box>

                        {/* Skill pills */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {skills.map(skill => (
                                <Box key={skill} sx={{
                                    px: '12px',
                                    py: '6px',
                                    borderRadius: '8px',
                                    background: C.surface2,
                                    border: `1px solid ${C.borderMid}`,
                                    fontSize: '0.8125rem',
                                    fontWeight: 500,
                                    color: C.textSub,
                                    letterSpacing: '0.02em',
                                    cursor: 'default',
                                    transition: 'all 0.18s ease',
                                    '&:hover': {
                                        background: C.surface3,
                                        color: C.text,
                                        borderColor: color,
                                        boxShadow: `0 0 8px ${color}33`,
                                    },
                                }}>
                                    {skill}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
