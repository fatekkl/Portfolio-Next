"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";

export default function Principal() {
  const { t } = useLanguage();

  const principal_content = t.principal


  return (
    <main id="principal" className="flex flex-col md:flex-row relative">
      {/* Seção de apresentação */}
      <section className="w-full md:w-1/2 h-auto md:h-screen bg-jet flex flex-col">
        <div className="flex flex-col justify-center p-8 mt-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{principal_content.main_text.h1}</h1>
          <h2 className="text-4xl text-silver md:text-5xl font-bold mb-4">{principal_content.main_text.h2}</h2>
          <p className="text-green_secondary text-lg md:text-xl font-semibold mb-6">
            {principal_content.main_text.p1}
          </p>
          <p className="text-silver mb-8 text-base md:text-lg leading-relaxed">
            {principal_content.main_text.p2}
          </p>
          <div className="flex space-x-4 mb-12">
            <a href="https://www.linkedin.com/in/matheusolvcosta/" target="_blank" rel="noopener noreferrer">
              <img className="hover:scale-110 transition-all duration-150" src="../assets/Linkedin.svg" width={42} height={42} />
            </a>
            <a href="https://github.com/fatekkl" target="_blank" rel="noopener noreferrer">
              <img className="hover:scale-110 transition-all duration-150" src="../assets/Github.svg" width={42} height={42} />
            </a>
            <a href="../MatheusCurriculo.pdf" download>
              <img className="hover:scale-110 transition-all duration-150" src="../assets/Document.svg" width={42} height={42} />
            </a>
          </div>
        </div>

        <div className="mt-auto p-8 md:p-12">
          <h3 className="text-xl font-semibold mb-3">{principal_content.sub_text.h3}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-silver">
            <p>{principal_content.sub_text.p1}</p>
            <p>{principal_content.sub_text.p2}</p>
          </div>
        </div>
      </section>

      {/* Seção lateral */}
      <aside className="w-full md:w-1/2 h-64 md:h-screen bg-green_secondary flex justify-center items-center">
        <img src="../assets/MainPhoto.png" className="max-h-full max-w-full object-contain p-4" />
      </aside>
    </main>
  );
}
