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
        title: "Database Designer",
        image: otherImages.database,
    },
    {
        title: "Backend Development",
        image: otherImages.backendDev,
    },
];

function index() {
    return (
        <div className="border border-yellow-500 cropped-screen">
            <h2 className="text-5xl font-bold uppercase text-white">
                I know that <span className="text-slate-300">good apps</span> mean{" "}
                <span>good business</span>
            </h2>

            <div className="mt-8 flex flex-wrap items-start justify-center">
                {abouts.map(({ title, image }) => (
                    <div key={title} className="m-8 flex w-48 flex-col items-start justify-start">
                        <img src={image} alt="" className="h-44 w-full rounded-2xl object-cover" />

                        <h2>{title}</h2>

                        <p className="">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
                            possimus maxime aperiam provident, ducimus sed. Consectetur, recusandae
                            dolor iste non, officiis explicabo quis ea incidunt rem quibusdam
                            suscipit enim commodi.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default index;
