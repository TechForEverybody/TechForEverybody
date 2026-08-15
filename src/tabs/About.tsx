import { Box, Typography } from '@mui/material'
import {
    Code,
    Storage,
    Android,
    AutoAwesome,
    Cloud,
    Shield,
    Computer,
    Hub,
    East,
    Download,
} from '@mui/icons-material'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { C } from '../theme'
import Aurora from '../components/Aurora'

// ── Data ─────────────────────────────────────────────────────────────────────

const ROLES = [
    'Computer Scientist',
    'Full Stack Engineer',
    'AI & LLM Solutions Engineer',
    'Networking & Cybersecurity',
    'Robotics & IoT Architect',
]


const BIO = [
    "Full Stack Engineer with 3+ years of experience designing and building scalable software products across web, desktop, mobile, and AI-driven platforms — spanning the complete software development lifecycle.",
    "I specialize in JavaScript, Python, Java, and C++ — building modern frontend interfaces, backend APIs, data-driven systems, desktop apps, and Android applications. My recent focus is Agentic AI, LLM-powered applications, workflow automation, and intelligent software systems that integrate language models with tools, APIs, and business workflows.",
    "I've shipped products in edtech, robotics, AI, cybersecurity, developer tooling, competition platforms, and enterprise software — taking ideas from concept to production. Good software is about understanding problems, designing scalable architectures, and delivering long-term value.",
]

const EXPERTISE = [
    { label: 'Web, Mobile and Desktop Full Stack Development', Icon: Code },
    { label: 'Cloud Architecture', Icon: Cloud },
    { label: 'Data Engineering, AI & LLM Integration', Icon: AutoAwesome },
    { label: 'Cybersecurity', Icon: Shield },
]

// ── Animation ─────────────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
}

const slideIn = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
}

