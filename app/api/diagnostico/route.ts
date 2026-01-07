import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'


export async function POST(req: Request) {
const data = await req.json()



const transporter = nodemailer.createTransport({
host: 'pyme97.pymedns.net',
port: 465,
secure: true,
auth: {
user: process.env.MAIL_USER,
pass: process.env.MAIL_PASS,
},
})


await transporter.sendMail({
from: 'KARES <crecer@kares.cl>',
to: 'crecer@kares.cl',
subject: 'Nuevo diagnóstico operativo',
html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
})


return NextResponse.json({ ok: true })
}