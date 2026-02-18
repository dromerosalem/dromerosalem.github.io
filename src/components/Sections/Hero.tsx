import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="z-10"
            >
                <motion.span
                    initial={{ opacity: 0, letterSpacing: '0.1em' }}
                    animate={{ opacity: 1, letterSpacing: '0.3em' }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="text-gold-accent font-mono text-[10px] sm:text-xs font-bold mb-8 block uppercase"
                >
                    Full Stack Developer • Integration Engineer • System Designer
                </motion.span>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-none">
                    <span className="text-white">David Romero</span>
                    <br />
                    <span className="liquid-text block mt-1">Salem</span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed mx-auto mb-12">
                    Acting as a <span className="text-white font-medium border-b border-gold-accent/30">Software Orchestrator</span> across
                    high-performance <span className="text-gold-accent">R&D</span> initiatives. Scaling complex architectures through
                    modern infrastructure and predictive AI systems.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass-button-primary w-full sm:w-auto"
                    >
                        Explore Ecosystem
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass-button w-full sm:w-auto"
                    >
                        Let's Connect
                    </motion.a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.5, duration: 1.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold-accent/50 to-transparent" />
            </motion.div>
        </section>
    );
};
