import Wrapper from "../Wrapper";
import Button from "../Button";
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
                            <div className="projects-content" key={title}>
                                <div className="info rounded-tr-xl rounded-br-xl border-l-8">
                                    <h3 className="title">{title}</h3>

                                    <p className="description">{description}</p>

                                    <div className="btn-container">
                                        <Button icon={github} label="live demo" primary />

                                        <Button icon={eye} label="source code" />
                                    </div>
                                </div>

                                <div className="decorative-icon">
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                        ) : (
                            <div className="projects-content" key={title}>
                                <div className="decorative-icon">
                                    <img src={icon} alt="" />
                                </div>

                                <div className="info rounded-tl-xl rounded-bl-xl border-r-8">
                                    <h3 className="title">{title}</h3>

                                    <p className="description">{description}</p>

                                    <div className="btn-container">
                                        <Button icon={github} label="live demo" primary />

                                        <Button icon={eye} label="source code" />
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
