import { motion } from 'framer-motion';
import profilePic from '../../assets/me.png';

export const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 gold-gradient-text tracking-tighter uppercase font-sans">About Me</h2>
                        <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
                            <p className="text-white font-medium">
                                My curiosity to discover the 'WHY' led me to have a wide experience in different fields.
                            </p>
                            <p>
                                Graduated of Bioscience I was always curious about to know how our DNA works. I had the chance to work in different clinical laboratories and chemical laboratories starting as laboratory assistant to end up leading full teams in a medical centre.
                            </p>
                            <p>
                                Experience in Finance and Banking, I wanted to know how the money flows around the society and the direct impact that has into my relatives and me. I started to work as a representative of a financial institution to end up writing internal compliance full procedures for my department for well known investment bank.
                            </p>
                            <p>
                                But something that was following me since my youngest days and never left is the Fascination for Technologies in computers the curiosity always led me to be that friend that everyone has that fix your computer when something goes wrong, and not because I knew how to fix it but because the solution always is out there on internet waiting for you to help you, so I just google it!.
                            </p>
                            <p>
                                I decided to make my fascination a profession.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {[
                                'REACT', 'JavaScript', 'DJANGO', 'Python', 'PostgreSQL', 'MongoDB',
                                'express', 'BABEL', 'NODE.js', 'WEBPACK', 'HEROKU', 'SASS',
                                'GIT', 'VS CODE', 'GitHub', 'HTML', 'CSS', 'NPM'
                            ].map((skill) => (
                                <div key={skill} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 text-sm font-mono text-center">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gold-accent/5 rounded-3xl blur-3xl" />
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                            <img
                                src={profilePic}
                                alt="David Romero Salem"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>

                        {/* Experience Highlights */}
                        <div className="mt-8 space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <span className="text-gold-accent font-bold block text-sm mb-1 uppercase tracking-wider">Education</span>
                                <p className="text-white text-sm">Bsc Computing & IT and Design @ The Open University</p>
                                <p className="text-white text-sm">Software Engineering Immersive @ General Assembly</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <span className="text-gold-accent font-bold block text-sm mb-1 uppercase tracking-wider">Top Experience</span>
                                <p className="text-white text-sm">Corporate Client Onboarding Associate @ Citibank Europe</p>
                                <p className="text-white text-sm">2nd Level IT Support @ Diebold Nixdorf</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
