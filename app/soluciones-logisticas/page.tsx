import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Soluciones logísticas operativas | KARES",
  description:
    "Plataformas, automatización e integraciones para despacho, recepción, transporte y control documental en operaciones reales.",
}

export default function SolucionesLogisticasPage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] px-6 md:px-24 py-20 text-white overflow-hidden">
      {/* Fondo sutil con marca */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-28 -left-28 h-[360px] w-[360px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, var(--kares-teal), transparent 60%)",
          }}
        />
        <div
          className="absolute -top-44 -right-44 h-[440px] w-[440px] rounded-full blur-3xl opacity-18"
          style={{
            background:
              "radial-gradient(circle, var(--kares-peach), transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-56 left-1/3 h-[520px] w-[520px] rounded-full blur-3xl opacity-14"
          style={{
            background:
              "radial-gradient(circle, var(--kares-lime), transparent 60%)",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative mb-16 max-w-5xl">
        <p className="text-sm md:text-base text-white/80 mb-3">
          Soluciones diseñadas para operar en terreno
        </p>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
          Soluciones logísticas diseñadas para operar, no para prometer
        </h1>

        <p className="text-lg md:text-2xl text-gray-100 max-w-3xl leading-relaxed">
          En KARES desarrollamos plataformas, automatizaciones e integraciones
          que resuelven problemas reales de despacho, recepción, transporte y
          control documental.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/diagnostico"
            className="inline-block rounded-xl px-7 py-4 font-semibold text-black text-center"
            style={{
              background:
                "linear-gradient(90deg, var(--kares-teal), var(--kares-lime))",
            }}
          >
            Solicitar diagnóstico operativo
          </a>

          <a
            href="/casos-de-uso"
            className="inline-block rounded-xl px-7 py-4 font-semibold text-center border border-white/60 hover:bg-white/5 transition"
          >
            Ver casos de uso reales
          </a>
        </div>
      </section>

      {/* SOLUCIONES */}
      <section className="relative mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 tracking-tight">
          Áreas donde intervenimos con impacto operativo
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <Solucion
            titulo="Gestión de Despacho y Documentos"
            descripcion="Control de guías de despacho, trazabilidad por estado, validaciones en origen y destino, firma digital y respaldo automático."
            accent="teal"
          />

          <Solucion
            titulo="Recepción y Control de Importaciones"
            descripcion="Agendamiento de recepciones, control por pallet, registro fotográfico, validación contra órdenes de compra y documentación asociada."
            accent="lime"
          />

          <Solucion
            titulo="Subasta y Gestión de Fletes"
            descripcion="Licitación controlada de servicios de transporte, evaluación por requisitos, documentación y selección trazable."
            accent="peach"
          />

          <Solucion
            titulo="Automatización de Procesos Operativos"
            descripcion="RPA y flujos automáticos para reportes, generación de archivos, envío de información y sincronización entre sistemas."
            accent="berry"
          />
        </div>
      </section>

      {/* DIFERENCIADOR */}
      <section className="relative rounded-3xl p-10 md:p-12 mb-20 border border-white/12 bg-white/6">
        <div
          className="h-1 w-20 rounded-full mb-6"
          style={{
            background:
              "linear-gradient(90deg, var(--kares-peach), var(--kares-teal))",
          }}
        />

        <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
          Automatización ≠ Inteligencia Artificial
        </h2>

        <p className="text-gray-100 text-lg md:text-xl max-w-4xl leading-relaxed mb-4">
          La mayoría de las operaciones logísticas no necesitan IA: necesitan
          procesos bien definidos, automatización confiable y sistemas que
          conversen entre sí.
        </p>

        <p className="text-gray-200 max-w-4xl leading-relaxed">
          En KARES usamos Machine Learning o Deep Learning solo cuando existe un
          beneficio real y medible para la operación.
        </p>

        <div className="mt-8">
          <a
            href="/automatizacion-vs-ia"
            className="underline text-gray-100 hover:text-white"
          >
            Leer explicación completa: Automatización vs IA
          </a>
        </div>
      </section>

      {/* PROBLEMAS TÍPICOS */}
      <section className="relative mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight">
          Problemas que resolvemos habitualmente
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-100 text-lg">
          <li className="rounded-xl border border-white/12 bg-white/6 px-5 py-4">
            Falta de trazabilidad documental en despacho
          </li>
          <li className="rounded-xl border border-white/12 bg-white/6 px-5 py-4">
            Pérdida de información entre sistemas
          </li>
          <li className="rounded-xl border border-white/12 bg-white/6 px-5 py-4">
            Recepciones desordenadas o sin validación
          </li>
          <li className="rounded-xl border border-white/12 bg-white/6 px-5 py-4">
            Procesos manuales repetitivos
          </li>
          <li className="rounded-xl border border-white/12 bg-white/6 px-5 py-4">
            Reportes que consumen tiempo operativo
          </li>
          <li className="rounded-xl border border-white/12 bg-white/6 px-5 py-4">
            Dependencia excesiva de Excel
          </li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section className="relative text-center rounded-3xl p-10 md:p-12 border border-white/12 bg-white/6">
        <h3 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
          Antes de proponer tecnología, entendemos tu operación
        </h3>

        <p className="text-gray-100 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          Un diagnóstico breve nos permite identificar fricciones, evaluar
          integraciones y definir qué automatización aporta valor real.
        </p>

        <a
          href="/diagnostico"
          className="inline-block rounded-xl px-8 py-4 font-semibold text-black"
          style={{
            background:
              "linear-gradient(90deg, var(--kares-teal), var(--kares-lime))",
          }}
        >
          Solicitar diagnóstico operativo
        </a>
      </section>
    </main>
  )
}

/* COMPONENTE INTERNO */
function Solucion({
  titulo,
  descripcion,
  accent,
}: {
  titulo: string
  descripcion: string
  accent: "teal" | "lime" | "peach" | "berry"
}) {
  const accentMap: Record<typeof accent, string> = {
    teal: "var(--kares-teal)",
    lime: "var(--kares-lime)",
    peach: "var(--kares-peach)",
    berry: "var(--kares-berry)",
  }

  return (
    <div className="rounded-2xl p-8 border border-white/12 bg-white/6 hover:bg-white/8 transition">
      <div
        className="h-1 w-14 rounded-full mb-5"
        style={{ background: accentMap[accent] }}
      />
      <h3 className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight">
        {titulo}
      </h3>
      <p className="text-gray-100 text-lg leading-relaxed">{descripcion}</p>
    </div>
  )
}
