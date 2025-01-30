import MiniSquare from "../MiniSquare";


interface ProjectDescriptionProps {
    description: string,
}

export default function ProjectDescription({description}: ProjectDescriptionProps) {
    return (
        <div className="flex items-baseline gap-4 align-baseline w-[23.75rem]">
            <MiniSquare/>
            <p className="font-semibold text-[1rem]">{description}</p>
        </div>
    )
}