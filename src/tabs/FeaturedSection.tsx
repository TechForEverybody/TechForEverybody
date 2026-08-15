import { Box, Typography } from '@mui/material'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode, SiHackerrank, SiCoursera, SiHackerearth } from 'react-icons/si'
import { RocketLaunchOutlined, Star, NorthEast } from '@mui/icons-material'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { C } from '../theme'

// ── Data ─────────────────────────────────────────────────────────────────────

const FEATURED_CARDS = [
    {
        title: 'GitHub',
        username: '@techforeverybody',
        description: 'Open source contributions, repositories & projects',
        url: 'https://github.com/TechForEverybody',
        image: 'https://placehold.co/600x280/0d1117/f5f5f5?text=GitHub+Profile',
        Icon: FaGithub,
        color: '#f5f5f5',
        gradient: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)',
        stats: '20+ Repos',
    },
    {
        title: 'LeetCode',
        username: '@Shiva995',
        description: 'DSA problem solving & competitive programming',
        url: 'https://leetcode.com/u/Shiva995',
        image: 'https://placehold.co/600x280/1a1a2e/FFA116?text=LeetCode+Profile',
        Icon: SiLeetcode,
        color: '#FFA116',
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2d1f00 100%)',
        stats: '200+ Problems',
    },
    // {
    //     title: 'Coursera',
    //     username: '@techforeverybody',
    //     description: 'Certifications & professional courses',
    //     url: 'https://www.coursera.org/learner/techforeverybody',
    //     image: 'https://placehold.co/600x280/001d3d/0056D2?text=Coursera+Profile',
    //     Icon: SiCoursera,
    //     color: '#0056D2',
    //     gradient: 'linear-gradient(135deg, #001d3d 0%, #003566 100%)',
    //     stats: '10+ Courses',
    // },
    {
        title: 'LinkedIn',
        username: '@techforeverybody',
        description: 'Professional network, experience & connections',
        url: 'https://www.linkedin.com/in/shiva995/',
        image: 'https://placehold.co/600x280/0a2540/0A66C2?text=LinkedIn+Profile',
        Icon: FaLinkedin,
        color: '#0A66C2',
        gradient: 'linear-gradient(135deg, #0a2540 0%, #002d5e 100%)',
        stats: '500+ Connects',
    },
    {
        title: 'HackerRank',
        username: '@techforeverybody',
        description: 'Skill certifications & coding challenges',
        url: 'https://www.hackerrank.com/techforeverybody',
        image: 'https://placehold.co/600x280/0a2e1a/00EA64?text=HackerRank+Profile',
        Icon: SiHackerrank,
        color: '#00EA64',
        gradient: 'linear-gradient(135deg, #0a2e1a 0%, #1a3a2a 100%)',
        stats: '5★ Badges',
    },
    {
        title: 'HackerEarth',
        username: '@techforeverybody',
        description: 'Hackathons & competitive programming',
        url: 'https://www.hackerearth.com/@techforeverybody',
        image: 'https://placehold.co/600x280/2b3252/6c7bff?text=HackerEarth+Profile',
        Icon: SiHackerearth,
        color: '#6c7bff',
        gradient: 'linear-gradient(135deg, #2b3252 0%, #323754 100%)',
        stats: 'Active',
    },
    {
        title: 'Open Source Project',
        username: 'AI Developer Tools',
        description: 'Currently contributing to AI-powered developer tools',
        url: 'https://github.com/techforeverybody',
        image: 'https://placehold.co/600x280/061a2e/1693F9?text=Open+Source+Project',
        Icon: RocketLaunchOutlined,
        color: C.accent,
        gradient: `linear-gradient(135deg, #061a2e 0%, #0a2540 100%)`,
        stats: 'In Progress',
        highlight: true,
    },
]

// ── Animations ───────────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.09, ease: EASE },
    }),
}

// ── Component ────────────────────────────────────────────────────────────────

