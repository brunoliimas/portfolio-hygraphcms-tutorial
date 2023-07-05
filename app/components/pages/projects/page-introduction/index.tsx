import { Link } from "@/app/components/link";
import { SectionTitle } from "@/app/components/section-title";
import { HiArrowNarrowLeft } from "react-icons/hi";


export const PageIntroduction = () => {
    return (
        <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center px-2">
            <SectionTitle
                title="Meus Projetos"
                subtitle="projetos"
                className="text-center items-center [&>h3]:text-4xl"
            />
            <div className="flex flex-col items-center">
                <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quisquam? Temporibus optio earum voluptate laboriosam natus eius reiciendis ipsa veniam.
                </p>
                <Link href='/'>
                    < HiArrowNarrowLeft size={18} />
                    Página inicial
                </Link>
            </div>
        </section >
    )
}