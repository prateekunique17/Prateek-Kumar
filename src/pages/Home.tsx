import { motion } from 'framer-motion';
import { ArrowRight, Code, Terminal, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Magnetic } from '../components/Magnetic';

export const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden">
            {/* Background Abstract Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 mb-6 text-primary-500 font-mono tracking-wide"
                >
                    <Terminal size={16} />
                    <span>v1.0.0 // Prateek Kumar</span>
                </motion.div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
                    <div className="overflow-hidden">
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        >
                            Creative
                        </motion.div>
                    </div>
                    <div className="overflow-hidden flex items-center gap-4">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "auto" }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            className="h-16 md:h-24 w-0 bg-primary-500 hidden md:block" // Decorative block
                        />
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                            className="text-white/40 italic font-serif"
                        >
                            &
                        </motion.div>
                    </div>
                    <div className="overflow-hidden">
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                        >
                            <span className="text-gradient">Developer</span>
                        </motion.div>
                    </div>
                </h1>

                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 leading-relaxed"
                >
                    I build digital experiences that blend <span className="text-white font-medium">precision engineering</span> with <span className="text-white font-medium">artistic fluidity</span>.
                    Currently crafting high-performance web applications and exploring AI.
                </motion.p>

                <div className="flex flex-wrap gap-6">
                    <Magnetic>
                        <Link
                            to="/portfolio"
                            className="group relative px-8 py-4 bg-primary-500 text-white font-bold rounded-full overflow-hidden flex items-center gap-2"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            <span className="relative z-10">View Work</span>
                            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Magnetic>

                    <Magnetic>
                        <Link
                            to="/about"
                            className="group px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors flex items-center gap-2"
                        >
                            <span>About Me</span>
                        </Link>
                    </Magnetic>
                </div>

                {/* Tech Stack Marquee / Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-24 pt-12 border-t border-white/5"
                >
                    <div className="flex gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Simple visual indicators for stack */}
                        <div className="flex items-center gap-2"><Code size={20} /> React</div>
                        <div className="flex items-center gap-2"><Terminal size={20} /> TypeScript</div>
                        <div className="flex items-center gap-2"><Cpu size={20} /> Next.js</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
