
export default function ContactButton({path = ""}) {
    return (
        <div className="h-full w-20 border-4 border-jet rounded-l-2xl flex justify-center items-center">
            <img src={path}/>
        </div>
    )
}