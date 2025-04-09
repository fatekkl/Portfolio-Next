import { useLanguage } from "@/contexts/LanguageContext"


interface LanguageButton {
    language: string,
    setFunction: any
}

export default function LanguageButton() {
    const { language, toggleLanguage } = useLanguage()


    return (
        <aside onClick={toggleLanguage} className="fixed bottom-0 right-4 mb-4 ml-4 md:ml-12 z-40 max-lg:hidden cursor-pointer transition-all duration-150 animate-breathing">
            <img src={`../assets/${language}_symbol.png`} />
        </aside>
    )
}