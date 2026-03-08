import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const PROJECTS = [
    {
        id: '01',
        title: 'Immeuble EDGE R+5',
        category: 'Architecture & Espace',
        description: 'Une approche texturée pour les espaces de travail contemporains.',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1600'
    },
    {
        id: '02',
        title: 'Objets Tactiles',
        category: 'Design Produit',
        description: 'Collection de céramiques mettant en valeur la matière brute.',
        image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=1600'
    },
    {
        id: '03',
        title: 'Retail Zellige',
        category: 'Scénographie',
        description: "Une boutique réinterprétant les codes de l'artisanat marocain.",
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600'
    }
]

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="group relative cursor-pointer"
        >
            <div className="overflow-hidden aspect-[4/5] bg-mineral-grey/10 mb-8">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover origin-center"
                    initial={{ scale: 1.05 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline mb-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-mineral-grey">{project.category}</span>
                    <span className="text-xs text-mineral-grey tracking-widest">{project.id}</span>
                </div>
                <h3 className="font-primary text-2xl text-dark-brown group-hover:text-blue transition-colors duration-500">{project.title}</h3>
                <p className="text-sm text-mineral-grey mt-2 max-w-sm leading-relaxed">{project.description}</p>
            </div>
        </motion.div>
    )
}

export function ProjectsGallery() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const yParallax = useTransform(scrollYProgress, [0, 1], [80, -80])

    return (
        <section ref={containerRef} className="py-24 md:py-40 px-6 md:px-12 bg-ivory">
            <div className="max-w-[90rem] mx-auto">
                <div className="flex justify-between items-end mb-24 border-b border-mineral-grey/20 pb-8">
                    <h2 className="font-primary text-3xl md:text-5xl text-dark-brown tracking-wide">SÉLECTION</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-x-12 md:gap-y-32">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            style={{ y: index % 2 !== 0 ? yParallax : 0 }}
                            className={index === 1 ? "md:mt-40" : ""}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
