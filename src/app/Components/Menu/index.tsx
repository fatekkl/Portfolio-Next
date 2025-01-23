"use client";

import { useEffect, useState } from "react";

export default function Menu() {
    const [color, setColor] = useState("#343330");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition < 950) {
                setColor("#343330");
            } else {
                setColor("#C7FFDA");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Remove o listener ao desmontar o componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Adicionado array de dependências vazio

    return (
        <div className="w-full flex justify-end mt-10 absolute z-50">
            <div className={`flex flex-col mr-8 gap-5 [transform:scaleX(-1)] fixed`}>
                <svg
                    className="transition-colors duration-5000 ease-in-out"
                    width="70"
                    height="4"
                    viewBox="0 0 70 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 2H70" stroke={color} strokeWidth="4" />
                </svg>
                <svg
                    className="transition-colors duration-5000 ease-in-out"
                    width="50"
                    height="4"
                    viewBox="0 0 50 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 2H50" stroke={color} strokeWidth="4" />
                </svg>
            </div>
        </div>
    );
}
