import { getRelativeTimeString } from '@/app/utils/get-relative';
import { ReactNode } from 'react'

type KnowCardProps = {
    tech: {
        icon: ReactNode;
        name: string;
        startDate: string;
    }

}

export const KnowCard = ({ tech }: KnowCardProps) => {
    const relativeTime = getRelativeTimeString(
        new Date(tech.startDate), 'pt-BR'
    ).replace('há ', '')
    return (
        <div className='p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all'>
            <div className='flex items-center justify-between'>
                <p className='font-medium'>{tech.name}</p>
                {tech.icon}
            </div>
            <span className='text-gray-500'>{relativeTime} de experiência</span>
        </div>
    )
}