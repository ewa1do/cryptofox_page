import { BsChevronDown } from 'react-icons/bs'
import { fonts } from '@/utilities'

const { press_start_2p, rubik } = fonts()

export function HeroTitle() {
    return (
        <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100vw',
            }}
            className={`md: text-primary mt-20`}
        >
            <h5
                className={`${rubik.className} md: flex justify-center my-3 text-xl`}
            >
                July 10, 2023 6:30 pm - Dubai, ATLANTIS, THE PALM.{' '}
            </h5>
            <h1
                className={`${rubik.className} text-4xl flex justify-center my-8`}
            >
                <span className={`${press_start_2p.className} px-4`}>
                    CryptoFOX{'  '}
                </span>{' '}
                Where Innovation Meets Opportunity
            </h1>
            <h3
                className={`${rubik.className} text-center my-4 text-2xl w-3/6 ml-[25%]`}
            >
                The premier blockchain conference, where industry leaders and
                experts converge to{' '}
                <span className={`text-gold`}>
                    Redefine the World of Crypto.
                </span>
            </h3>
            <div className={`ml-[49%] mt-32`}>
                <i className={`text-6xl font-thin`}>
                    <BsChevronDown />
                </i>
            </div>
        </div>
    )
}
