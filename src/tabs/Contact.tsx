import { useState } from 'react'
import { Box, Typography, keyframes } from '@mui/material'
import { SendOutlined, LinkedIn, GitHub, AlternateEmailOutlined, PersonOutlined, SubjectOutlined, ChatBubbleOutlineOutlined } from '@mui/icons-material'

const BLUE = '#2563eb'
const DEEP = '#172554'
const LIGHT = '#dbeafe'
const WHITE = '#ffffff'
const INK = '#0f1a3e'

const glow = keyframes`0%,100%{box-shadow:0 0 20px rgba(37,99,235,0.3)}50%{box-shadow:0 0 40px rgba(37,99,235,0.6)}`
const wave = keyframes`0%{transform:translateX(-100%)}100%{transform:translateX(100%)}`

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

    return (
        <Box sx={{
            position: 'relative',
            background: `linear-gradient(160deg, ${DEEP} 0%, #1e40af 40%, ${BLUE} 100%)`,
            px: { xs: 2, md: 4 },
            py: { xs: 5, md: 8 },
            overflow: 'hidden',
        }}>
            {/* Corner glows */}
            <Box sx={{ position: 'absolute', top: '-10%', right: '-5%', width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, rgba(37,99,235,0.25), transparent 70%)`, pointerEvents: 'none' }} />
            <Box sx={{ position: 'absolute', bottom: '-8%', left: '-3%', width: 250, height: 250, borderRadius: '50%', background: `radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)`, pointerEvents: 'none' }} />

            <Box sx={{ maxWidth: 1000, mx: 'auto', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: { xs: '28px', md: '40px' } }}>
                    <Typography sx={{
                        fontSize: { xs: '1.8rem', md: '2.5rem' }, fontWeight: 900,
                        color: WHITE, letterSpacing: '-0.03em', lineHeight: 1.1,
                        textShadow: '0 2px 20px rgba(4,47,46,0.6)',
                    }}>
                        Get In Touch
                    </Typography>
                    <Typography sx={{ fontSize: '0.78rem', fontWeight: 500, color: 'rgba(255,255,255,0.75)', mt: '8px', maxWidth: 380, mx: 'auto', lineHeight: 1.5 }}>
                        Open to new opportunities. Drop a message and I'll get back to you soon.
                    </Typography>
                </Box>

                {/* Main content: form card + socials */}
                <Box sx={{
                    background: WHITE,
                    borderRadius: '20px',
                    border: `2px solid ${INK}`,
                    boxShadow: `8px 8px 0 ${INK}`,
                    overflow: 'hidden',
                }}>
                    {/* Decorative top bar */}
                    <Box sx={{
                        height: '4px',
                        background: `linear-gradient(90deg, ${BLUE}, #3b82f6, #93c5fd, #3b82f6, ${BLUE})`,
                        backgroundSize: '200% 100%',
                        animation: `${wave} 4s linear infinite`,
                    }} />

                    <Box sx={{ p: { xs: '20px', md: '32px' } }}>
                        {/* Form fields */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', mb: '20px' }}>
                            {/* Name + Email row */}
                            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: '12px' }}>
                                {[
                                    { key: 'name' as const, label: 'Your Name', icon: <PersonOutlined sx={{ fontSize: 16, color: BLUE }} /> },
                                    { key: 'email' as const, label: 'Your Email', icon: <AlternateEmailOutlined sx={{ fontSize: 16, color: BLUE }} /> },
                                ].map(({ key, label, icon }) => (
                                    <Box key={key} sx={{
                                        display: 'flex', alignItems: 'center', gap: '10px',
                                        px: '14px', py: '11px',
                                        borderRadius: '12px',
                                        background: LIGHT,
                                        border: `2px solid ${INK}`,
                                        boxShadow: `3px 3px 0 ${INK}`,
                                        transition: 'all 0.15s ease',
                                        '&:focus-within': {
                                            boxShadow: `2px 2px 0 ${INK}`,
                                            transform: 'translate(1px, 1px)',
                                            borderColor: BLUE,
                                        },
                                    }}>
                                        {icon}
                                        <Box component="input"
                                            placeholder={label}
                                            value={form[key]}
                                            onChange={e => setForm(f => ({ ...f, [key]: (e.target as HTMLInputElement).value }))}
                                            sx={{
                                                flex: 1, border: 'none', outline: 'none',
                                                background: 'transparent',
                                                fontSize: '0.76rem', fontWeight: 600,
                                                color: INK, fontFamily: 'inherit',
                                                '&::placeholder': { color: '#6b7280', fontWeight: 500 },
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Box>

                            {/* Subject */}
                            <Box sx={{
                                display: 'flex', alignItems: 'center', gap: '10px',
                                px: '14px', py: '11px',
                                borderRadius: '12px',
                                background: LIGHT,
                                border: `2px solid ${INK}`,
                                boxShadow: `3px 3px 0 ${INK}`,
                                transition: 'all 0.15s ease',
                                '&:focus-within': {
                                    boxShadow: `2px 2px 0 ${INK}`,
                                    transform: 'translate(1px, 1px)',
                                    borderColor: BLUE,
                                },
                            }}>
                                <SubjectOutlined sx={{ fontSize: 16, color: BLUE }} />
                                <Box component="input"
                                    placeholder="Subject"
                                    value={form.subject}
                                    onChange={e => setForm(f => ({ ...f, subject: (e.target as HTMLInputElement).value }))}
                                    sx={{
                                        flex: 1, border: 'none', outline: 'none',
                                        background: 'transparent',
                                        fontSize: '0.76rem', fontWeight: 600,
                                        color: INK, fontFamily: 'inherit',
                                        '&::placeholder': { color: '#6b7280', fontWeight: 500 },
                                    }}
                                />
                            </Box>

                            {/* Message */}
                            <Box sx={{
                                display: 'flex', gap: '10px', alignItems: 'flex-start',
                                px: '14px', py: '11px',
                                borderRadius: '12px',
                                background: LIGHT,
                                border: `2px solid ${INK}`,
                                boxShadow: `3px 3px 0 ${INK}`,
                                transition: 'all 0.15s ease',
                                '&:focus-within': {
                                    boxShadow: `2px 2px 0 ${INK}`,
                                    transform: 'translate(1px, 1px)',
                                    borderColor: BLUE,
                                },
                            }}>
                                <ChatBubbleOutlineOutlined sx={{ fontSize: 16, color: BLUE, mt: '2px' }} />
                                <Box component="textarea"
                                    placeholder="Your message..."
                                    value={form.message}
                                    onChange={e => setForm(f => ({ ...f, message: (e.target as HTMLTextAreaElement).value }))}
                                    rows={4}
                                    sx={{
                                        flex: 1, border: 'none', outline: 'none', resize: 'none',
                                        background: 'transparent',
                                        fontSize: '0.76rem', fontWeight: 600,
                                        color: INK, fontFamily: 'inherit', lineHeight: 1.5,
                                        '&::placeholder': { color: '#6b7280', fontWeight: 500 },
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* Send button */}
                        <Box component="button" sx={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            px: '22px', py: '11px',
                            borderRadius: '12px',
                            background: INK, color: WHITE,
                            border: `2px solid ${INK}`,
                            boxShadow: `4px 4px 0 ${BLUE}`,
                            cursor: 'pointer',
                            fontWeight: 700, fontSize: '0.78rem',
                            fontFamily: 'inherit', letterSpacing: '0.02em',
                            transition: 'all 0.15s ease',
                            animation: `${glow} 3s ease-in-out infinite`,
                            '&:hover': {
                                transform: 'translate(2px, 2px)',
                                boxShadow: `2px 2px 0 ${BLUE}`,
                            },
                        }}>
                            <SendOutlined sx={{ fontSize: 15 }} />
                            Send Message
                        </Box>

                        {/* Divider */}
                        <Box sx={{ height: '2px', background: `linear-gradient(90deg, ${BLUE}, transparent)`, my: '20px' }} />

                        {/* Social links */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                            <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, color: '#6b7280', mr: '4px' }}>
                                Find me on
                            </Typography>
                            {[
                                { icon: <LinkedIn sx={{ fontSize: 16 }} />, label: 'LinkedIn', href: '#', hoverColor: '#0A66C2' },
                                { icon: <GitHub sx={{ fontSize: 16 }} />, label: 'GitHub', href: '#', hoverColor: '#333' },
                                { icon: <AlternateEmailOutlined sx={{ fontSize: 16 }} />, label: 'Email', href: 'mailto:your@email.com', hoverColor: BLUE },
                            ].map(({ icon, label, href, hoverColor }) => (
                                <Box key={label} component="a" href={href} target="_blank" rel="noopener noreferrer" sx={{
                                    display: 'flex', alignItems: 'center', gap: '5px',
                                    px: '10px', py: '6px',
                                    borderRadius: '8px',
                                    background: LIGHT,
                                    border: `1.5px solid ${INK}`,
                                    boxShadow: `2px 2px 0 ${INK}`,
                                    textDecoration: 'none', color: INK,
                                    fontSize: '0.68rem', fontWeight: 700,
                                    transition: 'all 0.15s ease',
                                    '&:hover': {
                                        color: hoverColor,
                                        borderColor: hoverColor,
                                        transform: 'translate(1px, 1px)',
                                        boxShadow: `1px 1px 0 ${INK}`,
                                    },
                                }}>
                                    {icon}
                                    {label}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
