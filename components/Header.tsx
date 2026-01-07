import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--background)]/80 backdrop-blur">
      <div className="px-6 md:px-24 py-4 flex items-center justify-between gap-6">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/brand/kares-logo.png"
            alt="KARES"
            width={124}
            height={124}
            className="rounded-lg"
            priority
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">KARES</div>
            <div className="text-xs text-white/70">
              Tecnología logística para operaciones reales
            </div>
          </div>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a className="hover:text-white transition" href="/soluciones-logisticas">
            Soluciones
          </a>
          <a className="hover:text-white transition" href="/casos-de-uso">
            Casos de uso
          </a>
          <a className="hover:text-white transition" href="/automatizacion-vs-ia">
            Automatización vs IA
          </a>
          <a className="hover:text-white transition" href="/diagnostico">
            Diagnóstico
          </a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="/diagnostico"
            className="hidden sm:inline-block rounded-xl px-4 py-2 font-semibold text-black"
            style={{
              background:
                "linear-gradient(90deg, var(--kares-teal), var(--kares-lime))",
            }}
          >
            Solicitar diagnóstico
          </a>

          {/* Mobile quick link */}
          <a
            href="/diagnostico"
            className="sm:hidden inline-block rounded-xl px-3 py-2 font-semibold text-black"
            style={{
              background:
                "linear-gradient(90deg, var(--kares-teal), var(--kares-lime))",
            }}
          >
            Diagnóstico
          </a>
        </div>
      </div>
    </header>
  )
}
