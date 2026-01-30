function box({ children, centered = false, className = "" , outLineColor ="border-brand-boundary"}) {
    return (
        <div className={`bg-brand-bg min-h-screen shadow-md p-4 w-full flex flex-col items-center ${centered ? 'justify-center': 'justify-start pt-20'} ${outLineColor}${className}`}>
            {children}
        </div>
    );
}

export default box; 