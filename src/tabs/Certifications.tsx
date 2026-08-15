import { Box, Typography } from '@mui/material'
import { WorkspacePremiumOutlined, StarOutlined, VerifiedOutlined, CodeOutlined, AutoAwesomeOutlined, OpenInNewOutlined } from '@mui/icons-material'

const PINK = '#ec4899'
const DEEP = '#9d174d'
const INK = '#1a0a14'
const WHITE = '#ffffff'


const CERT_SECTIONS = [
    {
        title: 'Specialization Certifications',
        icon: <StarOutlined sx={{ fontSize: 14, color: WHITE }} />,
        certs: [
            { title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2024', link: '#' },
            { title: 'Google Cloud Professional Data Engineer', issuer: 'Google Cloud', year: '2024', link: '#' },
            { title: 'Azure AI Engineer Associate', issuer: 'Microsoft', year: '2023', link: '#' },
        ],
    },
    {
        title: 'Professional Certifications',
        icon: <VerifiedOutlined sx={{ fontSize: 14, color: WHITE }} />,
        certs: [
            { title: 'Oracle Certified Java Programmer', issuer: 'Oracle', year: '2023', link: '#' },
            { title: 'Meta Front-End Developer', issuer: 'Meta (Coursera)', year: '2023', link: '#' },
            { title: 'Certified Kubernetes Administrator', issuer: 'CNCF', year: '2023', link: '#' },
        ],
    },
    {
        title: 'Skill Proof Certifications',
        icon: <CodeOutlined sx={{ fontSize: 14, color: WHITE }} />,
        certs: [
            { title: 'React — The Complete Guide', issuer: 'Udemy', year: '2023', link: '#' },
            { title: 'Data Structures & Algorithms', issuer: 'Coursera', year: '2022', link: '#' },
            { title: 'Docker & Kubernetes Fundamentals', issuer: 'Linux Foundation', year: '2022', link: '#' },
            { title: 'TypeScript Masterclass', issuer: 'Udemy', year: '2022', link: '#' },
        ],
    },
    {
        title: 'Other Certifications',
        icon: <AutoAwesomeOutlined sx={{ fontSize: 14, color: WHITE }} />,
        certs: [
            { title: 'SQL for Data Science', issuer: 'Google', year: '2021', link: '#' },
            { title: 'Agile Project Management', issuer: 'Google', year: '2022', link: '#' },
            { title: 'Git & GitHub Mastery', issuer: 'Atlassian', year: '2021', link: '#' },
        ],
    },
]

export default function Certifications() {
    return (
        <Box sx={{
            position: 'relative',
            background: `linear-gradient(160deg, ${DEEP} 0%, ${PINK} 50%, #f9a8d4 100%)`,
            px: { xs: 2, md: 15 },
            py: { xs: 5, md: 8 },
            overflow: 'hidden',
        }}>
           
            {/* Decorative circles */}
            <Box sx={{ position: 'absolute', top: '-5%', right: '-3%', width: 250, height: 250, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.08)', pointerEvents: 'none' }} />
            <Box sx={{ position: 'absolute', bottom: '-8%', left: '-4%', width: 200, height: 200, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.06)', pointerEvents: 'none' }} />

            <Box sx={{ maxWidth: 1400, mx: 'auto', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: { xs: '28px', md: '42px' } }}>
                    <Box sx={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: INK, borderRadius: '20px', px: '14px', py: '5px', mb: '14px',
                        boxShadow: `0 8px 24px rgba(26,10,20,0.5)`,
                    }}>
                        <WorkspacePremiumOutlined sx={{ fontSize: 13, color: PINK }} />
                        <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            Credentials
                        </Typography>
                    </Box>
                    <Typography sx={{
                        fontSize: { xs: '1.8rem', md: '2.5rem' }, fontWeight: 900,
                        color: WHITE, letterSpacing: '-0.03em', lineHeight: 1.1,
                        textShadow: '0 2px 20px rgba(157,23,77,0.6)',
                    }}>
                        Certifications
                    </Typography>
                    <Typography sx={{ fontSize: '0.78rem', fontWeight: 500, color: 'rgba(255,255,255,0.85)', mt: '8px', maxWidth: 380, mx: 'auto', lineHeight: 1.5 }}>
                        Industry-recognized credentials across cloud, development, and engineering.
                    </Typography>
                </Box>

                {/* Sections */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
                    {CERT_SECTIONS.map(({ title, icon, certs }, si) => (
                        <Box key={si}>
                            {/* Section title */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '12px' }}>
                                <Box sx={{
                                    width: 30, height: 30, borderRadius: '8px',
                                    background: INK,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: `3px 3px 0 rgba(0,0,0,0.3)`,
                                }}>
                                    {icon}
                                </Box>
                                <Typography sx={{ fontSize: '0.85rem', fontWeight: 800, color: WHITE, textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
                                    {title}
                                </Typography>
                            </Box>

                            {/* Cards grid */}
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                                gap: '12px',
                            }}>
                                {certs.map(({ title: certTitle, issuer, year, link }, ci) => (
                                    <Box key={ci} sx={{
                                        p: '16px',
                                        background: WHITE,
                                        borderRadius: '16px',
                                        border: `2px solid ${INK}`,
                                        boxShadow: `5px 5px 0 ${INK}`,
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.15s ease',
                                        '&:hover': {
                                            transform: 'translate(2px, 2px)',
                                            boxShadow: `3px 3px 0 ${INK}`,
                                            '& .card-shimmer': { opacity: 1 },
                                        },
                                    }}>
                                      
                                        

                                        <Box sx={{ pl: '10px' }}>
                                            <Typography sx={{ fontSize: '0.76rem', fontWeight: 700, color: INK, lineHeight: 1.3, mb: '3px' }}>
                                                {certTitle}
                                            </Typography>
                                            <Typography sx={{ fontSize: '0.66rem', fontWeight: 500, color: '#6b7280', mb: '10px' }}>
                                                {issuer}
                                            </Typography>

                                            {/* Bottom: year + link */}
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box sx={{
                                                    px: '8px', py: '3px', borderRadius: '6px',
                                                    background: PINK, display: 'inline-flex',
                                                }}>
                                                    <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, color: WHITE }}>
                                                        {year}
                                                    </Typography>
                                                </Box>
                                                <Box component="a" href={link} target="_blank" rel="noopener" sx={{
                                                    display: 'flex', alignItems: 'center', gap: '3px',
                                                    textDecoration: 'none', color: PINK,
                                                    '&:hover': { color: DEEP },
                                                }}>
                                                    <OpenInNewOutlined sx={{ fontSize: 12 }} />
                                                    <Typography sx={{ fontSize: '0.6rem', fontWeight: 700 }}>
                                                        Verify
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
