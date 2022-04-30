import { svgImages, otherImages } from "../../constants";

const { circle } = svgImages; // nodedotjs, mongodb, tailwindcss, react,
const { mordecaiPerson } = otherImages;

function index() {
    return (
        <div className="cropped-screen container mx-auto mt-[72px] flex items-center gap-4 px-8">
            <div className="flex-1 space-y-10">
                <p className="text-left font-light text-slate-300">
                    Hello there.{" "}
                    <span className="font-semibold uppercase text-white underline decoration-lime-500 decoration-2 underline-offset-4">
                        Mordecai
                    </span>{" "}
                    is the name.
                </p>

                <p className="text-left text-6xl font-bold text-white">
                    I'm a <span className="text-lime-500">fullstack software engineer</span>
                </p>

                <p className="text-center text-lg text-slate-400">
                    Need a top-class user interface? Well designed database? How about highly
                    performant websites and apps? <br />{" "}
                    <span className="text-xl font-medium uppercase text-white">
                        i am here to save the day!
                    </span>
                </p>
            </div>

            <div className="relative flex flex-1 justify-center saturate-200">
                <img src={mordecaiPerson} alt="profile_bg" className="z-10 w-4/5 object-contain" />

                <img
                    src={circle}
                    alt=""
                    className="absolute left-0 bottom-0 h-[90%] w-full object-contain"
                />
            </div>
        </div>
    );
}

export default index;
