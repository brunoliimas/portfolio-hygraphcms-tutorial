'use client'
import { TbArrowNarrowUp } from "react-icons/tb"
import { Button } from "../button"
import { useCallback, useEffect, useState } from "react"



export const BackTop = () => {
    const [show, setShow] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const handleScroll = useCallback(() => {
        if (!show && window.scrollY > 300) setShow(true);
        if (show && window.scrollY < 300) setShow(false);
    }, [show])


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return (
        <>
            {show && (
                <div className="fixed right-4 bottom-4 z-20">
                    <Button onClick={scrollToTop} className="shadow-lg shadow-emerald-400/20 rounded-full">
                        <TbArrowNarrowUp size={30} />
                    </Button>
                </div>
            )}
        </>
    )
}