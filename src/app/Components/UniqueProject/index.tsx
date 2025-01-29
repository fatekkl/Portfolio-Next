"use client"

import { useState } from "react";

interface UniqueProjectProps {
    projectTitle: string,
    selected: boolean,
}


export default function UniqueProject({projectTitle, selected}: UniqueProjectProps) {
    const [IsSelected, setIsSelected] = useState(selected);


    const handleClick = () => {
        setIsSelected((prev) => !prev)
    }
    

    return (
        <div
            onClick={handleClick}
            className={`w-full h-20 flex justify-center items-center hover:cursor-pointer ${
                IsSelected ? "border-l-4 text-tea border-l-tea bg-[#535E6C] font-bold" : "text-jordy"
            }`}
        >
            <span className="font-bold text-[1.2rem]">{projectTitle}</span>
        </div>
    )
}