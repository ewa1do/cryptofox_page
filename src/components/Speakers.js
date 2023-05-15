import Image from 'next/image'
import { IoLogoLinkedin } from 'react-icons/io5'
import classes from '../styles/speakers.module.css'

import { speakers } from '@/lib'
import { fonts } from '@/utilities'
import { Title } from '@/components'

const { rubik } = fonts()

export function Speakers() {
    return (
        <section
            className={`${classes.section} ${rubik.className} section section--hidden text-gray py-24`}
            id="speakers"
        >
            <Title
                title="Crypto Visionaries:"
                subtitle="Inspiring Talks on the Future of Digital Finance"
                text_light={true}
            />

            <article
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-8 xl:gap-16 md:px-8`}
            >
                {speakers().map((speaker, i) => {
                    return (
                        <a
                            key={`speaker-${i + 1}`}
                            href={speaker.link}
                            target="_blank"
                        >
                            <div
                                className={`flex flex-col justify-around items-center border-accent border-4 rounded-lg shadow-md shadow-accent min-h-[12rem] md:min-h-[16rem] md:max-h-[16rem] xl:min-h-[16rem] min-w-[15rem] md:min-w-[16rem] xl:min-w-[16rem] max-w-[15rem] md:max-w-[16rem] md:p-2`}
                            >
                                <Image
                                    src={speaker.img}
                                    width={100}
                                    height={20}
                                    alt={speaker.name}
                                    className="w-20 md:w-24 border-4 border-accent rounded-full my-2"
                                />
                                <h3 className="my-2 text-lg">{speaker.name}</h3>
                                <h5 className="px-6 my-2 text-center text-sm">
                                    {speaker.charge} @{' '}
                                    <span className="text-gold">
                                        {speaker.company}
                                    </span>
                                </h5>
                            </div>
                        </a>
                    )
                })}
            </article>
        </section>
    )
}
