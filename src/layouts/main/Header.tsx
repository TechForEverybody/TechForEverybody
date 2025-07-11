'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ThemeToggler from '../../components/ThemeToggler';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetClose,
} from '@/components/ui/sheet';
import { Menu, Briefcase, Code, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { title: 'Experience', path: '/experience', icon: <Briefcase className="w-5 h-5" /> },
    { title: 'Projects', path: '/projects', icon: <Code className="w-5 h-5" /> },
    { title: 'Certifications', path: '/certifications', icon: <Award className="w-5 h-5" /> },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className=" shadow-lg fixed w-full backdrop-blur-3xl top-0 z-50 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
                <motion.div
                    className="flex items-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/" className="flex items-center">
                        <Image src="/TechForEverybody.png" alt="Logo" width={40} height={40} />
                        <motion.span
                            className="ml-2 text-2xl font-extrabold tracking-tight"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="text-blue-400 dark:text-blue-500">Tech</span>
                            <span className="text-green-400 dark:text-green-500">For</span>
                            <span className="text-pink-400 dark:text-pink-500">Everybody</span>
                        </motion.span>
                    </Link>
                </motion.div>

                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map(({ title, path }) => (
                        <motion.div
                            key={title}
                            whileHover={{ y: -2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Link
                                href={path}
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:outline-2 hover:outline-primary py-2 rounded-sm px-3"
                            >
                                {title}
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div whileTap={{ scale: 0.95 }}>
                        <Link href="/connect" className="inline-block">
                            <Button variant="secondary" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                Connect
                            </Button>
                        </Link>
                    </motion.div>
                    <ThemeToggler />
                </nav>
                <div className="md:hidden flex items-center">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" aria-label="Open menu" className="text-foreground">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <AnimatePresence>
                            {open && (
                                <SheetContent side='left'>
                                    <motion.div
                                        initial={{ x: '100%' }}
                                        animate={{ x: 0 }}
                                        exit={{ x: '100%' }}
                                        transition={{ type: 'tween', duration: 0.3 }}
                                        className="bg-background-secondary text-foreground h-full p-6 flex flex-col"
                                    >
                                        <SheetHeader>
                                            <SheetTitle className="text-xl font-semibold">Menu</SheetTitle>
                                            <SheetClose asChild/>
                                        </SheetHeader>
                                        <div className="flex flex-col space-y-6 mt-8">
                                            {navItems.map(({ title, path, icon }) => (
                                                <Link
                                                    key={title}
                                                    href={path}
                                                    onClick={() => setOpen(false)}
                                                    className="flex items-center space-x-2 text-lg hover:text-foreground transition-colors duration-200"
                                                >
                                                    {icon}
                                                    <span>{title}</span>
                                                </Link>
                                            ))}
                                            <motion.div whileTap={{ scale: 0.95 }}>
                                                <Link
                                                    href="/connect"
                                                    onClick={() => setOpen(false)}
                                                    className="inline-block w-full"
                                                >
                                                    <Button variant="secondary" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                                        Connect
                                                    </Button>
                                                </Link>
                                            </motion.div>
                                            <div className="mt-auto">
                                                <ThemeToggler />
                                            </div>
                                        </div>
                                    </motion.div>
                                </SheetContent>
                            )}
                        </AnimatePresence>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
