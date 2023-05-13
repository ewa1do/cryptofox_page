import Image from 'next/image'
import { sponsors } from '@/lib'
import { fonts } from '@/utilities'

const { rubik } = fonts()

export function Sponsors() {
    return (
        <section
            className={`${rubik.className} md: py-24 px-10 text-shade`}
            id="sponsors"
        >
            <div className="flex flex-col items-center mb-12">
                <h3 className={`md: text-6xl text-royalBlue pb-2`}>
                    Proud Sponsors:
                </h3>
                <h5 className={`md: text-2xl text-royalBlue`}>
                    Supporting Innovation and Growth in the Crypto Community
                </h5>
            </div>

            <article
                className={`md: grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-20 place-items-center`}
            >
                {sponsors().map((sponsor) => {
                    return (
                        <div
                            key={`sponsor-${sponsor.name}`}
                            className="flex flex-col min-w-[16rem] min-h-[7rem] justify-between items-center rounded-lg shadow-lg shadow-gray"
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
                                    className="w-36"
                                />
                            </a>
                            <h3 className="py-2 text-xl">{sponsor.name}</h3>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}
