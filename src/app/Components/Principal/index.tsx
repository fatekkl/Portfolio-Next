import DotSquare from "../DotSquare"
import Stair from "../Stair"


export default function Principal() {
    return (
        <div className="flex h-screen relative">
            {/* Seção Jet */}
            <section className="w-2/3 h-screen bg-jet relative">
                {/* Conteúdo da Seção Jet */}
                <div className="absolute ml-12 mt-8">
                    <Stair />
                </div>
                <div className="absolute left-2/4 opacity-30 top-48">
                    <DotSquare />
                </div>
                <div className="absolute left-[60%] opacity-30 top-1/2">
                    <DotSquare />
                </div>
                <div className="absolute left-1/4 top-[40rem] opacity-30">
                    <DotSquare />
                </div>
                <div className="flex flex-col ml-12 mt-56 gap-6">
                    <h1 className="font-bold text-5xl leading-normal">
                        Olá,
                        <br />
                        Sou o Matheus 👋
                    </h1>
                    <h2 className="font-bold text-3xl text-jordy">
                        Desenvolvedor Fullstack
                    </h2>
                    <span className="w-[30rem] h-36 text-justify text-2xl">
                        Sou um um desenvolvedor curioso e apaixonado por tecnologia,
                        conheça mais sobre minhas habilidades e projetos aqui.
                    </span>
                    <div className="flex gap-5">
                        <img className="w-16" src="../../../assets/Linkedin.svg" />
                        <img className="w-16" src="../../../assets/Github.svg" />
                        <img className="w-16" src="../../../assets/Document.svg" />
                    </div>
                </div>
                <div className="w-[38rem] h-36 absolute top-3/4 left-1/2 transform -translate-x-1/4 flex flex-col gap-9">
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

            {/* Imagem Responsiva Centralizada */}
            <img
                className="absolute top-1/2 left-2/3 transform -translate-y-1/2 -translate-x-1/2"
                src="../../../assets/Eu.png"
            />

            {/* Seção Jordy */}
            <section className="w-1/3 h-screen bg-jordy"></section>
        </div>
    );
}
