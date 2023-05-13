import { create } from 'zustand'

export const useMenuStore = create((set) => ({
    isMenuOpen: false,
    isCountdownOpen: true,

    toggleMenu: () => {
        set((state) => ({
            isMenuOpen: !state.isMenuOpen,
        }))
    },

    closeCountdown: () => {
        set((state) => ({
            isCountdownOpen: false,
        }))
    },
}))
