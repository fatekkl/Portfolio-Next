"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import ContactButton from "../ContactButton";

export default function Contact() {
  const { t, toggleLanguage } = useLanguage()

  const contactText = t.contact


  return (
    <section className="h-50vh w-auto bg-jordy flex flex-col items-center max-md:gap-2 gap-6">
      <header className="max-md:text-2xl text-3xl flex flex-col gap-2">
        <h1 className="font-bold text-jet text-center">
          {contactText.title}
        </h1>
        <h2 className="font-bold text-jet text-center">
          {contactText.sub_title}
        </h2>
      </header>

      <div className="flex max-sm:scale-90 flex-col md:gap-4 lg:gap-8">
        <a
          href="mailto:matheus.olv.dev@gmail.com?body=Ol%C3%A1,%20vimos%20seu%20portf%C3%B3lio..."
          target="_blank"
          rel="noopener noreferrer"
          className="max-md:scale-75 w-96 h-20 bg-tea rounded-2xl flex items-center text-jet font-bold text-xl justify-start transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-110 max-sm:scale-75 max-sm:hover:scale-90"
        >
          <ContactButton path="../../../assets/email.png" />
          <div className="w-full h-full flex items-center justify-center">
            <span>matheus.olv.dev</span>
          </div>
        </a>
        <a
          href="https://wa.me/5511987539647?text=Ol%C3%A1%20Matheus!"
          target="_blank"
          rel="noopener noreferrer"
          className="max-md:scale-75 w-96 h-20 bg-tea rounded-2xl flex items-center text-jet font-bold text-xl transition-all duration-300 ease-in-out justify-start hover:cursor-pointer max-sm:hover:scale-90 hover:scale-110 max-sm:scale-75"
        >
          <ContactButton path="../../../assets/whatsapp.png" />
          <div className="w-full h-full flex items-center justify-center">
            <span>+55 11 98753-9647</span>
          </div>

        </a>
      </div>

      <footer className="flex flex-col justify-end text-center text-jet md:text-xl font-semibold max-sm:text-sm">
        <span>{contactText.terms}</span>
        <span>2025 © Designed & Built by Matheus Oliveira</span>
      </footer>
    </section>
  );
}
