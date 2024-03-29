import Wrapper from "../Wrapper";
import { svgImages, otherImages } from "../../constants";

const { circle } = svgImages;
const { mordecaiPerson } = otherImages;

function Header() {
    return (
        <Wrapper id="home">
            <div className="borders flex items-center gap-4 px-8 cropped-screen">
                <div className="flex-1 space-y-10">
                    <p className="text-center text-sm text-white lg:text-left lg:text-base">
                        Hello there.{" "}
                        <span className="uppercase tracking-widest underline decoration-lime-500 decoration-2 underline-offset-4">
                            Mordecai
                        </span>{" "}
                        is the name.
                    </p>

                    <p className="text-center text-4xl font-bold text-white lg:text-left lg:text-5xl xl:text-6xl">
                        I'm a <span className="text-lime-500">fullstack software engineer</span>
                    </p>

                    <p className="text-center text-sm text-slate-400 lg:text-base xl:text-lg">
                        Need a top-class user interface? Well designed database? How about highly
                        performant websites and apps? <br />{" "}
                        <span className="font-medium uppercase tracking-widest text-white lg:font-semibold">
                            i am here to save the day!
                        </span>
                    </p>
                </div>

                <div className="relative flex flex-1 justify-center saturate-200">
                    <img
                        src={mordecaiPerson}
                        alt="profile_bg"
                        className="z-10 w-4/5 object-contain"
                    />

                    <img
                        src={circle}
                        alt=""
                        className="absolute left-0 bottom-0 h-[90%] w-full object-contain"
                    />
                </div>
            </div>
        </Wrapper>
    );
}

export default Header;
