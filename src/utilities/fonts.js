import { Press_Start_2P, Rubik, VT323, DotGothic16 } from 'next/font/google'

const press_start_2p = Press_Start_2P({ subsets: ['latin'], weight: ['400'] })

const rubik = Rubik({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const vt323 = VT323({
    subsets: ['latin'],
    weight: ['400'],
})

const dotGothic = DotGothic16({
    subsets: ['latin'],
    weight: ['400'],
})

export function fonts() {
    return {
        press_start_2p,
        rubik,
        vt323,
        dotGothic,
    }
}
