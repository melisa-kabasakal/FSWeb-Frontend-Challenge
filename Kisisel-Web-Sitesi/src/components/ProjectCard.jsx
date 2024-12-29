import React, { useState } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardLink,
    Carousel,
    CarouselItem,
    CarouselIndicators
} from 'reactstrap';

function ProjectCard({ project }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => {
        const nextIndex = activeIndex === project.images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        const prevIndex = activeIndex === 0 ? project.images.length - 1 : activeIndex - 1;
        setActiveIndex(prevIndex);
    };

    return (
        <Card style={{ maxWidth: '900px', margin: 'auto', border: '1px solid #ddd', marginBottom: '30px' }}>
            <CardBody className="d-flex flex-row">

                <div style={{ width: '50%', marginRight: '20px' }}>
                    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                        <CarouselIndicators
                            items={project.images.map((image, index) => ({ src: image, id: index }))}
                            activeIndex={activeIndex}
                            onClickHandler={setActiveIndex}
                        />
                        {project.images.map((image, index) => (
                            <CarouselItem key={index}>
                                <img src={image} alt={`Project image ${index + 1}`} className="d-block w-100 rounded w-[300px] h-[300px]" />
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>

                <div style={{ width: '50%' }}>
                    <CardTitle style={{
                        color: '#4338CA', fontFamily: 'Inter', fontSize: '23px', fontWeight: '700',
                        lineHeight: '32px'
                    }} tag="h5">{project.name}</CardTitle>
                    <CardSubtitle className="mb-2 mt-4 font-inter text-[#383838]" tag="h6">{project.description}</CardSubtitle>
                    <CardText>
                        {project.technologies}
                    </CardText>
                    <div className="mt-3">
                        <CardLink href={project.liveSite} style={{ color: 'black' }} >View Site</CardLink>
                        <CardLink href={project.repo} style={{ color: 'black' }} >GitHub</CardLink>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default ProjectCard;
