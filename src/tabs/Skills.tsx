import { Box, Typography, keyframes } from '@mui/material'
import type { IconType } from 'react-icons'
import {
    SiPython, SiTypescript, SiJavascript, SiPostgresql,
    SiMongodb, SiMysql, SiRedis, SiFirebase, SiReact, SiNextdotjs,
    SiHtml5, SiTailwindcss, SiMui, SiNodedotjs, SiSpringboot,
    SiGraphql, SiExpress, SiDocker, SiKubernetes, SiLinux, SiNginx,
    SiTensorflow, SiJira, SiGit, SiFigma, SiPostman,
    SiIntellijidea, SiArduino, SiRaspberrypi,
    SiRos, SiFlutter, SiKotlin, SiSwift, SiIonic, SiElectron, SiDotnet,
    SiC, SiDart, SiGo, SiRust, SiPhp, SiSupabase, SiSqlite, SiMariadb,
    SiBootstrap, SiShadcnui,
} from 'react-icons/si'
import { FaJava, FaAws, FaCss3Alt, FaAndroid, FaApple, FaMobileAlt, FaDesktop, FaMicrosoft } from 'react-icons/fa'
import { DiVisualstudio } from 'react-icons/di'
import { TbApi, TbBrain, TbMessageChatbot, TbNetwork, TbCpu, TbAntenna, TbCode, TbRobot, TbDatabase, TbServer } from 'react-icons/tb'

const ORANGE = '#f97316'
const INK = '#1a0f06'

const glow = keyframes`0%,100%{box-shadow:0 0 8px ${ORANGE}44}50%{box-shadow:0 0 20px ${ORANGE}88}`

interface Skill { name: string; icon: IconType; color: string }
interface SkillGroup { category: string; catIcon: IconType; skills: Skill[]; experienceInLine?: string }

