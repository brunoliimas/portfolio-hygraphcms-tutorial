import { Button } from "@/app/components/button"
import { SectionTitle } from "@/app/components/section-title"
import { TechBadge } from "@/app/components/tech-badge"
import { TbBrandGithub } from "react-icons/tb"
import { FiGlobe } from 'react-icons/fi'
import { Link } from "@/app/components/link"
import { HiArrowNarrowLeft } from "react-icons/hi"


export const ProjectDetails = () => {
    return (
        <section className="w-full sm:min-h-[700px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
            <div
                className="absolute -z-10 inset-0"
                style={{ background: 'url(/images/hero-bg.png) no-repeat center/cover, url(https://brunolima.dev.br/_next/image?url=%2Fassets%2Fworks%2Fsuperflix_react.png&w=1920&q=75) no-repeat center/cover' }}
            />
            <SectionTitle
                title="Superflix" subtitle="projetos"
                className="items-center text-center sm:[&>h3]:text-4xl"
            />
            <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere iure rem aut in aperiam, harum omnis assumenda autem dolorem.</p>

            <div className="w-full min-w-[330px] flex flex-wrap gap-2 items-center justify-center">
                <TechBadge name="NextJs" />
                <TechBadge name="NextJs" />
                <TechBadge name="NextJs" />
                <TechBadge name="NextJs" />
                <TechBadge name="NextJs" />
                <TechBadge name="NextJs" />
                <TechBadge name="NextJs" />
            </div>

            <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
                <a href="htpps://github.com/">
                    <Button className="min-w-[180px]">
                        <TbBrandGithub size={30} />
                        Repositório
                    </Button>
                </a>
                <a href="htpps://github.com/">
                    <Button className="min-w-[180px]">
                        <FiGlobe size={30} />
                        Projeto online
                    </Button>
                </a>

            </div>
            <Link href="/projects">
                <HiArrowNarrowLeft size={18} />
                Voltar para projetos
            </Link>
        </section>
    )
}