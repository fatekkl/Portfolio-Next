import { Dispatch, SetStateAction } from "react";
import projects from '../../../../public/projects.json';

interface Props {
  activeProject: number;
  setActiveProject: Dispatch<SetStateAction<number>>;
}

export default function ProjectNavigation({ activeProject, setActiveProject }: Props) {
  function handleActiveProject(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const id = Number(e.currentTarget.id);
    setActiveProject(id);
  }

  function getClassName(id: number) {
    return `block px-3 py-2 sm:px-4 sm:py-3 cursor-pointer rounded-lg font-medium transition-all duration-200 hover-link ${
      activeProject === id ? "active-link text-white" : "text-gray-400"
    }`;
  }

  return (
    <nav className="w-full md:w-1/4 space-y-2">
      {projects.map((project, index) => (
        <a
          id={index.toString()}
          key={index}
          onClick={handleActiveProject}
          className={getClassName(index)}
        >
          {project.company}
        </a>
      ))}
    </nav>
  );
}
