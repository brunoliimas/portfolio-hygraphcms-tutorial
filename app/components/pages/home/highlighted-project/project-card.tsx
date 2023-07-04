import { Link } from "@/app/components/link";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image"
import { AiFillStar } from 'react-icons/ai'
import { HiArrowNarrowRight } from "react-icons/hi";


type ProjectCardProps = {
    src: string;
    alt: string;
    title: string;
    description: string;
    techs: {
        name: string;
    }[];
    href: string;
}

export const ProjectCard = ({ src, title, description, techs, href, alt }: ProjectCardProps) => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image
                    src={src}
                    alt={alt}
                    width={464}
                    height={323}
                    priority
                    className="w-full h-auto lg:min-h-full object-cover rounded-lg"
                />
            </div>
            <div>
                <h3 className="flex items-center gap-3 font-medium text-2xl text-gray-50">
                    <AiFillStar size={30} />
                    {title}
                </h3>
                <p className="text-gray-400 my-6">{description}</p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    {techs.map((tech, index) => (
                        <TechBadge key={index} name={tech.name} />
                    ))}
                </div>

                <Link href={href}>
                    Ver projeto
                    <HiArrowNarrowRight size={30} />
                </Link>
            </div>
        </div>
    )
}