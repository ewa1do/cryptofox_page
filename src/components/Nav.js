import Image from 'next/image'
import { sections } from '@/lib'
import { fonts } from '@/utilities'

const { press_start_2p, rubik } = fonts()

export function Nav() {
    return (
        <nav
            className={`md: flex md:items-center md:justify-between md:py-2 md:px-6 md:bg-transparent`}
        >
            <div className={`md: flex items-center`}>
                <Image
                    alt="LOGO"
                    src="/img/FOX.png"
                    width={100}
                    height={24}
                    className={`md:w-16`}
                />
                <h3
                    className={`${press_start_2p.className} text-md text-primary ml-2`}
                >
                    CryptoFOX
                </h3>
            </div>
            <ul
                className={`${rubik.className} md:flex md:text-lg md:text-primary font-normal`}
            >
                {sections().map((section) => {
                    return (
                        <li key={`section-${section}`} className={`md:px-3`}>
                            <a className={`capitalize`} href="#">
                                {section}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
