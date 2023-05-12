export function Title(props) {
    const defaultColor = 'text-royalBlue'

    if (props.title && !props.subtitle) {
        return (
            <h3
                className={`text-3xl sm:text-5xl font-normal md:text-6xl md:font-thin ${
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
            <div className="flex flex-col items-center mb-12">
                <h3
                    className={`text-2xl sm:text-5xl font-normal md:text-6xl md:font-thin text-royalBlue pb-2`}
                >
                    {props.title}
                </h3>
                <h5
                    className={`text-sm text-center md:text-2xl text-royalBlue`}
                >
                    {props.subtitle}
                </h5>
            </div>
        )
    }
}
