
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggler() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const isDark = resolvedTheme === 'dark';
    return (
        <motion.div whileTap={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <Button
                variant="ghost"
                aria-label="Toggle theme"
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className="text-gray-200"
            >
                {isDark ? <Sun className={"w-5 h-5 text-yellow-300"} /> : <Moon className="w-5 h-5 text-gray-400" />}
            </Button>
        </motion.div>
    );
}
