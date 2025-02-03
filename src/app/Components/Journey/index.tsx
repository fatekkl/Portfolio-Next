import DotSquare from "../DotSquare";
import Menu from "../Menu";
import Stair from "../Stair";

export default function Journey() {
    return (
        <>
            <div className="absolute z-10 ml-4 md:ml-12 mt-[50rem] -rotate-90 max-sm:hidden">
                <Stair />
            </div>

            <section className="flex flex-col md:flex-row justify-evenly min-h-screen relative bg-jet p-8">
                {/* Elementos decorativos que podem ficar ocultos em telas muito pequenas */}
                <div className="hidden md:block absolute left-2/4 top-[6rem] opacity-20">
                    <DotSquare />
                </div>
                <div className="hidden md:block absolute left-[50rem] opacity-10 top-[32rem]">
                    <DotSquare />
                </div>
                <div className="hidden md:block absolute left-[25rem] top-[50rem] opacity-10">
                    <DotSquare />
                </div>
                <div className="hidden md:block absolute left-[65rem] top-[48rem] opacity-70">
                    <DotSquare />
                </div>
                
                <div className="md:ml-12 mt-16 max-sm:w-full md:w-1/2 flex flex-col gap-8 tracking-[0.094rem] max-sm:hidden">
                    <div className="flex flex-col gap-2 max-sm:w-10/12">
                        <h1 className="text-tea text-3xl font-bold">Com o que trabalho?</h1>
                        <p className="font-normal max-sm:text-center md:text-justify max-sm:text-xl md:text-2xl h-auto">Ao longo dos anos já interagi e trabalhei com diversas tecnologias do mercado, como JavaScript, Kotlin, PHP, Java, Python, .Net, entre outros. Como resultado, tive a oportunidade de trabalhar em diversos projetos pelo Brasil inteiro.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-tea text-3xl font-bold">O que fiz nesses projetos?</h2>
                        <p className="font-normal max-sm:text-center md:text-justify max-sm:text-xl md:text-2xl max-w-full h-auto">Já trabalhei nos mais diversos tipos de projetos, como integrações, configuração e hospedagem de servidores, automações de estoque, entre outros. Com isso, adquiri experiência para me adaptar a diversas situações e trabalhar de diferentes formas e tecnologias.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-tea text-3xl font-bold">O que busco agora?</h2>
                        <p className="font-normal max-sm:text-center md:text-justify max-sm:text-xl md:text-2xl max-w-70 h-auto">Atualmente, estou em busca da minha primeira oportunidade de emprego em tempo integral e me preparo para ingressar no ensino superior. Paralelamente, sigo aprimorando meus conhecimentos em software escalável, estrutura de dados e UI/UX.</p>
                    </div>
                </div>
                <img src="../../../assets/Storyset.svg" className="mr-16 max-w-full h-auto max-sm:hidden" alt="Ilustração de jornada profissional" />
            </section>
        </>
    );
}
