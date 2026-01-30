function Container({ children, cols = "grid-cols-2", centered = false, className = "" }) {
    const classes = centered
        ? `grid ${cols} w-full max-w-6xl mx-auto justify-items-center items-center gap-6 p-4 ${className}`
        : `grid ${cols} min-h-fit justify-items-stretch items-center gap-4 p-4 ${className}`;

    return (
        <div className={classes}>
            {children}
        </div>
    );
}

export default Container;
