"use client";

import { useEffect, useState } from "react";

export default function Menu() {
    const [color, setColor] = useState("#343330");
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition < 840) {
                setColor("#343330");
            } else {
                setColor("#9AC4F8");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Remove o listener ao desmontar o componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const transformMenu = () => {
        setMenuOpen(prev => !prev)
        console.log(menuOpen)
    }

    return (
        <div onClick={transformMenu} className="w-full flex justify-end mt-10 absolute z-50">
            <div className={`flex flex-col gap-5 fixed transform scale-x-[-1] cursor-pointer transition-all duration-2000 ease-in-out z-50 mt-6 mr-10`}>
                <svg
                    className={`transition-all duration-500 ease-in-out ${menuOpen ? "-rotate-45" : "rotate-0"}`}
                    width={`${menuOpen ? "50" : "70"}`}
                    height="4"
                    viewBox={`${menuOpen ? "0 0 50 4" : "0 0 70 4"}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path className="transition-all duration-500 ease-in" d={`${menuOpen ? "M0 2H50" : "M0 2H70"}`} stroke={color} strokeWidth="4" />
                </svg>
                <svg
                    className={`transition-all duration-500 ease-in ${menuOpen ? "-rotate-45" : "rotate-0"}`}
                    width="50"
                    height="4"
                    viewBox="0 0 50 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path className="transition-all duration-500 ease-in" d="M0 2H50" stroke={color} strokeWidth="4" />
                </svg>
            </div>
            <div className={`flex flex-col gap-4  fixed w-80 h-96 mr-6 -mt-2 rounded-2xl transition-all duration-500 ease-in-out transform origin-top-right ${menuOpen ? "scale-100 bg-gray-50" : "scale-0"}`}>
                <div className="flex flex-col items-center gap-4 mt-20">
                    <a href="#principal">
                        <p className={`text-jet font-bold text-[1.275rem] ${menuOpen ? "opacity-100 " : "opacity-0"}`}>Home</p>
                    </a>
                    <a href="#project">
                        <p className={`text-jet font-bold text-[1.275rem] ${menuOpen ? "opacity-100 " : "opacity-0"}`}>Projetos</p>
                    </a>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vTAgMVAHS0URNcOIqnvonIBbXmcWu_D73v59e2ZAEberN5aZlXdUhdp_zb5KJ0i5boLirYeFTYEeDi0/pub" target="_blank" rel="noopener noreferrer">
                        <p className={`text-jet font-bold text-[1.275rem] ${menuOpen ? "opacity-100 " : "opacity-0"}`}>Currículo</p>
                    </a>
                </div>
                <span className="text-jet opacity-60 font-extrabold text-xl text-center mt-10">Diga Olá</span>
                <div className="w-full flex justify-center gap-4">
                    <a href="https://www.linkedin.com/in/matheusolvcosta/" target="_blank" rel="noopener noreferrer">
                        <img className="w-10" src="../../../assets/linkedin.png" />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mathtml.1105@gmail.com&su=Olá%20Matheus&body=Vimos%20seu%20portfólio..." target="_blank" rel="noopener noreferrer">
                        <img className="w-10" src="../../../assets/email.png" />
                    </a>
                    <a href="https://wa.me/5511987539647?text=Ol%C3%A1%20Matheus!" target="_blank" rel="noopener noreferrer">
                        <img className="w-10" src="../../../assets/whatsapp.png" />
                    </a>
                </div>
            </div>
        </div>
    );
}



