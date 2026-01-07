export default function ValueProposition() {
  return (
    <section className="px-8 md:px-24 bg-neutral-900 py-20 rounded-3xl">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        Cómo trabajamos en KARES
      </h2>

      <div className="grid md:grid-cols-2 gap-10 text-gray-300 mb-10">
        <p>
          Partimos entendiendo la operación real, no desde la tecnología.
          Automatizamos procesos, integramos sistemas y solo usamos
          inteligencia artificial cuando aporta valor concreto.
        </p>
        <p>
          Nuestro enfoque evita promesas vacías y prioriza resultados
          medibles, continuidad operativa y escalabilidad real.
        </p>
      </div>

      <a
        href="/automatizacion-vs-ia"
        className="inline-block border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
      >
        Conoce nuestro enfoque tecnológico
      </a>
    </section>
  )
}
