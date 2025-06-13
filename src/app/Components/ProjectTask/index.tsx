interface ProjectTaskProps {
    description: string;
}

export default function ProjectTask({ description }: ProjectTaskProps) {
    return (
        <li className="flex items-center gap-2">
            <img src="../assets/task_alt.svg" />
            <span className="leading-relaxed">{description}</span>
        </li>
        
    );
}
