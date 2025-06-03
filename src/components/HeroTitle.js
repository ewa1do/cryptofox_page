import { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useTypewriter } from "@/hooks";
import { fonts } from "@/utilities";
import classes from "../styles/header.module.css";

const { press_start_2p, rubik } = fonts();

export function HeroTitle() {
    const [scrollInto, setScrollInto] = useState(null);
    const sectionRef = useRef();

    useEffect(() => {
        const applyFade = document.querySelectorAll(".title");

        setTimeout(() => {
            applyFade.forEach((child) => child.classList.remove("title-fade"));
        }, "criptofox".length * 250 + 300);
    }, []);

    useEffect(() => {
        const aboutSec = document.getElementById("about");

        setScrollInto(aboutSec);
    }, []);

    function scroll(section) {
        section.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section
            ref={sectionRef}
            className={`${classes.section} grid grid-cols-1 place-items-center text-primary pt-24 md:pt-32 lg:pt-64 2xl:pt-72`}
        >
            <h5
                className={`${rubik.className} title title-fade text-[12px] sm:text-sm md:text-xl lg:text-3xl my-2 lg:my-4 `}
            >
                July 10, 2023 6:30 pm - Dubai, ATLANTIS, THE PALM.{" "}
            </h5>
            <h1
                className={`${press_start_2p.className} hero flex flex-col items-center text-4xl sm:text-4xl md:text-5xl lg:text-8xl pb-3`}
            >
                {useTypewriter("CryptoFox")}
                <span
                    className={`${rubik.className} subtitle title title-fade text-base sm:text-md md:text-lg lg:text-3xl xl:text-4xl 2xl:text-4xl my-2`}
                >
                    Where Innovation Meets Opportunity
                </span>{" "}
            </h1>
            <h3
                className={`${rubik.className} title title-fade text-center text-xl sm:text-base md:text-lg lg:text-4xl xl:text-5xl my-4 lg:my-8 xl:my-10 w-9/12 sm:w-4/6 lg:w-3/4`}
            >
                The premier blockchain conference, where industry leaders and experts converge to{" "}
                <span className={`text-gold`}>Redefine the World of Crypto.</span>
            </h3>
            <div className={`md:mt-28 lg:mt-10`}>
                <a onClick={() => scroll(scrollInto)} className="title title-fade cursor-pointer">
                    <i
                        className={`text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-thin animate-pulse`}
                    >
                        <BsChevronDown />
                    </i>
                </a>
            </div>
        </section>
    );
}
