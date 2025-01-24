import Line2 from "../Line2/Line2";
import UniqueProject from "../UniqueProject";

export default function Projects() {
    return (
        <section style={{ backgroundImage: "url('../assets/Background.png')" }} className="bg-jet min-h-screen bg-no-repeat bg-bottom bg-contain flex justify-center">
            <div className="w-[50rem] h-[35rem] flex flex-col items-center gap-10 mt-20">
                <div className="w-full flex items-center justify-evenly">
                    <h1 className="text-3xl font-bold text-jordy">Projetos que trabalhei</h1>
                    <Line2/>
                </div>
                <div className="w-[45rem] h-[50rem]">
                    <div className="h-full w-60 overflow-auto flex flex-col">
                        <UniqueProject projectTitle="Resend" selected={false} />
                        <UniqueProject projectTitle="Ozon Solution" selected={true}/>
                        <UniqueProject projectTitle="Bling" selected={false}/>
                        <UniqueProject projectTitle="Aideia" selected={false}/>
                        <UniqueProject projectTitle="JumpVerso" selected={false}/>
                    </div>

                </div>

            </div>
        </section>
    )
}