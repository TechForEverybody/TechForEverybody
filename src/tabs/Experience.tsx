import { Box, Typography } from '@mui/material'
import { WorkOutlined, FiberManualRecord } from '@mui/icons-material'
import { C } from '../theme'

const EXPERIENCES = [
    {
        period: 'Aug 2026 — Present',
        role: 'Sr. Full Stack Engineer',
        company: 'Connecting Cyber Networks PVT LTD',
        type: 'Full-time',
        current: true,
        tags: ['React', 'Node.js', 'TypeScript', 'Python', 'AWS'],
    },
    {
        period: 'May 2023 — Jul 2025',
        role: 'Full Stack Javascript & Python Developer',
        company: 'Kritrima Prajna Innovations PVT LTD',
        type: 'Full-time',
        current: false,
        tags: ['JavaScript', 'Python', 'React', 'Node.js', 'REST APIs'],
    },
    {
        period: 'Dec 2023 — Feb 2024',
        role: 'NextJS Developer',
        company: 'Lead Catalyst',
        type: 'Part-time · Remote',
        current: false,
        tags: ['Next.js', 'React', 'Python'],
    },
    {
        period: 'Jul 2022 — Sep 2022',
        role: 'ReactJS Developer',
        company: 'Articuno Coding',
        type: 'Freelance · Remote',
        current: false,
        tags: ['React.js', 'SASS', 'Material UI', 'Figma'],
    },
    {
        period: 'Jan 2022 — Feb 2022',
        role: 'Full Stack Developer',
        company: 'Skelly Entertainment',
        type: 'Internship · Remote',
        current: false,
        tags: ['React.js', 'Node.js'],
    },
]

export default function Experience() {
    return (
        <Box sx={{
            maxWidth: 1300,
            mx: 'auto',
            px: { xs: 2, md: 4 },
            py: { xs: 4, md: 6 },
        }}>
            {/* Section header */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '32px' }}>
                <Box sx={{
                    width: 34, height: 34, borderRadius: '9px',
                    background: `linear-gradient(145deg, ${C.accentBright}, ${C.accentDim})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 0 14px ${C.accentGlow}`,
                }}>
                    <WorkOutlined sx={{ fontSize: 17, color: '#fff' }} />
                </Box>
                <Typography sx={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-0.02em', color: C.text }}>
                    Experience
                </Typography>
            </Box>

            {/* Timeline */}
            <Box sx={{ position: 'relative', pl: '28px' }}>
                {/* Vertical guide line */}
                <Box sx={{
                    position: 'absolute',
                    left: '6px',
                    top: '6px',
                    bottom: '6px',
                    width: '1px',
                    background: `linear-gradient(180deg, ${C.accent} 0%, ${C.borderMid} 40%, transparent 100%)`,
                }} />

                {EXPERIENCES.map(({ period, role, company, type, current, tags }, i) => (
                    <Box key={i} sx={{ position: 'relative', mb: i < EXPERIENCES.length - 1 ? '20px' : 0 }}>
                        {/* Timeline dot */}
                        <Box sx={{
                            position: 'absolute',
                            left: '-28px',
                            top: '16px',
                            width: 13, height: 13,
                            borderRadius: '50%',
                            border: `2px solid ${current ? C.accent : C.borderMid}`,
                            background: current ? C.accent : C.surface2,
                            boxShadow: current ? `0 0 8px ${C.accentGlow}, 0 0 0 3px ${C.surface}` : `0 0 0 3px ${C.surface}`,
                            zIndex: 1,
                        }} />

                        {/* Card */}
                        <Box sx={{
                            borderRadius: '14px',
                            background: current
                                ? `linear-gradient(135deg, #0d1a2e 0%, ${C.surface2} 100%)`
                                : C.surface2,
                            border: `1px solid ${current ? C.accent + '44' : C.border}`,
                            boxShadow: current
                                ? `0 0 0 1px ${C.accent}22, 0 4px 24px rgba(22,147,249,0.08)`
                                : `0 1px 4px rgba(0,0,0,0.4)`,
                            overflow: 'hidden',
                            transition: 'box-shadow 0.2s',
                            '&:hover': {
                                boxShadow: current
                                    ? `0 0 0 1px ${C.accent}55, 0 6px 32px rgba(22,147,249,0.14)`
                                    : `0 2px 12px rgba(0,0,0,0.5), 0 0 0 1px ${C.borderMid}`,
                            },
                        }}>
                            {/* Accent top bar for current */}
                            {current && (
                                <Box sx={{
                                    height: '2px',
                                    background: `linear-gradient(90deg, ${C.accent}, transparent)`,
                                }} />
                            )}

                            <Box sx={{ p: { xs: '14px 16px', md: '16px 20px' } }}>
                                {/* Header row */}
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                    gap: '8px',
                                    mb: '6px',
                                    flexWrap: 'wrap',
                                }}>
                                    <Typography sx={{
                                        fontSize: { xs: '0.875rem', md: '0.9375rem' },
                                        fontWeight: 700,
                                        color: C.text,
                                        lineHeight: 1.3,
                                        flex: 1,
                                    }}>
                                        {role}
                                    </Typography>

                                    {/* Current badge OR period */}
                                    {current ? (
                                        <Box sx={{
                                            display: 'flex', alignItems: 'center', gap: '4px',
                                            px: '8px', py: '2px',
                                            borderRadius: '20px',
                                            background: `${C.accent}18`,
                                            border: `1px solid ${C.accent}44`,
                                            flexShrink: 0,
                                        }}>
                                            <FiberManualRecord sx={{ fontSize: 7, color: C.accent }} />
                                            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, color: C.accent, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                                Current
                                            </Typography>
                                        </Box>
                                    ) : (
                                        <Typography sx={{
                                            fontSize: '0.68rem',
                                            color: C.textMuted,
                                            letterSpacing: '0.04em',
                                            flexShrink: 0,
                                            pt: '2px',
                                        }}>
                                            {period}
                                        </Typography>
                                    )}
                                </Box>

                                {/* Company + type row */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: current ? '4px' : '10px', flexWrap: 'wrap' }}>
                                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: current ? C.accent : C.textSub }}>
                                        {company}
                                    </Typography>
                                    <Box sx={{ width: '3px', height: '3px', borderRadius: '50%', background: C.borderMid, flexShrink: 0 }} />
                                    <Typography sx={{ fontSize: '0.72rem', color: C.textMuted }}>
                                        {type}
                                    </Typography>
                                </Box>

                                {/* Period for current (below company) */}
                                {current && (
                                    <Typography sx={{ fontSize: '0.7rem', color: C.textMuted, mb: '10px', letterSpacing: '0.02em' }}>
                                        {period}
                                    </Typography>
                                )}

                                {/* Divider */}
                                <Box sx={{ height: '1px', background: C.border, mb: '10px' }} />

                                {/* Tags */}
                                <Box sx={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                                    {tags.map((tag, ti) => (
                                        <Box key={tag} sx={{
                                            px: '8px', py: '2px',
                                            borderRadius: '5px',
                                            background: current && ti === 0 ? `${C.accent}18` : C.surface3,
                                            border: `1px solid ${current && ti === 0 ? C.accent + '44' : C.borderMid}`,
                                            fontSize: '0.68rem',
                                            color: current && ti === 0 ? C.accent : C.textSub,
                                            fontWeight: 500,
                                            letterSpacing: '0.03em',
                                        }}>
                                            {tag}
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
