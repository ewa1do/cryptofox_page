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
                    <i>
                        <GiHamburgerMenu />
                    </i>
                </button>
            </div>
        )
    }
}
