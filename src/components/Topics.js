import { BsMic } from 'react-icons/bs'

import { Title } from '@/components'
import { topics } from '@/lib'
import { fonts } from '@/utilities'

const { rubik, press_start_2p } = fonts()

export function Topics() {
    return (
        <section
            className={`${rubik.className} section section--hidden py-12 md:py-24 px-10 text-shade`}
            id="topics"
        >
            <Title
                title="Discussion Topics:"
                subtitle="Identifying the gamechanging trends in the web 3.0 ecosystem"
            />

            <article
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-rows-4 sm:gap-x-8 md:gap-x-10 gap-y-8 md:gap-y-20 place-items-center`}
            >
                {topics().map((topic, i) => {
                    return (
                        <div
                            key={`topic-${i + 1}`}
                            className={`flex flex-col justify-between rounded-lg shadow-lg shadow-gray py-4 sm:min-h-[20rem] md:min-h-[22rem]`}
                        >
                            <i className="text-2xl sm:text-3xl md:text-4xl text-gold_shade p-2">
                                {topic.icon}
                            </i>
                            <h2 className="text-sm sm:text-base md:text-lg xl:text-xl p-4">
                                {topic.title}
                            </h2>
                            <p className="text-xs md:text-base  px-4 md:px-2 xl:px-4 py-2">
                                {topic.intro}
                            </p>
                            <h3
                                className={`p-2 text-sm md:text-lg flex items-center justify-end text-shade ml-2`}
                            >
                                {topic.speaker}
                                <i className="text-base md:text-xl px-2 text-accent">
                                    <BsMic />
                                </i>
                            </h3>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}