const SKILL_GROUPS: SkillGroup[] = [
    {
        category: 'Programming Languages', catIcon: TbCode,
        experienceInLine: "Number of Languages I know is more but Logic in each is One",
        skills: [
            { name: 'Java', icon: FaJava, color: '#e76f00' },
            { name: 'Python', icon: SiPython, color: '#3776ab' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
            { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
            { name: 'C++', icon: SiC, color: '#00599c' },
            { name: 'SQL', icon: TbDatabase, color: '#336791' },
            { name: 'C', icon: SiC, color: '#a8b9cc' },
            { name: 'Dart', icon: SiDart, color: '#00b4ab' },
            { name: 'Go', icon: SiGo, color: '#00add8' },
            { name: 'Rust', icon: SiRust, color: '#dea584' },
            { name: 'C#', icon: FaMicrosoft, color: '#239120' },
            { name: 'Kotlin', icon: SiKotlin, color: '#7f52ff' },
            { name: 'Swift', icon: SiSwift, color: '#f05138' },
            { name: 'PHP', icon: SiPhp, color: '#777bb4' },
        ],
    },
    {
        category: 'Databases', catIcon: SiMongodb,
        experienceInLine: "Databases I worked are more, But I know the Actual Data flow and how to manage it",
        skills: [
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
            { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
            { name: 'Redis', icon: SiRedis, color: '#dc382d' },
            { name: 'Firebase', icon: SiFirebase, color: '#ffca28' },
            { name: 'Supabase', icon: SiSupabase, color: '#3ecf8e' },
            { name: 'SQLite', icon: SiSqlite, color: '#003b57' },
            { name: 'MS SQL Server', icon: TbServer, color: '#cc2927' },
            { name: 'MariaDB', icon: SiMariadb, color: '#003545' },
            { name: 'Cosmos DB', icon: FaMicrosoft, color: '#0089d6' }, 
        ],
    },
    {
        category: 'Data Science & AI', catIcon: TbBrain,
        experienceInLine: 'From classical ML to Agentic AI — building intelligent systems end-to-end',
        skills: [
            { name: 'Machine Learning', icon: TbBrain, color: '#ff6f61' },
            { name: 'LLMs', icon: TbRobot, color: '#412991' },
            { name: 'NLP', icon: TbMessageChatbot, color: '#10b981' },
            { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
            { name: 'OpenAI', icon: TbBrain, color: '#412991' },
            // RAG, LangChain, HuggingFace, PyTorch, Genrative AI, Agentic AI, Computer Vision, 
            { name: 'PyTorch', icon: TbBrain, color: '#ee4c2c' },
            { name: 'HuggingFace', icon: TbBrain, color: '#f58220' },
            { name: 'LangChain', icon: TbBrain, color: '#f58220' },
            { name: 'Generative AI', icon: TbBrain, color: '#f58220' },
            { name: 'Agentic AI', icon: TbBrain, color: '#f58220' },
            { name: 'Computer Vision', icon: TbBrain, color: '#f58220' },
            { name: 'RAG', icon: TbBrain, color: '#f58220' },
        ],
    },  
    {
        category: 'Frontend Development', catIcon: SiReact,
        experienceInLine: 'Pixel-perfect, responsive UIs with modern frameworks and design systems',
        skills: [
            { name: 'React', icon: SiReact, color: '#61dafb' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
            { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
            { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
            { name: 'Tailwind', icon: SiTailwindcss, color: '#06b6d4' },
            { name: 'Material UI', icon: SiMui, color: '#007fff' },
            { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
            { name: 'Vanilla JS', icon: SiJavascript, color: '#f7df1e' },
            { name: 'Shadcn/ui', icon: SiShadcnui, color: '#000000' },
            { name: 'Reactbits', icon: SiReact, color: '#61dafb' },
            
        ],
    },
    {
        category: 'Backend Development', catIcon: SiNodedotjs,
        experienceInLine: 'Scalable APIs and microservices powering production systems',
        skills: [
            { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
            { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
            { name: 'REST APIs', icon: TbApi, color: '#ff6b35' },
            { name: 'GraphQL', icon: SiGraphql, color: '#e10098' },
            { name: 'Express.js', icon: SiExpress, color: '#000000' },
            { name: 'Microservices', icon: TbNetwork, color: '#8b5cf6' },
        ],
    },
    {
        category: 'Mobile App Development', catIcon: FaMobileAlt,
        experienceInLine: 'Cross-platform and native mobile apps for Android & iOS',
        skills: [
            { name: 'Flutter', icon: SiFlutter, color: '#02569b' },
            { name: 'React Native', icon: SiReact, color: '#61dafb' },
            { name: 'Android', icon: FaAndroid, color: '#3ddc84' },
            { name: 'iOS', icon: FaApple, color: '#000000' },
            { name: 'Kotlin', icon: SiKotlin, color: '#7f52ff' },
            { name: 'Swift', icon: SiSwift, color: '#f05138' },
            { name: 'Ionic', icon: SiIonic, color: '#3880ff' },
        ],
    },
    {
        category: 'Desktop App Development', catIcon: FaDesktop,
        experienceInLine: 'Rich desktop experiences across Windows, macOS, and Linux',
        skills: [
            { name: 'Electron', icon: SiElectron, color: '#47848f' },
            { name: '.NET', icon: SiDotnet, color: '#512bd4' },
            { name: 'JavaFX', icon: FaJava, color: '#e76f00' },
            { name: 'Flutter Desktop', icon: SiFlutter, color: '#02569b' },
            { name: 'React Desktop', icon: SiReact, color: '#61dafb' },
        ],
    },
    {
        category: 'Cloud Platforms', catIcon: FaAws,
        experienceInLine: 'Cloud-native deployments with containers and CI/CD pipelines',
        skills: [
            { name: 'AWS', icon: FaAws, color: '#ff9900' },
            { name: 'Docker', icon: SiDocker, color: '#2496ed' },
            { name: 'Kubernetes', icon: SiKubernetes, color: '#326ce5' },
            { name: 'Linux', icon: SiLinux, color: '#fcc624' },
            { name: 'Nginx', icon: SiNginx, color: '#009639' },
        ],
    },

    {
        category: 'Management Tools', catIcon: SiJira,
        experienceInLine: 'Tools that keep the dev workflow sharp and collaborative',
        skills: [
            { name: 'Jira', icon: SiJira, color: '#0052cc' },
            { name: 'Git', icon: SiGit, color: '#f05032' },
            { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
            { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
            { name: 'VS Code', icon: DiVisualstudio, color: '#007acc' },
            { name: 'IntelliJ', icon: SiIntellijidea, color: '#000000' },
        ],
    },
    {
        category: 'Robotics', catIcon: TbCpu,
        experienceInLine: 'Hardware and software combination with IoT and embedded systems give more power to the machines',
        skills: [
            { name: 'ROS', icon: SiRos, color: '#22314e' },
            { name: 'Arduino', icon: SiArduino, color: '#00979d' },
            { name: 'Raspberry Pi', icon: SiRaspberrypi, color: '#a22846' },
            { name: 'IoT', icon: TbAntenna, color: '#0ea5e9' },
            { name: 'Embedded C', icon: TbCpu, color: '#6366f1' },
        ],
    },
]

export default function Skills() {
    return (
        <Box sx={{
            position: 'relative',
            background: `linear-gradient(165deg, #ea580c 0%, ${ORANGE} 40%, #fb923c 100%)`,
            px: { xs: 2, md: 15 },
            py: { xs: 5, md: 8 },
            overflow: 'hidden',
        }}>
            {/* Circuit-like decorative lines */}
            {/* <Box sx={{
                position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.08,
                backgroundImage: `
                    linear-gradient(90deg, ${INK} 1px, transparent 1px),
                    linear-gradient(${INK} 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
            }} /> */}
            <Box sx={{ position: 'absolute', top: '10%', right: '5%', width: 140, height: 140, borderRadius: '50%', border: `2px dashed rgba(255,255,255,0.15)`, pointerEvents: 'none' }} />
            <Box sx={{ position: 'absolute', bottom: '8%', left: '3%', width: 90, height: 90, borderRadius: '50%', border: `2px dashed rgba(255,255,255,0.12)`, pointerEvents: 'none' }} />

            <Box sx={{ maxWidth: 1400, mx: 'auto', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: { xs: '28px', md: '40px' } }}>
                    <Typography sx={{
                        fontSize: { xs: '1.7rem', md: '2.4rem' }, fontWeight: 900,
                        color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1,
                        textShadow: `0 2px 12px rgba(26,15,6,0.3)`,
                    }}>
                        Skills & Expertise
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.85)', mt: '6px', maxWidth: 440, mx: 'auto', lineHeight: 1.5 }}>
                        Full-stack engineering across cloud, AI, and hardware — built through real-world product delivery.
                    </Typography>
                </Box>

                {/* Bento grid */}
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(12, 1fr)' },
                    gridAutoRows: 'auto',
                    gap: '12px',
                }}>
                    {SKILL_GROUPS.map(({ category, catIcon: CatIcon, skills, experienceInLine }, idx) => {
                        // Bento span mapping for 10 sections across 12-col grid
                        const spanMap: Record<number, number> = {
                            0: 4, // Programming Languages
                            1: 4, // Databases
                            2: 4, // Frontend
                            3: 6, // Backend
                            4: 6, // Cloud
                            5: 4, // Mobile
                            6: 4, // Desktop
                            7: 4, // AI
                            8: 5, // Management
                            9: 7, // Robotics
                        }
                        const colSpan = spanMap[idx] ?? 4
                        return (
                        <Box key={category} sx={{
                            gridColumn: { md: `span ${colSpan}`, sm: 'span 1', xs: 'span 1' },
                            background: INK,
                            borderRadius: '16px',
                            p: '16px',
                            border: `1.5px solid rgba(255,255,255,0.08)`,
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                border: `1.5px solid ${ORANGE}`,
                                transform: 'translateY(-2px)',
                                boxShadow: `0 12px 32px rgba(26,15,6,0.5)`,
                            },
                            '&:hover .cat-icon-box': { animation: `${glow} 2s infinite` },
                        }}>
                            {/* Subtle corner accent */}
                            <Box sx={{
                                position: 'absolute', top: 0, right: 0,
                                width: 60, height: 60,
                                background: `radial-gradient(circle at top right, ${ORANGE}22, transparent 70%)`,
                                pointerEvents: 'none',
                            }} />

                            {/* Category header */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '14px' }}>
                                <Box className="cat-icon-box" sx={{
                                    width: 32, height: 32, borderRadius: '8px',
                                    background: `linear-gradient(135deg, ${ORANGE}, #ea580c)`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    <CatIcon style={{ fontSize: 16, color: '#fff' }} />
                                </Box>
                                <Typography sx={{ fontSize: '0.76rem', fontWeight: 700, color: '#fff', letterSpacing: '0.01em' }}>
                                    {category}
                                </Typography>
                            </Box>

                            {experienceInLine && (
                                <Typography sx={{ fontSize: '0.62rem', fontWeight: 500, color: 'rgba(255,255,255,0.45)', mb: '10px', mt: '-6px', lineHeight: 1.4, fontStyle: 'italic' }}>
                                    "{experienceInLine}"
                                </Typography>
                            )}

                            {/* Skills as icon chips */}
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {skills.map(({ name, icon: Icon, color }) => (
                                    <Box key={name} sx={{
                                        display: 'flex', alignItems: 'center', gap: '6px',
                                        px: '10px', py: '6px', borderRadius: '9px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        transition: 'all 0.18s ease',
                                        // animation: `${float} ${6 + sIdx * 0.4}s ease-in-out infinite`,
                                        // animationDelay: `${sIdx * 0.2}s`,
                                        cursor: 'default',
                                        '&:hover': {
                                            background: 'rgba(255,255,255,0.1)',
                                            borderColor: color,
                                            boxShadow: `0 0 12px ${color}44`,
                                            transform: 'scale(1.05)',
                                        },
                                        // minWidth: "80px"
                                    }}>
                                        <Icon style={{ fontSize: 14, color }} />
                                        <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', whiteSpace: 'nowrap' }}>
                                            {name}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    )})}
                </Box>
            </Box>
        </Box>
    )
}
