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
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { C } from '../theme'

// ── Data ─────────────────────────────────────────────────────────────────────

const ROLES = [
    'Computer Scientist',
    'Full Stack Engineer',
    'AI & LLM Solutions Engineer',
    'Networking & Cybersecurity',
    'Robotics & IoT Architect',
]

const STATS = [
    { value: 3, suffix: '+', label: 'Years Experience' },
    { value: 20, suffix: '+', label: 'Projects Built' },
    { value: 15, suffix: '+', label: 'Technologies' },
]

const BIO = [
    "Full Stack Engineer with 3+ years of experience designing and building scalable software products across web, desktop, mobile, and AI-driven platforms — spanning the complete software development lifecycle.",
    "I specialize in JavaScript, Python, Java, and C++ — building modern frontend interfaces, backend APIs, data-driven systems, desktop apps, and Android applications. My recent focus is Agentic AI, LLM-powered applications, workflow automation, and intelligent software systems that integrate language models with tools, APIs, and business workflows.",
    "I've shipped products in edtech, robotics, AI, cybersecurity, developer tooling, competition platforms, and enterprise software — taking ideas from concept to production. Good software is about understanding problems, designing scalable architectures, and delivering long-term value.",
]

const EXPERTISE = [
    { label: 'Full Stack Development', Icon: Code },
    { label: 'Backend API Design', Icon: Storage },
    { label: 'AI & LLM Integration', Icon: AutoAwesome },
    { label: 'Android Development', Icon: Android },
    { label: 'Cloud Architecture', Icon: Cloud },
    { label: 'Cybersecurity', Icon: Shield },
    { label: 'Desktop Applications', Icon: Computer },
    { label: 'Data Engineering', Icon: Hub },
]

// ── Animation variants ────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.08, ease: EASE },
    }),
}

const fadeLeft = {
    hidden: { opacity: 0, x: -24 },
    show: (i: number = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: i * 0.07, ease: EASE },
    }),
}

// ── Typewriter hook ─────────────────────────────────────────────────────────────

function useTypewriter(text: string, startWhen: boolean, speed = 52) {
    const [displayed, setDisplayed] = useState('')
    const [done, setDone] = useState(false)

    useEffect(() => {
        if (!startWhen) return
        setDisplayed('')
        setDone(false)
        let i = 0
        const id = setInterval(() => {
            i++
            setDisplayed(text.slice(0, i))
            if (i >= text.length) { clearInterval(id); setDone(true) }
        }, speed)
        return () => clearInterval(id)
    }, [text, startWhen, speed])

    return { displayed, done }
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

    return (
        <span ref={ref}>
            {display}{suffix}
        </span>
    )
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ children, delay = 0 }: { children: string; delay?: number }) {
    return (
        <motion.div
            variants={fadeLeft}
            custom={delay}
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}
        >
            <Box sx={{ width: 3, height: 13, borderRadius: '2px', background: C.accent, flexShrink: 0 }} />
            <Typography sx={{
                fontSize: '0.69rem',
                fontWeight: 700,
                color: C.textMuted,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
            }}>
                {children}
            </Typography>
        </motion.div>
    )
}




// ── Component ─────────────────────────────────────────────────────────────────

