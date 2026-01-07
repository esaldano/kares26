export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--background)]">
      <div className="px-6 md:px-24 py-14">
        {/* Top */}
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand / mensaje */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="h-3 w-3 rounded-full"
                style={{ background: "var(--kares-teal)" }}
              />
              <div className="text-lg font-semibold">KARES</div>
            </div>

            <p className="text-white/80 text-lg leading-relaxed max-w-xl">
              Tecnología logística para operaciones reales. Diseñamos plataformas,
              integraciones y automatización confiable para despacho, transporte,
              recepción y control documental.
            </p>

            <p className="text-white/70 mt-4 leading-relaxed max-w-xl">
              Usamos Machine Learning o Deep Learning solo cuando aporta valor
              operativo medible. La mayoría de los problemas se resuelven con
              proceso + integración + automatización.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/diagnostico"
                className="inline-block rounded-xl px-6 py-3 font-semibold text-black text-center"
                style={{
                  background:
                    "linear-gradient(90deg, var(--kares-teal), var(--kares-lime))",
                }}
              >
                Solicitar diagnóstico operativo
              </a>

              <a
                href="/automatizacion-vs-ia"
                className="inline-block rounded-xl px-6 py-3 font-semibold text-center border border-white/60 hover:bg-white/5 transition"
              >
                Automatización vs IA
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-4">Navegación</h3>
            <ul className="grid gap-3 text-white/80">
              <li>
                <a className="hover:text-white transition" href="/soluciones-logisticas">
                  Soluciones logísticas
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="/casos-de-uso">
                  Casos de uso reales
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="/automatizacion-vs-ia">
                  Automatización vs IA
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="/diagnostico">
                  Diagnóstico operativo
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-semibold mb-4">Contacto</h3>

            <div className="rounded-2xl border border-white/12 bg-white/6 p-6">
              <div className="grid gap-3 text-white/85">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-block h-2.5 w-2.5 rounded-full"
                    style={{ background: "var(--kares-peach)" }}
                  />
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <a className="hover:text-white transition underline" href="mailto:contacto@kares.cl">
                      contacto@kares.cl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-block h-2.5 w-2.5 rounded-full"
                    style={{ background: "var(--kares-lime)" }}
                  />
                  <div>
                    <div className="font-semibold text-white">WhatsApp</div>
                    <a
                      className="hover:text-white transition underline"
                      href="https://wa.me/56979415043"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +56 9 7941 5043
                    </a>
                    <div className="text-white/65 text-sm mt-1">
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-block h-2.5 w-2.5 rounded-full"
                    style={{ background: "var(--kares-berry)" }}
                  />
                  <div>
                    <div className="font-semibold text-white">Ubicación</div>
                    <div className="text-white/75">
                      Chile · Región Metropolitana
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-white/70 text-sm leading-relaxed">
                Respuesta en horario hábil. Si necesitas priorización, indícalo en el
                diagnóstico y te contactamos con contexto.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="text-white/60 text-sm">
            © {new Date().getFullYear()} KARES. Todos los derechos reservados.
          </div>

          <div className="text-white/60 text-sm">
            Hecho para operar: trazabilidad, control y automatización confiable.
          </div>
        </div>
      </div>
    </footer>
  )
}
