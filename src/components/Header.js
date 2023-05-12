import { HeroTitle, Nav } from './index'

import classes from '../styles/header.module.css'

export function Header() {
    return (
        <header className={`${classes.header}`} id="home">
            <Nav />
            <HeroTitle />
        </header>
    )
}
