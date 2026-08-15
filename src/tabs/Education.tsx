import { Box, Typography } from '@mui/material'
import {  EmojiEventsOutlined, CalendarTodayOutlined } from '@mui/icons-material'

const GREEN = '#16a34a'
const DARK = '#052e16'
const MINT = '#dcfce7'


const EDUCATION_DATA = [
    {
        degree: 'Bachelor of Engineering',
        field: 'Computer Engineering',
        institution: 'Pillai College of Engineering, New Panvel',
        period: '2019 — 2023',
        grade: 'CGPA: 9.79',
        highlights: ['3.5 Years Programming Learning Experience', 'Internship work motivation and support', 'Core Computer Engineering Knowledge'],
    },
]

export default function Education() {
    return (
        <Box sx={{
            position: 'relative',
            background: `linear-gradient(160deg, #064e3b 0%, ${GREEN} 50%, #4ade80 100%)`,
            px: { xs: 2, md: 4 },
            py: { xs: 5, md: 8 },
            overflow: 'hidden',
        }}>
            {/* Decorative elements */}
            <Box sx={{
                position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.06,
                backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
            }} />
            <Box sx={{ position: 'absolute', top: '15%', left: '8%', width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', filter: 'blur(40px)', pointerEvents: 'none' }} />
            <Box sx={{ position: 'absolute', bottom: '10%', right: '6%', width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', filter: 'blur(50px)', pointerEvents: 'none' }} />

            <Box sx={{ maxWidth: 800, mx: 'auto', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: { xs: '28px', md: '40px' } }}>
                    <Typography sx={{
                        fontSize: { xs: '1.7rem', md: '2.4rem' }, fontWeight: 900,
                        color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1,
                        textShadow: '0 2px 12px rgba(5,46,22,0.4)',
                    }}>
                        Education
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.8)', mt: '6px', maxWidth: 400, mx: 'auto', lineHeight: 1.5 }}>
                        Strong academic foundation paired with hands-on engineering excellence.
                    </Typography>
                </Box>

                {/* Education cards */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {EDUCATION_DATA.map(({ degree, field, institution, period, grade, highlights }, i) => (
                        <Box key={i} sx={{
                            background: DARK,
                            borderRadius: '18px',
                            p: { xs: '20px', md: '28px' },
                            border: '1.5px solid rgba(255,255,255,0.1)',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                border: `1.5px solid ${GREEN}`,
                                transform: 'translateY(-2px)',
                                boxShadow: '0 16px 40px rgba(5,46,22,0.6)',
                            },
                        }}>
                           

                            {/* Corner glow */}
                            <Box sx={{
                                position: 'absolute', top: 0, right: 0, width: 100, height: 100,
                                background: `radial-gradient(circle at top right, rgba(74,222,128,0.12), transparent 70%)`,
                                pointerEvents: 'none',
                            }} />

                            {/* Top row: period + grade */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '14px', flexWrap: 'wrap' }}>
                                <Box sx={{
                                    display: 'flex', alignItems: 'center', gap: '5px',
                                    px: '10px', py: '4px', borderRadius: '8px',
                                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                                }}>
                                    <CalendarTodayOutlined sx={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }} />
                                    <Typography sx={{ fontSize: '0.68rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
                                        {period}
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex', alignItems: 'center', gap: '5px',
                                    px: '10px', py: '4px', borderRadius: '8px',
                                    background: `linear-gradient(135deg, ${GREEN}33, ${GREEN}11)`,
                                    border: `1px solid ${GREEN}44`,
                                }}>
                                    <EmojiEventsOutlined sx={{ fontSize: 12, color: '#4ade80' }} />
                                    <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#4ade80' }}>
                                        {grade}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Degree info */}
                            <Typography sx={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', mb: '4px', letterSpacing: '-0.01em' }}>
                                {degree}
                            </Typography>
                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', mb: '4px' }}>
                                {field}
                            </Typography>
                            <Typography sx={{ fontSize: '0.75rem', fontWeight: 500, color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', mb: '16px' }}>
                                {institution}
                            </Typography>

                            {/* Highlights */}
                            {highlights && highlights.length > 0 && (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {highlights.map(h => (
                                        <Box key={h} sx={{
                                            px: '10px', py: '5px', borderRadius: '8px',
                                            background: MINT, border: `1px solid ${GREEN}44`,
                                        }}>
                                            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, color: DARK }}>
                                                {h}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            )}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
