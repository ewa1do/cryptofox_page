import { fonts } from '@/utilities'

export function Title(props) {
    const defaultColor = 'text-royalBlue'

    if (props.title && !props.subtitle) {
        return (
            <h3
                className={`${
                    fonts().press_start_2p.className
                } text-2xl sm:text-4xl font-normal md:text-5xl md:font-thin ${
                    props.text_dark
                        ? 'text-royalBlue'
                        : props.text_light
                        ? 'text-gray'
                        : defaultColor
                }  pb-4`}
            >
                {props.title}
            </h3>
        )
    }

    if (props.title && props.subtitle) {
        return (
            <div
                className={`flex flex-col items-center mb-12 ${
                    props.text_dark
                        ? 'text-royalBlue'
                        : props.text_light
                        ? 'text-gray'
                        : defaultColor
                }`}
            >
                <h3
                    className={`${
                        fonts().press_start_2p.className
                    } text-center text-xl sm:text-4xl md:text-5xl font-normal  md:font-thin pb-2`}
                >
                    {props.title}
                </h3>
                <h5
                    className={`${
                        fonts().vt323.className
                    } text-sm sm:text-xl md:text-2xl xl:text-3xl text-center `}
                >
                    {props.subtitle}
                </h5>
            </div>
        )
    }
}
