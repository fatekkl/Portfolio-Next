"use client"


import { useState } from "react";
import DotSquare from "../DotSquare";
import Line2 from "../Line2";
import ProjectDescription from "../ProjectDescription";
import UniqueProject from "../UniqueProject";

export default function Projects() {


    const selectProject = (x: number) => {
        setProjectsSelection(prev => {
            const newSelections = [...prev].fill(false)
            newSelections[x] = true


            return newSelections
        })
    }


    const selectDescription = () => {
        let activeProjects: number = 0

        for (let index = 0; index < projectsSelection.length; index++) {
            if (projectsSelection[index]) {
                activeProjects = index
            }
        }
        // identifica qual descrição tem que ser carregada
        return loadDescription(activeProjects)
    }

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
        }



        switch (x) {
            case 0:
                description.title = "Resend"
                description.function =  "Desenvolvedor Fullstack",
                description.date = "Junho de 2024"


                break;
            case 1:
                description.title = "Ozon Solution"
                description.function =  "Desenvolvedor Backend",
                description.date = "Março de 2024"    

                break;

            case 2:
                description.title = "Bling"
                description.function =  "Desenvolvedor Fullstack",
                description.date = "Setembro a Outubro de 2024"

                break;

            case 3:
                description.title = "Aideia"
                description.function =  "Desenvolvedor Backend",
                description.date = "Agosto de 2024"

                break;

            case 4:
                description.title = "JumpVerso"
                description.function =  "Desenvolvedor Fullstack",
                description.date = "Junho a Julho de 2024"

                break;
            default:
                description.title = "Não Encontrado"
                description.function =  "Não Encontrado",
                description.date = "Não Encontrado"

                break;
        }

        return description
    }


    const [projectsSelection, setProjectsSelection] = useState([
        true,
        false,
        false,
        false,
        false
    ]);







    return (
        <section style={{ backgroundImage: "url('../assets/Background.png')" }} className="bg-jet min-h-screen bg-no-repeat bg-bottom bg-contain flex justify-center relative">
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



            <div className="w-[50rem] h-[35rem] flex flex-col items-center gap-10 mt-20">
                <div className="w-full flex items-center justify-evenly">
                    <h1 className="text-3xl font-bold text-jordy">Projetos que trabalhei</h1>
                    <Line2 />
                </div>
                <div className="w-[55rem] h-[50rem] flex justify-between">
                    <div className="h-full w-60 overflow-auto flex flex-col">
                        <UniqueProject onClick={() => selectProject(0)} projectTitle="Resend" selected={projectsSelection[0]} />
                        <UniqueProject onClick={() => selectProject(1)} projectTitle="Ozon Solution" selected={projectsSelection[1]} />
                        <UniqueProject onClick={() => selectProject(2)} projectTitle="Bling" selected={projectsSelection[2]} />
                        <UniqueProject onClick={() => selectProject(3)} projectTitle="Aideia" selected={projectsSelection[3]} />
                        <UniqueProject onClick={() => selectProject(4)} projectTitle="JumpVerso" selected={projectsSelection[4]} />
                    </div>
                    <div className="w-[35rem] h-full flex flex-col gap-4">
                        <div>
                            <div className="flex justify-start gap-4">
                                <h1 className="text-tea text-2xl font-bold">{selectDescription().function}</h1>
                                <img src="../assets/Line3.svg" />
                                <span className="text-tea text-2xl font-bold">{selectDescription().title}</span>
                            </div>
                            <p className="font-light text-jordy">{selectDescription().date}</p>
                        </div>
                        <div className="flex flex-col gap-6 h-full">
                            <ProjectDescription description="Configuração e hospedagem de Servidor Linux(Ubuntu)" />
                            <ProjectDescription description="Schedule para envio automático de emails na data e horario selecionados" />
                            <ProjectDescription description="Criação de API  com rotas para envio e CRUD com o serviço de e-mails" />
                            <ProjectDescription description="Rota para validação e criação de domínio para cada usuário" />
                            <ProjectDescription description="Hospedagem de servidor web utilizando Apache" />
                        </div>
                        <div className="flex gap-2">
                            <img src="../assets/php_tech.png" />
                            <img src="../assets/linux_tech.png" />
                            <img src="../assets/api_tech.png" />
                            <img src="../assets/cloud_tech.png" />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}