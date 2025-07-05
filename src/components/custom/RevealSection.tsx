import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function RevealSection({ children }: { children: React.ReactNode }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            {children}
        </motion.div>
    );
}
