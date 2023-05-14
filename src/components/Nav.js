import { useState } from 'react'
import { CgCloseO } from 'react-icons/cg'

import { sections } from '@/lib'
import { fonts } from '@/utilities'
import { Hamburger, Logo } from '@/components'
import { useMenuStore } from '@/store'
import classes from '../styles/header.module.css'

export function Nav(props) {
    const { isMenuOpen, toggleMenu } = useMenuStore()

    return (
        <nav
            className={`flex items-center justify-between bg-transparent md:py-2 md:px-6 ${
                !isMenuOpen ? 'px-2 pt-1' : ''
            }`}
        >
            <Logo />
            <Hamburger />
            {isMenuOpen && (
                <div
                    className={`${fonts().rubik.className}  ${
                        classes.nav
                    } sm:hidden w-screen h-screen text-lg md:text-primary font-normal`}
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
            <ul className="hidden sm:flex sm:justify-around text-gray">
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
