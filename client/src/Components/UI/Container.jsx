function Container({children, className = ""}){
    return(
        <div className={`grid grid-cols-2 min-h-[400px] justify-items-center items-center gap-4 p-6 m-2 ${className} `}>
            {children}
        </div>
    )
}

export default Container;