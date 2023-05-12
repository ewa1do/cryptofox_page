import Image from 'next/image'
import { fonts } from '@/utilities'
import { useMenuStore } from '@/store'
const { press_start_2p, rubik } = fonts()

export function Logo() {
    const { isMenuOpen } = useMenuStore()

    if (!isMenuOpen) {
        return (
            <div className={`flex flex-col items-center`}>
                <Image
                    alt="LOGO"
                    src="/img/FOX.png"
                    width={100}
                    height={24}
                    className={`w-8 sm:w-12 md:w-16`}
                />
                <h3
                    className={`${press_start_2p.className} text-[10px] sm:text-xs text-primary ml-2`}
                >
                    CryptoFOX
                </h3>
            </div>
        )
    }
}
