import React from 'react';
import CardDetails from "../CardDetails";
import CardEntry from './CardEntry';


function addCard(project) {
   
    return (
        <CardEntry
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            linkUrl={project.linkUrl}
            alt={`Image for ${project.title}`}
        />
    )
}

const GlassCard = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-up"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CardDetails.map(addCard)}
        </div ></div>

    );
};

export default GlassCard;