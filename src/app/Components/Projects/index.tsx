"use client";

import { useState } from "react";
import DotSquare from "../DotSquare";
import Line2 from "../Line2";
import ProjectDescription from "../ProjectDescription";
import UniqueProject from "../UniqueProject";

export default function Projects() {
  const [projectsSelection, setProjectsSelection] = useState([true, false, false, false, false]);

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

    // Retorna a descrição referente ao projeto selecionado
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
      techs: [""]
    };

    switch (x) {
      case 0:
        description.title = "Resend";
        description.function = "Desenvolvedor Fullstack";
        description.date = "Junho de 2024";
        description.task_one =
          "Realizei a configuração completa de um servidor Linux (Ubuntu), garantindo segurança e estabilidade para o envio de e-mails.";
        description.task_two =
          "Implementei uma rotina automatizada (cron) para disparos de e-mails em datas e horários selecionados.";
        description.task_three =
          "Desenvolvi uma API robusta com rotas de envio e CRUD para integrar o serviço de e-mails.";
        description.task_four =
          "Criei endpoints para validar e configurar domínios exclusivos por usuário.";
        description.task_five =
          "Configurei e hospedei o servidor web utilizando Apache, seguindo boas práticas de segurança.";

        description.techs.push("../assets/php_tech.png")
        description.techs.push("../assets/linux_tech.png")
        description.techs.push("../assets/cloud_tech.png")
        description.techs.push("../assets/api_tech.png")


        break;

      case 1:
        description.title = "Ozon Solution";
        description.function = "Desenvolvedor Backend";
        description.date = "Março de 2024";
        description.task_one =
          "Implementei a integração entre WooCommerce e Kommo CRM via API para sincronização de dados.";
        description.task_two =
          "Configurei um pipeline (CI/CD) para automatizar testes e deploy, otimizando o fluxo de desenvolvimento.";
        description.task_three =
          "Criei leads dinamicamente no CRM, de acordo com as vendas realizadas no WooCommerce.";
        description.task_four =
          "Aprimorei a performance do sistema, aplicando boas práticas e padrões de Orientação a Objetos.";
        description.task_five =
          "Implementei o envio de dados para o pipeline via Webhook, garantindo rastreabilidade das operações.";
        break;

      case 2:
        description.title = "Bling";
        description.function = "Desenvolvedor Fullstack";
        description.date = "Setembro a Outubro de 2024";
        description.task_one =
          "Desenvolvi uma API para se comunicar com o Bling (ERP), facilitando o gerenciamento de pedidos e estoque.";
        description.task_two =
          "Hospedei serviços na AWS (Lambda, EC3 e Amazon EventBridge), otimizando custos e escalabilidade.";
        description.task_three =
          "Automatizei o processo de renovação de token OAuth 2.0, garantindo a continuidade do serviço.";
        description.task_four =
          "Criei rotinas de requisição e listeners via Webhook para sincronizar estoque em tempo real.";
        description.task_five =
          "Integrei o sistema com Amazon SQS para gerenciar e enviar requisições de forma assíncrona.";
        break;

      case 3:
        description.title = "Aideia";
        description.function = "Desenvolvedor Backend";
        description.date = "Agosto de 2024";
        description.task_one =
          "Integrei o formulário WordPress com o ClickUP, unificando os dados de captação de leads.";
        description.task_two =
          "Criei leads por meio da API do ClickUP, automatizando o fluxo de entrada de informações.";
        description.task_three =
          "Atualizei o pipeline (CI/CD) para garantir versionamento e deploy contínuos.";
        description.task_four =
          "Desenvolvi um formulário personalizado para coleta de dados e envio ao ClickUP.";
        description.task_five =
          "Configurei um ambiente de testes para manutenção futura, garantindo qualidade e estabilidade.";
        break;

      case 4:
        description.title = "JumpVerso";
        description.function = "Desenvolvedor Fullstack";
        description.date = "Junho a Julho de 2024";
        description.task_one =
          "Criei uma interface web para exibir dados de usuários cadastrados, facilitando a gestão de perfis.";
        description.task_two =
          "Desenvolvi um servidor para gerenciar autenticação, garantindo segurança dos usuários.";
        description.task_three =
          "Integrei a Evolution API (WhatsApp) com a plataforma web, habilitando comunicação automatizada.";
        description.task_four =
          "Implementei geração de QR Code para autenticação simplificada do WhatsApp do usuário.";
        description.task_five =
          "Criei um sistema de seleção de grupos para envio automático via Webhook, ampliando o alcance das campanhas.";
        break;

      default:
        description.title = "Não Encontrado";
        description.function = "Não Encontrado";
        description.date = "Não Encontrado";
        break;
    }

    return description;
  };

  return (
    <section
      style={{ backgroundImage: "url('../assets/Background.png')" }}
      className="bg-jet min-h-screen bg-no-repeat bg-bottom bg-contain flex justify-center relative"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-1/4 right-3/4 opacity-30">
        <DotSquare />
      </div>
      <div className="absolute bottom-1/4 left-1/4 opacity-30">
        <DotSquare />
      </div>
      <div className="absolute top-1/4 right-1/4 opacity-40">
        <DotSquare color="#9AC4F8" />
      </div>
      <div className="absolute bottom-1/4 left-3/4 opacity-40">
        <DotSquare color="#9AC4F8" />
      </div>

      {/* Conteúdo principal */}
      <div className="w-[50rem] h-[35rem] flex flex-col items-center gap-10 mt-20">
        <div className="w-full flex items-center justify-evenly">
          <h1 className="text-3xl font-bold text-jordy">Projetos em que atuei</h1>
          <Line2 />
        </div>

        <div className="w-[55rem] h-[50rem] flex justify-between">
          {/* Lista de Projetos */}
          <div className="h-full w-60 overflow-auto flex flex-col">
            <UniqueProject
              onClick={() => selectProject(0)}
              projectTitle="Resend"
              selected={projectsSelection[0]}
            />
            <UniqueProject
              onClick={() => selectProject(1)}
              projectTitle="Ozon Solution"
              selected={projectsSelection[1]}
            />
            <UniqueProject
              onClick={() => selectProject(2)}
              projectTitle="Bling"
              selected={projectsSelection[2]}
            />
            <UniqueProject
              onClick={() => selectProject(3)}
              projectTitle="Aideia"
              selected={projectsSelection[3]}
            />
            <UniqueProject
              onClick={() => selectProject(4)}
              projectTitle="JumpVerso"
              selected={projectsSelection[4]}
            />
          </div>

          {/* Descrições do Projeto */}
          <div className="w-[35rem] h-full flex flex-col gap-4">
            <div>
              <div className="flex justify-start gap-4">
                <h1 className="text-tea text-2xl font-bold">
                  {selectDescription().function}
                </h1>
                <img src="../assets/Line3.svg" alt="Line Divider" />
                <span className="text-tea text-2xl font-bold">
                  {selectDescription().title}
                </span>
              </div>
              <p className="font-light text-jordy">{selectDescription().date}</p>
            </div>

            <div className="flex flex-col gap-6 h-full">
              <ProjectDescription description={selectDescription().task_one} />
              <ProjectDescription description={selectDescription().task_two} />
              <ProjectDescription description={selectDescription().task_three} />
              <ProjectDescription description={selectDescription().task_four} />
              <ProjectDescription description={selectDescription().task_five} />
            </div>

            {/* Ícones de tecnologias (exemplo) */}
            <div className="flex gap-2">
              <img src={selectDescription().techs[1]}/>
              <img src={selectDescription().techs[2]}/>
              <img src={selectDescription().techs[3]}/>
              <img src={selectDescription().techs[4]}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
