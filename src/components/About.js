import { fonts } from '@/utilities'

const { rubik } = fonts()

export function About() {
    return (
        <section
            className={`${rubik.className} grid place-items-center w-screen py-12 md:py-24 bg-[#e8e9ec]`}
            id="about"
        >
            <h3
                className={`text-3xl sm:text-5xl font-normal md:text-6xl text-royalBlue pb-4`}
            >
                Who We Are
            </h3>

            <article
                className={`px-4 text-sm md:text-xl xl:text-2xl md:w-4/6 lg:w-3/6 text-shade`}
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
        </section>
    )
}
