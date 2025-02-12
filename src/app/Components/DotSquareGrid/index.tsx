import DotSquare from "../DotSquare";

export default function DotSquareGrid() {
    return (
        <>
            {/* JORDY SQUARES - Usando `translate` para evitar margens fixas */}
            <DotSquare className="absolute hidden md:block sm:hidden top-[75vh] left-[90vw] opacity-100 transform -translate-x-1/2 -translate-y-1/2" />
            <DotSquare className="absolute hidden md:block sm:hidden top-[40vh] left-[85vw] opacity-100 transform -translate-x-1/2 -translate-y-1/2" />
            <DotSquare className="absolute hidden md:hidden sm:hidden top-[90vh] left-[76vw] opacity-100 transform -translate-x-1/2 -translate-y-1/2" />

            {/* JET SQUARES */}
            <DotSquare className="absolute hidden md:block sm:hidden top-[25vh] right-[75vw] opacity-30 transform -translate-x-1/2 -translate-y-1/2" />
            <DotSquare className="absolute hidden md:block sm:hidden top-[35vh] right-[50vw] opacity-30 transform -translate-x-1/2 -translate-y-1/2" />
            <DotSquare className="absolute hidden md:hidden sm:hidden top-[70vh] right-[60vw] opacity-30 transform -translate-x-1/2 -translate-y-1/2" />
            <DotSquare className="absolute hidden md:block sm:hidden top-[92vh] right-[75vw] opacity-30 transform -translate-x-1/2 -translate-y-1/2" />

            {/* JOURNEY */}

            <DotSquare className="absolute hidden md:block sm:hidden top-[185vh] right-[65vw] opacity-30 transform -translate-x-1/2 -translate-y-1/2" />
            <DotSquare className="absolute hidden md:block sm:hidden top-[165vh] right-[20vw] opacity-30 transform -translate-x-1/2 -translate-y-1/2" />
            <DotSquare className="absolute hidden md:hidden sm:hidden top-[125vh] right-[35vw] opacity-30 transform -translate-x-1/2 -translate-y-1/2" />
            <DotSquare className="absolute hidden md:block sm:hidden top-[125vh] right-[5vw] opacity-30 transform -translate-x-1/2 -translate-y-1/2" />


            {/* Projects */}

            <DotSquare color="#9AC4F8" className="absolute hidden md:block sm:hidden top-[202vh] right-[8vw] opacity-70 transform -translate-x-1/2 -translate-y-1/2" />
            <DotSquare color="#9AC4F8" className="absolute hidden md:block sm:hidden bottom-[62vh] left-[16vw] opacity-70 transform -translate-x-1/2 -translate-y-1/2" />
            <DotSquare className="absolute hidden md:hidden sm:hidden top-[202vh] left-[16vw] opacity-70 transform -translate-x-1/2 -translate-y-1/2" />
            <DotSquare className="absolute hidden md:hidden sm:hidden bottom-[62vh] right-[8vw] opacity-70 transform -translate-x-1/2 -translate-y-1/2" />






        </>
    );
}
