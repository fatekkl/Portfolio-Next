"use client";

import { useState } from "react";
import ProjectInfo from "../ProjectInfo";
import ProjectNavigation from "../ProjectNavigation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState<number>(0);

  const projects_content = t.projects_section


  return (
    <main className="mx-auto px-6 py-20 md:py-24 bg-jet">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-100">{projects_content.main_title}</h1>
        <div className="w-24 h-1 bg-green_secondary mb-12" />
        <div className="flex flex-col md:flex-row gap-8">
          <ProjectNavigation activeProject={activeProject} setActiveProject={setActiveProject} />
          <ProjectInfo activeProject={activeProject} />
        </div>
      </div>
    </main>

  );
}
