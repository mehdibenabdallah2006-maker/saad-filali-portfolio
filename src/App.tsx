import { Hero } from './components/Hero'
import { About } from './components/About'
import { ProjectsGallery } from './components/ProjectsGallery'

function App() {
  return (
    <main className="min-h-screen bg-ivory font-sans text-charcoal">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center mix-blend-difference text-ivory">
        <div className="font-serif tracking-widest text-sm">
          S. F. S.
        </div>
        <div className="hidden md:flex gap-8 text-xs font-sans uppercase tracking-[0.2em]">
          <a href="#" className="hover:opacity-60 transition-opacity">Studio</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Projets</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <About />
      <ProjectsGallery />

      {/* Footer */}
      <footer className="py-12 bg-charcoal text-ivory text-center px-6">
        <p className="font-serif text-2xl mb-8">Saad Filali Studio</p>
        <p className="text-sm font-sans text-ivory/60">
          © {new Date().getFullYear()} — Matière, Objet, Espace.
        </p>
      </footer>
    </main>
  )
}

export default App
