"use client"

import ContactButton from "../ContactButton";

export default function Contact() {

    return (
        <section className="min-h-[50vh] w-auto bg-jordy flex flex-col items-center justify-between">
            <h1 className="text-4xl font-bold drop-shadow-custom-eb">Mande uma mensagem!</h1>
            <h2 className="text-2xl font-bold">Inove. Conecte. Fale comigo!</h2>
            <div className="flex flex-col gap-8">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mathtml.1105@gmail.com&su=Olá%20Matheus&body=Vimos%20seu%20portfólio..." target="_blank" rel="noopener noreferrer" className="w-96 h-20 bg-tea rounded-2xl flex items-center text-jet font-bold gap-4 text-xl justify-start hover:cursor-pointer">
                    <ContactButton path="../../../assets/email.png" />
                    <span>mathtml.1105@gmail.com</span>
                </a>
                <a href="https://wa.me/5511987539647?text=Ol%C3%A1%20Matheus!" target="_blank" rel="noopener noreferrer" className="w-96 h-20 bg-tea rounded-2xl flex items-center text-jet font-bold gap-12 text-xl justify-start hover:cursor-pointer">
                    <ContactButton path="../../../assets/whatsapp.png" />
                    <span>+55 11 98753-9647</span>
                </a>
            </div>
            <div className="flex flex-col justify-end text-center text-jet text-xl font-semibold">
                <span>Todos os direitos reservados.</span>
                <span>2025 © Designed & Built by Matheus Oliveira</span>
            </div>
        </section>
    )
}