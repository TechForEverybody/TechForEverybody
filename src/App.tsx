import React, { useState, useCallback, useRef } from 'react'
import { Box, Tooltip, Typography, IconButton } from '@mui/material'
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
  MenuOutlined,
  CloseOutlined,
  StarOutlined,
} from '@mui/icons-material'
import { C } from './theme'
import About from './tabs/About'
import Experience from './tabs/Experience'
import Projects from './tabs/Projects'
import Skills from './tabs/Skills'
import Education from './tabs/Education'
import Certifications from './tabs/Certifications'
import Contact from './tabs/Contact'
import FeaturedSection from './tabs/FeaturedSection'

const TABS = [
  { id: 'about', label: 'About', Icon: PersonOutlined },
  { id: 'featured', label: 'Featured', Icon: StarOutlined },
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
function TopBar({ onToggleSidebar, sidebarOpen }: { onToggleSidebar: () => void; sidebarOpen: boolean }) {
  return (
    <Box component="header" sx={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 200,
      background: 'transparent',
      backdropFilter: 'blur(40px)',
      display: 'flex',
      alignItems: 'center',
      px: '5px',
      justifyContent: 'space-between',
      userSelect: 'none',
    }}>
      {/* Left — menu toggle (mobile) + name */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <IconButton
          onClick={onToggleSidebar}
          sx={{
            display: { xs: 'flex', md: 'none' },
            color: C.textSub,
            p: '4px',
            '&:hover': { color: C.text },
          }}
        >
          {sidebarOpen ? <CloseOutlined sx={{ fontSize: 18 }} /> : <MenuOutlined sx={{ fontSize: 18 }} />}
        </IconButton>

        <Typography sx={{
          fontSize: '0.8125rem',
          fontWeight: 700,
          background: `white`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Shivkumar Chauhan
        </Typography>
      </Box>

      {/* Right — socials */}
      <Box sx={{ display: 'flex', gap: '2px', alignItems: 'center', color:"white" }}>
        <SocialLink href="#" icon={<FaLinkedin color="white" />} label="LinkedIn" hoverColor="#0A66C2" />
        <SocialLink href="#" icon={<FaGithub color="white" />} label="GitHub" hoverColor={C.text} />
        <SocialLink href="#" icon={<SiLeetcode color="white" />} label="LeetCode" hoverColor="#FFA116" />
        <SocialLink href="#" icon={<SiHackerrank color="white" />} label="HackerRank" hoverColor="#2EC866" />
      </Box>
    </Box>
  )
}

// ─── Left Dock ────────────────────────────────────────────────────────────────
function LeftDock({
  activeTab, scrollToTab, open, onClose,
}: { activeTab: string; scrollToTab: (id: string) => void; open: boolean; onClose: () => void }) {
  const [hovIdx, setHovIdx] = useState<number | null>(null)

  const scale = (i: number) => {
    if (hovIdx === null) return 1
    const d = Math.abs(i - hovIdx)
    return d === 0 ? 1.35 : d === 1 ? 1.15 : 1
  }

  return (
    <>
      {/* Backdrop for mobile */}
      <Box
        onClick={onClose}
        sx={{
          display: { xs: open ? 'block' : 'none', md: 'none' },
          position: 'fixed',
          inset: 0,
          zIndex: 199,
          background: 'rgba(0,0,0,0.5)',
        }}
      />
      <Box component="nav" sx={{
        position: 'fixed',
        left: { xs: '4px', md: '8px' },
        top: '50%',
        transform: {
          xs: open ? 'translateY(-50%) translateX(0)' : 'translateY(-50%) translateX(-120%)',
          md: 'translateY(-50%)',
        },
        transition: 'transform 0.25s ease',
        zIndex: 200,
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: '6px', md: '10px' },
          py: { xs: '8px', md: '10px' },
          px: '5px',
          borderRadius: '15px',
          background: 'linear-gradient(170deg, #232323 0%, #151515 60%, #0e0e0e 100%)',
          border: `1px solid ${C.borderMid}`,
          boxShadow: [
            '0 30px 70px rgba(0,0,0,0.85)',
            '0 10px 24px rgba(0,0,0,0.5)',
            '0 1px 0 rgba(255,255,255,0.055) inset',
          ].join(', '),
        }}>
          {TABS.map(({ id, label, Icon }, idx) => {
            const active = activeTab === id

            return (
              <Tooltip
                key={id}
                title={<Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>{label}</Typography>}
                placement="right"
                arrow
              >
                <Box
                  onClick={() => { scrollToTab(id); onClose() }}
                  onMouseEnter={() => setHovIdx(idx)}
                  onMouseLeave={() => setHovIdx(null)}
                  sx={{
                    cursor: 'pointer',
                    transform: `scale(${scale(idx)})`,
                    transformOrigin: 'center',
                    transition: 'transform 0.17s cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                >
                  <Box sx={{
                    width: { xs: 36, md: 42 },
                    height: { xs: 36, md: 42 },
                    borderRadius: '11px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    background: active
                      ? `linear-gradient(145deg, ${C.accentBright} 0%, ${C.accent} 50%, ${C.accentDim} 100%)`
                      : 'linear-gradient(155deg, #2c2c2c 0%, #1c1c1c 50%, #141414 100%)',
                    border: active
                      ? `1px solid rgba(22,147,249,0.45)`
                      : `1px solid #303030`,
                    boxShadow: active
                      ? [`0 0 22px ${C.accentGlow}`, '0 6px 14px rgba(0,0,0,0.6)', '0 1px 0 rgba(255,255,255,0.18) inset'].join(', ')
                      : ['0 4px 12px rgba(0,0,0,0.5)', '0 1px 0 rgba(255,255,255,0.055) inset'].join(', '),
                    transition: 'all 0.2s ease',
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
                      fontSize: { xs: 18, md: 20 },
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
    </>
  )
}

// ─── Tab Registry ─────────────────────────────────────────────────────────────
const TAB_COMPONENTS: Record<string, React.ComponentType> = {
  featured: FeaturedSection,
  about: About,
  experience: Experience,
  projects: Projects,
  skills: Skills,
  education: Education,
  certifications: Certifications,
  contact: Contact,
}

// ─── Main Content (all sections scrollable) ──────────────────────────────────
function MainContent({ scrollRef, onScroll }: { scrollRef: React.RefObject<HTMLDivElement | null>; onScroll: () => void }) {
  return (
    <Box
      ref={scrollRef}
      onScroll={onScroll}
      sx={{
        position: 'fixed',
        top: '0',
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: 'auto',
        scrollBehavior: 'smooth',
      }}
    >
      {TABS.map(({ id }) => {
        const Component = TAB_COMPONENTS[id]
        return (
          <Box key={id} id={`section-${id}`} sx={{ }}>
            <Component />
          </Box>
        )
      })}
    </Box>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState('about')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const toggleSidebar = useCallback(() => setSidebarOpen(p => !p), [])
  const closeSidebar = useCallback(() => setSidebarOpen(false), [])

  const scrollToTab = useCallback((id: string) => {
    const el = document.getElementById(`section-${id}`)
    if (el && scrollRef.current) {
      scrollRef.current.scrollTo({ top: el.offsetTop - scrollRef.current.offsetTop, behavior: 'smooth' })
    }
  }, [])

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const scrollTop = container.scrollTop
    let current = 'about'
    for (const { id } of TABS) {
      const el = document.getElementById(`section-${id}`)
      if (el && el.offsetTop - container.offsetTop <= scrollTop + 150) {
        current = id
      }
    }
    setActiveTab(current)
  }, [])

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
      <TopBar onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <LeftDock activeTab={activeTab} scrollToTab={scrollToTab} open={sidebarOpen} onClose={closeSidebar} />
      <MainContent scrollRef={scrollRef} onScroll={handleScroll} />
    </Box>
  )
}
