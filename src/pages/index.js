import { Inter } from 'next/font/google'
import { HeroTitle, Nav } from '@/components'

const inter = Inter({ subsets: ['latin'] })

import classes from '../styles/header.module.css'

export default function Home() {
    return (
        <main>
            <header className={`${classes.header}`}>
                <Nav />

                <HeroTitle />
            </header>
        </main>
    )
}
