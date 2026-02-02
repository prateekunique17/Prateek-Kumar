import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-dark-100 py-12 border-t border-white/10 relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold tracking-tighter text-white">
                        Prateek<span className="text-primary-500">.</span>
                    </h3>
                    <p className="text-white/60 text-sm mt-2">
                        Building digital experiences that matter.
                    </p>
                </div>

                <div className="flex items-center space-x-6">
                    <a
                        href="https://github.com/prateekunique17"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-primary-500 hover:scale-110 transition-all duration-300"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/prateek-kumar-a31ab5323/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-primary-500 hover:scale-110 transition-all duration-300"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://x.com/hackwithprateek"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-primary-500 hover:scale-110 transition-all duration-300"
                    >
                        <Twitter size={20} />
                    </a>
                    <a
                        href="mailto:prateekunique17@gmail.com"
                        className="text-white/60 hover:text-primary-500 hover:scale-110 transition-all duration-300"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
