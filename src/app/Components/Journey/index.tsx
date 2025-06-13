export default function Journey() {
    return (
        <main className="flex flex-col md:flex-row items-center min-h-screen w-full relative bg-jet p-8 gap-10">
            <section className="flex flex-col gap-10">
                <article className="w-full flex flex-col gap-6">
                    <h1 className="text-green_secondary font-bold text-3xl">Com o que trabalho?</h1>
                    <p className="text-base text-silver font-bold leading-relaxed w-3/4">
                        Ao longo dos anos já interagi e trabalhei com diversas tecnologias do mercado, como JavaScript, Kotlin, PHP, Java, Python, .Net, entre outros. Como resultado, tive a oportunidade de trabalhar em diversos projetos pelo Brasil inteiro.
                    </p>
                </article>
                <article className="w-full flex flex-col gap-6">
                    <h1 className="text-green_secondary font-bold text-3xl">O que fiz nesses projetos?</h1>
                    <p className="text-base text-silver font-bold leading-relaxed w-3/4">
                        Já trabalhei nos mais diversos tipos de projetos, como integrações, configuração e hospedagem de servidores, automações de estoque, entre outros. Com isso, adquiri experiência para me adaptar a diversas situações e trabalhar de diferentes formas e tecnologias.
                    </p>
                </article>
                <article className="w-full flex flex-col gap-6">
                    <h1 className="text-green_secondary font-bold text-3xl">O que busco agora?</h1>
                    <p className="text-base text-silver font-bold leading-relaxed w-3/4">
                        Atualmente, estou em busca da minha primeira oportunidade de emprego em tempo integral e me preparo para ingressar no ensino superior. Paralelamente, sigo aprimorando meus conhecimentos em software escalável, estrutura de dados e UI/UX.
                    </p>
                </article>
            </section>
            <img 
                src="../assets/Storyset.svg" 
                alt="Ilustração"
                className="w-full max-w-md"
            />
        </main>
    );
}
