
interface UniqueProjectProps {
    projectTitle: string,
    selected: boolean,
}


export default function UniqueProject({projectTitle, selected}: UniqueProjectProps) {


    return (
        <div
            className={`w-full h-20 flex justify-center items-center ${
                selected ? "border-l-4 text-tea border-l-tea bg-[#535E6C] font-bold" : "text-jordy"
            }`}
        >
            <span className="font-bold text-[1.2rem]">{projectTitle}</span>
        </div>
    )
}