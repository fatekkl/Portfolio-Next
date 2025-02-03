"use client"

import DotSquare from "../DotSquare";
import Line from "../Line";
import Stair from "../Stair";
import Link from "next/link";

export default function Principal() {

  function copy(event: React.MouseEvent<HTMLDivElement>, color_class: string) {
    const target = event.currentTarget;

    // Copia o texto para a área de transferência
    navigator.clipboard.writeText(target.innerText);

    // Muda a cor do texto imediatamente
    target.classList.remove("text-jet")
    target.classList.add(color_class);

    setTimeout(() => { target.classList.remove(color_class); target.classList.add("text-jet") }, 700)

  }


  return (
    <div id="principal" className="flex">
      {/* Seção Jet */}
      <section className="w-screen md:w-2/3 lg:w-2/3 h-auto  bg-jet relative">
        {/* Conteúdo da Seção Jet */}
        <div className="max-sm:hidden absolute left-2/4 opacity-30 top-48">
          <DotSquare />
        </div>
        <div className="hidden md:block absolute left-[60%] opacity-30 top-2/4">
          <DotSquare />
        </div>
        <div className="hidden md:block absolute left-3/4 top-[50rem] md:top-[4rem] opacity-30">
          <DotSquare />
        </div>

        {/* Ajuste de margens para telas menores e absolutas em telas maiores */}
        <div className="absolute ml-4 lg:ml-12 mt-8 max-sm:hidden">
          <Stair />
        </div>

        <div className="w-full h-full flex flex-col justify-center gap-6 max-sm:items-center max-sm:justify-center">
          <h1 className="font-bold ml-12  text-xl lg:text-4xl leading-normal max-sm:text-center">
            Olá,
            <br />
            Sou o Matheus 👋
          </h1>
          <h2 className="font-bold ml-12  text-2xl text-jordy max-sm:text-center">
            Desenvolvedor Fullstack
          </h2>
          <p className="lg:w-2/4 ml-12  md:w-2/4 text-xl text-justify max-sm:w-8/12 max-sm:text-center">
            Sou um desenvolvedor curioso e apaixonado por tecnologia,
            conheça mais sobre minhas habilidades e projetos aqui.
          </p>
          <div className=" ml-12 flex gap-5">
            <Link href={"https://www.linkedin.com/in/matheusolvcosta/"} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
              <img
                className="w-10 lg:w-16"
                src="../../../assets/Linkedin.svg"
                alt="Linkedin"
              />
            </Link>
            <Link href={"https://github.com/fatekkl"} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
              <img
                className="w-10 lg:w-16"
                src="../../../assets/Github.svg"
                alt="Github"
              />
            </Link>
            <a href="../../../MatheusCurriculo.pdf" download={"MatheusCurriculo.pdf"} className="hover:scale-125 transition-transform duration-300">
              <img
                className="w-10 lg:w-16"
                src="../../../assets/Document.svg"
                alt="Document"
              />
            </a>
          </div>
        </div>



      </section>

      {/* Imagem Centralizada (oculta em telas muito pequenas) */}
      <img
        className="absolute top-1/2 md:left-3/4 lg:left-2/3 transform -translate-y-1/2 -translate-x-1/2 z-40 max-sm:hidden md:w-[20rem]"
        src="../../../assets/Eu.png"
        alt="Eu"
      />

      {/* Seção Jordy */}
      <section className="bg-jordy max-sm:w-1/6 md:w-1/3 lg:w-1/3 flex flex-col h-screen justify-end">
        {/* Elementos decorativos (ocultos em telas pequenas) */}
        <div className="max-sm:hidden absolute bottom-3/4 ml-14">
          <DotSquare />
        </div>
        <div className="max-sm:hidden md:hidden absolute bottom-2/4 ml-36 left-3/4">
          <DotSquare />
        </div>
        <div className="max-sm:hidden absolute top-3/4 ml-20">
          <DotSquare />
        </div>

        <div className="w-full justify-end hidden lg:flex">
          <Line />
        </div>
        <div onClick={(event) => copy(event, "text-tea")} className="text-jet font-quantico font-bold absolute top-1/2 -rotate-90 -right-20 hover: cursor-pointer transition-all duration-500 ease-in-out ">
          mathtml.1105@gmail.com
        </div>

      </section>
    </div>
  );
}