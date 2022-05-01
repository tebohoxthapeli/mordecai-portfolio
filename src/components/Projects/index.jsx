import { svgImages } from "../../constants";
const { github, eye } = svgImages;

function Projects() {
    return (
        <div className="section border">
            <h2>
                <span>projects?</span> got that covered
            </h2>

            <div className="space-y-4 border text-white">
                <div className="space-y-4 border-l-8 border-lime-900 p-4">
                    <h3 className="text-2xl">heading</h3>

                    <p className="text-sm text-slate-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sunt, nisi
                        adipisci perspiciatis harum laboriosam laborum dolorem eaque accusantium
                        esse voluptatum autem inventore, aperiam amet placeat quis quisquam.
                        Quibusdam, id?
                    </p>

                    {/* box-border px-6 py-2 font-semibold rounded-lg */}

                    <div className="space-x-4">
                        <button className="btn inline-flex items-center gap-4 bg-lime-500 text-black hover:bg-lime-600">
                            <span className="inline-block h-6 w-6">
                                <img src={github} alt="" />
                            </span>

                            <span>live demo</span>
                        </button>

                        <button className="btn inline-flex items-center gap-4 border-2 border-lime-500 text-white hover:bg-lime-500/10">
                            <span className="inline-block h-6 w-6">
                                <img src={eye} alt="" className="invert" />
                            </span>

                            <span>source code</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
