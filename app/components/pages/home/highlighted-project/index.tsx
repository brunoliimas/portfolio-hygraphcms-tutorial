import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"
import Link from "next/link"
import { HiArrowNarrowRight } from "react-icons/hi"


export const HighlightedProject = () => {
    return (
        <section className="container">
            <SectionTitle title="Projetos" subtitle="destaques" />
            <HorizontalDivider className="mb-16" />
            <div>
                <ProjectCard
                    alt="Project-01"
                    title="Product Design"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas corrupti quos numquam voluptate quo blanditiis sequi, incidunt ipsa iure molestias consectetur ipsam, veritatis nisi doloremque sapiente atque esse rerum!"
                    techs={[
                        { name: 'HTML' },
                        { name: 'CSS' },
                        { name: 'Javascript' },
                        { name: 'Greensock' },
                    ]}
                    href='https://brunolima.dev.br'
                    src='/images/project-1.jpg' />
                <HorizontalDivider className='my-16' />
                <ProjectCard
                    alt="Project-02"
                    title="Stars"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas corrupti quos numquam voluptate quo blanditiis sequi, incidunt ipsa iure molestias consectetur ipsam, veritatis nisi doloremque sapiente atque esse rerum!"
                    techs={[
                        { name: 'nexJS' },
                        { name: 'ReactJS' },
                        { name: 'TailwindCSS' }
                    ]}
                    href='https://brunolima.dev.br'
                    src='/images/project-2.jpg' />
                <HorizontalDivider className='my-16' />
                <ProjectCard
                    alt="Project-03"
                    title="FlexFit"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas corrupti quos numquam voluptate quo blanditiis sequi, incidunt ipsa iure molestias consectetur ipsam, veritatis nisi doloremque sapiente atque esse rerum!"
                    techs={[
                        { name: 'NexJS' },
                        { name: 'ReactJS' },
                        { name: 'TailwindCSS' },
                        { name: 'NodeJS' },
                        { name: 'PostgreSQL' },
                    ]}
                    href='https://brunolima.dev.br'
                    src='/images/project-3.jpg' />
                <HorizontalDivider className='mt-16' />

                <p className="flex items-center justify-center gap-1.5 text-xl">
                    <span className="text-gray-400">Se interessou?</span>
                    <Link href='/projects' className="flex items-center gap-1 hover:text-emerald-400">
                        Ver todos
                        <HiArrowNarrowRight size={30}/>
                    </Link>
                </p>
            </div>
        </section>
    )
}