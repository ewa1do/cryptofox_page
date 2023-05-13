import { DateTime } from 'luxon'
import { IoCloseCircleOutline } from 'react-icons/io5'

import { useCountdown } from '@/hooks'
import { CountdownItem } from './CountdownItem'
import { fonts } from '@/utilities'
import { useMenuStore } from '@/store'

export function Countdown() {
    const { isCountdownOpen, closeCountdown } = useMenuStore()

    const eventDate = DateTime.fromObject(
        {
            year: 2023,
            month: 7,
            day: 10,
            hour: 18,
            minute: 30,
        },
        { zone: 'Asia/Dubai' }
    )

    const { timeRemaining, countDownFinished } = useCountdown(eventDate)

    if (timeRemaining && isCountdownOpen) {
        const { days, hours, minutes, seconds } = timeRemaining

        return (
            <div
                className={`flex justify-evenly items-center py-4 fixed bottom-0 bg-shade text-gray w-screen h-10 sm:h-12 md:h-16`}
            >
                <h5
                    className={`hidden sm:flex sm:justify-center text-center sm:text-sm lg:text-xl ${
                        fonts().press_start_2p.className
                    } text-[7px]`}
                >
                    Road to CryptoFOX
                </h5>
                <ul className="flex justify-around">
                    <CountdownItem date={days} text="Days" gold={true} />
                    <CountdownItem date={hours} text="Hours" />
                    <CountdownItem date={minutes} text="Minutes" />
                    <CountdownItem date={seconds} text="Seconds" />
                </ul>
                <i
                    onClick={closeCountdown}
                    className="hidden sm:flex fixed right-0 bottom-10 mr-2 cursor-pointer hover:text-gold"
                >
                    <IoCloseCircleOutline />
                </i>
            </div>
        )
    }
}
