export default function Journey() {
    return (
        <section className="flex flex-col md:flex-row min-h-screen relative bg-jet">
            <div className="ml-12 mt-16 w-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-tea text-5xl font-bold text-start">Minha jornada</h1>
                    <p className="font-normal text-justify text-2xl w-[43.75rem] h-40">Ao longo dos anos já interagi e trabalhei com diversas tecnologias do mercado, como JavaScript, Kotlin, PHP, Java, entre outros. Como resultado, tive a oportunidade de trabalhar em diversos projetos pelo Brasil inteiro.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-tea text-[2rem] font-bold">O que fiz nesses projetos?</h2>
                    <p className="font-normal text-justify text-2xl w-[43.75rem] h-40">Ao longo dos anos trabalhei nos mais diversos tipos de projeto, como integrações, configuração e hospedagem de servidores, automações de estoque, entre outros. Com isso, adquiri experiência para me adaptar a diversas situações e trabalhar de diferentes formas e tecnologias.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-tea text-[2rem] font-bold">O que busco agora?</h2>
                    <p className="font-normal text-justify text-2xl w-[43.75rem] h-40">Atualmente estou buscando a minha primeira oportunidade de emprego FIXO e prester a iniciar o meu ensino superior. Em paralelo a meus estudos sobre software escalável, estrutura de dados e UI/UX.</p>
                </div>
            </div>
        </section>
    );
}
