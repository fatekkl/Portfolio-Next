"use client";

import { useLanguage } from "@/contexts/LanguageContext";


export default function Contact() {
  const { t } = useLanguage();


  const contact_content = t.contact


  return (
    <section className="py-16 bg-gray-800 bg-opacity-70" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green_secondary mb-4">{contact_content.main_title}</h2>
          <p className="text-silver mb-8 text-lg">
            {contact_content.main_text}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a className="inline-flex gap-1 items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-green_secondary hover:bg-gold transition-colors w-full sm:w-auto" href="mailto:matheus.olv.dev@gmail.com">
              <img src="../assets/email.svg" />
              {contact_content.mail_button}
            </a>
            <a className="inline-flex items-center justify-around gap-1 px-8 py-3 border border-green_secondary text-base font-medium rounded-md text-green_secondary hover:bg-gold hover:text-gray-900 transition-colors w-full sm:w-auto" href="https://wa.me/5511987539647" target="_blank">
              <img src="../assets/whatsapp.svg" />
              {contact_content.whatsapp_button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
