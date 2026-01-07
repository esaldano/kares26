import './globals.css'
import type { Metadata } from 'next'
import Header from "@/components/Header"
import Footer from "@/components/Footer"



export const metadata: Metadata = {
title: 'KARES | Tecnología logística para operaciones reales',
description:
'Ayudamos a empresas logísticas en Chile a automatizar su operación real mediante tecnología a medida, integración de sistemas y automatización inteligente.',
}


export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (
<html lang="es">
<body className="bg-black text-white antialiased">
<Header />
{children}
<Footer />
</body>
</html>
)
}