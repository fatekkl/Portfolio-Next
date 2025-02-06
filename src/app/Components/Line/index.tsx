import { useEffect, useState } from "react";

export default function Line() {
    const [height, setHeight] = useState(225);

    useEffect(() => {
        const updateHeight = () => {
            if (window.innerWidth < 400) {
                setHeight(100);
            } else if (window.innerWidth < 768) {
                setHeight(150);
            } else {
                setHeight(225);
            }
        };

        updateHeight(); // define a altura inicial
        window.addEventListener("resize", updateHeight);

        return () => window.removeEventListener("resize", updateHeight);
    }, [])

    return (
        <div className="mr-5">
            <svg width="2" height={height.toString()} viewBox="0 0 2 364" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 364L1 -9.86457e-06" stroke="#343330" strokeWidth="4" />
            </svg>
        </div>
    )
}