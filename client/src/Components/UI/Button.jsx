function ButtonInteration({children, onClick, className = "", type = "button"}) {
    return (
        <button type={type} onClick={onClick} className={`bg-brand-bt text-brand-text px-6 py-2 rounded-md transition-transform duration-200 hover:scale-105 hover:bg-brand-btactive:scale-95 ${className}`}>
            {children}
        </button>
    );
}

export default ButtonInteration;