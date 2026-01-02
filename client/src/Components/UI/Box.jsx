function box({ children, className = "" , outLineColor ="border-brand-boundary"}) {
    return (
        <div className={`bg-brand-bg min-h-screen border-2 shadow-md ${outLineColor} ${className}`}>
            {children}
        </div>
    );
}

export default box; 