import ProjectTask from "../ProjectTask";

interface Props {
    activeProject: number;
}


export default function ProjectInfo({ activeProject }: Props) {

    // criar objeto, responsável por representar item do ID referenciado, da pra usar como base o antigo do Github

    return (
        <section className="md:w-3/4 bg-gray-800 p-6 sm:p-8 rounded-xl shadow-xl">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gold">Desenvolvedor Backend <span className="text-gray-400 font-normal text-xl">- Ozon Solution</span></h2>
                <p className="text-sm text-gray-400 mt-1">Março de 2024</p>
            </div>
            <ul className="space-y-4 text-gray-300">
                <ProjectTask description="Implementei a integração entre WooCommerce e Kommo CRM via API para sincronização de dados." />
                <ProjectTask description="Configurei um pipeline (CI/CD) para automatizar testes e deploy, otimizando o fluxo de desenvolvimento." />
                <ProjectTask description="Criei leads dinamicamente no CRM, de acordo com as vendas realizadas no WooCommerce." />
                <ProjectTask description="Aprimorei a performance do sistema, aplicando boas práticas e padrões de Orientação a Objetos." />
                <ProjectTask description="Implementei o envio de dados para o pipeline via Webhook, garantindo rastreabilidade das operações." />
            </ul>
            <div className="mt-8 flex items-center space-x-3">
                <img src="../assets/webhook_tech.png" />
                <img src="../assets/woo_tech.png" />
                <img src="../assets/js_tech.png" />
                <img src="../assets/api_tech.png" />
            </div>
        </section>
    )
}