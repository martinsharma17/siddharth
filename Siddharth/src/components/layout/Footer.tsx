import { Facebook, Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
    return (
        <footer className="pt-20 pb-10 bg-[#1a1a1a] text-white border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#f2ae1b] flex items-center justify-center rounded-xl rotate-3 shadow-lg shadow-yellow-500/10">
                                <span className="text-black font-black text-xl">S</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40 leading-none">Siddhartha</span>
                                <span className="text-lg font-black tracking-tight leading-none text-white">Bank Limited</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-xs">
                            Empowering your digital banking journey with secure and innovative financial solutions. Registered and regulated by Nepal Rastra Bank.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/60">Services</h4>
                        <div className="flex flex-col gap-3">
                            {['Online Onboarding', 'Credit Cards', 'Personal Loans', 'Fixed Deposits'].map(link => (
                                <a key={link} href="#" className="text-sm text-gray-400 hover:text-[#f2ae1b] transition-colors font-bold uppercase tracking-widest text-[10px]">{link}</a>
                            ))}
                        </div>
                    </div>

                    {/* Social & Contact */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/60">Connect With Us</h4>
                        <div className="flex items-center gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#f2ae1b] hover:text-black transition-all group">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/martinsharma17/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all group">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all group">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                        <div className="pt-2">
                            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Support Line</p>
                            <p className="text-lg font-black text-[#f2ae1b]">+977 1 5970020</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[10px] text-gray-600 font-black tracking-widest uppercase text-center md:text-left">
                        &copy; {new Date().getFullYear()} Siddhartha Bank Limited. Nepal Rastra Bank "A" Class Financial Institution.
                    </p>
                    <div className="flex items-center gap-8">
                        {['Privacy Policy', 'Terms of Use', 'Security'].map(link => (
                            <a key={link} href="#" className="text-[9px] text-gray-500 hover:text-white font-black uppercase tracking-widest transition-colors">{link}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
