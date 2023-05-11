import {
    GiSteampunkGoggles,
    GiWireframeGlobe,
    GiCoins,
    GiGearStickPattern,
    GiChart,
    GiConsoleController,
    GiBank,
    GiPuzzle,
    GiLightBulb,
} from 'react-icons/gi'
import { SiHiveBlockchain, SiBitcoinsv, SiWebmoney } from 'react-icons/si'

export function topics() {
    return [
        {
            title: 'WHAT WEB 3.0 MEANS FOR ENTERPRISES',
            speaker: 'Sunny Lu',
            icon: <GiWireframeGlobe />,
            intro: 'Web 3.0 brings decentralized technologies and digital interactions to enterprises, enabling transparent, secure, and efficient processes.',
        },
        {
            title: 'VALUE CREATION IN THE METAVERSE',
            speaker: 'Gracy Chen',
            icon: <GiSteampunkGoggles />,
            intro: 'The metaverse blurs physical and virtual realms, offering businesses a platform for immersive experiences, digital asset ownership, and virtual economies.',
        },
        {
            title: 'THE ROLE OF STABLECOINS IN A DECENTRALIZED ECOSYSTEM',
            speaker: 'Nena Dokuzov & Jean Charles Gaudechon',
            icon: <GiCoins />,
            intro: 'Stablecoins provide price stability in decentralized ecosystems, mitigating cryptocurrency volatility and enabling safer DeFi protocols.',
        },
        {
            title: 'DAOS: NEW BREED OF INTERNET-NATIVE ORGANIZATIONS',
            speaker: 'Max Kordek',
            icon: <GiGearStickPattern />,
            intro: 'DAOs are decentralized organizations governed by smart contracts, promoting transparency and democratic decision-making.',
        },
        {
            title: 'MAXIMIZING ESG IMPACT WITH BLOCKCHAIN',
            speaker: 'Helen Hai',
            icon: <SiHiveBlockchain />,
            intro: 'Blockchain enhances ESG impact through transparency, accountability, and traceability, revolutionizing supply chain management and impact investing.',
        },
        {
            title: 'BRIDGING DEFI AND CEFI',
            speaker: 'Jason Allegrante',
            icon: <GiChart />,
            intro: 'Bridging DeFi and CeFi unlocks opportunities for liquidity, accessibility, and innovation in both decentralized and centralized financial systems.',
        },
        {
            title: 'WEB 3 GAMING: THE NEW FRONTIER?',
            speaker: 'Sunny Lu',
            icon: <GiConsoleController />,
            intro: 'Web 3.0 gaming leverages blockchain for true asset ownership, immersive experiences, and social interactions within virtual worlds.',
        },
        {
            title: 'DECRYPTING THE REGULATORY LANDSCAPE OF VIRTUAL ASSETS',
            speaker: 'Reece Merrick',
            icon: <SiBitcoinsv />,
            intro: 'Understanding evolving regulations is crucial for navigating the legal and compliance aspects of cryptocurrencies and digital tokens.',
        },
        {
            title: 'CENTRAL BANK DIGITAL CURRENCIES, AND CROSS-BORDER PAYMENTS',
            speaker: 'Mohammed Alblooshi',
            icon: <GiBank />,
            intro: 'CBDCs have the potential to revolutionize global finance by enabling faster, cheaper, and more inclusive cross-border payments.',
        },
        {
            title: 'WEB 3: THE FUTURE IS HERE AND NOW',
            speaker: 'Sunny Lu',
            icon: <SiWebmoney />,
            intro: 'Web 3.0 represents the decentralized and user-centric future of the internet, prioritizing privacy, security, and user control.',
        },
        {
            title: 'NFT MARKET OVERVIEW: TRENDS & OPPORTUNITIES',
            speaker: 'Alex Zinder & Nicole Purin',
            icon: <GiPuzzle />,
            intro: 'NFTs are transforming the digital art and collectibles market, creating new avenues for creators, investors, and collectors.',
        },
        {
            title: 'INTEROPERABILITY - CHALLENGES AND OPPORTUNITIES',
            speaker: "Dina Sam'an",
            icon: <GiLightBulb />,
            intro: 'Interoperability between blockchain networks presents challenges and opportunities for seamless data and value transfer across platforms.',
        },
    ]
}
