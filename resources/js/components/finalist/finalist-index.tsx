import HeroSection from "@/components/finalist/hero-section";
import ComingSoon from "@/components/coming-soon";

export default function FinalistIndex() {
    return (
        <div className="flex flex-col gap-8">
            <HeroSection />
            <ComingSoon description="tunggu ya, Penilaian juri masih dilakukan" />
        </div>
    )
}