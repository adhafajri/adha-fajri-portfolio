import Image from "next/image";
import Link from "next/link";
import { TechStackCard } from ".";
import DOMPurify from 'isomorphic-dompurify';

const ProjectCard = ({ imageSrc, title, description, techStack }: { imageSrc: string, title: string, description: string, techStack: string[] }) => {

    const descriptionSanitize = DOMPurify.sanitize(description || '');
    return (
        <div className='flex p-8 items-start gap-4 self-stretch rounded-2xl bg-white hover:bg-gray-100 active:bg-gray-200 hover:shadow-md transition-transform duration-300 transform hover:-translate-y-1'>
            <div className='rounded-2xl overflow-hidden'>
                <Image src={imageSrc} alt={title} width={360} height={256} />
            </div>
            <div className='flex flex-col items-start gap-4 flex-[1_0_0%]'>
                <div className='flex flex-col justify-center items-start gap-2 self-stretch'>
                    <p className='text-2xl font-medium text-black'>
                        {title}
                    </p>
                    <div className="self-stretch text-xl font-extralight text-black"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </div>

                <div className='flex items-start gap-4'>
                    {techStack.map((tech, index) =>
                        <TechStackCard key={index} text={tech} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
