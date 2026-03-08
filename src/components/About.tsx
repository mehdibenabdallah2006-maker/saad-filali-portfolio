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
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 70%',
                        end: '+=300',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            gsap.fromTo(
                '.reveal-line',
                { width: 0 },
                {
                    width: '100%',
                    duration: 1.5,
                    ease: 'power4.inOut',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%'
                    }
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-cream">
            <div className="reveal-line h-[1px] bg-dark/20 mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-1">
                    <h2 className="reveal-text font-serif text-2xl text-dark">Vision</h2>
                </div>

                <div className="md:col-span-3">
                    <p ref={textRef} className="text-2xl md:text-4xl font-sans text-dark leading-snug lg:leading-normal font-light">
                        <span className="reveal-text block mb-4">
                            Un studio de design global intervenant sur le design d'objets, le mobilier, la direction artistique et le design d'espace.
                        </span>
                        <span className="reveal-text block text-dark/70">
                            Nous réinterprétons les savoir-faire artisanaux et les matériaux méditerranéens dans un langage contemporain, minimal et résolument tactile.
                        </span>
                    </p>

                    <div className="mt-16 grid grid-cols-2 gap-8 text-sm uppercase tracking-widest font-sans reveal-text">
                        <div>
                            <h3 className="mb-4 text-blue border-b border-blue/20 pb-2 inline-block">Matières de Prédilection</h3>
                            <ul className="space-y-2 text-dark/60">
                                <li>Zellige</li>
                                <li>Céramique</li>
                                <li>Cuivre & Laiton</li>
                                <li>Pierre Naturelle</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-blue border-b border-blue/20 pb-2 inline-block">Valeurs</h3>
                            <ul className="space-y-2 text-dark/60">
                                <li>Chaleureux</li>
                                <li>Tactile</li>
                                <li>Minimaliste</li>
                                <li>Sophistiqué</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
