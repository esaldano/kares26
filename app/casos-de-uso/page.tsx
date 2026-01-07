import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Casos de uso reales | KARES",
  description:
    "Casos reales en operaciones logísticas: trazabilidad documental, recepciones, fletes, reportes, integraciones y control operativo.",
}

export default function CasosDeUsoPage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] px-6 md:px-24 py-20 text-white overflow-hidden">
      {/* Fondo sutil con marca */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -right-40 h-[460px] w-[460px] rounded-full blur-3xl opacity-18"
          style={{
            background:
              "radial-gradient(circle, var(--kares-teal), transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-56 -left-56 h-[560px] w-[560px] rounded-full blur-3xl opacity-14"
          style={{
            background:
              "radial-gradient(circle, var(--kares-peach), transparent 60%)",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative mb-16 max-w-5xl">
        <p className="text-sm md:text-base text-white/80 mb-3">
          Evidencia operativa, no discursos
        </p>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
          Casos de uso reales en operaciones logísticas
        </h1>

        <p className="text-lg md:text-2xl text-gray-100 leading-relaxed">
          Situaciones que vemos todos los días en empresas de logística,
          transporte, importación y distribución. Si te suena familiar, es una
          buena señal: probablemente hay automatización con impacto real.
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
            href="/soluciones-logisticas"
            className="inline-block rounded-xl px-7 py-4 font-semibold text-center border border-white/60 hover:bg-white/5 transition"
          >
            Ver soluciones logísticas
          </a>
        </div>
      </section>

      {/* CASOS */}
      <section className="relative mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 tracking-tight">
          Casos típicos (problema → solución → resultado)
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <Caso
            accent="teal"
            titulo="Despachos sin trazabilidad documental"
            problema="Guías de despacho dispersas, firmas manuales, dificultad para validar entregas y responder reclamos."
            solucion="Plataforma centralizada con estados, validaciones en terreno y firma digital integrada."
            resultado="Respaldo inmediato y trazabilidad completa para auditoría y reclamos."
          />

          <Caso
            accent="lime"
            titulo="Recepciones desordenadas de importaciones"
            problema="Recepción sin control por pallet, diferencias con órdenes de compra y falta de evidencia."
            solucion="Agendamiento de recepciones, validación contra OC y registro fotográfico."
            resultado="Menos diferencias, mejor control y respaldo operativo ante discrepancias."
          />

          <Caso
            accent="peach"
            titulo="Gestión informal de transportistas"
            problema="Asignación manual de fletes, poca visibilidad y selección poco objetiva."
            solucion="Subasta controlada de fletes con requisitos, documentación y evaluación trazable."
            resultado="Mejor selección de proveedores y control de cumplimiento documental."
          />

          <Caso
            accent="berry"
            titulo="Reportes que consumen tiempo operativo"
            problema="Información dispersa, reportes manuales y dependencia excesiva de Excel."
            solucion="Automatización de generación de reportes y envío programado."
            resultado="Información oportuna y estandarizada sin carga operativa."
          />

          <Caso
            accent="teal"
            titulo="Sistemas que no conversan entre sí"
            problema="Duplicación de datos, errores humanos y reprocesos."
            solucion="Integraciones vía API y flujos automatizados entre sistemas."
            resultado="Datos consistentes, menos reproceso y continuidad operacional."
          />

          <Caso
            accent="peach"
            titulo="Excel crítico para la operación"
            problema="Archivos clave manejados manualmente, sin control ni trazabilidad."
            solucion="Migración progresiva a plataformas operativas controladas."
            resultado="Menor riesgo operativo y mayor estabilidad en el flujo diario."
          />
        </div>
      </section>

      {/* PATRÓN */}
      <section className="relative rounded-3xl p-10 md:p-12 mb-20 border border-white/12 bg-white/6">
        <div
          className="h-1 w-20 rounded-full mb-6"
          style={{
            background:
              "linear-gradient(90deg, var(--kares-berry), var(--kares-teal))",
          }}
        />

        <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
          El patrón común
        </h2>

        <p className="text-gray-100 text-lg md:text-xl max-w-4xl leading-relaxed">
          Estos problemas rara vez se resuelven comprando software genérico.
          Se resuelven entendiendo la operación, diseñando procesos claros y
          aplicando automatización donde realmente aporta valor.
        </p>

        <div className="mt-8">
          <a
            href="/automatizacion-vs-ia"
            className="underline text-gray-100 hover:text-white"
          >
            Automatización ≠ IA: criterio para decidir bien
          </a>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative text-center rounded-3xl p-10 md:p-12 border border-white/12 bg-white/6">
        <h3 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
          Si alguno de estos casos refleja tu operación
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

/* COMPONENTE */
function Caso({
  accent,
  titulo,
  problema,
  solucion,
  resultado,
}: {
  accent: "teal" | "lime" | "peach" | "berry"
  titulo: string
  problema: string
  solucion: string
  resultado: string
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

      <h3 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
        {titulo}
      </h3>

      <p className="text-gray-100 text-lg leading-relaxed mb-3">
        <span className="font-semibold text-white">Problema:</span>{" "}
        {problema}
      </p>

      <p className="text-gray-100 text-lg leading-relaxed mb-3">
        <span className="font-semibold text-white">Solución:</span>{" "}
        {solucion}
      </p>

      <p className="text-gray-100 text-lg leading-relaxed">
        <span className="font-semibold text-white">Resultado:</span>{" "}
        {resultado}
      </p>
    </div>
  )
}
