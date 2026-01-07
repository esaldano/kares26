import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Automatización vs IA | KARES",
  description:
    "Automatización no es lo mismo que IA. En logística, la mayoría de los problemas se resuelven con procesos claros, integraciones y automatización confiable. ML/DL solo cuando aporta valor medible.",
}

export default function AutomatizacionVsIAPage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] px-6 md:px-24 py-20 text-white overflow-hidden">
      {/* Fondo sutil con marca */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -left-44 h-[520px] w-[520px] rounded-full blur-3xl opacity-16"
          style={{
            background:
              "radial-gradient(circle, var(--kares-teal), transparent 60%)",
          }}
        />
        <div
          className="absolute -top-48 -right-56 h-[560px] w-[560px] rounded-full blur-3xl opacity-14"
          style={{
            background:
              "radial-gradient(circle, var(--kares-peach), transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-64 left-1/4 h-[640px] w-[640px] rounded-full blur-3xl opacity-12"
          style={{
            background:
              "radial-gradient(circle, var(--kares-lime), transparent 60%)",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative mb-14 max-w-5xl">
        <p className="text-sm md:text-base text-white/80 mb-3">
          Criterio operativo para decidir bien
        </p>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
          Automatización ≠ Inteligencia Artificial
        </h1>

        <p className="text-lg md:text-2xl text-gray-100 leading-relaxed">
          En logística es muy común que se confunda “IA” con automatizaciones,
          integraciones y reglas de negocio. En KARES usamos Machine Learning o
          Deep Learning solo cuando existe beneficio medible. El resto, se
          resuelve con diseño de procesos y automatización confiable.
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

      {/* DEFINICIONES (rápidas y útiles) */}
      <section className="relative mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 tracking-tight">
          Diferencia en simple (sin humo)
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <InfoCard
            accent="teal"
            title="Automatización"
            text="Ejecuta un flujo definido: reglas, validaciones, integración de sistemas, generación de reportes, notificaciones, firma digital, etc."
            bullets={[
              "Determinística (mismo input → mismo output)",
              "Alta estabilidad operacional",
              "Ideal para procesos repetitivos",
            ]}
          />

          <InfoCard
            accent="peach"
            title="IA (ML / DL)"
            text="Modelos que aprenden patrones desde datos: clasificación, predicción, detección de anomalías, OCR avanzado, etc."
            bullets={[
              "Probabilística (requiere umbrales y monitoreo)",
              "Depende de datos y calidad histórica",
              "Se usa cuando no hay reglas suficientes",
            ]}
          />

          <InfoCard
            accent="lime"
            title="La realidad logística"
            text="La mayoría de los problemas operativos se resuelven primero con estandarización, integración y automatización. La IA viene después, si corresponde."
            bullets={[
              "Primero proceso, después tecnología",
              "Menos fricción y reprocesos",
              "Más trazabilidad y control",
            ]}
          />
        </div>
      </section>

      {/* COMPARACIÓN OPERATIVA */}
      <section className="relative mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 tracking-tight">
          ¿Cuándo usar qué?
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          <DecisionCard
            accent="teal"
            title="Usa Automatización cuando..."
            items={[
              "Existe un flujo repetible y claro (o se puede estandarizar).",
              "Hay reglas de negocio definibles (validaciones, estados, excepciones).",
              "Necesitas trazabilidad, auditoría y control documental.",
              "Tienes sistemas que deben conversar (ERP, WMS, TMS, Excel, APIs).",
              "Quieres reducir carga operativa y errores humanos.",
            ]}
          />

          <DecisionCard
            accent="peach"
            title="Considera ML/DL cuando..."
            items={[
              "No hay reglas suficientes para decidir (patrones complejos).",
              "Necesitas clasificación o predicción (por ejemplo, riesgo de atraso).",
              "Quieres detectar anomalías con alta variabilidad.",
              "Dispones de datos históricos confiables y volumen suficiente.",
              "Puedes monitorear calidad del modelo en el tiempo.",
            ]}
          />
        </div>
      </section>

      {/* EJEMPLOS B2B (KARES) */}
      <section className="relative mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 tracking-tight">
          Ejemplos típicos en logística
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <ExampleCard
            accent="lime"
            title="Automatización (lo más frecuente)"
            examples={[
              "Generación automática de reportes y envío programado.",
              "Validación de recepción contra OC (pallet / bulto / evidencia).",
              "Trazabilidad documental de guías (estado, firma, respaldo).",
              "Integraciones entre ERP/WMS/TMS vía API.",
              "Flujos RPA para consolidar información y evitar reprocesos.",
            ]}
          />

          <ExampleCard
            accent="berry"
            title="ML/DL (cuando hay valor real)"
            examples={[
              "Detección de anomalías en tiempos de despacho/entrega.",
              "Clasificación de incidencias según texto/evidencia.",
              "OCR avanzado si hay alta variabilidad de documentos/fotos.",
              "Predicción de demanda o carga, si existe histórico sólido.",
              "Priorización inteligente de casos (basado en patrones).",
            ]}
          />
        </div>
      </section>

      {/* CHECKLIST DECISIÓN */}
      <section className="relative rounded-3xl p-10 md:p-12 mb-16 border border-white/12 bg-white/6">
        <div
          className="h-1 w-20 rounded-full mb-6"
          style={{
            background:
              "linear-gradient(90deg, var(--kares-teal), var(--kares-peach))",
          }}
        />

        <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
          Checklist rápido (para decidir con criterio)
        </h2>

        <p className="text-gray-100 text-lg md:text-xl max-w-4xl leading-relaxed mb-6">
          Si respondes “sí” a la mayoría, probablemente tu mejor primer paso no
          es IA: es automatización + integración.
        </p>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-100 text-lg">
          <li className="rounded-xl border border-white/12 bg-white/6 px-5 py-4">
            ¿El proceso es repetitivo y consume tiempo operativo?
          </li>
          <li className="rounded-xl border border-white/12 bg-white/6 px-5 py-4">
            ¿Hay reprocesos por datos duplicados o inconsistentes?
          </li>
          <li className="rounded-xl border border-white/12 bg-white/6 px-5 py-4">
            ¿Necesitas trazabilidad documental y auditoría?
          </li>
          <li className="rounded-xl border border-white/12 bg-white/6 px-5 py-4">
            ¿Tus sistemas no conversan entre sí?
          </li>
          <li className="rounded-xl border border-white/12 bg-white/6 px-5 py-4">
            ¿Excel es crítico para operar el día a día?
          </li>
          <li className="rounded-xl border border-white/12 bg-white/6 px-5 py-4">
            ¿La información llega tarde o no llega completa?
          </li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section className="relative text-center rounded-3xl p-10 md:p-12 border border-white/12 bg-white/6">
        <h3 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
          Si quieres claridad antes de invertir tiempo y plata
        </h3>

        <p className="text-gray-100 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          Te ayudamos a identificar fricciones, definir integraciones y priorizar
          automatizaciones. Si ML/DL aporta valor, lo proponemos con evidencia.
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

/* =========================
   COMPONENTES INTERNOS
   ========================= */

function InfoCard({
  accent,
  title,
  text,
  bullets,
}: {
  accent: "teal" | "lime" | "peach"
  title: string
  text: string
  bullets: string[]
}) {
  const accentMap: Record<typeof accent, string> = {
    teal: "var(--kares-teal)",
    lime: "var(--kares-lime)",
    peach: "var(--kares-peach)",
  }

  return (
    <div className="rounded-2xl p-8 border border-white/12 bg-white/6 hover:bg-white/8 transition">
      <div
        className="h-1 w-14 rounded-full mb-5"
        style={{ background: accentMap[accent] }}
      />
      <h3 className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-gray-100 text-lg leading-relaxed mb-6">{text}</p>
      <ul className="text-gray-100 text-lg grid gap-2">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span style={{ color: accentMap[accent] }}>•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function DecisionCard({
  accent,
  title,
  items,
}: {
  accent: "teal" | "peach"
  title: string
  items: string[]
}) {
  const accentMap: Record<typeof accent, string> = {
    teal: "var(--kares-teal)",
    peach: "var(--kares-peach)",
  }

  return (
    <div className="rounded-2xl p-8 border border-white/12 bg-white/6 hover:bg-white/8 transition">
      <div
        className="h-1 w-14 rounded-full mb-5"
        style={{ background: accentMap[accent] }}
      />
      <h3 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
        {title}
      </h3>
      <ul className="text-gray-100 text-lg grid gap-3 leading-relaxed">
        {items.map((it) => (
          <li key={it} className="flex gap-3">
            <span style={{ color: accentMap[accent] }}>✓</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ExampleCard({
  accent,
  title,
  examples,
}: {
  accent: "lime" | "berry"
  title: string
  examples: string[]
}) {
  const accentMap: Record<typeof accent, string> = {
    lime: "var(--kares-lime)",
    berry: "var(--kares-berry)",
  }

  return (
    <div className="rounded-2xl p-8 border border-white/12 bg-white/6 hover:bg-white/8 transition">
      <div
        className="h-1 w-14 rounded-full mb-5"
        style={{ background: accentMap[accent] }}
      />
      <h3 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
        {title}
      </h3>
      <ul className="text-gray-100 text-lg grid gap-3 leading-relaxed">
        {examples.map((ex) => (
          <li key={ex} className="flex gap-3">
            <span style={{ color: accentMap[accent] }}>•</span>
            <span>{ex}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
