function Button({
    icon,
    label,
    primary = false,
    type = "button",
    onClick = function () {
        return;
    },
    disabled = false,
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`disabled:bg-gray-400 ${primary ? "primary-btn" : "secondary-btn"}`}
            disabled={disabled}
        >
            <div className="btn-icon">
                <img src={icon} alt="" />
            </div>

            <span className="capitalize">{label}</span>
        </button>
    );
}

export default Button;
