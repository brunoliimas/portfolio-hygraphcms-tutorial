import Image from 'next/image'
import { IoMdHeart } from 'react-icons/io'

export const Footer = () => {
    return (
        <footer className='w-full h-20 flex items-center justify-center bg-gray-950 border-t border-t-gray-700 shadow-2xl'>
            <span className='flex items-center gap-4 text-xs sm:text-sm font-fira text-gray-400'>
                <Image
                    src="/images/logo.svg"
                    alt="Logo Bruno Lima"
                    width={30}
                    height={30}
                />
                by Bruno Lima
            </span>
        </footer>
    )
}