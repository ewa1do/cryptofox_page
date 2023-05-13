import Image from 'next/image'
import classes from '../styles/speakers.module.css'

import { speakers } from '@/lib'
import { fonts } from '@/utilities'
import { Title } from '@/components'

const { rubik } = fonts()

export function Speakers() {
    return (
        <section
            className={`${classes.section} ${rubik.className} text-gray py-24`}
            id="speakers"
        >
            <Title
                title="Crypto Visionaries:"
                subtitle="Inspiring Talks on the Future of Digital Finance"
                text_light={true}
            />

            <article
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-8 md:px-8`}
            >
                {speakers().map((speaker, i) => {
                    return (
                        <div
                            key={`speaker-${i + 1}`}
                            className={`flex flex-col justify-around items-center border-gold_shade border-2 rounded-lg shadow-md shadow-royalBlue min-h-[12rem] md:min-h-[15rem] min-w-[15rem] md:min-w-[20rem] max-w-[15rem] md:max-w-[20rem] md:p-2`}
                        >
                            <Image
                                src={speaker.img}
                                width={100}
                                height={20}
                                alt={speaker.name}
                                className="w-20 md:w-24 border-4 border-gold_shade rounded-full my-2"
                            />

                            <h3 className="my-2 text-lg md:text-xl">
                                {speaker.name}
                            </h3>
                            <h5 className="px-6 my-2 text-center text-base">
                                {speaker.charge} @{' '}
                                <span className="text-gold_shade">
                                    {speaker.company}
                                </span>
                            </h5>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}
