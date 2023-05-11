import { Press_Start_2P, Rubik } from 'next/font/google'

const press_start_2p = Press_Start_2P({ subsets: ['latin'], weight: ['400'] })
const rubik = Rubik({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export function fonts() {
    return {
        press_start_2p,
        rubik,
    }
}
