import MiniSquare from "../MiniSquare"


interface ProjectDescriptionProps {
    description: string,
}

export default function ProjectDescription({ description }: ProjectDescriptionProps) {
    return (
        <div className="flex gap-4 align-baseline items-baseline">
            <MiniSquare/>
            <div className="flex w-[25.75rem]">
                <p className="font-semibold text-[1rem]">{description}</p>
            </div>
        </div>

    )
}