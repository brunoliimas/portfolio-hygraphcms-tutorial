import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"



export const WorkExperience = () => {
    return (
        <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
                <SectionTitle title="Experiências Profissionais" subtitle="experiências" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde inventore error cupiditate ipsa. Neque nihil aut non minus asperiores soluta! Porro vero in fugit dignissimos consequatur sapiente beatae facilis?</p>
            </div>
            <div className="flex flex-col gap-4">
                <ExperienceItem
                    name="@McCannHealth"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde inventore error cupiditate ipsa."
                    href="https://mccannhealth.com.br"
                    office="Desenvolvedor Front End - Pleno"
                    src="/images/logo-mccann.png"
                    time="Junho/2020 - Abril/2023"
                    techs={[
                        { name: 'HTML' },
                        { name: 'CSS' },
                        { name: 'SASS' },
                        { name: 'Javascript' },
                        { name: 'ReactJS' },
                        { name: 'NodeJS' },
                    ]}
                />
                <ExperienceItem
                    name="@TangoTech"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde inventore error cupiditate ipsa."
                    href="https://tangotech.com.br"
                    office="Desenvolvedor Front End - Júnior"
                    src="/images/logo-tango.jpg"
                    time="Outubro/2019 - Abril/2020"
                    techs={[
                        { name: 'HTML' },
                        { name: 'CSS' },
                        { name: 'SASS' },
                        { name: 'Javascript' },
                        { name: 'ReactJS' },
                        { name: 'Styled Components' },
                    ]}
                />

            </div>
        </section>
    )
}