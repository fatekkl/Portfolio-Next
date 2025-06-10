import Stair from "../Stair";

export default function Journey() {
    return (
        <>
            <aside className="fixed bottom-0 left-0 mb-4 ml-4 md:ml-12 z-40 -rotate-90 max-lg:hidden">
                <Stair />
            </aside>


            <main className="flex flex-col md:flex-row justify-around min-h-screen relative bg-jet p-8">
                
                <article className="md:ml-12 mt-16 max-sm:w-full md:w-1/2 flex flex-col gap-8 tracking-[0.094rem]">
                    <section className="flex flex-col gap-2 md:text-center lg:text-justify">
                        <h2 className="text-green_secondary max-sm:text-center text-3xl font-bold">Com o que trabalho?</h2>
                        <p className="font-normal text-silver max-sm:text-center  max-sm:text-xl md:text-2xl h-auto">
                            Ao longo dos anos já interagi e trabalhei com diversas tecnologias do mercado, como JavaScript, Kotlin, PHP, Java, Python, .Net, entre outros. Como resultado, tive a oportunidade de trabalhar em diversos projetos pelo Brasil inteiro.
                        </p>
                    </section>
                    <section className="flex flex-col gap-2 md:text-center lg:text-justify text-green_secondary">
                        <h2 className="text-green_secondary max-sm:text-center text-3xl font-bold">O que fiz nesses projetos?</h2>
                        <p className="font-normal text-silver max-sm:text-center  max-sm:text-xl md:text-2xl max-w-full h-auto">
                            Já trabalhei nos mais diversos tipos de projetos, como integrações, configuração e hospedagem de servidores, automações de estoque, entre outros. Com isso, adquiri experiência para me adaptar a diversas situações e trabalhar de diferentes formas e tecnologias.
                        </p>
                    </section>
                    <section className="flex flex-col gap-2 md:text-center lg:text-justify text-green_secondary">
                        <h2 className="text-green_secondary max-sm:text-center  text-3xl font-bold">O que busco agora?</h2>
                        <p className="font-normal text-silver max-sm:text-center  max-sm:text-xl md:text-2xl max-w-70 h-auto">
                            Atualmente, estou em busca da minha primeira oportunidade de emprego em tempo integral e me preparo para ingressar no ensino superior. Paralelamente, sigo aprimorando meus conhecimentos em software escalável, estrutura de dados e UI/UX.
                        </p>
                    </section>
                </article>

                <figure className="self-center w-96 h-auto max-lg:hidden z-40">
                    <img src="../../../assets/Storyset.svg" alt="Ilustração de jornada profissional" />
                </figure>
            </main>
        </>
    );
}
