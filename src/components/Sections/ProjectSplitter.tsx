import { motion } from 'framer-motion';
import { type ProjectCategory } from '../../data/projects';

interface ProjectSplitterProps {
    activeCategory: ProjectCategory;
    setActiveCategory: (category: ProjectCategory) => void;
}

export const ProjectSplitter = ({ activeCategory, setActiveCategory }: ProjectSplitterProps) => {
    return (
        <div className="flex justify-center mb-12">
            <div className="glass-panel p-1 flex gap-1 rounded-full relative bg-white/5">
                <button
                    onClick={() => setActiveCategory('raw')}
                    className={`relative px-8 py-3 rounded-full text-sm font-bold tracking-widest transition-all duration-300 z-10 ${activeCategory === 'raw' ? 'text-black' : 'text-zinc-500 hover:text-white hover:scale-105'
                        }`}
                >
                    RAW CODE
                    {activeCategory === 'raw' && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-white rounded-full -z-10 mix-blend-difference"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div className="absolute inset-0 bg-white blur-md opacity-50" />
                        </motion.div>
                    )}
                </button>
                <button
                    onClick={() => setActiveCategory('vibe')}
                    className={`relative px-8 py-3 rounded-full text-sm font-bold tracking-widest transition-all duration-300 z-10 ${activeCategory === 'vibe' ? 'text-black' : 'text-zinc-500 hover:text-white hover:scale-105'
                        }`}
                >
                    VIBE CODE
                    {activeCategory === 'vibe' && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-white rounded-full -z-10 mix-blend-difference"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div className="absolute inset-0 bg-white blur-md opacity-50" />
                        </motion.div>
                    )}
                </button>
            </div>
        </div>
    );
};
