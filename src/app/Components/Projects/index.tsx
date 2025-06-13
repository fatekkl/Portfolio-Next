"use client";

import { useEffect, useState } from "react";
import Line2 from "../Separator";
import Separator from "../Separator";
import ProjectInfo from "../ProjectInfo";
import ProjectNavigation from "../ProjectNavigation";

export default function Projects() {
  const [projectsSelection, setProjectsSelection] = useState([true, false, false, false, false]);
  const [isMobile, setIsMobile] = useState(false)

  const selectProject = (x: number) => {
    setProjectsSelection((prev) => {
      const newSelections = [...prev].fill(false);
      newSelections[x] = true;
      return newSelections;
    });
  };

  const selectDescription = () => {
    let activeProject = 0;

    for (let index = 0; index < projectsSelection.length; index++) {
      if (projectsSelection[index]) {
        activeProject = index;
      }
    }

    return loadDescription(activeProject);
  };

  const loadDescription = (x: number) => {
    const description = {
      title: "",
      function: "",
      date: "",
      task_one: "",
      task_two: "",
      task_three: "",
      task_four: "",
      task_five: "",
      techs: [""],
    };

    switch (x) {
      case 0:
        description.title = "Resend";
        description.function = "Desenvolvedor Fullstack";
        description.date = "Junho de 2024";
        description.task_one = "Realizei a configuração completa de um servidor Linux (Ubuntu), garantindo segurança e estabilidade para o envio de e-mails.";
        description.task_two = "Implementei uma rotina automatizada (cron) para disparos de e-mails em datas e horários selecionados.";
        description.task_three = "Desenvolvi uma API robusta com rotas de envio e CRUD para integrar o serviço de e-mails.";
        description.task_four = "           dasdsCriei endpoints para validar e configurar domínios exclusivos por usuário.";
        description.task_five = "Configurei e hospedei o servidor web utilizando Apache, seguindo boas práticas de segurança.";
        description.techs.push("../assets/php_tech.png", "../assets/linux_tech.png", "../assets/cloud_tech.png", "../assets/api_tech.png");
        break;

      case 1:
        description.title = "Ozon Solution";
        description.function = "Desenvolvedor Backend";
        description.date = "Março de 2024";
        description.task_one = "Implementei a integração entre WooCommerce e Kommo CRM via API para sincronização de dados.";
        description.task_two = "Configurei um pipeline (CI/CD) para automatizar testes e deploy, otimizando o fluxo de desenvolvimento.";
        description.task_three = "Criei leads dinamicamente no CRM, de acordo com as vendas realizadas no WooCommerce.";
        description.task_four = "Aprimorei a performance do sistema, aplicando boas práticas e padrões de Orientação a Objetos.";
        description.task_five = "Implementei o envio de dados para o pipeline via Webhook, garantindo rastreabilidade das operações.";
        description.techs.push("../assets/js_tech.png", "../assets/webhook_tech.png", "../assets/woo_tech.png", "../assets/api_tech.png");
        break;

      case 2:
        description.title = "Bling";
        description.function = "Desenvolvedor Fullstack";
        description.date = "Setembro a Outubro de 2024";
        description.task_one = "Desenvolvi uma API para se comunicar com o Bling (ERP), facilitando o gerenciamento de pedidos e estoque.";
        description.task_two = "Hospedei serviços na AWS (Lambda, EC3 e Amazon EventBridge), otimizando custos e escalabilidade.";
        description.task_three = "Automatizei o processo de renovação de token OAuth 2.0, garantindo a continuidade do serviço.";
        description.task_four = "Criei rotinas de requisição e listeners via Webhook para sincronizar estoque em tempo real.";
        description.task_five = "Integrei o sistema com Amazon SQS para gerenciar e enviar requisições de forma assíncrona.";
        description.techs.push("../assets/aws_tech.png", "../assets/js_tech.png", "../assets/erp_tech.png", "../assets/api_tech.png");
        break;

      case 3:
        description.title = "Aideia";
        description.function = "Desenvolvedor Backend";
        description.date = "Agosto de 2024";
        description.task_one = "Integrei o formulário WordPress com o ClickUP, unificando os dados de captação de leads.";
        description.task_two = "Criei leads por meio da API do ClickUP, automatizando o fluxo de entrada de informações.";
        description.task_three = "Atualizei o pipeline (CI/CD) para garantir versionamento e deploy contínuos.";
        description.task_four = "Desenvolvi um formulário personalizado para coleta de dados e envio ao ClickUP.";
        description.task_five = "Configurei um ambiente de testes para manutenção futura, garantindo qualidade e estabilidade.";
        description.techs.push("../assets/wordpress_tech.png", "../assets/js_tech.png", "../assets/clickup_tech.png", "../assets/api_tech.png");
        break;

      case 4:
        description.title = "JumpVerso";
        description.function = "Desenvolvedor Fullstack";
        description.date = "Junho a Julho de 2024";
        description.task_one = "Criei uma interface web para exibir dados de usuários cadastrados, facilitando a gestão de perfis.";
        description.task_two = "Desenvolvi um servidor para gerenciar autenticação, garantindo segurança dos usuários.";
        description.task_three = "Integrei a Evolution API (WhatsApp) com a plataforma web, habilitando comunicação automatizada.";
        description.task_four = "Implementei geração de QR Code para autenticação simplificada do WhatsApp do usuário.";
        description.task_five = "Criei um sistema de seleção de grupos para envio automático via Webhook, ampliando o alcance das campanhas.";
        description.techs.push("../assets/express_tech.png", "../assets/js_tech.png", "../assets/webhook_tech.png", "../assets/api_tech.png");
        break;

      default:
        description.title = "Não Encontrado";
        description.function = "Não Encontrado";
        description.date = "Não Encontrado";
        break;
    }

    return description;
  };


  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768)
  }

  useEffect(() => {
    checkScreenSize()

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [])

  return (
    <main className="mx-auto px-6 py-20 md:py-24 bg-jet">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-100">Projetos em que atuei</h1>
        <div className="w-24 h-1 bg-green_secondary mb-12" />
        <div className="flex flex-col md:flex-row gap-8">
          <ProjectNavigation />
          <ProjectInfo />
        </div>
      </div>
    </main>

  );
}
