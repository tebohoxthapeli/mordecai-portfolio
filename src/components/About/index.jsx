import Wrapper from "../Wrapper";
import { otherImages } from "../../constants";

const abouts = [
    {
        title: "Web Design",
        image: otherImages.webDesign,
    },
    {
        title: "API Development",
        image: otherImages.apis,
    },
    {
        title: "Database Design",
        image: otherImages.database,
    },
    {
        title: "Backend Development",
        image: otherImages.backendDev,
    },
];

function About() {
    return (
        <Wrapper id="about">
            <div className="section">
                <h2>
                    what i can do <span>for you</span>
                </h2>

                <div className="inner-content grid grid-cols-2 gap-16">
                    {abouts.map(({ title, image }) => (
                        <div key={title} className="h-96 overflow-hidden rounded-lg">
                            <div className="relative h-3/5">
                                <img
                                    src={image}
                                    alt=""
                                    className="h-full w-full object-cover brightness-50"
                                />

                                <h3 className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 rounded-tl-md rounded-tr-md border-2 border-b-0 border-lime-600 bg-lime-800 px-4 pt-2 text-center font-medium text-white">
                                    {title}
                                </h3>
                            </div>

                            <div className="h-2/5 rounded-br-lg rounded-bl-lg border-2 border-lime-600 bg-lime-800 p-4">
                                <div className="text-center text-sm text-slate-300 line-clamp-5">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Nesciunt possimus maxime aperiam provident, ducimus sed. sdnskd
                                    jskdjs djskdj ksjdkss sdksl dklss sds sds dfjjdkfjdkf fjksdfjkds
                                    sjsfjklsflf fklskflskfs sfklsfklsf skflskfls sflsklfks sflskjfos
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
}

export default About;
