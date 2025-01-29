"use client"


import DotSquare from "../DotSquare";
import Line2 from "../Line2";
import ProjectDescription from "../ProjectDescription";
import UniqueProject from "../UniqueProject";

export default function Projects() {


    console.log("aa")



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
                <div className="w-[50rem] h-[50rem] flex justify-between">
                    <div className="h-full w-60 overflow-auto flex flex-col">
                        <UniqueProject projectTitle="Resend" selected={true} />
                        <UniqueProject projectTitle="Ozon Solution" selected={false} />
                        <UniqueProject projectTitle="Bling" selected={false} />
                        <UniqueProject projectTitle="Aideia" selected={false} />
                        <UniqueProject projectTitle="JumpVerso" selected={false} />
                    </div>
                    <div className="w-[30rem] h-full flex flex-col gap-4">
                        <div>
                            <div className="flex justify-start gap-4">
                                <h1 className="text-tea text-2xl font-bold">Desenvolvedor Fullstack</h1>
                                <img src="../assets/Line3.svg" />
                                <span className="text-tea text-2xl font-bold">Resend</span>
                            </div>
                            <p className="font-light text-jordy">Junho de 2024</p>
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