import { topics } from '@/lib'
import { fonts } from '@/utilities'

import { BsMic } from 'react-icons/bs'

const { rubik, press_start_2p } = fonts()

export function Topics() {
    return (
        <section className={`${rubik.className} md: py-24 px-10 text-shade`}>
            <div className="flex flex-col items-center mb-12">
                <h3 className={`md: text-6xl text-royalBlue pb-2`}>
                    Discussion Topics:
                </h3>
                <h5 className={`md: text-2xl text-royalBlue`}>
                    Identifying the gamechanging trends in the web 3.0 ecosystem
                </h5>
            </div>
            <article
                className={`md: grid grid-cols-3 grid-rows-4 gap-x-10 gap-y-20 place-items-center`}
            >
                {topics().map((topic, i) => {
                    return (
                        <div
                            key={`topic-${i + 1}`}
                            className={`md: min-h-[22rem] w-[24rem] flex flex-col justify-between rounded-lg shadow-lg shadow-gray  py-4`}
                        >
                            <i className="text-4xl text-gold_shade p-2">
                                {topic.icon}
                            </i>
                            <h2 className="text-lg p-4">{topic.title}</h2>
                            <p className="p-2 ">{topic.intro}</p>
                            <h3
                                className={`p-2 text-lg flex items-center justify-end text-shade`}
                            >
                                {topic.speaker}
                                <i className="text-xl px-2 text-accent">
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
