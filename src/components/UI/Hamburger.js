import { useMenuStore } from '@/store'
import { GiHamburgerMenu } from 'react-icons/gi'

export function Hamburger() {
    const { isMenuOpen, toggleMenu } = useMenuStore()

    if (!isMenuOpen) {
        return (
            <div className="sm:hidden">
                <button
                    type="button"
                    className="mobile-menu-button"
                    onClick={toggleMenu}
                >
                    <i className="text-gold_shade">
                        <GiHamburgerMenu />
                    </i>
                </button>
            </div>
        )
    }
}
