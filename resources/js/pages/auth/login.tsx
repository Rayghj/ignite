import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Info, Mail, Key, Box, Flag, Headphones } from 'lucide-react';

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    return (
        <>
            <Head title="Login" />

            <div className="mx-auto w-full max-w-2xl space-y-6">
                <div className="space-y-2">
                    <h1 className="font-grotesk text-3xl font-extrabold tracking-tight text-[#5C061C] uppercase md:text-4xl">
                        PORTAL LOGIN PESERTA
                    </h1>
                    <p className="font-jakarta text-lg leading-relaxed text-gray-600">
                        Akses dashboard tim, submission berkas game/prototype,
                        dan evaluasi juri IGNITE 2026.
                    </p>
                </div>

                {/* alert */}
                <div className="flex items-start space-x-3 rounded-none border-2 border-[#1E1E1E] bg-[#FAF5E9] p-4 shadow-[2px_2px_0px_0px_#1E1E1E]">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#5C061C]" />
                    <p className="text-sm leading-relaxed text-[#1E1E1E]">
                        <span className="font-bold text-[#5C061C]">
                            Perhatian Akun:
                        </span>{' '}
                        Gunakan alamat email terverifikasi yang sudah
                        didaftarkan saat registrasi awal tim atau workshop Isola
                        Game Jam.
                    </p>
                </div>

                {status && (
                    <div className="font-space-mono border border-green-500 bg-green-100 p-3 text-xs text-green-800">
                        {status}
                    </div>
                )}

                {/* form */}
                <Form
                    {...store.form()}
                    resetOnSuccess={['password']}
                    className="flex flex-col gap-5"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <Label
                                        htmlFor="email"
                                        className="flex items-center space-x-1.5 text-sm font-bold text-[#1E1E1E] uppercase"
                                    >
                                        <Mail className="h-4 w-4 text-[#5C061C]" />
                                        <span>EMAIL KETUA TIM</span>
                                    </Label>
                                    <span className="text-xs font-semibold text-[#574143]">
                                        Wajib diisi
                                    </span>
                                </div>
                                <div className="relative">
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        placeholder="ketua.tim@universitas.edu"
                                        className="font-jakarta rounded-none border-2 border-[#1E1E1E] bg-[#FAF5E9] px-4 py-6 text-sm text-[#1E1E1E] shadow-[2px_2px_0px_0px_#1E1E1E] placeholder:text-gray-400 focus-visible:border-[#5C061C] focus-visible:ring-0"
                                    />
                                </div>
                                <InputError message={errors.email} />
                            </div>
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <Label
                                        htmlFor="password"
                                        className="flex items-center space-x-1.5 text-sm font-bold text-[#1E1E1E] uppercase"
                                    >
                                        <Key className="h-4 w-4 text-[#5C061C]" />
                                        <span>PASSCODE / KATA SANDI</span>
                                    </Label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request()}
                                            className="text-xs font-bold text-[#5C061C] uppercase hover:underline"
                                            tabIndex={5}
                                        >
                                            LUPA KATA SANDI?
                                        </TextLink>
                                    )}
                                </div>
                                <PasswordInput
                                    id="password"
                                    name="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="••••••••••••"
                                    className="font-jakarta rounded-none border-2 border-[#1E1E1E] bg-[#FAF5E9] px-4 py-6 text-sm text-[#1E1E1E] shadow-[2px_2px_0px_0px_#1E1E1E] placeholder:text-gray-400 focus-visible:border-[#5C061C] focus-visible:ring-0"
                                />
                                <InputError message={errors.password} />
                            </div>
                            <Button
                                type="submit"
                                tabIndex={4}
                                disabled={processing}
                                data-test="login-button"
                                className="mt-2 flex w-full cursor-pointer items-center justify-center space-x-2 rounded-none border-2 border-[#1E1E1E] bg-[#D4A000] py-6 text-sm font-bold tracking-wider text-[#1E1E1E] uppercase shadow-[4px_4px_0px_0px_#1E1E1E] transition-all duration-75 hover:-translate-x-px hover:-translate-y-px hover:bg-[#E5B100] hover:shadow-[5px_5px_0px_0px_#1E1E1E] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#1E1E1E]"
                            >
                                {processing ? (
                                    <Spinner />
                                ) : (
                                    <>
                                        <Box className="h-4 w-4 stroke-[2.5]" />
                                        <span>[ LOGIN KE DASHBOARD ]</span>
                                    </>
                                )}
                            </Button>
                        </>
                    )}
                </Form>

                {/* help section */}
                <div className="flex flex-col items-start justify-between gap-4 rounded-none border-2 border-[#1E1E1E] bg-[#FAF5E9] p-4 shadow-[2px_2px_0px_0px_#1E1E1E] sm:flex-row sm:items-center">
                    <div className="flex items-center space-x-2">
                        <Flag className="h-4 w-4 shrink-0 text-[#5C061C]" />
                        <div className="text-sm">
                            <span className="font-jakarta text-gray-700">
                                Belum mendaftarkan tim kamu?{' '}
                            </span>
                            <a
                                href="#daftar"
                                className="font-bold text-[#5C061C] underline decoration-2 underline-offset-4 hover:opacity-80"
                            >
                                DAFTARKAN_TIM_KAMU &lt;&lt;
                            </a>
                        </div>
                    </div>
                    <a
                        href="#bantuan"
                        className="inline-flex items-center space-x-1.5 rounded-none border-2 border-[#1E1E1E] bg-[#FAF5E9] px-3 py-1.5 text-xs font-bold text-[#1E1E1E] uppercase shadow-[2px_2px_0px_0px_#1E1E1E] transition-all duration-75 hover:-translate-x-px hover:-translate-y-px hover:bg-[#E8C248] active:translate-x-px active:translate-y-px"
                    >
                        <Headphones className="h-3.5 w-3.5" />
                        <span>BANTUAN PANITIA</span>
                    </a>
                </div>
            </div>
        </>
    );
}
