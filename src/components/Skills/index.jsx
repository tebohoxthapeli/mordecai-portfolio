import Wrapper from "../Wrapper";
import { svgImages } from "../../constants";

const {
    javascript,
    amazonaws,
    python,
    tailwindcss,
    nextdotjs,
    tensorflow,
    mongodb,
    figma,
    typescript,
    flutter,
    git,
} = svgImages;

function Skills() {
    const skills = [
        {
            name: "JavaScript",
            icon: javascript,
            years: 3,
        },
        {
            name: "Python",
            icon: python,
            years: 2,
        },
        {
            name: "AWS",
            icon: amazonaws,
            years: 1,
        },
        {
            name: "Next.js",
            icon: nextdotjs,
            years: 2,
        },
        {
            name: "Tailwindcss",
            icon: tailwindcss,
            years: 2,
        },
        {
            name: "Tensorflow",
            icon: tensorflow,
            years: 1,
        },
        {
            name: "MongoDB",
            icon: mongodb,
            years: 3,
        },
        {
            name: "Figma",
            icon: figma,
            years: 2,
        },

        {
            name: "Git",
            icon: git,
            years: 3,
        },
        {
            name: "TypeScript",
            icon: typescript,
            years: 2,
        },
        {
            name: "Flutter",
            icon: flutter,
            years: 1,
        },
    ];

    return (
        <Wrapper id="skills">
            <div className="section">
                <h2>
                    i'm <span>skill</span>ed in some ways
                </h2>

                <div className="inner-content grid grid-cols-2 gap-4 md:grid-cols-3">
                    {skills.splice(0, 8).map(({ name, icon, years }) => (
                        <div key={name} className="space-y-4 py-4 text-white">
                            <div className="mx-auto h-20 w-20 rounded-full bg-white p-4 md:h-16 md:w-16 xl:h-20 xl:w-20">
                                <img src={icon} alt="" />
                            </div>

                            <div className="text-center">
                                <h3 className="text-base font-medium tracking-wide xl:text-lg">
                                    {name}
                                </h3>

                                <p className="text-xs font-semibold text-lime-500 xl:text-sm">
                                    {years}{" "}
                                    <span className="uppercase text-slate-400">
                                        year{years > 1 && "s"}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}

                    {skills.length > 0 && (
                        <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-slate-800 p-4">
                            <p className="font-medium text-lime-500 xl:text-lg">And many more...</p>

                            <div className="more-skills">
                                {skills.splice(0, 3).map(({ icon, name }, index) => (
                                    <span
                                        key={`${name}-${index}`}
                                        className="inline-block h-10 w-10 rounded-full border-2 border-black bg-white p-2"
                                    >
                                        <img src={icon} alt={name} />
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    );
}

export default Skills;
