"use client";

import Line from "../Line";
import Stair from "../Stair";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Principal() {
  const [color, setColor] = useState("#343330")


  const handleCopy = (
    event: React.MouseEvent<HTMLDivElement>,
    colorClass: string
  ): void => {
    const { currentTarget } = event;
    navigator.clipboard.writeText(currentTarget.innerText);
    currentTarget.classList.replace("text-violet", colorClass);
    currentTarget.classList.add("scale-105")
    setTimeout(() => currentTarget.classList.replace(colorClass, "text-violet"), 700);
    setTimeout(() => currentTarget.classList.remove("scale-105"), 700);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 840) {
        setColor("#343330");
      } else {
        setColor("#9AC4F8");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main id="principal" className="flex relative">
      {/* Seção de apresentação */}
      <section className="w-full md:w-2/3 lg:w-2/3 h-auto bg-jet relative flex flex-col max-sm:gap-2 gap-8 max-sm:items-center">
        <header className="absolute ml-4 lg:ml-12 mt-8 max-sm:hidden">
          <Stair />
        </header>

        <article className="w-full h-3/4 flex flex-col justify-end gap-6 sm:justify-center sm:items-center md:items-start md:justify-end max-sm:items-center text-center max-sm:justify-center">
          <h1 className="font-bold text-white ml-12 text-xl lg:text-4xl leading-normal max-sm:text-center md:text-start">
            Olá,
            <br />
            Sou o Matheus 👋
          </h1>
          <h2 className="font-bold ml-12 text-2xl text-jordy max-sm:text-center">
            Desenvolvedor Fullstack
          </h2>
          <p className="lg:w-2/4 ml-12 md:w-2/4 text-xl text-white text-justify sm:text-center md:text-start sm:w-6/12 max-sm:w-8/12 max-sm:text-center">
            Sou um desenvolvedor curioso e apaixonado por tecnologia, conheça mais sobre minhas
            habilidades e projetos aqui.
          </p>
          <nav className="ml-12 flex gap-5" aria-label="links sociais">
            <Link
              href="https://www.linkedin.com/in/matheusolvcosta/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-300"
            >
              <Image
                src="/assets/Linkedin.svg"
                alt="LinkedIn"
                width={64}
                height={64}
                className="w-10 lg:w-16"
              />
            </Link>
            <Link
              href="https://github.com/fatekkl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-300"
            >
              <Image
                src="/assets/Github.svg"
                alt="GitHub"
                width={64}
                height={64}
                className="w-10 lg:w-16"
              />
            </Link>
            <a
              href="/MatheusCurriculo.pdf"
              download
              className="hover:scale-125 transition-transform duration-300"
            >
              <Image
                src="/assets/Document.svg"
                alt="Currículo"
                width={64}
                height={64}
                className="w-10 lg:w-16"
              />
            </a>
          </nav>
        </article>
        <div className="text-tea mt-4 font-bold max-sm:w-1/2 w-full h-fit flex flex-col items-center justify-center gap-4 max-sm:text-xs text-xl tracking-[0.094rem]">
          <span className="text-wrap text-center">
            Solucione seus problemas com software.
          </span>
          <div className="flex justify-between text-xs font-normal text-wrap h-full max-sm:gap-4 gap-8 text-center mb-4">
            <span>Desenvolto com escalabilidade e performance.</span>
            <span>Trabalhei em projetos por todo o Brasil.</span>
          </div>
        </div>
      </section>

      <figure className="absolute top-1/2 sm:right-1/4 left-2/3 transform -translate-y-1/2 -translate-x-1/2 z-40 max-md:hidden md:w-[14rem] lg:w-[20rem]">
        <Image
          src="/assets/Eu.png"
          alt="Foto de Matheus"
          width={320}
          height={320}
          className="w-full h-auto"
        />
      </figure>

      {/* Seção lateral */}
      <aside className="bg-jordy sm:w-1/6 md:w-1/3 lg:w-1/3 flex flex-col h-screen justify-end">
        <footer className="w-full justify-end hidden lg:flex">
          <Line />
        </footer>
      </aside>
    </main>
  );
}
