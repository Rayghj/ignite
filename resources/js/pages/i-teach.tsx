import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    ChevronDown,
    Clock3,
    Download,
    KeyRound,
    Medal,
    Play,
    Presentation,
    ScanSearch,
    Users,
} from 'lucide-react';
import { useState } from 'react';
import { login } from '@/routes';

const schedule = [
    {
        label: '01. REGISTRATION',
        date: 'AUG 15 - OCT 20',
        icon: FlagIcon,
        featured: true,
    },
    {
        label: '02. THEME REVEAL',
        date: 'OCT 24 • 18:00 WIB',
        icon: KeyRound,
    },
    {
        label: '03. 48TH SPRINT',
        date: 'OCT 24 - OCT 26',
        icon: Clock3,
    },
    {
        label: '04. PLAYTEST & JURY',
        date: 'OCT 27 - NOV 01',
        icon: ScanSearch,
    },
    {
        label: '05. FINAL PITCH',
        date: 'NOV 05',
        icon: Presentation,
    },
    {
        label: '06. AWARD CEREMONY',
        date: 'NOV 08',
        icon: Medal,
    },
];

const faqs = [
    'Apakah anggota tim harus berasal dari program studi / fakultas yang sama?',
    'Seberapa jauh tingkat kematangan prototype MVP yang diwajibkan saat babak penyisihan?',
    'Apakah panitia menanggung biaya transportasi dan akomodasi finalis ke Bandung?',
    'Apakah karya yang diikutsertakan boleh menggunakan aset gratis atau open-source?',
    'Apakah diperbolehkan mendaftar di cabang lomba ”iTeach” dan ’Isola Game Jam’ sekaligus?',
];

function FlagIcon({ className }: { className?: string }) {
    return <span className={className}>⚑</span>;
}

