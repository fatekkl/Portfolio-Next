import DotSquare from "../DotSquare"

export default function DotSquareGrid() {
    return (
        <>
            {/*JORDY SQUARES */}
            <DotSquare classname="absolute max-sm:hidden bottom-3/4 left-3/4 opacity-70" />
            <DotSquare classname="absolute max-sm:hidden bottom-3/4 left-3/4 mb-[30%] ml-[10%] opacity-70" />
            <DotSquare classname="absolute max-sm:hidden bottom-3/4 left-3/4 mb-[10%] ml-[6%] opacity-70" />

            {/*JORDY SQUARES */}

            {/*JET SQUARES */}
            <DotSquare classname="absolute max-sm:hidden top-1/4 right-3/4 opacity-30" />
            <DotSquare classname="absolute max-sm:hidden bottom-3/4 -mr-[10%] mb-[10%] right-3/4 opacity-30" />

            {/*JET SQUARES */}

        </>
    )
}