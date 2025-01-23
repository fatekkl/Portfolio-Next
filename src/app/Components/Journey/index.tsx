import DotSquare from "../DotSquare";
import Menu from "../Menu";
import Stair from "../Stair";

export default function Journey() {
    return (
        <>
            <div className="absolute z-10 ml-4 md:ml-12 mt-[50rem] -rotate-90">
                <Stair />
            </div>

            <section className="flex justify-evenly md:flex-row min-h-screen relative bg-jet">
                {/* Elementos decorativos que podem ficar ocultos em telas muito pequenas */}
                <div className="hidden md:block absolute left-2/4  top-[6rem]">
                    <DotSquare />
                </div>
                <div className="hidden md:block absolute left-[50rem] opacity-30 top-[32rem]">
                    <DotSquare />
                </div>
                <div className="hidden md:block absolute left-[25rem] top-[50rem]  opacity-30">
                    <DotSquare />
                </div>
                <div className="hidden md:block absolute left-[55rem] top-[48rem]">
                    <DotSquare />
                </div>

                <div className="ml-12 mt-16 w-1/2 flex flex-col gap-4">
                    <div className="flex flex-col">
                        <h1 className="text-tea text-5xl font-bold text-start">Minha jornada</h1>
                        <p className="font-normal text-justify text-2xl w-[43.75rem] h-40">Ao longo dos anos já interagi e trabalhei com diversas tecnologias do mercado, como JavaScript, Kotlin, PHP, Java, entre outros. Como resultado, tive a oportunidade de trabalhar em diversos projetos pelo Brasil inteiro.</p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-tea text-[2rem] font-bold">O que fiz nesses projetos?</h2>
                        <p className="font-normal text-justify text-2xl w-[43.75rem] h-40">Ao longo dos anos trabalhei nos mais diversos tipos de projeto, como integrações, configuração e hospedagem de servidores, automações de estoque, entre outros. Com isso, adquiri experiência para me adaptar a diversas situações e trabalhar de diferentes formas e tecnologias.</p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-tea text-[2rem] font-bold">O que busco agora?</h2>
                        <p className="font-normal text-justify text-2xl w-[43.75rem] h-40">Atualmente estou buscando a minha primeira oportunidade de emprego FIXO e prester a iniciar o meu ensino superior. Em paralelo a meus estudos sobre software escalável, estrutura de dados e UI/UX.</p>
                    </div>
                </div>
                <img src="../../../assets/Storyset.svg" className="mr-16">
                </img>
                {/* <div className="absolute w-full flex justify-end mt-10">
                    <Menu color="#9AC4F8" />
                </div> */}
            </section>
        </>
    );
}
