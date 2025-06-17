import { useLanguage } from "@/contexts/LanguageContext";

export default function Journey() {
    const { t } = useLanguage();

    const journey_content = t.journey


    return (
        <main className="flex flex-col md:flex-row items-center min-h-screen w-full relative bg-jet p-8 gap-10">
            <section className="flex flex-col gap-10">
                <article className="w-full flex flex-col gap-6">
                    <h1 className="text-green_secondary font-bold text-3xl">{journey_content.text_1.title_1}</h1>
                    <p className="text-base text-silver font-bold leading-relaxed w-3/4">
                        {journey_content.text_1.p1}
                    </p>
                </article>
                <article className="w-full flex flex-col gap-6">
                    <h1 className="text-green_secondary font-bold text-3xl">{journey_content.text_2.title_2}</h1>
                    <p className="text-base text-silver font-bold leading-relaxed w-3/4">
                        {journey_content.text_2.p2}
                    </p>
                </article>
                <article className="w-full flex flex-col gap-6">
                    <h1 className="text-green_secondary font-bold text-3xl">{journey_content.text_3.title_3}</h1>
                    <p className="text-base text-silver font-bold leading-relaxed w-3/4">
                        {journey_content.text_3.p3}
                    </p>
                </article>
            </section>
            <img
                src="../assets/Storyset.svg"
                alt="Ilustração"
                className="w-full max-w-md"
            />
        </main>
    );
}
