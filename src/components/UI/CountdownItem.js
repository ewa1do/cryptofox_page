import { fonts } from '@/utilities'

export function CountdownItem(props) {
    return (
        <li className={` flex flex-col items-center mx-2 lg:mx-4`}>
            <h6
                className={`${fonts().press_start_2p.className} ${
                    props.gold ? 'text-gold' : 'text-gray'
                } text-xs lg:text-lg`}
            >
                {props.date}
            </h6>
            <span
                className={`${
                    fonts().press_start_2p.className
                } text-[8px] lg:text-xs`}
            >
                {props.text}
            </span>
        </li>
    )
}
