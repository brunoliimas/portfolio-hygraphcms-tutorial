'use client'

import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Projetos',
        href: '/projects'
    }
]

export const Header = () => {
    return (
        <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
            <div className="container flex justify-between items-center">
                <Link href="/">
                    <Image
                        width={58}
                        height={58}
                        src="/images/logo.svg"
                        alt="Logo Bruno Lima"
                    />
                </Link>

                <nav className="flex items-center gap-4 sm:gap-10">
                    {NAV_ITEMS.map(item => {
                        return <NavItem {...item} key={item.label} />
                    })}
                </nav>
            </div>
        </header>
    )
}