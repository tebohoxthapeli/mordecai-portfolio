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
                    <div className="flex h-80 flex-1 overflow-hidden rounded-xl bg-slate-800">
                        <div className="flex-[1] bg-slate-400">
                            <img
                                src={image}
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                        </div>

                        <div className="my-auto h-fit flex-[2] space-y-4 px-8">
                            <p className="text-lg text-white line-clamp-6">{feedback}</p>

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