export default function FeaturedSection() {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <Box ref={ref} sx={{ py: '28px', px: {
            xs: '20px',
            md: 15,
        }, background: "white", borderRadius: '20px 20px 0 0',  }}>

            {/* Cards Grid */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: '12px',
                position: 'relative',
                marginTop: -15,

            }}>
                {FEATURED_CARDS.map((card, i) => (
                    <motion.div
                        key={card.title}
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'show' : 'hidden'}
                        custom={i}
                    >
                        <Box
                            component="a"
                            href={card.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                textDecoration: 'none',
                                position: 'relative',
                                borderRadius: '14px',
                                border: `2px solid white`,
                                background: C.surface,
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    border: `1px solid ${card.color}`,
                                    transform: 'translateY(-4px)',
                                    boxShadow: `0 12px 32px rgba(0,0,0,0.4), 0 0 0 1px ${card.color}22`,
                                    '& .card-banner': {
                                        transform: 'scale(1.03)',
                                    },
                                    '& .card-icon-ring': {
                                        boxShadow: `0 0 0 3px ${card.color}44`,
                                    },
                                    '& .card-arrow': {
                                        opacity: 1,
                                        transform: 'translate(0, 0)',
                                        background: card.color,
                                        color: '#000',
                                    },
                                },
                            }}
                        >
                            {/* Banner / Image area */}
                            <Box sx={{
                                position: 'relative',
                                paddingTop: '56.25%', // 16:9 ratio
                                overflow: 'hidden',
                            }}>
                                <Box
                                    className="card-banner"
                                    sx={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: card.gradient,
                                        backgroundImage: `url(${card.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        transition: 'transform 0.4s ease',
                                    }}
                                />
                                {/* Gradient fade at bottom */}
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: 36,
                                    background: `linear-gradient(transparent, ${C.surface})`,
                                }} />

                                {/* Highlight badge */}
                                {card.highlight && (
                                    <Box sx={{
                                        position: 'absolute',
                                        top: 8,
                                        right: 8,
                                        px: '7px',
                                        py: '2px',
                                        borderRadius: '6px',
                                        background: C.accent,
                                        fontSize: '0.5625rem',
                                        fontWeight: 800,
                                        color: '#fff',
                                        letterSpacing: '0.05em',
                                        boxShadow: '0 2px 8px rgba(22,147,249,0.4)',
                                    }}>
                                        CURRENT
                                    </Box>
                                )}

                                {/* Arrow button */}
                                <Box
                                    className="card-arrow"
                                    sx={{
                                        position: 'absolute',
                                        top: 8,
                                        right: card.highlight ? undefined : 8,
                                        left: card.highlight ? 8 : undefined,
                                        width: 24,
                                        height: 24,
                                        borderRadius: '6px',
                                        background: C.surface2,
                                        border: `1px solid ${C.borderMid}`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: 0,
                                        transform: 'translate(4px, -4px)',
                                        transition: 'all 0.25s ease',
                                    }}
                                >
                                    <NorthEast sx={{ fontSize: 12 }} />
                                </Box>
                            </Box>

                            {/* Content */}
                            <Box sx={{ p: '12px 14px 14px' }}>
                                {/* Icon + Meta */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '8px' }}>
                                    <Box
                                        className="card-icon-ring"
                                        sx={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: '8px',
                                            background: C.surface2,
                                            border: `1.5px solid ${C.borderMid}`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: card.color,
                                            flexShrink: 0,
                                            transition: 'box-shadow 0.3s ease',
                                        }}
                                    >
                                        <card.Icon style={{ fontSize: 15, width: 15, height: 15 }} />
                                    </Box>
                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <Typography sx={{
                                            fontSize: '0.8125rem',
                                            fontWeight: 700,
                                            color: C.text,
                                            lineHeight: 1.2,
                                        }}>
                                            {card.title}
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '0.625rem',
                                            color: C.textSub,
                                            lineHeight: 1.3,
                                        }}>
                                            {card.username}
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                        px: '6px',
                                        py: '2px',
                                        borderRadius: '5px',
                                        background: C.surface3,
                                        border: `1px solid ${C.borderMid}`,
                                    }}>
                                        <Typography sx={{
                                            fontSize: '0.5625rem',
                                            fontWeight: 700,
                                            color: card.color,
                                            whiteSpace: 'nowrap',
                                        }}>
                                            {card.stats}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Description */}
                                <Typography sx={{
                                    fontSize: '0.6875rem',
                                    color: C.textSub,
                                    lineHeight: 1.55,
                                }}>
                                    {card.description}
                                </Typography>
                            </Box>
                        </Box>
                    </motion.div>
                ))}
            </Box>
        </Box>
    )
}