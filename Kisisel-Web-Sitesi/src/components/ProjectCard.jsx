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

function ProjectCard({ project, language }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => {
        const nextIndex = activeIndex === project.images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        const prevIndex = activeIndex === 0 ? project.images.length - 1 : activeIndex - 1;
        setActiveIndex(prevIndex);
    };

    const getText = (lang) => (lang ? (language === 'en' ? lang.en : lang.tr) : '')

    return (
        <Card className='mb-8 '>
            <CardBody className="flex flex-row sm:w-[640px] sm:max-h-[350px] ">

                <div className='w-[40%] flex justify-start items-start  -ml-4 -mt-4  sm:w-[250px] '>
                    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                        <CarouselIndicators
                            items={project.images.map((image, index) => ({ src: image, id: index }))}
                            activeIndex={activeIndex}
                            onClickHandler={(index) => setActiveIndex(index)}
                        />
                        {project.images.map((image, index) => (
                            <CarouselItem key={index}>
                                <img src={image} className="d-block w-[350px] h-[350px] rounded-tl-[6px] rounded-bl-[6px]" />
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>

                <div className='w-[60%] m-4'>
                    <CardTitle style={{
                        color: '#4338CA', fontFamily: 'Inter', fontSize: '23px', fontWeight: '700',
                        lineHeight: '32px'
                    }} tag="h5">{getText(project.name)}</CardTitle>
                    <CardSubtitle className=" font-inter  text-[#383838]">{getText(project.description)}</CardSubtitle>
                    <div className="flex gap-2">
                        {project.technologies.map((tech, index) => (
                            <CardText
                                key={index}
                                className="border-solid border-[1px] bg-customBlue text-customWhite font-inter text-[14px] rounded-3xl w-[70px] h-[32px] text-center mt-2 p-1"
                            >
                                {tech}
                            </CardText>

                        ))}
                    </div>
                    <div className="mb-4">
                        <CardLink href={project.liveSite} style={{ color: 'black' }} >View Site</CardLink>
                        <CardLink href={project.repo} style={{ color: 'black' }} >GitHub</CardLink>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default ProjectCard;
