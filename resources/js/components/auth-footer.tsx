import { ShieldCheck } from 'lucide-react';

export default function AuthFooter() {
    return (
        <footer className="relative bottom-0 left-0 z-40 w-full border-t-2 border-[#1E1E1E] bg-[#FAF5E9] md:absolute">
            <div className="mx-auto flex flex-col items-center justify-between gap-4 px-4 py-4 text-center md:flex-row md:px-12 md:text-left">
                <div className="space-y-1">
                    <div className="flex items-center justify-center space-x-2 md:justify-start">
                        <span className="font-grotesk text-lg font-extrabold tracking-wide text-[#550017] md:text-xl">
                            IGNITE 2026
                        </span>
                        <span className="rounded-none border border-[#1E1E1E] bg-[#E8C248] px-2 py-0.5 text-[10px] font-bold tracking-widest text-[#1E1E1E] uppercase shadow-[1px_1px_0px_0px_#1E1E1E] md:text-xs">
                            OFFICIAL HUB
                        </span>
                    </div>
                    <p className="font-jakarta text-xs text-[#574143] md:text-sm">
                        Diselenggarakan secara resmi oleh Universitas Pendidikan
                        Indonesia (UPI) & Komite Isola Game Jam.
                    </p>
                </div>

                <div className="space-y-1 text-center md:text-right">
                    <div className="flex items-center justify-center space-x-1.5 text-[10px] font-bold tracking-wider text-[#574143] uppercase md:justify-end md:text-xs">
                        <ShieldCheck className="h-3.5 w-3.5 shrink-0 stroke-[2.5]" />
                        <span className="break-all md:break-normal">
                            256-BIT ENCRYPTED CREDENTIALS • STRICT ACADEMIC
                            INTEGRITY
                        </span>
                    </div>
                    <p className="font-jakarta text-xs text-gray-600 md:text-sm">
                        © 2026 IGNITE Arcade Portal. Hak Cipta Dilindungi
                        Undang-Undang.
                    </p>
                </div>
            </div>
        </footer>
    );
}