export default function About() {
    const containerRef = useRef(null)
    const inView = useInView(containerRef, { once: true, margin: '-60px' })
    const { displayed: typedName, done: typingDone } = useTypewriter('Shivkumar Chauhan', inView, 200)

    return (
        <Box
            ref={containerRef}
            sx={{
                maxWidth: 1500,
                mx: 'auto',
                px: { xs: '20px', sm: '32px', md: '48px' },
                pt: { xs: '10px', sm: '15px', md: '20px' },
                position: 'relative',
            }}
        >

            <Box sx={{ position: 'relative', zIndex: 1 }}>

                {/* ── Name ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: EASE }}
                >
                    <Typography
                        component="div"
                        sx={{
                            fontSize: { xs: '2.6rem', sm: '3.8rem', md: '5.2rem' },
                            fontWeight: 900,
                            lineHeight: 0.96,
                            letterSpacing: '-0.04em',
                            mb: '10px',
                            background: `linear-gradient(140deg, #ffffff 0%, #d8d8d8 30%, ${C.accent} 65%, #f0f0f0 100%)`,
                            backgroundSize: '300% 300%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: 'shimmer 7s ease infinite',
                            '@keyframes shimmer': {
                                '0%': { backgroundPosition: '0% 50%' },
                                '50%': { backgroundPosition: '100% 50%' },
                                '100%': { backgroundPosition: '0% 50%' },
                            },
                        }}
                    >
                        {typedName}
                        <Box
                            component="span"
                            sx={{
                                display: 'inline-block',
                                width: { xs: '3px', sm: '4px', md: '5px' },
                                height: { xs: '2.4rem', sm: '3.4rem', md: '4.6rem' },
                                background: C.accent,
                                ml: '4px',
                                verticalAlign: 'middle',
                                borderRadius: '2px',
                                animation: typingDone ? 'blink 1.1s step-end infinite' : 'none',
                                '@keyframes blink': {
                                    '0%, 100%': { opacity: 1 },
                                    '50%': { opacity: 0 },
                                },
                            }}
                        />
                    </Typography>
                </motion.div>

                {/* ── Cycling role ──
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <CyclingRole />
                </motion.div> */}

                {/* ── Role pills ── */}
                <motion.div
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 40 }}
                >
                    {ROLES.map((role, i) => (
                        <motion.div
                            key={role}
                            variants={fadeUp}
                            custom={i * 0.5 + 0.4}
                            whileHover={{ scale: 1.04, y: -2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Box sx={{
                                px: '10px', py: '4px',
                                borderRadius: '5px',
                                background: C.accent,
                                border: `1px solid ${C.borderMid}`,
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                color: "white",
                                letterSpacing: '0.02em',
                                cursor: 'default',
                                transition: 'border-color 0.2s',
                                '&:hover': { borderColor: C.accent + '88', color: C.text },
                            }}>
                                {role}
                            </Box>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Two-column content ── */}
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 300px' },
                    gap: { xs: '40px', md: '52px' },
                    mb: '15px',
                    alignItems: 'start',
                }}>
                    {/* Left — Bio */}
                    <motion.div
                        initial="hidden"
                        animate={inView ? 'show' : 'hidden'}
                    >
                        <SectionLabel delay={0}>About</SectionLabel>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {BIO.map((para, i) => (
                                <motion.div key={i} variants={fadeUp} custom={i + 0.5}>
                                    <Typography sx={{
                                        fontSize: '0.875rem',
                                        color: i === 0 ? C.text : C.textSub,
                                        lineHeight: 1.8,
                                        fontWeight: i === 0 ? 500 : 400,
                                    }}>
                                        {para}
                                    </Typography>
                                </motion.div>
                            ))}
                        </Box>
                    </motion.div>

                    {/* Right — Stats + CTA */}
                    <motion.div
                        initial="hidden"
                        animate={inView ? 'show' : 'hidden'}
                        style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
                    >
                        <SectionLabel delay={0}>At a glance</SectionLabel>

                        {STATS.map(({ value, suffix, label }, i) => (
                            <motion.div key={label} variants={fadeUp} custom={i + 0.3}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    px: '16px', py: '13px',
                                    borderRadius: '10px',
                                    background: C.surface2,
                                    border: `1px solid ${C.border}`,
                                }}>
                                    <Typography sx={{ fontSize: '0.8125rem', color: C.textSub, fontWeight: 500 }}>
                                        {label}
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: '1.125rem',
                                        fontWeight: 800,
                                        color: C.accent,
                                        letterSpacing: '-0.02em',
                                    }}>
                                        <AnimatedCounter target={value} suffix={suffix} />
                                    </Typography>
                                </Box>
                            </motion.div>
                        ))}

                        {/* Divider */}
                        <motion.div variants={fadeUp} custom={STATS.length + 0.3}>
                            <Box sx={{ height: '1px', background: C.border, my: '4px' }} />
                        </motion.div>

                        {/* Resume CTA */}
                        <motion.div
                            variants={fadeUp}
                            custom={STATS.length + 0.6}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Box
                                component="a"
                                href="#"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '7px',
                                    px: '16px', py: '12px',
                                    borderRadius: '10px',
                                    background: `linear-gradient(135deg, ${C.accent} 0%, ${C.accent}cc 100%)`,
                                    color: '#fff',
                                    fontWeight: 700,
                                    fontSize: '0.8125rem',
                                    letterSpacing: '0.025em',
                                    textDecoration: 'none',
                                    boxShadow: `0 4px 20px ${C.accentGlow}, 0 0 0 1px ${C.accent}44`,
                                    transition: 'box-shadow 0.2s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)',
                                        pointerEvents: 'none',
                                    },
                                    '&:hover': {
                                        boxShadow: `0 8px 32px ${C.accentGlow}, 0 0 0 1px ${C.accent}88`,
                                    },
                                }}
                            >
                                <Download sx={{ fontSize: 15 }} />
                                Download Resume
                                <East sx={{ fontSize: 13 }} />
                            </Box>
                        </motion.div>
                    </motion.div>
                </Box>

                {/* ── Expertise grid ── */}
                <motion.div
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    style={{ marginTop: 8, marginBottom: 15 }}
                >
                    <SectionLabel delay={0}>Expertise</SectionLabel>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
                        gap: '8px',
                    }}>
                        {EXPERTISE.map(({ label, Icon }, i) => (
                            <motion.div
                                key={label}
                                variants={fadeUp}
                                custom={i * 0.4}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                            >
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    px: '14px', py: '12px',
                                    borderRadius: '10px',
                                    background: C.accentBright,
                                    border: `1px solid ${C.border}`,
                                    cursor: 'default',
                                    transition: 'all 0.18s ease',
                                }}>
                                    <Box sx={{
                                        width: 30, height: 30, borderRadius: '7px', flexShrink: 0,
                                        background: C.accent + '14',
                                        border: `1px solid ${C.accent}33`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        transition: 'all 0.18s',
                                    }}>
                                        <Icon sx={{ fontSize: 15, color: "white" }} />
                                    </Box>
                                    <Typography sx={{
                                        fontSize: '0.78rem',
                                        fontWeight: 600,
                                        color: "white",
                                        lineHeight: 1.3,
                                    }}>
                                        {label}
                                    </Typography>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>
                </motion.div>

            </Box>
        </Box>
    )
}

