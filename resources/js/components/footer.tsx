import { Link, router } from '@inertiajs/react';

export default function Footer() {
    const upiClicked = () => {
        router.visit('https://upi.edu');
    }

    return (
        <footer className="flex flex-col min-h-[35vh] w-full justify-between bg-[#7B0828] text-[#FAF5E9] px-6 sm:px-12 pt-10 pb-8 border-t-4 border-[#1E1E1E]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start my-auto">
                <div className="lg:col-span-5 space-y-2">
                    <h2 className="font-grotesk text-2xl md:text-3xl font-extrabold text-[#E8C248] tracking-wider uppercase">
                        IGNITE '26
                    </h2>
                    <h3 className="font-grotesk text-xl md:text-2xl font-bold tracking-tight text-white leading-tight">
                        Education & Digital Innovation Competition
                    </h3>
                    <p className="font-jakarta italic text-sm md:text-base text-[#D8B4BC] tracking-wide pt-2 md:pt-4">
                        "Ignite Ideas, Inspire Innovation, Shape the Future."
                    </p>
                </div>
                <div className="lg:col-span-4 space-y-3">
                    <h4 className="text-xs md:text-sm lg:text-base font-bold tracking-widest text-[#E8C248] uppercase pb-2 border-b-2 border-[#960b2e]">
                        PETA TURNAMEN
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-sm pt-1">
                        <div className="flex flex-col space-y-2">
                            <Link href="#beranda" className="font-jakarta text-sm md:text-base text-gray-200 hover:text-white hover:underline transition-colors">
                                Beranda
                            </Link>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Link href="#i-teach" className="font-jakarta text-sm md:text-base text-gray-200 hover:text-white hover:underline transition-colors">
                                I-Teach
                            </Link>
                            <Link href="#i-game" className="font-jakarta text-sm md:text-base text-gray-200 hover:text-white hover:underline transition-colors">
                                I-Game
                            </Link>
                            <Link href="#pendaftaran-i-teach" className="font-jakarta text-sm md:text-base text-gray-200 hover:text-white hover:underline transition-colors">
                                Pendaftaran I-Teach
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-3 space-y-3">
                    <h4 className="text-xs md:text-sm lg:text-base font-bold tracking-widest text-[#E8C248] uppercase pb-2 border-b-2 border-[#960b2e]">
                        MARKAS PANITIA
                    </h4>
                    <p className="font-jakarta text-sm md:text-base text-gray-200 leading-relaxed">
                        Diselenggarakan oleh {` `}
                        <Link
                            href="https://upi.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-white hover:underline cursor-pointer"
                        >
                            Universitas Pendidikan Indonesia
                        </Link>
                    </p>
                    <div className="text-[11px] md:text-xs font-bold tracking-wider space-y-1.5 text-[#FFB2B9] pt-1 uppercase">
                        <p>
                            EMAIL: halo@ignite-competition.id
                        </p>
                        <p>
                            DISCORD: IGNITE Arcade Server #2026
                        </p>
                        <p>
                            LOKASI: Bandung, Jawa Barat
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-12 pt-6 border-t-2 border-dashed border-[#1E1E1E] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-bold tracking-widest uppercase text-gray-300">
                <div>
                    2026 IGNITE INDONESIA. ALL RIGHTS RESERVED.
                </div>
                <div className="flex items-center space-x-6">
                    <Link href="#privasi" className="hover:text-white hover:underline transition-colors">
                        PRIVASI
                    </Link>
                    <Link href="#ketentuan" className="hover:text-white hover:underline transition-colors">
                        KETENTUAN
                    </Link>
                </div>
            </div>
        </footer>
    );
}