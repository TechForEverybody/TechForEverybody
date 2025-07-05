'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {   Linkedin,  Github } from 'lucide-react';

const social = [
    { icon: Github, url: 'https://github.com/TechForEverybody' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/shiva995/' },
];

export default function HomeHero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen  overflow-hidden" style={{
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
        }}>
            <div className="mx-auto container flex flex-col-reverse md:flex-row items-center justify-between md:pt-20 xl:pt-10 px-4">
                <motion.div className="w-full md:w-1/2 text-center md:text-left" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                    <p className="text-xl font-medium text-primary mb-2">Hello, I&rsquo;m</p>
                    <h1 className="text-5xl xl:text-9xl md:text-7xl font-extrabold text-foreground mb-4">Shivkumar Chauhan</h1>
                    <h2 className="text-2xl md:text-4xl font-semibold text-teal-400 mb-6">Full-Stack Engineer & Data Engineer</h2>
                    <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-full mx-auto md:mx-0">I build interactive and scalable web applications with AI-powered features, exploring cloud-native architectures to deliver seamless user experiences.</p>
                    <div className="flex flex-col sm:flex-row items-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant='default' size="lg">Connect</Button>
                        </motion.div>
                        <div className="flex space-x-4">
                            {social.map(({ icon: Icon, url }, idx) => (
                                <motion.a key={idx} href={url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="text-foreground">
                                    <Icon className="w-6 h-6" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
                <motion.div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0 relative" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                    <img src="/laptop.svg" alt="" />

                </motion.div>
            </div>
        </section>
    );
}
