"use client";

import { useEffect, useState } from "react";
import Line2 from "../Line2";
import ProjectDescription from "../ProjectDescription";
import UniqueProject from "../UniqueProject";
import MobileProject from "../MobileProject";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const [projectsSelection, setProjectsSelection] = useState([true, false, false, false, false]);
  const [isMobile, setIsMobile] = useState(false)

  const { t, toggleLanguage } = useLanguage()

  const projectsText = t.projects



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
        description.title = projectsText.project_one.title;
        description.function = projectsText.project_one.role;
        description.date = projectsText.project_one.date;
        description.task_one = projectsText.project_one.responsabilities[0];
        description.task_two = projectsText.project_one.responsabilities[1];
        description.task_three = projectsText.project_one.responsabilities[2];
        description.task_four = projectsText.project_one.responsabilities[3];
        description.task_five = projectsText.project_one.responsabilities[4];
        description.techs.push("../assets/php_tech.png", "../assets/linux_tech.png", "../assets/cloud_tech.png", "../assets/api_tech.png");
        break;

      case 1:
        description.title = projectsText.project_two.title;
        description.function = projectsText.project_two.role;
        description.date = projectsText.project_two.date;
        description.task_one = projectsText.project_two.responsabilities[0];
        description.task_two = projectsText.project_two.responsabilities[1];
        description.task_three = projectsText.project_two.responsabilities[2];
        description.task_four = projectsText.project_two.responsabilities[3];
        description.task_five = projectsText.project_two.responsabilities[4];
        description.techs.push("../assets/js_tech.png", "../assets/webhook_tech.png", "../assets/woo_tech.png", "../assets/api_tech.png");
        break;

      case 2:
        description.title = projectsText.project_three.title;
        description.function = projectsText.project_three.role;
        description.date = projectsText.project_three.date;
        description.task_one = projectsText.project_three.responsabilities[0];
        description.task_two = projectsText.project_three.responsabilities[1];
        description.task_three = projectsText.project_three.responsabilities[2];
        description.task_four = projectsText.project_three.responsabilities[3];
        description.task_five = projectsText.project_three.responsabilities[4];
        description.techs.push("../assets/aws_tech.png", "../assets/js_tech.png", "../assets/erp_tech.png", "../assets/api_tech.png");
        break;

      case 3:
        description.title = projectsText.project_four.title;
        description.function =  projectsText.project_four.role;
        description.date =  projectsText.project_four.date;
        description.task_one =  projectsText.project_four.responsabilities[0];
        description.task_two = projectsText.project_four.responsabilities[1];
        description.task_three = projectsText.project_four.responsabilities[2];
        description.task_four = projectsText.project_four.responsabilities[3];
        description.task_five = projectsText.project_four.responsabilities[4];
        description.techs.push("../assets/wordpress_tech.png", "../assets/js_tech.png", "../assets/clickup_tech.png", "../assets/api_tech.png");
        break;

      case 4:
        description.title = projectsText.project_five.title;
        description.function = projectsText.project_five.role;
        description.date = projectsText.project_five.date;
        description.task_one = projectsText.project_five.responsabilites[0];
        description.task_two = projectsText.project_five.responsabilites[1];
        description.task_three = projectsText.project_five.responsabilites[2];
        description.task_four = projectsText.project_five.responsabilites[3];
        description.task_five = projectsText.project_five.responsabilites[4];
        description.techs.push("../assets/express_tech.png", "../assets/js_tech.png", "../assets/webhook_tech.png", "../assets/api_tech.png");
        break;

      default:
        description.title = "Not Found";
        description.function = "Not Found";
        description.date = "Not Found";
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
    <>
      {/* Conteúdo principal */}
      <section
        id="projects"
        style={{ backgroundImage: "url('../assets/Background.png')" }}
        className="bg-jet lg:min-h-[100vh] min-h-[120vh] bg-no-repeat bg-bottom bg-contain flex justify-center relative"
      >
        <div className="w-[50rem] h-[55rem] max-lg:p-20 lg:p-0 flex flex-col items-center gap-6 mt-20">
          <header className="w-full flex items-center justify-center gap-8">
            <h1 className="text-3xl max-sm:text-2xl font-bold text-jordy">{projectsText.title}</h1>
            <Line2 />
          </header>

          <div className={`justify-between gap-8 ${isMobile ? "max-md:hidden" : "flex"}`}>
            {/* Lista de Projetos */}
            <aside className="h-full md:w-60 max-sm:w-40 overflow-auto flex flex-col">
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
            </aside>

            {/* Descrições do Projeto */}
            <section className="w-full h-full flex flex-col gap-4">
              <div className="flex flex-wrap items-center max-sm:justify-center max-sm:flex-col gap-4">
                <h2 className="text-tea max-sm:text-center text-2xl font-bold">{selectDescription().function}</h2>
                <img src="../assets/Line3.svg" alt="Line Divider" />
                <span className="text-tea text-2xl font-bold">{selectDescription().title}</span>
              </div>

              <div className="flex justify-between align-baseline">
                <p className="font-light text-jordy">{selectDescription().date}</p>
              </div>

              <div className="flex flex-col gap-6 h-full">
                <ProjectDescription description={selectDescription().task_one} />
                <ProjectDescription description={selectDescription().task_two} />
                <ProjectDescription description={selectDescription().task_three} />
                <ProjectDescription description={selectDescription().task_four} />
                <ProjectDescription description={selectDescription().task_five} />
              </div>

              {/* Ícones de tecnologias */}
              <div className="flex gap-4">
                {selectDescription().techs.slice(1).map((tech, index) => (
                  <img key={index} src={tech} alt={`Tech ${index + 1}`} />
                ))}
              </div>
            </section>
          </div>

          <div className={`${isMobile ? "flex flex-col items-center justify-around w-full h-full" : "hidden"} `}>
                <MobileProject projectTitle="Resend"/>
                <MobileProject projectTitle="Ozon Solution"/>
                <MobileProject projectTitle="Bling"/>
                <MobileProject projectTitle="Aideia"/>
                <MobileProject projectTitle="JumpVerso"/>
          </div>

        </div>

      </section>
    </>

  );
}
