"use client"

import { useMemo, useRef, useState } from "react"

type FormState = {
  nombre: string
  empresa: string
  cargo: string
  email: string
  telefono: string
  operacion: string
  sistemas: string
  urgencia: string
  mensaje: string
}

const initialState: FormState = {
  nombre: "",
  empresa: "",
  cargo: "",
  email: "",
  telefono: "",
  operacion: "",
  sistemas: "",
  urgencia: "Esta semana",
  mensaje: "",
}

type Banner =
  | { type: "success"; title: string; message: string }
  | { type: "error"; title: string; message: string }
  | null

export default function DiagnosticoPage() {
  const [form, setForm] = useState<FormState>(initialState)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [banner, setBanner] = useState<Banner>(null)

  const dismissTimerRef = useRef<number | null>(null)

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

  const canSubmit = useMemo(() => {
    if (!form.nombre.trim()) return false
    if (!form.empresa.trim()) return false
    if (!isValidEmail(form.email)) return false
    if (!form.operacion) return false
    if (!form.mensaje.trim()) return false
    return true
  }, [form])

  const onChange =
    (key: keyof FormState) =>
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLSelectElement>
    ) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }))
    }

  function showBanner(next: Banner) {
    // Limpia timers anteriores
    if (dismissTimerRef.current) {
      window.clearTimeout(dismissTimerRef.current)
      dismissTimerRef.current = null
    }

    setBanner(next)

    // Auto ocultar éxito (pero no el error)
    if (next?.type === "success") {
      dismissTimerRef.current = window.setTimeout(() => {
        setBanner(null)
        dismissTimerRef.current = null
      }, 15000) // 15s visible
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Reset banner previo
    setBanner(null)

    if (!canSubmit) {
      showBanner({
        type: "error",
        title: "Revisa los campos obligatorios",
        message: "Completa los campos requeridos antes de enviar.",
      })
      return
    }

    try {
      setLoading(true)
      setSent(false)

      const res = await fetch("/api/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        // Si el backend devuelve texto/HTML, igual lo mostramos sin romper
        let message = "No se pudo enviar la solicitud. Intenta nuevamente."
        try {
          const maybeJson = await res.json()
          if (maybeJson?.error) message = maybeJson.error
        } catch {
          try {
            const text = await res.text()
            if (text && text.length < 180) message = text
          } catch {}
        }
        throw new Error(message)
      }

      // ÉXITO (aunque el backend no retorne nada)
      setSent(true)
      showBanner({
        type: "success",
        title: "Solicitud enviada",
        message:
          "La recibimos correctamente. Te contactaremos en horario hábil para agendar una conversación breve y validar alcance.",
      })

      // Limpia formulario para que quede claro el “enviado”
      setForm(initialState)
    } catch (err: any) {
      showBanner({
        type: "error",
        title: "No se pudo enviar",
        message: err?.message || "Ocurrió un error al enviar. Intenta nuevamente.",
      })
    } finally {
      setLoading(false)
    }
  }

  function resetForNew() {
    setSent(false)
    setBanner(null)
    setForm(initialState)
  }

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-white overflow-hidden">
      {/* Banner fijo superior (siempre visible) */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="fixed top-16 md:top-20 left-0 right-0 z-50 px-4"
      >
        {banner && (
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl border border-white/12 bg-black/60 backdrop-blur px-5 py-4 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span
                  className="mt-1 inline-block h-2.5 w-2.5 rounded-full"
                  style={{
                    background:
                      banner.type === "success"
                        ? "var(--kares-lime)"
                        : "var(--kares-peach)",
                  }}
                />
                <div>
                  <div className="font-semibold text-white">{banner.title}</div>
                  <div className="text-white/85 leading-relaxed">
                    {banner.message}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="text-white/80 hover:text-white underline whitespace-nowrap"
                onClick={() => setBanner(null)}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Brand blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-56 h-[600px] w-[600px] rounded-full blur-3xl opacity-14"
          style={{
            background:
              "radial-gradient(circle, var(--kares-teal), transparent 60%)",
          }}
        />
        <div
          className="absolute -top-56 -right-64 h-[640px] w-[640px] rounded-full blur-3xl opacity-12"
          style={{
            background:
              "radial-gradient(circle, var(--kares-peach), transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-72 left-1/4 h-[700px] w-[700px] rounded-full blur-3xl opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--kares-lime), transparent 60%)",
          }}
        />
      </div>

      <section className="relative px-6 md:px-24 py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Col izquierda */}
          <div className="lg:col-span-5">
            <p className="text-sm md:text-base text-white/80 mb-3">
              Diagnóstico Operativo (B2B)
            </p>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-6">
              Antes de proponer tecnología, entendemos tu operación
            </h1>

            <p className="text-gray-100 text-lg md:text-xl leading-relaxed mb-8">
              Este formulario nos entrega el contexto mínimo para evaluar
              fricciones, integraciones y oportunidades de automatización con
              impacto real.
            </p>

            <div className="rounded-3xl border border-white/12 bg-white/6 p-7">
              <div
                className="h-1 w-16 rounded-full mb-5"
                style={{
                  background:
                    "linear-gradient(90deg, var(--kares-berry), var(--kares-teal))",
                }}
              />
              <h2 className="text-2xl font-semibold mb-3 tracking-tight">
                Qué recibes
              </h2>

              <ul className="text-gray-100 text-lg grid gap-3 leading-relaxed">
                <li className="flex gap-3">
                  <span style={{ color: "var(--kares-lime)" }}>✓</span>
                  <span>
                    Diagnóstico inicial de procesos, control documental e
                    integración.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: "var(--kares-teal)" }}>✓</span>
                  <span>
                    Priorización de quick wins y riesgos (operación / datos /
                    sistemas).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: "var(--kares-peach)" }}>✓</span>
                  <span>
                    Recomendación clara: automatización, integración y (solo si
                    aplica) ML/DL con valor medible.
                  </span>
                </li>
              </ul>

              <div className="mt-6 text-white/75 text-sm leading-relaxed">
                Nota: “Automatización” no es “IA”. En logística, primero proceso
                + integración + automatización confiable.
              </div>
            </div>
          </div>

          {/* Col derecha: formulario */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/12 bg-white/6 p-8 md:p-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  Solicitud de diagnóstico
                </h2>
                <div className="text-sm text-white/70">
                  Campos con <span className="text-white font-semibold">*</span>{" "}
                  son obligatorios
                </div>
              </div>

              {/* Estado inline (extra, además del banner fijo) */}
              {sent && (
                <div className="mb-6 rounded-2xl border border-white/12 bg-black/30 p-5">
                  <div className="text-lg font-semibold text-white mb-1">
                    Enviado correctamente
                  </div>
                  <div className="text-white/80 leading-relaxed">
                    Ya recibimos tu solicitud. Si quieres enviar otra, usa el
                    botón de abajo.
                  </div>
                  <button
                    type="button"
                    className="mt-3 underline text-white/80 hover:text-white"
                    onClick={resetForNew}
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Nombre y apellido *">
                    <input
                      className="input w-full"
                      name="nombre"
                      value={form.nombre}
                      onChange={onChange("nombre")}
                      placeholder="Ej: Erick Saldaño"
                      required
                      disabled={loading}
                    />
                  </Field>

                  <Field label="Empresa *">
                    <input
                      className="input w-full"
                      name="empresa"
                      value={form.empresa}
                      onChange={onChange("empresa")}
                      placeholder="Ej: Transportes ABC"
                      required
                      disabled={loading}
                    />
                  </Field>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Cargo">
                    <input
                      className="input w-full"
                      name="cargo"
                      value={form.cargo}
                      onChange={onChange("cargo")}
                      placeholder="Ej: Jefe de Operaciones"
                      disabled={loading}
                    />
                  </Field>

                  <Field label="Email corporativo *">
                    <input
                      className="input w-full"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange("email")}
                      placeholder="nombre@empresa.cl"
                      required
                      disabled={loading}
                    />
                    <Hint>Idealmente un correo de empresa.</Hint>
                  </Field>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Teléfono (opcional)">
                    <input
                      className="input w-full"
                      name="telefono"
                      value={form.telefono}
                      onChange={onChange("telefono")}
                      placeholder="+56 9 XXXX XXXX"
                      disabled={loading}
                    />
                  </Field>

                  <Field label="Tipo de operación *">
                    <select
                      className="input w-full"
                      name="operacion"
                      value={form.operacion}
                      onChange={onChange("operacion")}
                      required
                      disabled={loading}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Despacho">Despacho</option>
                      <option value="Transporte">Transporte</option>
                      <option value="Recepción / Importaciones">
                        Recepción / Importaciones
                      </option>
                      <option value="Distribución">Distribución</option>
                      <option value="Mixto">Mixto</option>
                    </select>
                  </Field>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Sistemas actuales (si aplica)">
                    <input
                      className="input w-full"
                      name="sistemas"
                      value={form.sistemas}
                      onChange={onChange("sistemas")}
                      placeholder="Ej: ERP / WMS / TMS / Excel / App propia"
                      disabled={loading}
                    />
                    <Hint>Si usas ERP/WMS/TMS indica cuál.</Hint>
                  </Field>

                  <Field label="Urgencia">
                    <select
                      className="input w-full"
                      name="urgencia"
                      value={form.urgencia}
                      onChange={onChange("urgencia")}
                      disabled={loading}
                    >
                      <option value="Esta semana">Esta semana</option>
                      <option value="En 2 semanas">En 2 semanas</option>
                      <option value="Este mes">Este mes</option>
                      <option value="Sin urgencia">Sin urgencia</option>
                    </select>
                  </Field>
                </div>

                <Field label="Describe brevemente tu operación / problema *">
                  <textarea
                    className="input w-full"
                    name="mensaje"
                    rows={5}
                    value={form.mensaje}
                    onChange={onChange("mensaje")}
                    placeholder="Ej: Tenemos guías dispersas, no hay trazabilidad, recepciones con diferencias vs OC y reportes se hacen manual..."
                    required
                    disabled={loading}
                  />
                  <Hint>
                    Ideal: dónde se pierde el control, qué documentos intervienen
                    y qué sistemas participan.
                  </Hint>
                </Field>

                <div className="pt-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <button
                    type="submit"
                    disabled={loading || !canSubmit}
                    className="rounded-xl px-7 py-4 font-semibold text-black disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--kares-teal), var(--kares-lime))",
                    }}
                  >
                    {loading
                      ? "Enviando..."
                      : sent
                      ? "Enviado"
                      : "Solicitar diagnóstico operativo"}
                  </button>

                  <div className="text-white/70 text-sm leading-relaxed max-w-md">
                    Al enviar, aceptas que te contactemos para coordinar. No
                    compartimos tus datos con terceros.
                  </div>
                </div>

                <div className="mt-2 text-white/60 text-xs leading-relaxed">
                  Si prefieres, también puedes escribir a{" "}
                  <a
                    className="underline hover:text-white"
                    href="mailto:contacto@kares.cl"
                  >
                    contacto@kares.cl
                  </a>
                  .
                </div>
              </form>
            </div>

            <div className="mt-6 text-white/70 text-sm leading-relaxed">
              Si tu problema es “falta de trazabilidad” o “Excel crítico”, el
              primer impacto normalmente viene de integración + automatización
              (no IA).
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* Componentes internos */

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="mb-2 text-sm text-white/80">{label}</div>
      {children}
    </div>
  )
}

function Hint({ children }: { children: React.ReactNode }) {
  return <div className="mt-2 text-xs text-white/60">{children}</div>
}
