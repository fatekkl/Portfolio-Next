import DotSquare from "../DotSquare";
import Line from "../Line";
import Stair from "../Stair";
import Menu from "../Menu";

export default function Principal() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen relative">
      {/* Seção Jet */}
      <section className="w-full md:w-2/3 h-auto md:h-screen bg-jet relative">
        {/* Conteúdo da Seção Jet */}
        {/* Ajuste de margens para telas menores e absolutas em telas maiores */}
        <div className="absolute ml-4 md:ml-12 mt-8">
          <Stair />
        </div>

        {/* Elementos decorativos que podem ficar ocultos em telas muito pequenas */}
        <div className="hidden md:block absolute left-2/4 opacity-30 top-48">
          <DotSquare />
        </div>
        <div className="hidden md:block absolute left-[60%] opacity-30 top-1/2">
          <DotSquare />
        </div>
        <div className="hidden md:block absolute left-1/4 top-[40rem] opacity-30">
          <DotSquare />
        </div>

        {/* Container principal de textos */}
        <div className="flex flex-col ml-4 md:ml-12 mt-16 md:mt-56 gap-6 px-4 md:px-0">
          <h1 className="font-bold text-3xl md:text-5xl leading-normal">
            Olá,
            <br />
            Sou o Matheus 👋
          </h1>
          <h2 className="font-bold text-xl md:text-3xl text-jordy">
            Desenvolvedor Fullstack
          </h2>
          <p className="text-justify text-md md:text-2xl max-w-full md:w-[30rem]">
            Sou um desenvolvedor curioso e apaixonado por tecnologia,
            conheça mais sobre minhas habilidades e projetos aqui.
          </p>
          <div className="flex gap-5">
            <img
              className="w-10 md:w-16"
              src="../../../assets/Linkedin.svg"
              alt="Linkedin"
            />
            <img
              className="w-10 md:w-16"
              src="../../../assets/Github.svg"
              alt="Github"
            />
            <img
              className="w-10 md:w-16"
              src="../../../assets/Document.svg"
              alt="Document"
            />
          </div>
        </div>

        {/* Texto extra (abaixo) */}
        <div className="hidden md:flex flex-col gap-9 w-[38rem] h-36 absolute top-3/4 left-1/2 transform -translate-x-1/4">
          <span className="text-2xl text-center text-tea font-bold">
            Solucionando seus problemas com software
          </span>
          <div className="flex justify-between gap-8">
            <span className="w-60 text-tea text-justify text-[1rem]">
              Habilidoso com aplicações escaláveis e integração contínua.
            </span>
            <span className="w-52 text-tea text-justify text-[1rem]">
              Experiência em projetos por todo o Brasil.
            </span>
          </div>
        </div>
      </section>

      {/* Imagem Centralizada (oculta em telas muito pequenas) */}
      <img
        className="hidden md:block absolute top-1/2 left-2/3 transform -translate-y-1/2 -translate-x-1/2 z-50 max-h-[80vh]"
        src="../../../assets/Eu.png"
        alt="Eu"
      />

      {/* Seção Jordy */}
      <section className="bg-jordy w-1/3 flex flex-col h-screen justify-between">
        {/* Elementos decorativos (ocultos em telas pequenas) */}
        <div className="absolute bottom-3/4 ml-14 right-1/4">
          <DotSquare />
        </div>
        <div className="absolute bottom-2/4 ml-36 left-3/4">
          <DotSquare />
        </div>
        <div className="absolute top-3/4 ml-26 right-1/4">
          <DotSquare />
        </div>

        {/* Posiciona o Menu no canto superior direito */}
        <div className="w-full flex justify-end mt-10">
          <Menu/>
        </div>

        {/* E-mail rotacionado */}
        <div className="text-jet font-quantico font-bold absolute top-1/2 -rotate-90 -right-20">
          mathtml.1105@gmail.com
        </div>

        <div className="flex w-full justify-end">
          <Line/>
        </div>
      </section>
    </div>
  );
}
