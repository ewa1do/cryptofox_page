import { About, Header, Speakers, Sponsors, Topics } from '@/components'
import { useObserver } from '@/hooks'

export default function Home() {
    useObserver()

    return (
        <>
            <Header />
            <About />
            <Topics />
            <Speakers />
            <Sponsors />
        </>
    )
}
