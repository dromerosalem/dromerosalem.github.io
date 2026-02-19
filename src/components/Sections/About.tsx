import { motion } from 'framer-motion';
import profilePic from '../../assets/me.png';
import { CodeWindow } from '../UI/CodeWindow';

export const About = () => {
    const skillCategories = [
        {
            title: "AI & Orchestration",
            skills: ['Claude Code', 'Antigravity', 'Stitch', 'Figma', 'Cursor', 'SKILL.md', 'LLM', 'MCP']
        },
        {
            title: "Cloud & Infrastructure",
            skills: ['Supabase', 'Firebase', 'Vercel', 'Google Console']
        },
        {
            title: "Core Engineering",
            skills: ['TypeScript', 'REACT', 'JavaScript', 'Vite', 'DJANGO', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'NODE.js', 'GIT']
        }
    ];

    return (
        <section id="about" className="py-16 md:py-24 relative overflow-x-hidden w-full">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
                    <div className="w-full overflow-hidden">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 gold-gradient-text tracking-tighter uppercase font-sans">About Me</h2>
                        <div className="space-y-4 md:space-y-6 text-zinc-400 leading-relaxed text-base md:text-lg mb-10 md:mb-12">
                            <p className="text-white font-medium">
                                I build high-performance systems. As a <span className="text-gold-accent italic">Software Orchestrator</span>, I design the architectures and AI infrastructure that allow digital products to scale without breaking.
                            </p>
                            <p>
                                My work is rooted in <span className="text-white">R&D</span> and <span className="text-white">optimization</span>. I solve complex integration problems and build the structural foundations for global platforms. I don't just ship features: I engineer resilient, future-proof ecosystems.
                            </p>
                            <p>
                                I focus on technical excellence and measurable results. Performance is my baseline, and scalability is my standard.
                            </p>
                        </div>

                        {/* Skills Categories */}
                        <div className="space-y-8">
                            {skillCategories.map((category, idx) => (
                                <div key={idx} className="space-y-4">
                                    <div className="flex items-center gap-4 w-full overflow-hidden">
                                        <h3 className="text-gold-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap flex-shrink-0">
                                            {category.title}
                                        </h3>
                                        <div className="h-[1px] min-w-[20px] flex-grow bg-gradient-to-r from-gold-accent/30 to-transparent" />
                                    </div>
                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {category.skills.map((skill) => (
                                            <motion.div
                                                key={skill}
                                                whileHover={{ scale: 1.05, borderColor: 'rgba(180, 148, 90, 0.4)' }}
                                                className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 text-[10px] md:text-xs font-mono transition-colors duration-300 hover:text-white whitespace-nowrap"
                                            >
                                                {skill}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative space-y-8 mt-12 lg:mt-0 w-full overflow-hidden">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gold-accent/5 rounded-3xl blur-3xl opacity-50" />
                            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                                <img
                                    src={profilePic}
                                    alt="David Romero Salem"
                                    className="w-full h-full object-cover object-[center_20%] grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                        </div>

                        {/* Technical Snippet */}
                        <div className="w-full">
                            <CodeWindow />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
