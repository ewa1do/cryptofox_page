import { useEffect, useRef, useState } from 'react'
import { CgCloseO } from 'react-icons/cg'
import classes from '../styles/header.module.css'

import { sections } from '@/lib'
import { fonts } from '@/utilities'
import { Hamburger, Logo } from '@/components'
import { useMenuStore } from '@/store'
import Image from 'next/image'

export function Nav(props) {
    const [intersecting, setIntersecting] = useState(true)
    const { isMenuOpen, toggleMenu } = useMenuStore()

    const navRef = useRef()

    useEffect(() => {
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
                    className={`${
                        fonts().rubik.className
                    } sm:hidden w-64 z-10 fixed inset-0 bg-shade text-lg md:text-primary font-normal ${
                        isMenuOpen ? 'scale-in-hor-left' : 'slide-left'
                    } transition-transform duration-300 ease-in-out`}
                >
                    <div className="flex justify-between px-3 bg-primary shadow-md">
                        <div className={`flex flex-col items-center z-100`}>
                            <Image
                                alt="LOGO"
                                src="/img/FOX.png"
                                width={100}
                                height={24}
                                className={`w-8 sm:w-12 md:w-12`}
                            />
                            <h3
                                className={`${
                                    fonts().press_start_2p.className
                                } text-[10px] sm:text-xs ${
                                    props.intersecting
                                        ? ' text-primary'
                                        : 'text-shade'
                                } ml-2`}
                            >
                                CryptoFOX
                            </h3>
                        </div>
                        <button onClick={toggleMenu} className="">
                            <i className="text-2xl text-shade">
                                <CgCloseO />
                            </i>
                        </button>
                    </div>
                    <ul className="flex flex-col justify-center items-center pt-16">
                        {sections().map((section) => {
                            return (
                                <li
                                    key={`section-${section}`}
                                    className={`${
                                        fonts().rubik.className
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
