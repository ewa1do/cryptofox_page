import { useLayoutEffect, useRef, useState } from 'react'
import { CgCloseO } from 'react-icons/cg'
import classes from '../styles/header.module.css'

import { sections } from '@/lib'
import { fonts } from '@/utilities'
import { Hamburger, Logo } from '@/components'
import { useMenuStore } from '@/store'

export function Nav(props) {
    const [intersecting, setIntersecting] = useState(true)
    const { isMenuOpen, toggleMenu } = useMenuStore()

    const navRef = useRef()

    useLayoutEffect(() => {
        const home = document.getElementById('home')
        const hero = document.querySelector('.hero')
        const navHeight = navRef?.current?.getBoundingClientRect().height

        const navElements = Array.from(navRef?.current.children)

        const observer = new IntersectionObserver(
            (entries, observer) => {
                const [entry] = entries

                if (!entry.isIntersecting) {
                    setIntersecting(false)
                } else {
                    setIntersecting(true)
                }
            },
            {
                root: null,
                threshold: 0.5,
                rootMargin: `-${navHeight}px`,
            }
        )

        observer.observe(hero)
    }, [])

    return (
        <nav
            className={`flex items-center w-screen justify-between ${
                intersecting ? ' bg-transparent' : 'bg-primary shadow-md'
            } fixed top-0  md:py-2 md:px-6 ${!isMenuOpen ? 'px-2 pt-1' : ''}`}
            ref={navRef}
        >
            <Logo intersecting={intersecting} />
            <Hamburger />
            {isMenuOpen && (
                <div
                    className={`${fonts().rubik.className}  ${classes.nav} 
                    sm:hidden w-screen h-screen text-lg md:text-primary font-normal`}
                >
                    <button
                        onClick={toggleMenu}
                        className="fixed right-1 top-1"
                    >
                        <i className="text-primary text-2xl">
                            <CgCloseO />
                        </i>
                    </button>
                    <ul className="flex flex-col justify-center items-center pt-16">
                        {sections().map((section) => {
                            return (
                                <li
                                    key={`section-${section}`}
                                    className={`${
                                        fonts().press_start_2p.className
                                    } md:px-3 hover:text-gold_shade py-4 text-primary`}
                                    onClick={toggleMenu}
                                >
                                    <a
                                        className={`capitalize`}
                                        href={`#${section}`}
                                    >
                                        {section}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
            <ul
                className={`hidden sm:flex sm:justify-around ${
                    intersecting ? 'text-gray' : 'text-complement'
                } `}
            >
                {sections().map((section) => {
                    return (
                        <li
                            key={`section-${section}`}
                            className={`sm:px-3 lg:px-4 text-sm md:text-base lg:text-xl 2xl:text-2xl hover:text-gold_shade`}
                        >
                            <a className={`capitalize`} href={`#${section}`}>
                                {section}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
