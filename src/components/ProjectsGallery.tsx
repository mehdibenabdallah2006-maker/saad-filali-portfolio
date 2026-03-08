import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

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
        description: 'Une boutique réinterprétant les codes de l\'artisanat marocain.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600'
    }
]

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="group relative cursor-pointer"
        >
            <div className="overflow-hidden aspect-[4/5] bg-sand">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover origin-center"
                    initial={{ scale: 1.1 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
            </div>

            <div className="mt-6 flex justify-between items-start">
                <div>
                    <span className="text-xs uppercase tracking-widest text-terracotta mb-2 block">{project.category}</span>
                    <h3 className="font-serif text-2xl text-charcoal">{project.title}</h3>
                    <p className="text-sm text-charcoal/60 mt-2 max-w-sm">{project.description}</p>
                </div>

                <div className="w-10 h-10 rounded-full border border-charcoal/10 flex items-center justify-center transform group-hover:bg-charcoal group-hover:text-ivory group-hover:border-charcoal transition-all duration-300">
                    <ArrowUpRight strokeWidth={1.5} size={18} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
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

    const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100])

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 bg-ivory">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-20 border-b border-charcoal/20 pb-8">
                    <h2 className="font-serif text-4xl text-charcoal">Sélection</h2>
                    <span className="text-sm font-sans uppercase tracking-widest text-charcoal/60">01 — 03</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            style={{ y: index % 2 !== 0 ? yParallax : 0 }}
                            className={index === 1 ? "md:mt-32" : ""}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
