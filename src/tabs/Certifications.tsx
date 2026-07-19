import { Box, Typography } from '@mui/material'
import { WorkspacePremiumOutlined, Verified } from '@mui/icons-material'
import { C } from '../theme'

const PLACEHOLDER_CERTS = [
    { title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2024', color: '#f59e0b' },
    { title: 'Oracle Certified Java Programmer', issuer: 'Oracle', year: '2023', color: '#e11d48' },
    { title: 'React — The Complete Guide', issuer: 'Udemy', year: '2023', color: '#0ea5e9' },
    { title: 'Data Structures & Algorithms', issuer: 'Coursera', year: '2022', color: '#10b981' },
    { title: 'Docker & Kubernetes Fundamentals', issuer: 'Linux Foundation', year: '2022', color: '#6366f1' },
    { title: 'SQL for Data Science', issuer: 'Google', year: '2021', color: '#0284c7' },
]

export default function Certifications() {
    return (
        <Box sx={{
            maxWidth: 960,
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
                    <WorkspacePremiumOutlined sx={{ fontSize: 18, color: '#fff' }} />
                </Box>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', color: C.text }}>
                    Certifications
                </Typography>
            </Box>

            {/* Grid */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                gap: '14px',
            }}>
                {PLACEHOLDER_CERTS.map(({ title, issuer, year, color }) => (
                    <Box key={title} sx={{
                        p: '18px 20px',
                        borderRadius: '12px',
                        background: C.surface2,
                        border: `1px solid ${C.border}`,
                        display: 'flex',
                        gap: '14px',
                        alignItems: 'flex-start',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                            borderColor: color + '55',
                            boxShadow: `0 0 18px ${color}22, 0 4px 16px rgba(0,0,0,0.3)`,
                            transform: 'translateY(-2px)',
                        },
                    }}>
                        {/* Badge icon */}
                        <Box sx={{
                            width: 36, height: 36, borderRadius: '9px', flexShrink: 0,
                            background: `${color}18`,
                            border: `1px solid ${color}44`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <Verified sx={{ fontSize: 18, color }} />
                        </Box>

                        {/* Text */}
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography sx={{
                                fontSize: '0.8125rem',
                                fontWeight: 700,
                                color: C.text,
                                mb: '3px',
                                lineHeight: 1.35,
                            }}>
                                {title}
                            </Typography>
                            <Typography sx={{ fontSize: '0.72rem', color: C.textSub, mb: '6px' }}>
                                {issuer}
                            </Typography>
                            <Box sx={{
                                display: 'inline-block',
                                px: '6px', py: '1px',
                                borderRadius: '4px',
                                background: C.surface3,
                                fontSize: '0.68rem',
                                color: C.textMuted,
                                fontWeight: 600,
                            }}>
                                {year}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
