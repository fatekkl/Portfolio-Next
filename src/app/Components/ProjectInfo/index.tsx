import ProjectTask from "../ProjectTask";
import projects from '../../../../public/projects.json';


interface Props {
    activeProject: number;
}


export default function ProjectInfo({ activeProject }: Props) {


    const selectedProject = projects[activeProject]


    return (
        <section className="md:w-3/4 bg-gray-800 p-6 sm:p-8 rounded-xl shadow-xl">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gold">{selectedProject.role}<span className="text-gray-400 font-normal text-xl"> - {selectedProject.company}</span></h2>
                <p className="text-sm text-gray-400 mt-1">{selectedProject.date}</p>
            </div>
            <ul className="space-y-4 text-gray-300">
                {
                    selectedProject.responsabilities.map((text, index) => {
                        return <ProjectTask key={index} description={text} />
                    })
                }

            </ul>
            <div className="mt-8 flex items-center space-x-3">
                {
                    selectedProject.techs.map((src, index) => {
                        return <img key={index} src={src} />
                    })
                }
            </div>
        </section>
    )
}