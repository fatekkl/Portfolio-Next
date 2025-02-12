import MiniSquare from "../MiniSquare"


interface ProjectDescriptionProps {
    description: string,
}

export default function ProjectDescription({ description }: ProjectDescriptionProps) {
    return (
        <div className="flex gap-2 align-baseline items-baseline">
            <div className="w-8">
                <MiniSquare />
            </div>

            <div className="flex">
                <p className="font-semibold  text-white">{description}</p>
            </div>
        </div>

    )
}