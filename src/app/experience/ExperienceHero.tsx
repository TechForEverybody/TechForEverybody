import React from 'react';
import { Badge } from '@/components/ui/badge';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.1,
            duration: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 200, damping: 5 }
    }
};

export default function ExperienceHero() {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative overflow-hidden bg-gradient-to-r from-background to-secondary  py-20"
        >
            <motion.div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute -top-32 -left-32 w-64 h-64 bg-background/30 rounded-full"
                    animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                />
            </motion.div>

            <div className="relative container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-8">
                <motion.div variants={itemVariants} className="w-full lg:w-1/2 space-y-5">
                    <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold leading-tight">
                        &quot;Experience is the best teacher, guiding us toward excellence&quot;
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-lg md:text-xl">
                        With over three years of hands-on experience as a Full-Stack Engineer, I’ve turned ideas
                        into performant and accessible web applications. From crafting React UIs from Figma
                        designs, to architecting Node.js backends, and integrating AI/ML models, my journey
                        is defined by continuous learning and impactful projects
                    </motion.p>
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                        {['Python','Javascript','React.js', 'Next.js', 'Node.js', 'TypeScript', 'AI/ML', 'DevOps'].map(tag => (
                            <motion.div key={tag} whileHover={{ scale: 1.1 }}>
                                <Badge className="px-3 py-1">{tag}</Badge>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
                <motion.div variants={itemVariants} className="w-full lg:w-1/2 flex justify-center">
                    <motion.img
                        src="/experience.png"
                        alt="Experience Illustration"
                        className="max-w-sm md:max-w-md"
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 5 }}
                        whileHover={{ scale: 1.05 }}
                    />
                </motion.div>
            </div>
        </motion.section>
    );
}
