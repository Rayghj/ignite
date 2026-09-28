import type { AuthLayoutProps } from '@/types';
import Navbar from '@/components/navbar';
import AuthFooter from '@/components/auth-footer';

export default function AuthSimpleLayout({ children }: AuthLayoutProps) {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-between bg-[#7B0828]">
            <Navbar />
            <main className="flex w-full flex-1 items-center justify-center px-4 py-28 md:py-32">
                <div className="w-full max-w-3xl rounded-md border-4 border-[#1E1E1E] bg-white p-6 shadow-[6px_6px_0px_0px_#1E1E1E] md:p-10 md:shadow-[8px_8px_0px_0px_#1E1E1E]">
                    <div className="flex flex-col gap-6">{children}</div>
                </div>
            </main>
            <AuthFooter />
        </div>
    );
}
