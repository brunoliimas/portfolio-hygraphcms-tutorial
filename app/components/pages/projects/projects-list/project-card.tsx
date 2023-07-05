import Image from "next/image"


export const ProjectCard = () => {
    return(
        <div className="w-full lg:max-w-[370px] rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 transition-all opacity-70 hover:opacity-100 duration-500 group">
            <div className="w-full h-48 overflow-hidden">
                <Image
                    src='/images/project-1.jpg'
                    width={380}
                    height={200}
                    alt="Project 01"
                    unoptimized
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
            </div>
            <div className="flex-1 flex-col p-8">
                <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">Product Desing</strong>
                <p className="mt-2 text-gray-400 line-clamp-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis hic exercitationem inventore, eligendi officia ab?</p>
                <span className="text-gray-300 text-sm font-medium block mt-auto truncate">NextJS, ReactJs, TailwindCSS, NodeJs, HTML, CSS, Javascript</span>
            </div>
        </div>
    )
}