import { motion } from 'framer-motion';
import { BookOpen, Code2, GraduationCap } from 'lucide-react';

const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "TypeScript", "Tailwind CSS", "Python", "Git & GitHub"
];

const education = [
    {
        school: "Chitkara University, Punjab",
        degree: "Bachelor of Engineering - BE, CSE (AI/ML)",
        period: "Jul 2025 - Aug 2029",
    },
     {
        school: "S.D. Senior Secondary School",
        degree: "Grade: 12th",
        period: "Apr 2023 - Mar 2025",
    },
    {
        school: "Saupin's School",
        degree: "Grade: 10th",
        period: "Apr 2011 - Mar 2023",
    },
   
];

export const About = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-16"
                >
                    About Me<span className="text-primary-500">.</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-8 h-1 bg-primary-500 inline-block rounded-full" />
                            The Journey
                        </h3>
                        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                            <p>
                                I am Prateek, a developer and creative thinker who believes that code is more than just syntax—it’s the tool I use to shape the future. Currently pursuing my B.Tech in CSE (AI/ML) at Chitkara University, I don't just build websites; I craft digital experiences that leave a lasting impact.
                            </p>
                            <p className="border-l-2 border-primary-500 pl-4 py-1 italic text-white/90">
                                "For me, silence is not emptiness—it's where focus lives. I believe in letting the quality of my work execute my vision."
                            </p>
                            <p>
                                From leading hackathon teams to perfecting the smallest UI details, every project is a testament to my obsession with excellence. I am driven by a simple philosophy: Learn relentlessly, build passionately, and create things that matter.
                            </p>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Code2 className="text-primary-500" />
                                Technical Arsenal
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:border-primary-500 hover:text-primary-500 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <GraduationCap className="text-primary-500" />
                            Education
                        </h3>
                        <div className="relative border-l border-white/10 ml-3 space-y-12">
                            {education.map((edu, index) => (
                                <div key={index} className="relative pl-12">
                                    <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-primary-500 rounded-full" />
                                    <h4 className="text-xl font-bold text-white mb-1">{edu.school}</h4>
                                    <p className="text-primary-500 font-medium mb-1">{edu.degree}</p>
                                    <p className="text-white/40 text-sm">{edu.period}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 blur-[60px] group-hover:bg-primary-500/30 transition-colors" />
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <BookOpen className="text-primary-500" />
                                Currently Learning
                            </h3>
                            <ul className="space-y-3 text-white/70">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary-500 mt-1">▹</span>
                                    Sharpening React and UI/UX fundamentals
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary-500 mt-1">▹</span>
                                    Building personal projects and digital products
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary-500 mt-1">▹</span>
                                    Connecting with like-minded creators
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
