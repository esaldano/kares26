import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative px-6 md:px-24 py-24 text-white bg-black">
      {/* Blobs marca */}
      <div className="brand-blobs">
        <div
          className="brand-blob"
          style={{
            width: 420,
            height: 420,
            top: -120,
            left: -80,
            background: "radial-gradient(circle, var(--kares-teal), transparent 60%)",
          }}
        />
        <div
          className="brand-blob"
          style={{
            width: 520,
            height: 520,
            top: -140,
            right: -160,
            background: "radial-gradient(circle, var(--kares-peach), transparent 60%)",
            animationDelay: "1.2s",
          }}
        />
        <div
          className="brand-blob"
          style={{
            width: 520,
            height: 520,
            bottom: -220,
            left: "30%",
            background: "radial-gradient(circle, var(--kares-lime), transparent 60%)",
            animationDelay: "2.1s",
          }}
        />
      </div>

      {/* Header mini con logo */}
      <div className="relative flex items-center gap-4 mb-10">
        <Image
          src="/brand/kares-logo.png"
          alt="KARES"
          width={52}
          height={52}
          className="rounded-xl"
          priority
        />
        <div className="text-sm text-gray-300">
          <div className="font-semibold text-white">KARES</div>
          <div>Tecnología logística para operaciones reales</div>
        </div>
      </div>

      {/* Titular */}
      <h1 className="relative text-4xl md:text-6xl font-bold leading-tight max-w-5xl mb-8">
        Automatizamos operaciones logísticas reales, no promesas tecnológicas
      </h1>

      {/* Subtítulo */}
      <p className="relative text-xl md:text-2xl text-gray-300 max-w-4xl mb-12">
        Diseñamos plataformas, integraciones y automatizaciones para despacho,
        transporte, recepción y control documental. Usamos Machine Learning o Deep Learning
        solo cuando aporta valor operativo real.
      </p>

      {/* CTAs */}
      <div className="relative flex flex-col md:flex-row gap-4">
        <a href="/diagnostico" className="btn-brand text-center">
          Solicitar diagnóstico operativo
        </a>

        <a href="/casos-de-uso" className="btn-brand-outline text-center">
          Ver casos de uso reales
        </a>

        <a
          href="/soluciones-logisticas"
          className="md:ml-2 text-sm text-gray-300 underline hover:text-white self-center"
        >
          Explorar soluciones logísticas
        </a>
      </div>

      {/* Confianza (microcopy) */}
      <p className="relative text-sm text-gray-400 mt-10 max-w-3xl">
        Enfoque consultivo: primero entendemos la operación; luego proponemos automatización con criterio.
      </p>
    </section>
  )
}
