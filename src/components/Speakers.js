import Image from 'next/image'
import classes from '../styles/speakers.module.css'
import { speakers } from '@/lib'
import { fonts } from '@/utilities'

const { rubik } = fonts()

export function Speakers() {
    return (
        <section
            className={`${classes.section} ${rubik.className} text-gray py-24`}
        >
            <div className="flex flex-col items-center mb-12">
                <h3 className={`md: text-6xl text-gray pb-2`}>
                    Crypto Visionaries:
                </h3>
                <h5 className={`md: text-2xl text-gray`}>
                    Inspiring Talks on the Future of Digital Finance
                </h5>
            </div>

            <article
                className={`grid grid-cols-4 place-items-center gap-8 px-8`}
            >
                {speakers().map((speaker, i) => {
                    return (
                        <div
                            key={`speaker-${i + 1}`}
                            className={`border border-gold_shade border-2 rounded-lg shadow-md shadow-royalBlue  min-h-[15rem] min-w-[20rem] max-w-[20rem] flex flex-col justify-around items-center p-2`}
                        >
                            <Image
                                src={speaker.img}
                                width={100}
                                height={20}
                                alt={speaker.name}
                                className="border border-4 border-gold_shade rounded-full my-2"
                            />

                            <h3 className="my-2 text-xl">{speaker.name}</h3>
                            <h5 className="px-6 my-2 text-center">
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
