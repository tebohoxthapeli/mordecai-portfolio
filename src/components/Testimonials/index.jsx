import { useState } from "react";
import Wrapper from "../Wrapper";
import { svgImages, otherImages } from "../../constants";

const { angleLeft, angleRight } = svgImages;
const { pops, rigby, benson } = otherImages;

const testimonials = [
    {
        name: "Pops",
        company: "Fireworks Candy Co.",
        image: pops,
        feedback:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis numquam blanditiis odit ratione dignissimos et dolorum expedita dolorem consequuntur eos ducimus harum accusamus, reprehenderit earum! Blanditiis voluptatem iste inventore. harum accusamus, reprehenderit earum! Blanditiis voluptatem iste inventore.",
    },
    {
        name: "Rigby",
        company: "Rigby's Pet Shop",
        image: rigby,
        feedback:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis numquam blanditiis odit ratione dignissimos et dolorum expedita dolorem consequuntur eos ducimus harum accusamus, reprehenderit earum! Blanditiis voluptatem iste inventore. harum accusamus, reprehenderit earum! Blanditiis voluptatem iste inventore.",
    },
    {
        name: "Benson",
        company: "Benjamin & Son",
        image: benson,
        feedback:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis numquam blanditiis odit ratione dignissimos et dolorum expedita dolorem consequuntur eos ducimus harum accusamus, reprehenderit earum! Blanditiis voluptatem iste inventore. harum accusamus, reprehenderit earum! Blanditiis voluptatem iste inventore.",
    },
];

function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const handlePrev = () => {
        setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const { name, image, feedback, company } = testimonials[currentTestimonial];

    return (
        <Wrapper id="testimonials">
            <div className="section">
                <h2>
                    what a few <span>clients had to say</span>
                </h2>

                <div className="inner-content space-y-8">
                    <div className="flex flex-col items-center gap-8 overflow-hidden rounded-xl bg-slate-800 p-4 md:h-80 md:flex-row md:p-0 md:pr-8">
                        <div className="h-40 w-40 overflow-hidden rounded-full bg-slate-400 md:h-full md:flex-[1] md:rounded-none">
                            <img
                                src={image}
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                        </div>

                        <div className="my-auto h-fit space-y-4 text-center md:flex-[2]">
                            <p className="max-w-md text-white line-clamp-6 xl:text-lg">
                                {feedback}
                            </p>

                            <div>
                                <p className="font-semibold text-lime-400">{name}</p>
                                <p className="text-sm text-slate-400">{company}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="space-x-8">
                            <button
                                className="circle-btn"
                                aria-label="previous testimonial"
                                onClick={handlePrev}
                            >
                                <img src={angleLeft} alt="" />
                            </button>

                            <button
                                className="circle-btn"
                                aria-label="next testimonial"
                                onClick={handleNext}
                            >
                                <img src={angleRight} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Testimonials;
