

export default function Menu({color=""}) {
    return (
        <>
            <div className={`flex flex-col mr-4 gap-5 [transform:scaleX(-1)]`}>
                <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2H70" stroke={`${color}`}  strokeWidth="4" />
                </svg>
                <svg width="50" height="4" viewBox="0 0 50 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2H50" stroke={`${color}`} strokeWidth="4" />
                </svg>
            </div>
        </>
    )
}