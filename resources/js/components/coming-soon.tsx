interface ComingSoonProps {
    description: string,
}

export default function ComingSoon({
    description,
}: ComingSoonProps) {
    const nailPositions = [
        "top-3 left-3",
        "top-3 right-3",
        "bottom-3 left-3",
        "bottom-3 right-3"
    ];

    return (
        <section className="w-full relative bg-[#F4EEDB] rounded-lg p-8 sm:p-12 md:p-16 flex flex-col items-center justify-center border border-black/15 shadow-2xl drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]">
            {nailPositions.map((position, index) => (
                <div
                    key={index}
                    className={`absolute ${position} w-3.5 h-3.5 rounded-full bg-[#E8C248] border-2 border-black/80 shadow-inner`}
                />
            ))}

            <div className="flex flex-col items-center justify-center space-y-4 text-center my-4">
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-wide text-[#550017] uppercase">
                    COMING SOON
                </h2>
                <div className="bg-white px-6 py-1.5 border-b border-r border-black/80 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-xs sm:text-sm font-bold tracking-widest text-[#550017] uppercase">
                        {description}
                    </span>
                </div>
            </div>
        </section>
    )
}