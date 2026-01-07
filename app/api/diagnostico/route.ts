import { NextResponse } from "next/server"

// Import compatible con TS + CommonJS
import * as nodemailer from "nodemailer"

type Payload = {
  nombre?: string
  empresa?: string
  cargo?: string
  email?: string
  operacion?: string
  mensaje?: string
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Payload

    // Validación mínima (evita correos vacíos)
    if (!data?.nombre || !data?.empresa || !data?.email) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      )
    }

    const host = process.env.MAIL_HOST || process.env.SMTP_HOST
    const port = Number(process.env.MAIL_PORT || process.env.SMTP_PORT || 465)
    const secure =
      String(process.env.MAIL_SECURE || process.env.SMTP_SECURE || "true") === "true"
    const user = process.env.MAIL_USER || process.env.SMTP_USER
    const pass = process.env.MAIL_PASS || process.env.SMTP_PASS
    const to = process.env.MAIL_TO || user

    if (!host || !user || !pass) {
      return NextResponse.json(
        { ok: false, error: "SMTP no configurado en variables de entorno." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    })

    const subject = `Diagnóstico KARES | ${data.empresa} | ${data.nombre}`

    const text = [
      `Nombre: ${data.nombre ?? ""}`,
      `Empresa: ${data.empresa ?? ""}`,
      `Cargo: ${data.cargo ?? ""}`,
      `Email: ${data.email ?? ""}`,
      `Tipo de operación: ${data.operacion ?? ""}`,
      ``,
      `Mensaje:`,
      `${data.mensaje ?? ""}`,
    ].join("\n")

    await transporter.sendMail({
      from: `"KARES Diagnóstico" <${user}>`,
      to,
      replyTo: data.email,
      subject,
      text,
    })

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar. Intenta nuevamente." },
      { status: 500 }
    )
  }
}
