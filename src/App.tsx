import { Hero } from './components/Hero'
import { About } from './components/About'
import { ProjectsGallery } from './components/ProjectsGallery'
import { LargeImageSection, ObjectPhotographySection, MaterialCloseUpSection } from './components/ImageBlocks'

function App() {
  return (
    <main className="min-h-screen bg-ivory text-dark-brown flex flex-col w-full relative">
      {/* Navigation Layer directly on top of Hero */}
      <nav className="absolute top-0 w-full z-50 py-8 px-6 md:px-12 flex justify-center md:justify-start items-center text-ivory mix-blend-difference pointer-events-none">
        <div className="font-primary tracking-[0.25em] text-sm md:text-base uppercase text-center md:text-left leading-snug">
          SAAD FILALI<br />STUDIO
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <LargeImageSection />
      <ObjectPhotographySection />
      <MaterialCloseUpSection />
      <ProjectsGallery />
      <About />

      {/* Footer */}
      <footer className="w-full py-24 bg-ivory border-t border-mineral-grey/20 flex flex-col items-center justify-center">
        {/* SF Monogram Placeholder */}
        <div className="w-16 h-16 mb-12">
          <img src="/logo.png" alt="SF Logo Monogram" className="w-full h-full object-contain opacity-80" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        </div>
        <p className="text-xs text-mineral-grey tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} Saad Filali Studio
        </p>
      </footer>
    </main>
  )
}

export default App
