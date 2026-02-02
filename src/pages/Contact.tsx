import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { Magnetic } from '../components/Magnetic';
import { Terminal } from '../components/Terminal';

export const Contact = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-8"
                    >
                        Let's build something <span className="text-primary-500">amazing</span>.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8 text-lg text-white/60 mb-12"
                    >
                        <p>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary-500">
                                    <Mail />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40">Email Me</p>
                                    <a href="mailto:prateekunique17@gmail.com" className="text-white hover:text-primary-500 transition-colors">prateekunique17@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary-500">
                                    <MapPin />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40">Based In</p>
                                    <p className="text-white">Chandigarh, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6 pt-8">
                            {[
                                { Icon: Linkedin, href: "https://www.linkedin.com/in/prateek-kumar-a31ab5323/" },
                                { Icon: Github, href: "https://github.com/prateekunique17" },
                                { Icon: Twitter, href: "https://x.com/hackwithprateek" }
                            ].map(({ Icon, href }, i) => (
                                <Magnetic key={i}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white text-white hover:text-black transition-all duration-300"
                                    >
                                        <Icon size={20} />
                                    </a>
                                </Magnetic>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center"
                >
                    <Terminal />
                </motion.div>
            </div>
        </div>
    );
};
