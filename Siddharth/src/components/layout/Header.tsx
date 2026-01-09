export function Header() {
    return (
        <div className="relative bg-[#f2ae1b] pt-10 pb-20 px-6 md:px-16 text-black">
            {/* More detailed pattern */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm66-3c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-46-45c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm54 24c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM57 6c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM24 30c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM15 77c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm56 0c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM16 5c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm10 0c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm20 0c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-10 0c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm40 0c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-10 0c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm40 0c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-10 0c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black flex items-center justify-center rounded-xl rotate-3 shadow-xl transform transition-transform hover:rotate-0">
                            <span className="text-white font-black text-2xl tracking-tighter">S</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-black tracking-[0.2em] uppercase opacity-60 leading-none">Siddhartha</span>
                            <span className="text-xl font-black tracking-tight leading-none">Bank Limited</span>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] text-black drop-shadow-sm">Account <br className="hidden md:block" />Opening</h1>
                        <div className="flex items-center gap-2 pt-2">
                            <div className="h-[2px] w-8 bg-black"></div>
                            <p className="text-black/60 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] leading-none">Digital Gateway</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-1.5 opacity-80 border-l-2 border-black/10 pl-6 hidden md:block group cursor-help">
                    <p className="text-[10px] font-black uppercase tracking-widest leading-none text-black/50 group-hover:text-black transition-colors">Assistance</p>
                    <p className="text-xl font-black leading-none group-hover:scale-105 transition-transform">+977 1 5970020</p>
                </div>
            </div>
        </div>
    )
}
