function ProjectCard({ title, subtitle, imageUrl, onClick, className = "" }) {
/* A reusable ProjectCard component that displays project information.
    Props:
        title: The title of the project.
        subtitle: A brief description or subtitle for the project.
        imageUrl: Optional URL for an image associated with the project.
        onClick: Function to be called when the card is clicked.
        className: Optional additional CSS classes for styling.
    */
   const isButtonMode = !imageUrl; // Determine mode based on presence of imageUrl

    return (
        <div 
            onClick={onClick}
            className={`group cursor-pointer w-full p-4 rounded-xl border border-gray-200 transition-all hover:shadow-xl hover:border-brand-bt active:scale-[0.98] bg-white
            ${isButtonMode ? 'flex flex-col items-center justify-center text-center h-32' : 'bg-white'}
            ${className}`}>
            {/* Optional Image */}
            {imageUrl && (
                <div className="overflow-hidden rounded-lg mb-4 aspect-[2/1] md:h-40 w-full">
                    <img 
                        src={imageUrl} 
                        alt={title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                </div>
            )}

            {/* Content */}
            <div className={isButtonMode ? 'py-2' : ''}>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-bt transition-colors">
                    {title}
                </h3>
                {/* flex-grow here handles the 'string length' logic */}
                <p className="text-gray-500 text-sm mt-1 flex-grow">
                    {subtitle}
                </p>
                
                <div className="mt-4 flex items-center gap-1 text-brand-bt font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details <span>→</span>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard; 