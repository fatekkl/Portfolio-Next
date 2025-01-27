import ContactButton from "../ContactButton";

export default function Contact() {
    return (
        <section className="min-h-[50vh] w-auto bg-jordy flex flex-col items-center justify-between">
            <h1 className="text-4xl font-bold drop-shadow-custom-eb">Mande uma mensagem!</h1>
            <h2 className="text-2xl font-bold">Inove. Conecte. Fale comigo!</h2>
            <div className="flex flex-col gap-8">
                <div className="w-96 h-20 bg-tea rounded-2xl flex items-center text-jet font-bold gap-4 text-xl justify-start">
                    <ContactButton path="../../../assets/email.png"/>
                    <span>mathtml.1105@gmail.com</span>
                </div>
                <div className="w-96 h-20 bg-tea rounded-2xl flex items-center text-jet font-bold gap-12 text-xl justify-start">
                    <ContactButton path="../../../assets/whatsapp.png"/>
                    <span>+55 11 98753-9647</span>
                </div>
            </div>
            <div className="flex flex-col justify-end text-center text-jet text-xl font-semibold">
                <span>Todos os direitos reservados.</span>
                <span>2025 © Designed & Built by Matheus Oliveira</span>
            </div>
        </section>
    )
}