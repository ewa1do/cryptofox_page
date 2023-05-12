import { useState } from 'react'
import { CgCloseO } from 'react-icons/cg'

import { sections } from '@/lib'
import { fonts } from '@/utilities'
import { Hamburger, Logo } from '@/components'
import { useMenuStore } from '@/store'

export function Nav(props) {
    const { isMenuOpen, toggleMenu } = useMenuStore()

    return (
        <nav
            className={`flex items-center justify-between bg-transparent md:py-2 md:px-6`}
        >
            <Logo />
            <Hamburger />
            {isMenuOpen && (
                <div
                    className={`${
                        fonts().rubik.className
                    } w-screen h-screen bg-red-500 md:flex md:text-lg md:text-primary font-normal`}
                >
                    <button onClick={toggleMenu}>
                        <i>
                            <CgCloseO />
                        </i>
                    </button>
                    <ul>
                        {sections().map((section) => {
                            return (
                                <li
                                    key={`section-${section}`}
                                    className={`md:px-3 hover:text-gold_shade`}
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
