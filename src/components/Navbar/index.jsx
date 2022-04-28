import { useState } from "react";
import { otherImages } from "../../constants";

const linksComponents = [
    {
        title: "about",
        icon: "bx-user",
    },
    {
        title: "skills",
        icon: "bx-brain",
    },
    {
        title: "experience",
        icon: "bx-briefcase-alt-2",
    },
    {
        title: "personal projects",
        icon: "bx-cool",
    },
    {
        title: "brands",
        icon: "bxl-amazon",
    },
    {
        title: "testimonials",
        icon: "bx-star",
    },
    {
        title: "contact",
        icon: "bx-phone",
    },
];

function Navbar() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 right-0 left-0 z-40 flex w-full items-center justify-between bg-slate-900 py-4 px-8">
            <div className="w-44">
                <img src={otherImages.mordecaiLogo} alt="logo" />
            </div>

            <nav className="hidden lg:block">
                <ul className="flex divide-x divide-dashed divide-slate-500/50">
                    {linksComponents.map(({ title }) => (
                        <li key={title} className="relative px-4">
                            <a
                                href={`#${title}`}
                                className="peer text-sm tracking-wide text-lime-300 hover:text-slate-100"
                            >
                                {title}
                            </a>
                            <div className="absolute -top-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-transparent peer-hover:bg-blue-500" />
                        </li>
                    ))}
                </ul>
            </nav>

            <button
                className="flex items-center text-3xl text-slate-400 hover:text-slate-100 lg:hidden"
                onClick={() => setIsSideMenuOpen(true)}
            >
                <i className="bx bx-menu"></i>
            </button>

            <div
                className={`fixed top-0 -right-full z-50 min-h-screen w-full bg-slate-800 py-4 px-8 text-slate-200 transition-all duration-500 sm:w-1/2 lg:hidden ${
                    isSideMenuOpen && "right-0-perc"
                }`}
            >
                <div className="flex justify-end">
                    <button
                        onClick={() => setIsSideMenuOpen(false)}
                        className="text-3xl text-slate-400 hover:text-slate-100"
                    >
                        <i className="bx bx-x"></i>
                    </button>
                </div>

                <nav>
                    <ul className="divide-y divide-dashed divide-slate-600">
                        {linksComponents.map(({ title, icon }) => (
                            <li key={title}>
                                <a
                                    href={`#${title}`}
                                    onClick={() => setIsSideMenuOpen(false)}
                                    className="group relative flex items-center gap-4 py-2 text-slate-400 hover:text-slate-100"
                                >
                                    <i className={`bx ${icon} text-2xl`}></i>
                                    <p>{title}</p>
                                    <div className="absolute top-1/2 right-0 h-2 w-2 -translate-y-1/2 rounded-full bg-transparent group-hover:bg-blue-400" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;