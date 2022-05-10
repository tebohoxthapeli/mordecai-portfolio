import { useState } from "react";
import { svgImages } from "../../constants";

const { mordecaiLogo, user, brain, bars, comment, phoneLime, clipboard, xmark } = svgImages;

const linksComponents = [
    {
        title: "about",
        icon: user,
    },
    {
        title: "skills",
        icon: brain,
    },
    {
        title: "projects",
        icon: clipboard,
    },
    {
        title: "testimonials",
        icon: comment,
    },
    {
        title: "contact",
        icon: phoneLime,
    },
];

function Navbar() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    return (
        <div className="container  fixed top-0 right-0 left-0 z-40 mx-auto flex w-full items-center justify-between border-b border-b-slate-500/50 bg-slate-900/80 py-4 px-8 backdrop-blur-sm transition-colors duration-500 hover:bg-slate-900/100">
            <a href="#home" className="w-32">
                <img src={mordecaiLogo} alt="logo" />
            </a>

            <nav className="hidden lg:block">
                <ul className="flex divide-x divide-dashed divide-slate-500/50">
                    {linksComponents.map(({ title }) => (
                        <li key={title} className="relative px-4">
                            <a
                                href={`#${title}`}
                                className="peer z-50 text-sm tracking-wide text-lime-500 transition-all duration-300 hover:text-white"
                            >
                                {title}
                            </a>

                            <div className="pointer-events-none absolute top-1/2 left-1/2 z-40 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent transition-all duration-300 peer-hover:-top-2 peer-hover:h-1 peer-hover:w-1 peer-hover:bg-lime-500" />
                        </li>
                    ))}
                </ul>
            </nav>

            <button
                className="icon-btn hover:bg-slate-800 lg:hidden"
                onClick={() => setIsSideMenuOpen(true)}
            >
                <img src={bars} alt="open menu" className="invert" />
            </button>

            <div
                className={`fixed top-0 -right-full z-50 min-h-screen w-full bg-slate-800 py-4 px-8 text-slate-200 transition-all duration-500 sm:w-1/2 lg:hidden ${
                    isSideMenuOpen && "right-0-perc"
                }`}
            >
                <div className="flex justify-end">
                    <button
                        onClick={() => setIsSideMenuOpen(false)}
                        className="icon-btn hover:bg-slate-900"
                    >
                        <img src={xmark} alt="close menu" className="invert" />
                    </button>
                </div>

                <nav>
                    <ul className="divide-y divide-dashed divide-slate-600">
                        {linksComponents.map(({ title, icon }) => (
                            <li key={title}>
                                <a
                                    href={`#${title}`}
                                    onClick={() => setIsSideMenuOpen(false)}
                                    className="my-2 flex items-center gap-4 rounded-lg p-2 text-lime-500 hover:bg-slate-900"
                                >
                                    <div className="h-6 w-6">
                                        <img src={icon} alt="" className="h-full w-full" />
                                    </div>

                                    <p>{title}</p>
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
