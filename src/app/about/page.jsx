import Container from '@/Layout/Container';
import React from 'react';
import { 
    ShieldCheck, Zap, Globe, Heart, Rocket, 
    Code2, ArrowRight, MousePointerClick, 
    Layers, CheckCircle2, Github 
} from 'lucide-react';

const About = () => {
    return (
        <Container>
            {/* SECTION 1: INTRODUCTION (The Vision) */}
            <div className="py-16 md:py-28 text-center border-b border-gray-100">
                <span className="px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold uppercase tracking-wider">
                    ✨ Our Philosophy
                </span>
                <h2 className="mt-6 text-4xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                    Why Choose <span className="text-indigo-600">NexTools?</span>
                </h2>
                <p className="mt-8 text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                    Built for professionals who demand speed, security, and reliability. 
                    We’ve engineered a suite that removes technical friction from your daily workflow.
                </p>
            </div>

            {/* SECTION 2: CORE FEATURES (Multi-colored Grid) */}
            <div className="py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 - Indigo */}
                    <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-indigo-200 group-hover:rotate-6 transition-transform">
                            <Zap size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Lightning Fast</h3>
                        <p className="text-slate-600 leading-relaxed">Sub-second processing on all tools. Optimized algorithms ensure you never wait for results.</p>
                    </div>

                    {/* Feature 2 - Emerald */}
                    <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-200 group-hover:rotate-6 transition-transform">
                            <ShieldCheck size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Privacy First</h3>
                        <p className="text-slate-600 leading-relaxed">Zero data logging. All processing happens client-side or through secure, ephemeral servers.</p>
                    </div>

                    {/* Feature 3 - Rose */}
                    <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-rose-200 hover:bg-white hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl bg-rose-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-rose-200 group-hover:rotate-6 transition-transform">
                            <Heart size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Always Free</h3>
                        <p className="text-slate-600 leading-relaxed">Core features remain free forever. No hidden costs, no premium tiers, no paywalls.</p>
                    </div>
                </div>
            </div>

            {/* SECTION 3: TECH STACK & STATS (Dark Accent) */}
            <div className="mb-24 p-8 md:p-16 rounded-[3rem] bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-md text-center lg:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Modern Tech Stack</h3>
                    <p className="text-slate-400 mb-8 text-lg">
                        Built with cutting-edge web technologies like React, Tailwind, and Next.js for maximum performance.
                    </p>
                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 hover:bg-indigo-400 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
                        <Github size={20} /> View Github
                    </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                    {[
                        { val: "30+", label: "Tools", color: "text-indigo-400" },
                        { val: "0%", label: "Data Logs", color: "text-emerald-400" },
                        { val: "24/7", label: "Uptime", color: "text-rose-400" },
                        { val: "∞", label: "Free Use", color: "text-amber-400" }
                    ].map((stat, i) => (
                        <div key={i} className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                            <p className={`text-3xl md:text-4xl font-bold ${stat.color}`}>{stat.val}</p>
                            <p className="text-xs md:text-sm text-slate-400 uppercase tracking-widest mt-2 font-semibold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* SECTION 4: HOW IT WORKS (Amber Flow) */}
            <div className="py-16 md:py-24">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Simple workflow for <br /> <span className="text-amber-500 italic underline decoration-wavy underline-offset-8">complex tasks.</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 font-bold bg-slate-100 px-4 py-2 rounded-xl">
                        <MousePointerClick size={20} />
                        <span>3-Step Process</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                    {[
                        { step: "01", icon: <Layers />, title: "Select Tool", desc: "Pick from our specialized utilities designed for modern web needs.", color: "bg-amber-100 text-amber-600" },
                        { step: "02", icon: <Code2 />, title: "Input Data", desc: "Paste your link or code safely. Everything is handled securely.", color: "bg-violet-100 text-violet-600" },
                        { step: "03", icon: <CheckCircle2 />, title: "Get Result", desc: "Instant high-fidelity output ready to be used in your project.", color: "bg-emerald-100 text-emerald-600" }
                    ].map((item, i) => (
                        <div key={i} className="group">
                            <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-2xl font-black mb-8 group-hover:scale-110 transition-transform duration-300`}>
                                {item.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                <span className="text-slate-300 font-mono text-sm">{item.step}</span>
                                {item.title}
                            </h4>
                            <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* SECTION 5: GLOBAL TRUST (Soft Violet Theme) */}
            <div className="py-16 md:py-28">
                <div className="bg-violet-50 rounded-[3.5rem] p-8 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200/40 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <div className="flex items-center gap-2 mb-8">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center overflow-hidden shadow-sm">
                                            <img src={`https://i.pravatar.cc/150?u=${i+20}`} alt="user" />
                                        </div>
                                    ))}
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-black text-violet-600 uppercase tracking-tighter">Trusted Worldwide</p>
                                    <p className="text-xs text-slate-500 font-bold">Join 10k+ Developers</p>
                                </div>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1]">
                                Built for the <br /> 
                                <span className="text-violet-600 italic">Open Web.</span>
                            </h2>
                            <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed max-w-lg font-medium">
                                NexTools is a commitment to accessible utilities. We ensure lightning-fast access even on low-bandwidth connections.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-sm border border-violet-100 hover:shadow-md transition-shadow cursor-default">
                                    <Globe size={20} className="text-violet-500" />
                                    <span className="text-slate-700 font-bold">Universal Support</span>
                                </div>
                                <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-sm border border-violet-100 hover:shadow-md transition-shadow cursor-default">
                                    <Rocket size={20} className="text-violet-500" />
                                    <span className="text-slate-700 font-bold">Ultra Latency</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative group perspective-1000">
                            <div className="bg-white p-8 rounded-[2rem] shadow-2xl shadow-violet-200/60 border border-violet-100 transform group-hover:rotate-x-2 transition-all duration-700">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">1</div>
                                        <div className="h-4 w-3/4 bg-slate-100 rounded-full animate-pulse"></div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">2</div>
                                        <div className="h-4 w-full bg-slate-50 rounded-full"></div>
                                    </div>
                                    <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                                        <div className="flex gap-2">
                                            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white"><Code2 size={18}/></div>
                                            <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center text-white"><Zap size={18}/></div>
                                        </div>
                                        <div className="h-10 w-28 bg-slate-100 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-[10px] font-mono font-bold text-slate-400 uppercase">Processing...</div>
                                    </div>
                                </div>
                            </div>
                            {/* Stats Badge */}
                            <div className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-5 rounded-[2rem] shadow-2xl hidden md:block border-4 border-white">
                                <p className="text-xs font-mono text-emerald-400 mb-1">● System Status</p>
                                <p className="text-sm font-bold">100% Operational</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;