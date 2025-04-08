import { useLanguage } from "@/contexts/LanguageContext";
import Stair from "../Stair";

export default function Journey() {
    const { t, toggleLanguage } = useLanguage()

    const journeyText = t.journey

    return (
        <>
            <aside className="fixed bottom-0 left-0 mb-4 ml-4 md:ml-12 z-40 -rotate-90 max-lg:hidden">
                <Stair />
            </aside>


            <main className="flex flex-col md:flex-row justify-around min-h-screen relative bg-jet p-8">

                <article className="md:ml-12 mt-16 max-sm:w-full md:w-1/2 flex flex-col gap-8 tracking-[0.094rem]">
                    <section className="flex flex-col gap-2 md:text-center lg:text-justify">
                        <h2 className="text-tea max-sm:text-center text-3xl font-bold">{journeyText.article_one.article_title}</h2>
                        <p className="font-normal text-white max-sm:text-center  max-sm:text-xl md:text-2xl h-auto">
                            {journeyText.article_one.article_description}
                        </p>
                    </section>
                    <section className="flex flex-col gap-2 md:text-center lg:text-justify">
                        <h2 className="text-tea max-sm:text-center text-3xl font-bold">{journeyText.article_two.article_title}</h2>
                        <p className="font-normal text-white max-sm:text-center  max-sm:text-xl md:text-2xl max-w-full h-auto">
                            {journeyText.article_two.article_description}
                        </p>
                    </section>
                    <section className="flex flex-col gap-2 md:text-center lg:text-justify">
                        <h2 className="text-tea max-sm:text-center  text-3xl font-bold">{journeyText.article_three.article_title}</h2>
                        <p className="font-normal text-white max-sm:text-center  max-sm:text-xl md:text-2xl max-w-70 h-auto">
                            {journeyText.article_three.article_description}
                        </p>
                    </section>
                </article>

                <figure className="self-center w-96 h-auto max-lg:hidden z-40">
                    <img src="../../../assets/Storyset.svg" alt="Ilustração de jornada profissional" />
                </figure>
            </main>
        </>
    );
}
