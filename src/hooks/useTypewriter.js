import { useEffect, useState } from 'react'

export function useTypewriter(text) {
    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        let timer

        if (currentIndex < text.length) {
            timer = setInterval(() => {
                setCurrentText((prevText) => prevText + text[currentIndex])
                setCurrentIndex((prevIndex) => prevIndex + 1)
            }, 250)
        }

        return () => {
            clearInterval(timer)
        }
    }, [text, currentIndex])

    return currentText
}
