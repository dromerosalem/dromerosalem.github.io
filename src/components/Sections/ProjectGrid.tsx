import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import { GlassCard } from '../UI/GlassCard';

interface ProjectGridProps {
    activeCategory: 'raw' | 'vibe';
}

export const ProjectGrid = ({ activeCategory }: ProjectGridProps) => {
    const filteredProjects = projects.filter(p => p.category === activeCategory);

    return (
        <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto px-4"
        >
            <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <GlassCard {...project} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
};
