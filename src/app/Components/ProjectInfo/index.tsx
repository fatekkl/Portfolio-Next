import ProjectTask from "../ProjectTask";


export default function ProjectInfo() {
    return (
        <section className="md:w-3/4 bg-gray-800 p-6 sm:p-8 rounded-xl shadow-xl">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-emerald-400">Desenvolvedor Backend <span className="text-gray-400 font-normal text-xl">- Ozon Solution</span></h2>
                <p className="text-sm text-gray-500 mt-1">Março de 2024</p>
            </div>
            <ul className="space-y-4 text-gray-300">
                <ProjectTask description="Implementei a integração entre WooCommerce e Kommo CRM via API para sincronização de dados." />
                <ProjectTask description="Configurei um pipeline (CI/CD) para automatizar testes e deploy, otimizando o fluxo de desenvolvimento." />
                <ProjectTask description="Criei leads dinamicamente no CRM, de acordo com as vendas realizadas no WooCommerce." />
                <ProjectTask description="Aprimorei a performance do sistema, aplicando boas práticas e padrões de Orientação a Objetos." />
                <ProjectTask description="Implementei o envio de dados para o pipeline via Webhook, garantindo rastreabilidade das operações." />
            </ul>
            <div className="mt-8 flex items-center space-x-3">
                <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">JS</span>
                <span className="inline-block bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">WOO</span>
                <img alt="PHP icon" className="h-6 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUqVwzH736XnIbMrE51y7o9FNxp7mRCxaKV_U8T5aC9iDEhEPvZlSaXbRDQvQ_r0wbNyfRmm5d3aFWGjl2hmIMBJPLDENx5EgJnHk2_mOWqgj2rsBXKrVO_g1vCZF6iKUooiFH23gQbqqiLedUUbcKoFwiOxS4ah-h05fq5JOUQxnG1RagQEvDTgNdZiJxToJWh6rFV1MuUFwNK72rQY29r-4cXn4GSZnrvZy7frlz9kySulpUeKe8CtT6mYFImxxo2vR6TXABJBI" />
            </div>
        </section>
    )
}