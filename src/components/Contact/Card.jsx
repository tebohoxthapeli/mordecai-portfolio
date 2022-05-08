function Card({ title, detail, icon, href }) {
    return (
        <a
            href={`#${href}`}
            className="flex flex-1 items-center gap-4 rounded-full bg-black p-4 hover:rounded-xl"
        >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <img src={icon} alt="" className="h-3/5 w-3/5" />
            </div>

            <div>
                <p className="text-xs font-medium capitalize tracking-widest text-slate-400">
                    {title}
                </p>
                <p className="text-sm tracking-widest text-white">{detail}</p>
            </div>
        </a>
    );
}

export default Card;
