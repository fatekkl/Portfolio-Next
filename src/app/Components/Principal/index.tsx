"use client";

import React from "react";

export default function Principal() {
  return (
    <main id="principal" className="flex flex-col md:flex-row relative">
      {/* Seção de apresentação */}
      <section className="w-full md:w-1/2 h-auto md:h-screen bg-jet flex flex-col">
        <div className="flex flex-col justify-center p-8 mt-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Olá,</h1>
          <h2 className="text-4xl text-silver md:text-5xl font-bold mb-4">Sou o Matheus 👋</h2>
          <p className="text-green_secondary text-lg md:text-xl font-semibold mb-6">
            Desenvolvedor Fullstack
          </p>
          <p className="text-silver mb-8 text-base md:text-lg leading-relaxed">
            Sou um desenvolvedor curioso e apaixonado por tecnologia, conheça mais sobre minhas habilidades e projetos aqui.
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
          <h3 className="text-xl font-semibold mb-3">Solucione seus problemas com software.</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-silver">
            <p>Desenvolvo com escalabilidade e performance.</p>
            <p>Trabalhei em projetos por todo o Brasil.</p>
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
