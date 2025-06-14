import { Dispatch, SetStateAction } from "react";

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
        return `block px-4 py-3 cursor-pointer rounded-lg font-medium hover-link ${activeProject === id ? "active-link text-white" : "text-gray-400"
            }`;
    }

    return (
        <nav className="md:w-1/4 space-y-2">
            <a id="1" onClick={handleActiveProject} className={getClassName(1)}>Ozon Solution</a>
            <a id="2" onClick={handleActiveProject} className={getClassName(2)}>Resend</a>
            <a id="3" onClick={handleActiveProject} className={getClassName(3)}>Bling</a>
            <a id="4" onClick={handleActiveProject} className={getClassName(4)}>Aldeia</a>
            <a id="5" onClick={handleActiveProject} className={getClassName(5)}>JumpVerso</a>
        </nav>
    );
}
