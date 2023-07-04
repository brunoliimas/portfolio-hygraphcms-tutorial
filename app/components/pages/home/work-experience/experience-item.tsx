import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

type ExperienceItemProps = {
    name: string;
    src: string;
    href: string;
    office: string;
    time: string;
    description: string;
    techs: {
        name: string;
    }[];

}


export const ExperienceItem = ({ name, src, href, office, time, description, techs }: ExperienceItemProps) => {
    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image
                        src={src}
                        alt={name}
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                </div>
                <div className="h-full w-[1px] bg-gray-800" />
            </div>
            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a
                        className="font-fira text-gray-500 hover:text-emerald-500 transition-colors"
                        href={href}
                        target="_blank"
                    >
                        {name}
                    </a>
                    <h4 className="text-gray-300 text-2xl">{office}</h4>
                    <span className="text-gray-500">{time}</span>
                    <p>{description}</p>
                </div>
                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    {techs.map((tech, index) => (
                        <TechBadge key={index} name={tech.name} />
                    ))}
                </div>
            </div>
        </div>
    )
}