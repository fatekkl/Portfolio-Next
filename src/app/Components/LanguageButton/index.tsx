import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageButton() {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === "pt" ? "en" : "pt");
    };

    const flagSrc = language === "pt" ? "/flags/pt.png" : "/flags/en.png";

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={toggleLanguage}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition flex items-center gap-2"
            >
                <span>{language.toUpperCase()}</span>
                <Image src={flagSrc} alt="country flag" width={20} height={20} />

            </button>
        </div>
    );
}
