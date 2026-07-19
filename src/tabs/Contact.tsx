import { Box, Typography } from '@mui/material'
import { MailOutlined, LinkedIn, GitHub, ArrowForward } from '@mui/icons-material'
import { C } from '../theme'

export default function Contact() {
    return (
        <Box sx={{
            maxWidth: 680,
            mx: 'auto',
            px: { xs: 3, md: 4 },
            py: { xs: 6, md: 8 },
        }}>
            {/* Section header */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '12px' }}>
                <Box sx={{
                    width: 36, height: 36, borderRadius: '9px',
                    background: `linear-gradient(145deg, ${C.accentBright}, ${C.accentDim})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 0 16px ${C.accentGlow}`,
                }}>
                    <MailOutlined sx={{ fontSize: 18, color: '#fff' }} />
                </Box>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', color: C.text }}>
                    Contact Me
                </Typography>
            </Box>

            <Typography sx={{ fontSize: '0.875rem', color: C.textSub, mb: '40px', maxWidth: 440 }}>
                Open to new opportunities. Feel free to reach out — I'll get back to you soon.
            </Typography>

            {/* Contact form */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px', mb: '32px' }}>
                {/* Name + Email row */}
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: '14px' }}>
                    {['Your Name', 'Your Email'].map(ph => (
                        <Box key={ph} sx={{
                            px: '14px', py: '12px',
                            borderRadius: '10px',
                            background: C.surface2,
                            border: `1px solid ${C.borderMid}`,
                        }}>
                            <Typography sx={{ fontSize: '0.8125rem', color: C.textMuted }}>{ph}</Typography>
                        </Box>
                    ))}
                </Box>

                {/* Subject */}
                <Box sx={{
                    px: '14px', py: '12px',
                    borderRadius: '10px',
                    background: C.surface2,
                    border: `1px solid ${C.borderMid}`,
                }}>
                    <Typography sx={{ fontSize: '0.8125rem', color: C.textMuted }}>Subject</Typography>
                </Box>

                {/* Message */}
                <Box sx={{
                    px: '14px', py: '12px',
                    borderRadius: '10px',
                    background: C.surface2,
                    border: `1px solid ${C.borderMid}`,
                    height: 120,
                }}>
                    <Typography sx={{ fontSize: '0.8125rem', color: C.textMuted }}>Message</Typography>
                </Box>

                {/* Send button */}
                <Box sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    alignSelf: 'flex-start',
                    px: '20px', py: '11px',
                    borderRadius: '10px',
                    background: `linear-gradient(135deg, ${C.accentBright}, ${C.accentDim})`,
                    boxShadow: `0 4px 20px ${C.accentGlow}`,
                    cursor: 'pointer',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: '#fff',
                    letterSpacing: '0.02em',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        boxShadow: `0 6px 28px ${C.accentGlow}`,
                        transform: 'translateY(-1px)',
                    },
                }}>
                    Send Message
                    <ArrowForward sx={{ fontSize: 16 }} />
                </Box>
            </Box>

            {/* Divider */}
            <Box sx={{ height: '1px', background: C.border, mb: '28px' }} />

            {/* Social quick links */}
            <Box sx={{ display: 'flex', gap: '12px' }}>
                {[
                    { icon: <LinkedIn sx={{ fontSize: 18 }} />, label: 'LinkedIn', color: '#0A66C2', href: '#' },
                    { icon: <GitHub sx={{ fontSize: 18 }} />, label: 'GitHub', color: C.text, href: '#' },
                ].map(({ icon, label, color, href }) => (
                    <Box
                        key={label}
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            display: 'flex', alignItems: 'center', gap: '7px',
                            px: '14px', py: '9px',
                            borderRadius: '9px',
                            background: C.surface2,
                            border: `1px solid ${C.borderMid}`,
                            textDecoration: 'none',
                            color: C.textSub,
                            fontSize: '0.8125rem',
                            fontWeight: 600,
                            transition: 'all 0.2s ease',
                            '&:hover': { color, borderColor: color + '55', background: C.surface3 },
                        }}
                    >
                        {icon}
                        {label}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
