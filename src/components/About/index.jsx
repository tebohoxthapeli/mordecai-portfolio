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

function index() {
    return (
        <div className="space-y-12 py-12 cropped-screen">
            <h2 className="text-center text-4xl font-bold uppercase text-white">
                what i can do <span className="text-lime-400">for you</span>
            </h2>

            <div className="mx-auto grid w-4/5 grid-cols-3 gap-12">
                {abouts.map(({ title, image }) => (
                    <div key={title} className="h-96 overflow-hidden rounded-lg bg-lime-900">
                        <div className="relative h-3/5">
                            <img
                                src={image}
                                alt=""
                                className="h-full w-full object-cover brightness-50"
                            />

                            <h2 className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-tl-md rounded-tr-md border-b border-b-lime-700 border-dashed bg-lime-900 p-2 text-center font-medium text-white">
                                {title}
                            </h2>
                        </div>

                        <div className="h-2/5 p-4">
                            <div className="text-center text-sm text-slate-300 line-clamp-5">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
                                possimus maxime aperiam provident, ducimus sed. sdnskd jskdjs djskdj
                                ksjdkss sdksl dklss sds sds dfjjdkfjdkf fjksdfjkds sjsfjklsflf
                                fklskflskfs sfklsfklsf skflskfls sflsklfks sflskjfos
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default index;
