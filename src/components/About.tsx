import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function About() {
    const textRef = useRef<HTMLParagraphElement>(null)
    const containerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.reveal-text',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%',
                        end: '+=400',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            gsap.fromTo(
                '.reveal-line',
                { width: 0 },
                {
                    width: '100%',
                    duration: 1.8,
                    ease: 'power4.inOut',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%'
                    }
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 max-w-[90rem] mx-auto bg-ivory">
            <div className="reveal-line h-[1px] bg-mineral-grey/30 mb-20" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                <div className="md:col-span-3">
                    <h2 className="reveal-text font-primary text-2xl md:text-3xl tracking-wide text-dark-brown uppercase">ATELIER</h2>
                </div>

                <div className="md:col-span-9 max-w-4xl">
                    <p ref={textRef} className="text-2xl md:text-4xl lg:text-[2.75rem] text-dark-brown leading-normal md:leading-[1.4] font-light">
                        <span className="reveal-text block mb-10">
                            Un studio de design global intervenant sur le design d'objets, le mobilier, la direction artistique et le design d'espace.
                        </span>
                        <span className="reveal-text block text-mineral-grey text-xl md:text-3xl leading-relaxed">
                            Nous réinterprétons les savoir-faire artisanaux et les matériaux méditerranéens dans un langage contemporain, minimal et résolument tactile.
                        </span>
                    </p>

                    <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm uppercase tracking-[0.2em] font-sans reveal-text">
                        <div>
                            <h3 className="mb-6 text-dark-brown pb-2 block">Matières de Prédilection</h3>
                            <ul className="space-y-4 text-mineral-grey">
                                <li>Zellige</li>
                                <li>Céramique</li>
                                <li>Cuivre &amp; Laiton</li>
                                <li>Pierre Naturelle</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-6 text-dark-brown pb-2 block">Valeurs</h3>
                            <ul className="space-y-4 text-mineral-grey">
                                <li>Chaleureux</li>
                                <li>Tactile</li>
                                <li>Minimaliste</li>
                                <li>Contemporain</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
