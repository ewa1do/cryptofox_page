import { BsChevronDown } from 'react-icons/bs'
import { fonts } from '@/utilities'

const { press_start_2p, rubik } = fonts()

import classes from '../styles/header.module.css'

export function HeroTitle() {
    return (
        <section
            className={`${classes.section} grid grid-cols-1 place-items-center text-primary pt-20 md:pt-24 lg:pt-20 xl:pt-32 2xl:pt-48`}
        >
            <h5
                className={`${rubik.className} text-[10px] sm:text-sm md:text-xl xl:text-2xl my-2 lg:my-4 `}
            >
                July 10, 2023 6:30 pm - Dubai, ATLANTIS, THE PALM.{' '}
            </h5>
            <h1
                className={`${press_start_2p.className} hero flex flex-col items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pb-3`}
            >
                CryptoFOX
                <span
                    className={`${rubik.className} text-sm sm:text-md md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl`}
                >
                    Where Innovation Meets Opportunity
                </span>{' '}
            </h1>
            <h3
                className={`${rubik.className}  text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl my-4 w-5/6 sm:w-4/6 lg:w-3/6`}
            >
                The premier blockchain conference, where industry leaders and
                experts converge to{' '}
                <span className={`text-gold`}>
                    Redefine the World of Crypto.
                </span>
            </h3>
            <div className={`md:mt-28 lg:mt-10`}>
                <i
                    className={`text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-thin`}
                >
                    <BsChevronDown />
                </i>
            </div>
        </section>
    )
}
