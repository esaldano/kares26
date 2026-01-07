export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-white overflow-hidden">
      {/* Brand blobs (decorativo, controlado) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-28 -left-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-14"
          style={{
            background:
              "radial-gradient(circle, var(--kares-teal), transparent 60%)",
          }}
        />
        <div
          className="absolute -top-48 -right-56 h-[560px] w-[560px] rounded-full blur-3xl opacity-12"
          style={{
            background:
              "radial-gradient(circle, var(--kares-peach), transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-64 left-1/4 h-[640px] w-[640px] rounded-full blur-3xl opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--kares-lime), transparent 60%)",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative px-6 md:px-24 pt-16 md:pt-20 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Col izquierda (copy) */}
          <div className="lg:col-span-7">
            <p className="text-sm md:text-base text-white/80 mb-3">
              Operación real → automatización con criterio
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Automatizamos operaciones logísticas reales, no promesas tecnológicas
            </h1>

            <p className="text-lg md:text-2xl text-gray-100 leading-relaxed max-w-3xl mb-10">
              Diseñamos plataformas, integraciones y automatizaciones para despacho,
              transporte, recepción y control documental. Usamos Machine Learning o Deep
              Learning solo cuando aporta valor operativo medible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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

              <a
                href="/soluciones-logisticas"
                className="self-center text-sm text-white/80 underline hover:text-white transition"
              >
                Explorar soluciones logísticas
              </a>
            </div>

            <p className="mt-8 text-sm md:text-base text-white/70 max-w-3xl">
              Enfoque consultivo: primero entendemos la operación; luego proponemos automatización
              (e integraciones) con criterios de control, trazabilidad y continuidad operacional.
            </p>
          </div>

          {/* Col derecha (empresa real / confianza) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/12 bg-white/6 p-8">
              <div
                className="h-1 w-16 rounded-full mb-6"
                style={{
                  background:
                    "linear-gradient(90deg, var(--kares-berry), var(--kares-teal))",
                }}
              />
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Tecnología a medida para logística
              </h2>
              <p className="text-gray-100 text-lg leading-relaxed mb-6">
                No vendemos software genérico. Construimos soluciones con foco en operación:
                estados, validaciones, evidencias, integración de sistemas y automatización confiable.
              </p>

              <div className="grid gap-4 text-gray-100">
                <MiniPoint
                  label="Integración"
                  text="APIs, sincronización de datos, eliminación de reprocesos."
                  accent="teal"
                />
                <MiniPoint
                  label="Control documental"
                  text="Trazabilidad, firma, respaldo, evidencia operativa."
                  accent="peach"
                />
                <MiniPoint
                  label="Automatización"
                  text="RPA, reportes programados, notificaciones y flujos."
                  accent="lime"
                />
              </div>

              <div className="mt-7">
                <a href="/automatizacion-vs-ia" className="underline text-white/80 hover:text-white">
                  Automatización ≠ IA: cómo decidir sin humo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS REALES */}
      <section className="relative px-6 md:px-24 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
          Problemas reales que vemos todos los días
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ProblemCard
            accent="berry"
            title="Procesos manuales que consumen tiempo"
            text="Tareas repetitivas, reprocesos y errores que afectan plazos y costos."
          />
          <ProblemCard
            accent="teal"
            title="Sistemas que no conversan entre sí"
            text="Duplicación de datos, inconsistencias y pérdida de control en el flujo."
          />
          <ProblemCard
            accent="peach"
            title="Baja trazabilidad documental"
            text="Dificultad para validar entregas, responder reclamos y auditar."
          />
          <ProblemCard
            accent="lime"
            title="Reportes tardíos o poco confiables"
            text="Información dispersa y decisiones tomadas sin datos oportunos."
          />
        </div>
      </section>

      {/* CÓMO TRABAJAMOS (banda estratégica) */}
      <section className="relative px-6 md:px-24 py-16">
        <div className="rounded-3xl border border-white/12 bg-white/6 p-10 md:p-12">
          <div
            className="h-1 w-20 rounded-full mb-6"
            style={{
              background:
                "linear-gradient(90deg, var(--kares-teal), var(--kares-peach))",
            }}
          />

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Cómo trabajamos (sin improvisación)
          </h2>

          <p className="text-gray-100 text-lg md:text-xl max-w-4xl leading-relaxed mb-10">
            Un reposicionamiento serio en logística se construye con método: primero operación,
            luego integración y automatización. ML/DL solo si existe evidencia y beneficio medible.
          </p>

          <div className="grid lg:grid-cols-4 gap-6">
            <StepCard
              n="1"
              accent="teal"
              title="Diagnóstico operativo"
              text="Mapeamos proceso real, fricciones, estados, excepciones y evidencia."
            />
            <StepCard
              n="2"
              accent="lime"
              title="Diseño y priorización"
              text="Definimos quick wins, riesgos, dependencias e impacto operacional."
            />
            <StepCard
              n="3"
              accent="peach"
              title="Integración + automatización"
              text="APIs, trazabilidad y flujos confiables. Menos Excel crítico."
            />
            <StepCard
              n="4"
              accent="berry"
              title="Medición y mejora"
              text="Indicadores, control, alertas y evolución por etapas."
            />
          </div>

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
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative px-6 md:px-24 pb-20">
        <div className="rounded-3xl border border-white/12 bg-white/6 p-10 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Si tu operación necesita control, trazabilidad y continuidad
          </h3>
          <p className="text-gray-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Partimos con diagnóstico, priorizamos automatización con impacto y definimos integraciones.
            Si ML/DL aporta valor real, lo planteamos con evidencia.
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
        </div>
      </section>
    </main>
  )
}

