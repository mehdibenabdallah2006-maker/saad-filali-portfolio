export function LargeImageSection() {
    return (
        <section className="w-full py-24 md:py-32 bg-ivory flex justify-center px-4 md:px-12">
            <div className="w-full max-w-[90rem] aspect-[16/9] md:aspect-[21/9] relative overflow-hidden bg-mineral-grey/10">
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2400"
                    alt="Space and Architecture"
                    className="w-full h-full object-cover object-center"
                />
            </div>
        </section>
    )
}

export function ObjectPhotographySection() {
    return (
        <section className="w-full py-24 md:py-32 bg-ivory flex justify-center px-4 md:px-12">
            <div className="w-full max-w-5xl flex flex-col items-center gap-12">
                <div className="w-full aspect-[3/4] md:aspect-[4/3] max-w-3xl relative overflow-hidden bg-mineral-grey/10">
                    <img
                        src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=1600"
                        alt="Minimal Sculptural Object"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                {/* Optional subtle caption if needed */}
                <span className="text-mineral-grey text-xs uppercase tracking-widest text-center mt-4">
                    Objets Tactiles
                </span>
            </div>
        </section>
    )
}

export function MaterialCloseUpSection() {
    return (
        <section className="w-full py-24 md:py-32 bg-ivory flex justify-center px-4 md:px-12">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                <div className="order-2 md:order-1 flex flex-col gap-8 max-w-md">
                    <h3 className="text-3xl md:text-4xl text-dark-brown uppercase tracking-wider font-primary">Matières &amp; <br />Minéraux</h3>
                    <p className="text-mineral-grey leading-loose text-lg">
                        Un langage visuel ancré dans les matériaux méditerranéens. Zellige, céramique et laiton se fondent dans une approche contemporaine et sculpturale respectueuse du temps.
                    </p>
                </div>
                <div className="order-1 md:order-2 w-full aspect-[3/4] relative overflow-hidden bg-mineral-grey/10">
                    <img
                        src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1600"
                        alt="Material Close-up"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>
        </section>
    )
}
