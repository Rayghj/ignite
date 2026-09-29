import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-between bg-[#FFF9EC]">
            <Navbar />
            <main className="relative flex w-full flex-1 items-center justify-center px-4 py-28 text-[#550017] md:px-12 md:py-32">
                {children}
            </main>
            <Footer />
        </div>
    );
}
