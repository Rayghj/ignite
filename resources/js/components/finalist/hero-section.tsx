import { Star, Trophy, Megaphone } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="w-full mx-auto space-y-6 text-[#550017]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-4 border-b-2 border-[#550017]/10">
                <div className="space-y-3 max-w-3xl">
                    <div className="flex items-center gap-2 md:gap-4">
                        <Star className="w-6 h-6 md:w-8 md:h-8 fill-[#550017] text-[#550017]" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase">
                            FINALIST ITEACH 2026
                        </h1>
                    </div>
                    <p className="font-jakarta text-gray-700 text-base md:text-lg leading-relaxed">
                        Congratulations to the selected teams advancing to the final round of the Innovative
                        Technology-Enhanced Teaching Challenge!
                    </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm border border-amber-200/50 rounded-xl p-5 shadow-sm flex flex-col items-center justify-center min-w-60 w-full md:w-fit self-end md:self-auto">
                    <Trophy className="w-12 h-12 text-amber-400 fill-amber-400 mb-2" />
                    <span className="text-xs font-black tracking-widest text-[#550017] uppercase">
                        STAGE 04 CLEAR
                    </span>
                    <span className="text-[11px] font-bold tracking-wider text-gray-500 uppercase mt-0.5">
                        PLAYTEST & JURY
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-none p-5 shadow-sm border border-amber-100/40">
                    <span className="block text-xs font-extrabold tracking-widest text-[#550017] uppercase mb-1">
                        ANNOUNCED
                    </span>
                    <span className="text-xl md:text-2xl font-black text-[#550017]">
                        20 OKT 2026
                    </span>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-none p-5 shadow-sm border border-amber-100/40">
                    <span className="block text-xs font-extrabold tracking-widest text-[#550017] uppercase mb-1">
                        STAGE LEVEL
                    </span>
                    <span className="text-xl md:text-2xl font-black text-gray-500">
                        QUALIFYING RESULTS
                    </span>
                </div>
            </div>

            {/* salah cuyy wkwkw */}
            {/* <div className="bg-amber-100/40 border border-gray-400/40 border-l-8 rounded-none p-5 md:p-6 space-y-2">
                <div className="flex items-center gap-2">
                    <Megaphone className="w-4 h-4 text-[#550017]" />
                    <span className="text-xs font-black tracking-widest uppercase text-[#550017]">
                        KETERANGAN RESMI DEWAN JURI
                    </span>
                </div>
                <p className="font-jakarta text-sm md:text-base text-gray-800 leading-relaxed">
                    Selamat kepada tim yang berhasil terseleksi. Seluruh tim yang tercantum berhak melanjutkan ke babak final demonstrasi interaktif luring di Kampus UPI Bandung pada tanggal 12–14 November 2026.
                </p>
            </div> */}
        </section>
    );
}