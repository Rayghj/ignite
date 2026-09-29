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
            <main className="flex w-full flex-1 items-center justify-center px-4 md:px-12 py-28 md:py-32 text-[#550017]">
                {children}
            </main>
            <Footer />
        </div>
    );
}
