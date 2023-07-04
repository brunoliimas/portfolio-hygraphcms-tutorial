import Image from "next/image"
import { TechBadge } from "@/app/components/tech-badge"
import { Button } from "@/app/components/button"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp, TbBrandYoutube } from 'react-icons/tb'

const MOCK_CONTACTS = [
    {
        url: 'https://github.com/',
        icon: <TbBrandGithub />
    },
    {
        url: 'https://github.com/',
        icon: <TbBrandLinkedin />
    },
    {
        url: 'https://github.com/',
        icon: <TbBrandWhatsapp />
    },
    {
        url: 'https://github.com/',
        icon: <TbBrandYoutube />
    },
]


export const HeroSection = () => {
    return (
        <section className="w-full sm:h-screen bg-hero-image bg-cover bg-no-repeat bg-center flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse md:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-fira text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Bruno Lima</h2>
                    <div className="text-gray-400 my-6 text-sm sm:text-base">
                    <p className="mb-1">Desenvolvedor Front End com conhecimentos em ReactJS e NextJS, com habilidades avançadas em HTML, CSS e JavaScript. Paixão por criar interfaces interativas e responsivas, entregando soluções de qualidade. Abordagem focada no usuário, trabalhando em equipe para cumprir prazos e garantir a qualidade. Sempre atualizado nas últimas tendências de design e desenvolvimento.</p>
                    <p className="font-bold text-emerald-400 text-lg md:text-xl underline">Disponível para novos projetos.</p>
                    </div>
                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <TechBadge name='NextJS' />
                        ))}
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button className="w-max shadow-button">
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>
                        <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a
                                    href={contact.url}
                                    key={`contact-${index}`}
                                    target="_blank"
                                    className="hover:text-gray-100 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
                <Image
                className="mb-6 lg:mb-0 w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] shadow-2xl rounded-lg object-cover"
                    width={420}
                    height={420}
                    src="/images/avatar-02.gif"
                    alt="Foto de perfil"
                />
            </div>
        </section>
    )
}