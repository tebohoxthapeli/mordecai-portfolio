function Wrapper({ children, id }) {
    return (
        <div id={id} className="pt-[72px]">
            {children}
        </div>
    );
}

export default Wrapper;