const popUp = {
    hidden: { opacity: 0, scale: 0.85, y: 16 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}



// ── Animated counter ──────────────────────────────────────────────────────────

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: '-40px' })
    const motionVal = useMotionValue(0)
    const spring = useSpring(motionVal, { stiffness: 60, damping: 14 })
    const [display, setDisplay] = useState(0)

    useEffect(() => {
        if (inView) motionVal.set(target)
    }, [inView, target, motionVal])

    useEffect(() => {
        return spring.on('change', v => setDisplay(Math.round(v)))
    }, [spring])

    return <span ref={ref}>{display}{suffix}</span>
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function About() {
    const containerRef = useRef(null)
    const inView = useInView(containerRef, { once: true, margin: '-60px' })

    return (
        <Box
            ref={containerRef}
            sx={{
                mx: 'auto',
                height: '100%',
                px: { xs: '16px', sm: '28px', md: '96px' },
                py: { xs: '40px', sm: '50px', md: '120px' },
                pt: { xs: '40px', sm: '50px', md: '50px' },
                position: 'relative',
                background: C.bg,
                overflow: 'hidden',
            }}
        >
            <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <Aurora
                    colorStops={['#ef4444', '#f97316', '#ef4444']}
                    amplitude={1.2}
                    blend={0.6}
                    speed={0.8}
                />
            </Box>
           

            {/* ── Header block ── */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE }}
                style={{ position: 'relative', zIndex: 1 }}
            >
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '12px', mb: '6px' }}>
                    <Typography sx={{
                        fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' },
                        fontWeight: 900,
                        lineHeight: 1,
                        letterSpacing: '-0.03em',
                        color: C.text,
                    }}>
                        Shivkumar
                    </Typography>
                    <Typography sx={{
                        fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' },
                        fontWeight: 900,
                        lineHeight: 1,
                        letterSpacing: '-0.03em',
                        color: C.accent,
                    }}>
                        Chauhan
                    </Typography>
                </Box>

                {/* Role ticker strip */}
                <Box sx={{
                    display: 'flex',
                    gap: '6px',
                    flexWrap: 'wrap',
                    mb: '28px',
                    pl: '2px',
                }}>
                    {ROLES.map((role, i) => (
                        <motion.span
                            key={role}
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 + i * 0.08, duration: 0.4, ease: EASE }}
                        >
                            <Box sx={{
                                px: '8px', py: '3px',
                                border: `1px solid ${C.borderMid}`,
                                background: C.surface,
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                color: C.textSub,
                                letterSpacing: '0.01em',
                                transition: 'all 0.2s',
                                cursor: 'default',
                                '&:hover': { background: C.accent, color: '#fff', borderColor: C.accent },
                            }}>
                                {role}
                            </Box>
                        </motion.span>
                    ))}
                </Box>
            </motion.div>

            {/* ── Main grid: 3 columns on desktop ── */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '2fr 1px 1fr' },
                gap: { xs: '32px', md: '36px' },
                alignItems: 'start',
                position: 'relative',
                zIndex: 1,
            }}>

                {/* ── Left: Bio + Expertise ── */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                >
                    {/* Bio paragraphs as stacked cards */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', mb: '28px' }}>
                        {BIO.map((para, i) => (
                            <motion.div key={i} variants={slideIn}>
                                <Box sx={{
                                    px: '14px', py: '12px',
                                    background: C.surface2,
                                    borderLeft: i === 0 ? `3px solid ${C.accent}` : `3px solid ${C.border}`,
                                }}>
                                    <Typography sx={{
                                        fontSize: '0.8rem',
                                        color: i === 0 ? C.text : C.textSub,
                                        lineHeight: 1.7,
                                        fontWeight: i === 0 ? 500 : 400,
                                    }}>
                                        {para}
                                    </Typography>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>

                    {/* Expertise — 2-column compact grid */}
                    <Typography sx={{
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        color: C.textMuted,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        mb: '10px',
                    }}>
                        Core Expertise
                    </Typography>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr 1fr' },
                        gap: '6px',
                    }}>
                        {EXPERTISE.map(({ label, Icon }) => (
                            <motion.div key={label} variants={popUp}>
                                <Box
                                    component={motion.div}
                                    whileHover={{ y: -3, scale: 1.02 }}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '6px',
                                        px: '8px', py: '14px',
                                        borderRadius: '10px',
                                        background: C.surface,
                                        border: `1px solid ${C.border}`,
                                        cursor: 'default',
                                        transition: 'border-color 0.2s',
                                        '&:hover': { borderColor: C.accent },
                                    }}
                                >
                                    <Box sx={{
                                        width: 32, height: 32,
                                        borderRadius: '8px',
                                        background: C.accentBright,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Icon sx={{ fontSize: 15, color: '#fff' }} />
                                    </Box>
                                    <Typography sx={{
                                        fontSize: '0.68rem',
                                        fontWeight: 600,
                                        color: C.text,
                                        textAlign: 'center',
                                        lineHeight: 1.2,
                                    }}>
                                        {label}
                                    </Typography>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>
                </motion.div>

                {/* ── Vertical divider ── */}
                <Box sx={{
                    display: { xs: 'none', md: 'block' },
                    width: '1px',
                    alignSelf: 'stretch',
                    background: `linear-gradient(to bottom, transparent, ${C.borderMid}, transparent)`,
                }} />

                {/* ── Right: Stats + Resume ── */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
                >


                    {/* Resume button */}
                    <motion.div variants={slideIn}>
                        <Box
                            component={motion.a}
                            href="#"
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                mt: '8px',
                                px: '16px', py: '13px',
                                borderRadius: '10px',
                                background: C.accent,
                                color: '#fff',
                                fontWeight: 700,
                                fontSize: '0.8rem',
                                letterSpacing: '0.02em',
                                textDecoration: 'none',
                                boxShadow: `0 4px 24px ${C.accentGlow}`,
                                transition: 'box-shadow 0.2s',
                                '&:hover': { boxShadow: `0 8px 36px ${C.accentGlow}` },
                            }}
                        >
                            <Download sx={{ fontSize: 15 }} />
                            Download Resume
                            <East sx={{ fontSize: 13 }} />
                        </Box>
                    </motion.div>

                    {/* Decorative assembly snippet */}
                    <motion.div variants={popUp}>
                        <Box sx={{
                            mt: '6px',
                            px: '12px', py: '10px',
                            borderRadius: '8px',
                            background: C.surface2,
                            border: `1px solid ${C.border}`,
                            fontFamily: 'monospace',
                            fontSize: '0.62rem',
                            color: C.textSub,
                            lineHeight: 1.75,
                            overflow: 'hidden',
                        }}>
                            <Box component="span" sx={{ color: C.textMuted }}>;; engineer.asm</Box><br />
                            <Box component="span" sx={{ color: C.accent }}>SECTION</Box> .data<br />
                            &nbsp;&nbsp;my_name&nbsp;<Box component="span" sx={{ color: C.accent }}>DB</Box> <Box component="span" sx={{ color: '#4ade80' }}>"Shivkumar Chauhan"</Box>, 0&nbsp;&nbsp;<Box component="span" sx={{ color: C.textMuted }}>; 0x0000</Box><br />
                            &nbsp;&nbsp;role&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Box component="span" sx={{ color: C.accent }}>DB</Box> <Box component="span" sx={{ color: '#4ade80' }}>"Sr. Full Stack Engineer"</Box>, 0&nbsp;&nbsp;<Box component="span" sx={{ color: C.textMuted }}>; 0x0013</Box><br />
                            &nbsp;&nbsp;focus&nbsp;&nbsp;&nbsp;&nbsp;<Box component="span" sx={{ color: C.accent }}>DB</Box> <Box component="span" sx={{ color: '#4ade80' }}>"Software with AI + LLM Systems"</Box>, 0&nbsp;&nbsp;<Box component="span" sx={{ color: C.textMuted }}>; 0x002C</Box><br />
                            &nbsp;&nbsp;exp_yrs&nbsp;&nbsp;<Box component="span" sx={{ color: C.accent }}>DD</Box> <Box component="span" sx={{ color: '#f59e0b' }}>3</Box>&nbsp;&nbsp;<Box component="span" sx={{ color: C.textMuted }}>; 0x004C</Box><br />
                            &nbsp;&nbsp;projects&nbsp;<Box component="span" sx={{ color: C.accent }}>DD</Box> <Box component="span" sx={{ color: '#f59e0b' }}>20</Box>&nbsp;&nbsp;<Box component="span" sx={{ color: C.textMuted }}>; 0x0050</Box><br />
                            &nbsp;&nbsp;status&nbsp;&nbsp;&nbsp;<Box component="span" sx={{ color: C.accent }}>DD</Box> <Box component="span" sx={{ color: '#f59e0b' }}>1</Box>&nbsp;&nbsp;<Box component="span" sx={{ color: C.textMuted }}>; 0x0054 ; building = true</Box><br />
                            <br />
                            <Box component="span" sx={{ color: C.accent }}>SECTION</Box> .text<br />
                            <Box component="span" sx={{ color: C.accent }}>GLOBAL</Box> _start<br />
                            <Box component="span" sx={{ color: '#4ade80' }}>_start:</Box><br />
                            &nbsp;&nbsp;<Box component="span" sx={{ color: C.accent }}>MOV</Box>&nbsp;&nbsp;&nbsp;EAX, [exp_yrs]<br />
                            &nbsp;&nbsp;<Box component="span" sx={{ color: C.accent }}>ADD</Box>&nbsp;&nbsp;&nbsp;EAX, <Box component="span" sx={{ color: '#f59e0b' }}>1</Box>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Box component="span" sx={{ color: C.textMuted }}>; never stop growing</Box><br />
                            &nbsp;&nbsp;<Box component="span" sx={{ color: C.accent }}>MOV</Box>&nbsp;&nbsp;&nbsp;[exp_yrs], EAX&nbsp;<Box component="span" sx={{ color: C.textMuted }}>; store it back</Box><br />
                            &nbsp;&nbsp;<Box component="span" sx={{ color: C.accent }}>JMP</Box>&nbsp;&nbsp;&nbsp;<Box component="span" sx={{ color: '#4ade80' }}>_start</Box>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Box component="span" sx={{ color: C.textMuted }}>; infinite loop</Box>
                        </Box>
                    </motion.div>
                </motion.div>
            </Box>
        </Box>
    )
}

