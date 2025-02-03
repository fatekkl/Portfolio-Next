
interface UniqueProjectProps {
    projectTitle: string,
    selected: boolean | undefined,
    onClick?: () => void;
}


export default function UniqueProject({projectTitle, selected, onClick}: UniqueProjectProps) {
    

    return (
        <div
            onClick={onClick}
            className={`w-full h-20 flex justify-center items-center hover:cursor-pointer transition-all duration-150 ease-linear ${
                selected ? "md:border-l-4 max-sm:border-t-4 max-sm:border-b-4 text-tea border-tea bg-[#535E6C] font-bold" : "text-jordy"
            }`}
        >
            <span className="font-bold text-[1.2rem]">{projectTitle}</span>
        </div>
    )
}