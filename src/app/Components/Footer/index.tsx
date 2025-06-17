import { useLanguage } from "@/contexts/LanguageContext";


export default function Footer() {
    const { t } = useLanguage();

    const footer_content = t.footer

    return (
        <footer className="bg-gray-900 bg-opacity-50">
            <div className="container mx-auto px-6 py-6 text-center text-gray-500 text-sm">
                {footer_content.main_text}
            </div>
        </footer>
    )
}