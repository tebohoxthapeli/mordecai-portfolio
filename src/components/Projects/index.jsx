import Wrapper from "../Wrapper";
import { svgImages } from "../../constants";

const { github, eye, filterCircleDollar, language, travelMap } = svgImages;

const projects = [
    {
        title: "money manager",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sunt, nisi adipisci perspiciatis harum laboriosam laborum dolorem eaque accusantium esse voluptatum autem inventore, aperiam amet placeat quis quisquam. Quibusdam id laboriosam laborum dolorem eaque accusantium esse voluptatum autem inventore, aperiam amet placeat quis quisquam. Quibusdam id",
        icon: filterCircleDollar,
    },
    {
        title: "translator",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sunt, nisi adipisci perspiciatis harum laboriosam laborum dolorem eaque accusantium esse voluptatum autem inventore, aperiam amet placeat quis quisquam. Quibusdam id laboriosam laborum dolorem eaque accusantium esse voluptatum autem inventore, aperiam amet placeat quis quisquam. Quibusdam id",
        icon: language,
    },
    {
        title: "travel planner",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sunt, nisi adipisci perspiciatis harum laboriosam laborum dolorem eaque accusantium esse voluptatum autem inventore, aperiam amet placeat quis quisquam. Quibusdam id laboriosam laborum dolorem eaque accusantium esse voluptatum autem inventore, aperiam amet placeat quis quisquam. Quibusdam id",
        icon: travelMap,
    },
];

function Projects() {
    return (
        <Wrapper id="projects">
            <div className="section">
                <h2>
                    <span>projects?</span> got that covered
                </h2>

                <div className="mx-auto w-4/5 space-y-12 text-white">
                    {projects.map(({ title, description, icon }, index) =>
                        (index + 1) % 2 !== 0 ? (
                            <div className="projects-content">
                                <div className="info rounded-tr-xl rounded-br-xl border-l-8">
                                    <h3 className="title">{title}</h3>

                                    <p className="description">{description}</p>

                                    <div className="btn-container">
                                        <button className="primary-btn">
                                            <div className="btn-icon">
                                                <img src={github} alt="" />
                                            </div>

                                            <span>live demo</span>
                                        </button>

                                        <button className="secondary-btn">
                                            <div className="btn-icon">
                                                <img src={eye} alt="" />
                                            </div>

                                            <span>source code</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="decorative-icon">
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                        ) : (
                            <div className="projects-content">
                                <div className="decorative-icon">
                                    <img src={icon} alt="" />
                                </div>

                                <div className="info rounded-tl-xl rounded-bl-xl border-r-8">
                                    <h3 className="title">{title}</h3>

                                    <p className="description">{description}</p>

                                    <div className="btn-container">
                                        <button className="primary-btn">
                                            <span className="btn-icon">
                                                <img src={github} alt="" />
                                            </span>

                                            <span>live demo</span>
                                        </button>

                                        <button className="secondary-btn">
                                            <span className="btn-icon">
                                                <img src={eye} alt="" />
                                            </span>

                                            <span>source code</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </Wrapper>
    );
}

export default Projects;
