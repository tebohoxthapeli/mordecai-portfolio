import { svgImages, otherImages } from "../../constants";

const { react, circle, nodedotjs, mongodb, tailwindcss } = svgImages;
const { mordecaiPerson } = otherImages;

function index() {
    return (
        <div className="cropped-screen mt-20 flex items-center gap-4 bg-slate-800 px-8">
            <div className="flex-[1_1_45%] space-y-4">
                <p className="text-center text-2xl font-light text-slate-300">
                    Hello there. The name is{" "}
                    <span className="text-8xl font-bold uppercase text-lime-500">Mordecai</span>
                </p>

                <div>
                    <p className="text-center text-slate-400">
                        I'm a fullstack software engineer <span className="text-2xl">🚀</span>
                    </p>

                    <p className="text-center text-slate-400">
                        And yes, that's me <span className="text-2xl">😳</span>
                    </p>
                </div>
            </div>

            <div className="relative flex flex-[1_1_45%] justify-center">
                <img src={mordecaiPerson} alt="profile_bg" className="z-10 w-4/5 object-contain" />

                <img
                    src={circle}
                    alt=""
                    className="absolute left-0 bottom-0 right-0 h-[90%] w-full object-contain"
                />
            </div>

            <div className="flex-[1_1_10%] space-y-4">
                {[nodedotjs, tailwindcss, react, mongodb].map((item) => (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                        <img src={item} alt="" className="h-3/4 w-3/4" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default index;
