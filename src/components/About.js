import { Countdown, Title } from '@/components'
import { fonts } from '@/utilities'

export function About() {
    return (
        <section
            className={`${
                fonts().rubik.className
            } grid place-items-center w-screen py-12 md:py-24 bg-[#e8e9ec]`}
            id="about"
        >
            <Title title="Who We Are" />

            <article
                className={`px-4 text-sm md:text-lg lg:text-xl md:w-3/6 text-shade`}
            >
                <p className={`py-4`}>
                    CryptoFOX is the blockchain conference network bringing
                    together the key players of crypto industry and experts to
                    redefine the future of finance.
                </p>

                <p className={`py-4`}>
                    The edition of the CryptoFOX will take place during on July
                    10, 2023 in Dubai, with the{' '}
                    <span className="text-accent_shade">
                        world’s top crypto companies and blockchain
                        entrepreneurs.
                    </span>{' '}
                    Today, UAE, specifically Dubai is gearing up to become a
                    global crypto hub.
                </p>

                <p className={`py-4`}>
                    Thus, CryptoFOX will be the gathering in the region on
                    behalf of the world of blockchain and cryptocurrency, with a
                    wide range of topics focused on the financial technologies
                    of the future,{' '}
                    <span className="text-accent_shade">
                        extensive networking opportunities and participation
                        from more than 40 countries.
                    </span>
                </p>
            </article>
            <Countdown />
        </section>
    )
}
