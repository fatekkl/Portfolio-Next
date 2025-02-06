"use client";

import ContactButton from "../ContactButton";

export default function Contact() {
  return (
    <section className="max-sm:h-[60vh] md:min-h-[50vh] w-auto bg-jordy flex flex-col items-center justify-between">
      <header>
        <h1 className="md:text-4xl font-bold text-jet max-sm:text-center max-sm:mt-8 max-sm:text-2xl">
          Mande uma mensagem!
        </h1>
        <h2 className="md:text-2xl font-bold text-jet max-sm:text-xl">
          Inove. Conecte. Fale comigo!
        </h2>
      </header>

      <div className="flex flex-col gap-8">
        <a
          href="mailto:mathtml.1105@gmail.com?body=Ol%C3%A1,%20vimos%20seu%20portf%C3%B3lio..."
          target="_blank"
          rel="noopener noreferrer"
          className="w-96 h-20 bg-tea rounded-2xl flex items-center text-jet font-bold gap-4 text-xl justify-start transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-110 max-sm:scale-75 max-sm:hover:scale-90"
        >
          <ContactButton path="../../../assets/email.png" />
          <span>mathtml.1105@gmail.com</span>
        </a>
        <a
          href="https://wa.me/5511987539647?text=Ol%C3%A1%20Matheus!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-96 h-20 bg-tea rounded-2xl flex items-center text-jet font-bold gap-12 text-xl transition-all duration-300 ease-in-out justify-start hover:cursor-pointer max-sm:hover:scale-90 hover:scale-110 max-sm:scale-75"
        >
          <ContactButton path="../../../assets/whatsapp.png" />
          <span>+55 11 98753-9647</span>
        </a>
      </div>

      <footer className="flex flex-col justify-end text-center text-jet md:text-xl font-semibold max-sm:text-sm">
        <span>Todos os direitos reservados.</span>
        <span>2025 © Designed & Built by Matheus Oliveira</span>
      </footer>
    </section>
  );
}
