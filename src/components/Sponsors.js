import Image from 'next/image'
import { sponsors } from '@/lib'
import { fonts } from '@/utilities'
import { Title } from '@/components'

const { rubik } = fonts()

export function Sponsors() {
    return (
        <section
            className={`${rubik.className} section section--fade py-20 md:py-24 px-10 text-shade`}
            id="sponsors"
        >
            <Title
                title="Proud Sponsors:"
                subtitle="Supporting Innovation and Growth in the Crypto Community"
            />

            <article
                className={`md: grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-20 place-items-center`}
            >
                {sponsors().map((sponsor) => {
                    return (
                        <div
                            key={`sponsor-${sponsor.name}`}
                            className="flex flex-col min-w-[8rem] min-h-[9rem] justify-between items-center rounded-lg shadow-lg shadow-gray"
                        >
                            <a
                                href={sponsor.web}
                                target="_blank"
                                className="p-3"
                            >
                                <Image
                                    width={120}
                                    height={30}
                                    alt={sponsor.name}
                                    src={sponsor.img}
                                    className="w-16 md:w-36"
                                />
                            </a>
                            <h3 className="py-2 text-sm text-center  md:text-xl">
                                {sponsor.name}
                            </h3>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}
