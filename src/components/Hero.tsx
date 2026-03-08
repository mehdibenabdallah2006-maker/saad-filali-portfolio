import Silk from './Silk';

export function Hero() {
    return (
        <section className="relative w-full h-screen bg-dark-brown flex items-center justify-center overflow-hidden">
            {/* ReactBits Animated Background Layer */}
            <div className="absolute inset-0 z-0">
                <Silk speed={3} scale={1.2} color="#1F1A17" noiseIntensity={1.2} />
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full mix-blend-difference pointer-events-none">
                <h1 className="text-5xl md:text-7xl lg:text-[7rem] text-ivory tracking-[0.1em] md:tracking-[0.15em] uppercase font-primary whitespace-nowrap leading-tight">
                    SAAD FILALI<br />STUDIO
                </h1>
            </div>
        </section>
    )
}
