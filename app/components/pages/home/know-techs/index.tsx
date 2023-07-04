import { SectionTitle } from "@/app/components/section-title"
import { KnowCard } from "./know-card"
import { TbBrandNextjs, TbBrandReact, TbBrandReactNative, TbBrandTailwind, TbBrandRedux } from "react-icons/tb"
import { FaNodeJs } from 'react-icons/fa'

export const KnowTechs = () => {
    const techs = [
        {
            icon: <TbBrandNextjs size={30} />,
            name: 'NextJS',
            startDate: '2022-06-01'
        },
        {
            icon: <TbBrandReact size={30} />,
            name: 'ReactJS',
            startDate: '2019-01-01'
        },
        {
            icon: <TbBrandReactNative size={30} />,
            name: 'React Native',
            startDate: '2022-10-01'
        },
        {
            icon: <TbBrandTailwind size={30} />,
            name: 'TailwindCSS',
            startDate: '2022-06-01'
        },
        {
            icon: <FaNodeJs size={30} />,
            name: 'NodeJS',
            startDate: '2021-06-01'
        },
        {
            icon: <TbBrandRedux size={30} />,
            name: 'Redux',
            startDate: '2022-06-01'
        },
    ]
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-16">
                {techs.map((tech, index) => (
                    <KnowCard
                        key={index}
                        tech={{
                            icon: tech.icon,
                            name: tech.name,
                            startDate: tech.startDate
                        }}
                    />
                ))}
            </div>
        </section>
    )
}