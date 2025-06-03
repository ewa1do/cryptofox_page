import { useEffect, useState } from 'react'
import { DateTime } from 'luxon'

export function useCountdown(countdownDate) {
    const [timeRemaining, setTimeRemaining] = useState(null)
    const [countDownFinished, setCountDownFinished] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            const nowInDubai = DateTime.now().setZone('Asia/Dubai').ts

            const distance = countdownDate - nowInDubai

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24))
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                )
                const minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                )
                const seconds = Math.floor((distance % (1000 * 60)) / 1000)

                setTimeRemaining({ days, hours, minutes, seconds })
                setCountDownFinished(false)
            } else {
                clearInterval(interval)
                setTimeRemaining(null)
                setCountDownFinished(true)
            }
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [countdownDate])

    return { timeRemaining, countDownFinished }
}
