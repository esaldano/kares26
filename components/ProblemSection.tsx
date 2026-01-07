export default function ProblemSection() {
return (
<section className="px-8 md:px-24">
<h2 className="text-3xl md:text-4xl font-semibold mb-10">
Problemas reales que vemos todos los días
</h2>


<ul className="grid md:grid-cols-2 gap-8 text-gray-300">
<li>Procesos manuales que consumen tiempo y generan errores</li>
<li>Sistemas que no conversan entre sí</li>
<li>Poca trazabilidad sobre documentos y operaciones</li>
<li>Reportes tardíos o poco confiables para tomar decisiones</li>
</ul>
</section>
)
}