import React, { useState, useCallback, useEffect, useRef } from 'react'
import { Box, Tooltip, Typography } from '@mui/material'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'
import {
  PersonOutlined,
  WorkOutlined,
  RocketLaunchOutlined,
  BoltOutlined,
  SchoolOutlined,
  WorkspacePremiumOutlined,
  MailOutlined,
} from '@mui/icons-material'
import { C } from './theme'
import About from './tabs/About'
import Experience from './tabs/Experience'
import Projects from './tabs/Projects'
import Skills from './tabs/Skills'
import Education from './tabs/Education'
import Certifications from './tabs/Certifications'
import Contact from './tabs/Contact'

const TABS = [
  { id: 'about', label: 'About', Icon: PersonOutlined },
  { id: 'experience', label: 'Experience', Icon: WorkOutlined },
  { id: 'projects', label: 'Projects', Icon: RocketLaunchOutlined },
  { id: 'skills', label: 'Skills', Icon: BoltOutlined },
  { id: 'education', label: 'Education', Icon: SchoolOutlined },
  { id: 'certifications', label: 'Certifications', Icon: WorkspacePremiumOutlined },
  { id: 'contact', label: 'Contact Me', Icon: MailOutlined },
]

// ─── Social Link ──────────────────────────────────────────────────────────────
function SocialLink({
  href, icon, label, hoverColor,
}: { href: string; icon: React.ReactNode; label: string; hoverColor: string }) {
  return (
    <Tooltip title={label} placement="bottom" arrow>
      <Box
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: C.textMuted,
          fontSize: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 30, height: 30,
          borderRadius: '7px',
          transition: 'color 0.2s ease, background 0.2s ease',
          textDecoration: 'none',
          '&:hover': {
            color: hoverColor,
            background: 'rgba(255,255,255,0.05)',
          },
        }}
      >
        {icon}
      </Box>
    </Tooltip>
  )
}

// ─── Top Bar ──────────────────────────────────────────────────────────────────
function TopBar() {
  return (
    <Box component="header" sx={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 200,
      background: 'linear-gradient(180deg, #0f0f0f 0%, #0a0a0a 100%)',
      borderBottom: `1px solid ${C.border}`,
      display: 'flex',
      alignItems: 'center',
      px: '5px',
      justifyContent: 'space-between',
      userSelect: 'none',
    }}>
      {/* Left — traffic lights + name */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

        <Typography sx={{
          fontSize: '0.8125rem',
          fontWeight: 700,
          background: `linear-gradient(90deg, ${C.text} 0%, ${C.textSub} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Shivkumar Chauhan
        </Typography>
      </Box>

      {/* Right — socials */}
      <Box sx={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
        <SocialLink href="#" icon={<FaLinkedin />} label="LinkedIn" hoverColor="#0A66C2" />
        <SocialLink href="#" icon={<FaGithub />} label="GitHub" hoverColor={C.text} />
        <SocialLink href="#" icon={<SiLeetcode />} label="LeetCode" hoverColor="#FFA116" />
        <SocialLink href="#" icon={<SiHackerrank />} label="HackerRank" hoverColor="#2EC866" />
      </Box>
    </Box>
  )
}

// ─── Mac Dock ─────────────────────────────────────────────────────────────────
function MacDock({
  activeTab, scrollToTab,
}: { activeTab: string; scrollToTab: (id: string) => void }) {
  const [hovIdx, setHovIdx] = useState<number | null>(null)

  const scale = (i: number) => {
    if (hovIdx === null) return 1
    const d = Math.abs(i - hovIdx)
    return d === 0 ? 1.45 : d === 1 ? 1.22 : d === 2 ? 1.08 : 1
  }
  const lift = (i: number) => {
    if (hovIdx === null) return 0
    const d = Math.abs(i - hovIdx)
    return d === 0 ? -10 : d === 1 ? -5 : d === 2 ? -2 : 0
  }

  return (
    <Box component="nav" sx={{
      position: 'fixed',
      bottom: { xs: '8px', md: '5px' },
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 200,
      maxWidth: '98vw',
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: { xs: '6px', sm: '12px', md: '20px' },
        px: { xs: '8px', sm: '12px', md: '14px' },
        pt: '5px',
        pb: '5px',
        borderRadius: '15px',
        minWidth: 'max-content',
        background: 'linear-gradient(170deg, #232323 0%, #151515 60%, #0e0e0e 100%)',
        border: `1px solid ${C.borderMid}`,
        boxShadow: [
          '0 30px 70px rgba(0,0,0,0.85)',
          '0 10px 24px rgba(0,0,0,0.5)',
          '0 1px 0 rgba(255,255,255,0.055) inset',
        ].join(', '),
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '12%',
          right: '12%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)',
          borderRadius: '1px',
        },
      }}>
        {TABS.map(({ id, label, Icon }, idx) => {
          const active = activeTab === id

          return (
            <Tooltip
              key={id}
              title={<Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>{label}</Typography>}
              placement="top"
              arrow
            >
              <Box
                onClick={() => scrollToTab(id)}
                onMouseEnter={() => setHovIdx(idx)}
                onMouseLeave={() => setHovIdx(null)}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer',
                  transform: `scale(${scale(idx)}) translateY(${lift(idx)}px)`,
                  transformOrigin: 'bottom center',
                  transition: 'transform 0.17s cubic-bezier(0.34,1.56,0.64,1)',
                }}
              >
                {/* Icon box */}
                <Box sx={{
                  width: { xs: 40, sm: 44, md: 48 },
                  height: { xs: 40, sm: 44, md: 48 },
                  borderRadius: { xs: '11px', sm: '12px', md: '13px' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  background: active
                    ? `linear-gradient(145deg, ${C.accentBright} 0%, ${C.accent} 50%, ${C.accentDim} 100%)`
                    : 'linear-gradient(155deg, #2c2c2c 0%, #1c1c1c 50%, #141414 100%)',
                  border: active
                    ? `1px solid rgba(249,115,22,0.45)`
                    : `1px solid #303030`,
                  boxShadow: active
                    ? [`0 0 22px ${C.accentGlow}`, '0 6px 14px rgba(0,0,0,0.6)', '0 1px 0 rgba(255,255,255,0.18) inset'].join(', ')
                    : ['0 4px 12px rgba(0,0,0,0.5)', '0 1px 0 rgba(255,255,255,0.055) inset'].join(', '),
                  transition: 'all 0.2s ease',
                  // Gloss sheen
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0, left: '10%', right: '10%',
                    height: '45%',
                    background: active
                      ? 'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)'
                      : 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)',
                    borderRadius: '0 0 50% 50%',
                    zIndex: 0,
                  },
                }}>
                  <Icon sx={{
                    fontSize: { xs: 19, sm: 21, md: 22 },
                    color: active ? '#fff' : C.textSub,
                    transition: 'color 0.2s',
                    position: 'relative',
                    zIndex: 1,
                  }} />
                </Box>
              </Box>
            </Tooltip>
          )
        })}
      </Box>
    </Box>
  )
}

