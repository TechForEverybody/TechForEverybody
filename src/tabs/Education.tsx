import { Box, Typography } from '@mui/material'
import { SchoolOutlined } from '@mui/icons-material'
import { C } from '../theme'

const PLACEHOLDER_EDUCATION = [
    {
        degree: 'Bachelor of Engineering',
        field: 'Computer Engineering',
        institution: 'Pillai College of Engineering, New Panvel',
        period: '2021 — 2025',
        grade: 'CGPA: 9.79',
    },
]

export default function Education() {
    return (
        <Box sx={{
            maxWidth: 780,
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
                    <SchoolOutlined sx={{ fontSize: 18, color: '#fff' }} />
                </Box>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', color: C.text }}>
                    Education
                </Typography>
            </Box>

            {/* Cards */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {PLACEHOLDER_EDUCATION.map(({ degree, field, institution, period, grade }, i) => (
                    <Box key={i} sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: '20px',
                        p: '22px 24px',
                        borderRadius: '14px',
                        background: C.surface2,
                        border: `1px solid ${i === 0 ? C.borderMid : C.border}`,
                        boxShadow: i === 0 ? '0 8px 32px rgba(0,0,0,0.35)' : 'none',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': i === 0 ? {
                            content: '""',
                            position: 'absolute',
                            left: 0, top: 0, bottom: 0,
                            width: '3px',
                            background: `linear-gradient(180deg, ${C.accentBright}, ${C.accentDim})`,
                            borderRadius: '3px 0 0 3px',
                        } : {},
                    }}>
                        {/* Left — year badge */}
                        <Box sx={{
                            flexShrink: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { xs: 'flex-start', sm: 'center' },
                            justifyContent: 'flex-start',
                            gap: '6px',
                            minWidth: 100,
                        }}>
                            <Box sx={{
                                px: '10px', py: '4px',
                                borderRadius: '6px',
                                background: C.surface3,
                                border: `1px solid ${C.borderMid}`,
                            }}>
                                <Typography sx={{ fontSize: '0.7rem', color: C.textSub, fontWeight: 600, whiteSpace: 'nowrap' }}>
                                    {period}
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: '0.72rem', color: C.accent, fontWeight: 600 }}>
                                {grade}
                            </Typography>
                        </Box>

                        {/* Right — details */}
                        <Box>
                            <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: C.text, mb: '3px' }}>
                                {degree}
                            </Typography>
                            <Typography sx={{ fontSize: '0.8rem', color: C.textSub, mb: '6px' }}>
                                {field}
                            </Typography>
                            <Typography sx={{ fontSize: '0.75rem', color: C.textMuted, fontStyle: 'italic' }}>
                                {institution}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