export default function ITeach() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <>
            <Head title="I-Teach Detail" />
            <div className="min-h-screen overflow-x-hidden bg-[#fff9e9] text-[#172238]">
                <header className="border-b-2 border-[#172238] bg-[#fff9e9]">
                    <div className="mx-auto flex h-16 max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
                        <Link href="/" className="leading-none">
                            <span className="font-grotesk block text-xl font-black tracking-[0.14em] text-[#72001f]">
                                IGNITE
                            </span>
                            <span className="block font-mono text-[7px] font-bold tracking-[0.2em] text-[#54444a]">
                                DIGITAL ARCADE '26
                            </span>
                        </Link>
                        <nav className="hidden items-center border-2 border-[#172238] bg-[#fff9e9] p-1 shadow-[2px_2px_0_#172238] md:flex">
                            <Link
                                href="/"
                                className="px-5 py-2 font-mono text-[10px] font-bold tracking-widest text-[#72001f] hover:bg-[#f0e4c9]"
                            >
                                BERANDA
                            </Link>
                            <Link
                                href="/i-teach"
                                className="border-2 border-[#172238] bg-[#72001f] px-5 py-2 font-mono text-[10px] font-bold tracking-widest text-white shadow-[2px_2px_0_#172238]"
                            >
                                I-TEACH
                            </Link>
                            <a
                                href="#i-game"
                                className="px-5 py-2 font-mono text-[10px] font-bold tracking-widest text-[#72001f] hover:bg-[#f0e4c9]"
                            >
                                I-GAME
                            </a>
                        </nav>
                        <Link
                            href={login()}
                            className="flex items-center gap-2 border-2 border-[#172238] bg-[#d4a000] px-4 py-3 font-mono text-[10px] font-bold tracking-widest text-[#172238] shadow-[3px_3px_0_#172238] transition-transform hover:-translate-y-0.5"
                        >
                            <Users className="size-3.5" /> MASUK / LOGIN
                        </Link>
                    </div>
                </header>

                <main>
                    <section className="bg-[#72001f] px-5 py-10 text-[#fff9e9] sm:px-8 lg:px-12 lg:py-12">
                        <div className="mx-auto max-w-[1480px]">
                            <p className="mb-3 font-mono text-[10px] font-bold tracking-[0.2em] text-[#e9b6bd]">
                                IGNITE '26 • EDUCATION & DIGITAL INNOVATION
                                COMPETITION
                            </p>
                            <h1 className="font-grotesk max-w-4xl text-4xl leading-[0.96] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                                ITEACH - INNOVATIVE TECHNOLOGY-ENHANCED TEACHING
                                CHALLENGE
                            </h1>
                            <p className="font-jakarta mt-5 max-w-4xl text-sm leading-6 text-[#f4cdd0] sm:text-base">
                                Panggung kompetisi perancangan terobosan
                                pedagogi digital tingkat nasional. Bangun
                                prototype edutech paling imersif, pecahkan
                                krisis ruang kelas modern, dan menangkan
                                pengakuan prestisius di Universitas Pendidikan
                                Indonesia.
                            </p>
                            <div className="mt-6 grid overflow-hidden rounded-md border-4 border-[#fff9e9] bg-[#fff9e9] text-[#172238] sm:grid-cols-3">
                                <Meta
                                    label="TIER ELIGIBILITY"
                                    value="MAHASISWA D3/D4/S1"
                                />
                                <Meta
                                    label="SQUAD FORMAT"
                                    value="2 - 3 PERSONEL"
                                />
                                <Meta
                                    label="FINAL VENUE"
                                    value="UNIVERSITAS PENDIDIKAN INDONESIA"
                                />
                            </div>
                            <div className="mt-6 flex flex-wrap gap-4">
                                <CtaButton
                                    href="#register"
                                    primary
                                    icon={
                                        <Play className="size-3.5 fill-current" />
                                    }
                                >
                                    DAFTAR SEKARANG
                                </CtaButton>
                                <CtaButton
                                    href="#guidebook"
                                    icon={<Download className="size-3.5" />}
                                >
                                    UNDUH GUIDEBOOK RESMI (PDF)
                                </CtaButton>
                            </div>
                        </div>
                    </section>

                    <section className="px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
                        <div className="mx-auto max-w-[1480px] border-4 border-[#172238] bg-[#fff9e9] p-4 shadow-[6px_6px_0_#172238] sm:p-6 lg:p-7">
                            <div className="border-b-4 border-[#172238] pb-2">
                                <h2 className="font-grotesk text-2xl font-bold sm:text-3xl">
                                    Rundown & Quest Timeline
                                </h2>
                                <p className="font-jakarta text-xs text-[#655b5b]">
                                    Jadwal lengkap kegiatan dari start line
                                    hingga stage final perolehan hadiah.
                                </p>
                            </div>
                            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {schedule.map(
                                    ({ label, date, icon: Icon, featured }) => (
                                        <div
                                            key={label}
                                            className={`min-h-24 border-4 border-[#172238] p-3 ${featured ? 'bg-[#ffdba9]' : 'bg-[#f5eedc]'}`}
                                        >
                                            <div className="flex items-center justify-between font-mono text-[10px] font-bold tracking-wide">
                                                <span>{label}</span>
                                                <Icon className="size-4 text-[#657084]" />
                                            </div>
                                            <p
                                                className={`mt-3 font-mono text-lg font-bold tracking-wide ${featured ? 'text-[#172238]' : 'text-[#647087]'}`}
                                            >
                                                {date}
                                            </p>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </section>

                    <section className="bg-[#fff9e9] px-5 pb-12 sm:px-8 lg:px-12 lg:pb-16">
                        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.7fr]">
                            <div>
                                <p className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#72001f]">
                                    DEBUG & SUPPORT MANUAL
                                </p>
                                <h2 className="font-grotesk mt-2 text-2xl leading-none font-bold text-[#72001f] uppercase sm:text-3xl">
                                    Frequently Asked Questions (FAQ)
                                </h2>
                                <p className="font-jakarta mt-4 text-xs leading-5 text-[#776e6b]">
                                    Punya pertanyaan lebih lanjut? Hubungi
                                    narahubung resmi via Discord IGNITE.
                                </p>
                            </div>
                            <div className="space-y-2">
                                {faqs.map((question, index) => {
                                    const isOpen = openFaq === index;
                                    return (
                                        <button
                                            key={question}
                                            type="button"
                                            onClick={() =>
                                                setOpenFaq(
                                                    isOpen ? null : index,
                                                )
                                            }
                                            className="font-jakarta w-full bg-[#f5eedc] px-4 py-3 text-left text-sm font-semibold text-[#292523] transition-colors hover:bg-[#f1e4c6]"
                                        >
                                            <span className="flex items-center justify-between gap-4">
                                                {question}
                                                <ChevronDown
                                                    className={`size-4 shrink-0 text-[#72001f] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                                />
                                            </span>
                                            {isOpen && (
                                                <span className="mt-2 block border-t border-[#ded1b8] pt-2 text-xs leading-5 font-normal text-[#776e6b]">
                                                    Informasi lengkap akan
                                                    diumumkan melalui kanal
                                                    resmi IGNITE '26.
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    <section
                        id="register"
                        className="bg-[#8c062c] px-5 py-12 text-center text-[#fff9e9] sm:px-8 lg:py-16"
                    >
                        <h2 className="font-grotesk mx-auto max-w-3xl text-3xl leading-tight font-bold uppercase sm:text-4xl">
                            Siapkan pasukanmu. Taklukkan arena ITeach 2026!
                        </h2>
                        <p className="font-jakarta mx-auto mt-4 max-w-xl text-sm leading-6 text-[#f3cdd0]">
                            Registrasi Gelombang 2 ditutup otomatis saat kuota
                            tercapai.
                            <br />
                            Bergabunglah bersama puluhan inovator muda
                            se-Indonesia dan cetak sejarah di panggung nasional.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-4">
                            <CtaButton
                                href="#register"
                                primary
                                icon={
                                    <Play className="size-3.5 fill-current" />
                                }
                            >
                                DAFTAR SEKARANG
                            </CtaButton>
                            <CtaButton
                                href="#guidebook"
                                icon={<Download className="size-3.5" />}
                            >
                                UNDUH GUIDEBOOK RESMI (PDF)
                            </CtaButton>
                        </div>
                        <p className="mt-5 font-mono text-[9px] font-bold tracking-widest text-[#f3cdd0]">
                            DEADLINE: 15 OKTOBER 2026, 23:59 WIB • BIAYA
                            PENDAFTARAN: GRATIS
                        </p>
                    </section>
                </main>

                <footer className="border-t-4 border-[#172238] bg-[#72001f] px-5 py-10 text-[#fff9e9] sm:px-8 lg:px-12">
                    <div className="mx-auto grid max-w-[1480px] gap-8 md:grid-cols-[1.3fr_1fr_1fr]">
                        <div>
                            <p className="font-grotesk text-lg font-bold text-[#f5c54e]">
                                IGNITE '26
                            </p>
                            <p className="font-jakarta mt-2 text-sm font-semibold">
                                Education & Digital Innovation Competition
                            </p>
                            <p className="font-jakarta mt-3 text-xs text-[#e5b8bd] italic">
                                “Ignite Ideas, Inspire Innovation, Shape the
                                Future.”
                            </p>
                        </div>
                        <FooterLinks
                            title="PETA TURNAMEN"
                            links={[
                                'Beranda',
                                'Tentang',
                                'Kompetisi',
                                'FAQ',
                                'Pedoman Lomba',
                            ]}
                        />
                        <div className="font-jakarta text-xs leading-5 text-[#e5b8bd]">
                            <p className="font-mono text-[9px] font-bold tracking-widest text-[#f5c54e]">
                                WAKAS PANITIA
                            </p>
                            <p className="mt-2">
                                Diselenggarakan oleh Universitas Pendidikan
                                Indonesia
                            </p>
                            <p className="mt-2">
                                EMAIL: halo@ignite-competition.id
                                <br />
                                DISCORD: IGNITE Arcade Server #2026
                                <br />
                                LOKASI: Bandung, Jawa Barat
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto mt-8 flex max-w-[1480px] justify-between border-t border-[#9d3555] pt-5 font-mono text-[8px] tracking-widest text-[#f0cbd0]">
                        <span>2026 IGNITE INDONESIA. ALL RIGHTS RESERVED.</span>
                        <span>PRIVASI&nbsp;&nbsp; KETENTUAN</span>
                    </div>
                </footer>
            </div>
        </>
    );
}

function Meta({ label, value }: { label: string; value: string }) {
    return (
        <div className="border-b-2 border-[#eadfc9] p-2 last:border-b-0 sm:border-r-2 sm:border-b-0 sm:last:border-r-0">
            <p className="font-mono text-[8px] font-bold tracking-widest text-[#665b56]">
                {label}
            </p>
            <p className="mt-1 font-mono text-xs font-bold sm:text-sm">
                {value}
            </p>
        </div>
    );
}

function CtaButton({
    href,
    children,
    icon,
    primary = false,
}: {
    href: string;
    children: React.ReactNode;
    icon: React.ReactNode;
    primary?: boolean;
}) {
    return (
        <a
            href={href}
            className={`inline-flex items-center gap-2 border-4 border-[#172238] px-4 py-3 font-mono text-[10px] font-bold tracking-wide shadow-[4px_4px_0_#172238] transition-transform hover:-translate-y-0.5 ${primary ? 'bg-[#f5c54e] text-[#172238]' : 'bg-[#fff9e9] text-[#172238]'}`}
        >
            {icon}
            {children}
            <ArrowRight className="size-3" />
        </a>
    );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
    return (
        <div className="font-jakarta text-xs text-[#e5b8bd]">
            <p className="border-b border-[#9d3555] pb-2 font-mono text-[9px] font-bold tracking-widest text-[#f5c54e]">
                {title}
            </p>
            <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1">
                {links.map((link) => (
                    <a key={link} href="#" className="hover:text-white">
                        {link}
                    </a>
                ))}
            </div>
        </div>
    );
}