// ─── Tab Registry ─────────────────────────────────────────────────────────────
const TAB_COMPONENTS: Record<string, React.ComponentType> = {
  about: About,
  experience: Experience,
  projects: Projects,
  skills: Skills,
  education: Education,
  certifications: Certifications,
  contact: Contact,
}

// ─── Main Content ─────────────────────────────────────────────────────────────
function MainContent({ activeTab }: { activeTab: string }) {
  const [displayTab, setDisplayTab] = useState(activeTab)
  const [prevTab, setPrevTab] = useState<string | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (activeTab === displayTab) return
    if (timerRef.current) clearTimeout(timerRef.current)
    setPrevTab(displayTab)
    setDisplayTab(activeTab)
    timerRef.current = setTimeout(() => setPrevTab(null), 400)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])

  const currentIdx = TABS.findIndex(t => t.id === activeTab)
  const ghosts = [1, 2].map(offset => ({
    id: TABS[(currentIdx + offset) % TABS.length].id,
    depth: offset,
  }))

  const ActiveComponent = TAB_COMPONENTS[displayTab]
  const PrevComponent = prevTab ? TAB_COMPONENTS[prevTab] : null

  return (
    <Box sx={{
      position: 'fixed',
      top: '40px',
      left: 0,
      right: 0,
      bottom: '60px',
      p: '10px',
      pb: '4px',
    }}>
      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>

        {/* Card stack ghost cards */}
        {[...ghosts].reverse().map(({ id, depth }) => (
          <Box
            key={id}
            sx={{
              position: 'absolute',
              top: `${-depth * 7}px`,
              left: `${depth * 5}px`,
              right: `${depth * 5}px`,
              bottom: `${depth * 6}px`,
              borderRadius: '14px',
              background: `linear-gradient(145deg, ${C.surface2}, ${C.surface})`,
              border: `1px solid ${C.border}`,
              opacity: depth === 1 ? 0.6 : 0.35,
              zIndex: 10 - depth,
            }}
          />
        ))}

        {/* Outgoing card — animates to the back */}
        {PrevComponent && (
          <Box
            key={`out-${prevTab}`}
            sx={{
              position: 'absolute',
              inset: 0,
              zIndex: 11,
              borderRadius: '14px',
              border: `1px solid ${C.borderMid}`,
              overflow: 'hidden',
              background: C.bg,
              pointerEvents: 'none',
              boxShadow: '0 8px 40px rgba(0,0,0,0.7)',
              animation: 'cardGoBack 0.38s cubic-bezier(0.4,0,0.6,1) forwards',
              '@keyframes cardGoBack': {
                '0%': { opacity: 1, transform: 'scale(1) translateY(0px)' },
                '50%': { opacity: 0.5, transform: 'scale(0.92) translateY(16px)' },
                '100%': { opacity: 0, transform: 'scale(0.84) translateY(36px)' },
              },
            }}
          >
            <PrevComponent />
          </Box>
        )}

        {/* Incoming card — rises to the front */}
        <Box
          key={`in-${displayTab}`}
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 12,
            borderRadius: '14px',
            border: `1px solid ${C.borderMid}`,
            overflow: 'hidden',
            overflowY: 'auto',
            background: C.bg,
            boxShadow: '0 8px 40px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.4)',
            animation: 'cardComeForward 0.38s cubic-bezier(0.34,1.2,0.64,1) forwards',
            '@keyframes cardComeForward': {
              '0%': { opacity: 0, transform: 'scale(0.86) translateY(32px)' },
              '55%': { opacity: 0.9, transform: 'scale(1.01) translateY(-3px)' },
              '100%': { opacity: 1, transform: 'scale(1) translateY(0px)' },
            },
          }}
        >
          <ActiveComponent />
        </Box>

      </Box>
    </Box>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState('about')

  const scrollToTab = useCallback((id: string) => {
    setActiveTab(id)
  }, [setActiveTab])

  return (
    <Box sx={{
      minHeight: '100vh',
      background: C.bgGradient,
      color: C.text,
      fontFamily: [
        '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"',
        '"Segoe UI"', 'system-ui', 'sans-serif',
      ].join(', '),
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      overflowX: 'hidden',
    }}>
      <TopBar />
      <MainContent activeTab={activeTab} />
      <MacDock activeTab={activeTab} scrollToTab={scrollToTab} />
    </Box>
  )
}