/* =========================
   COMPONENTES INTERNOS
   ========================= */

function ProblemCard({
  accent,
  title,
  text,
}: {
  accent: "teal" | "lime" | "peach" | "berry"
  title: string
  text: string
}) {
  const accentMap: Record<typeof accent, string> = {
    teal: "var(--kares-teal)",
    lime: "var(--kares-lime)",
    peach: "var(--kares-peach)",
    berry: "var(--kares-berry)",
  }

  return (
    <div className="rounded-2xl border border-white/12 bg-white/6 p-7 hover:bg-white/8 transition">
      <div className="flex items-center gap-3 mb-3">
        <span
          className="inline-block h-2.5 w-2.5 rounded-full"
          style={{ background: accentMap[accent] }}
        />
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
          {title}
        </h3>
      </div>
      <p className="text-gray-100 text-lg leading-relaxed">{text}</p>
    </div>
  )
}

function StepCard({
  n,
  accent,
  title,
  text,
}: {
  n: string
  accent: "teal" | "lime" | "peach" | "berry"
  title: string
  text: string
}) {
  const accentMap: Record<typeof accent, string> = {
    teal: "var(--kares-teal)",
    lime: "var(--kares-lime)",
    peach: "var(--kares-peach)",
    berry: "var(--kares-berry)",
  }

  return (
    <div className="rounded-2xl border border-white/12 bg-black/20 p-7">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="h-9 w-9 rounded-xl flex items-center justify-center font-semibold text-black"
          style={{
            background: accentMap[accent],
          }}
        >
          {n}
        </div>
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
          {title}
        </h3>
      </div>
      <p className="text-gray-100 text-lg leading-relaxed">{text}</p>
    </div>
  )
}

function MiniPoint({
  label,
  text,
  accent,
}: {
  label: string
  text: string
  accent: "teal" | "lime" | "peach"
}) {
  const accentMap: Record<typeof accent, string> = {
    teal: "var(--kares-teal)",
    lime: "var(--kares-lime)",
    peach: "var(--kares-peach)",
  }

  return (
    <div className="rounded-xl border border-white/12 bg-black/20 p-4">
      <div className="flex items-center gap-2 mb-1">
        <span
          className="inline-block h-2.5 w-2.5 rounded-full"
          style={{ background: accentMap[accent] }}
        />
        <div className="font-semibold text-white">{label}</div>
      </div>
      <div className="text-gray-100">{text}</div>
    </div>
  )
}
