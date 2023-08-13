import Image from "next/image";
import Link from "next/link";
import { TechStackCard } from ".";
import { Size } from "@/config/size-config";

const ProjectCard = ({ imageSrc, title, description, platform, techStack }: { imageSrc: string, title: string, description: string, platform: string, techStack: string[] }) => {
    return (
        <div className='flex flex-col md:flex-row md:max-h-[300px] overflow-hidden text-ellipsis items-start p-4 md:p-8 gap-2 md:gap-4 self-stretch rounded-2xl bg-white hover:bg-gray-100 active:bg-gray-200 hover:shadow-md transition-transform duration-300 transform hover:-translate-y-1'>
            <div className='rounded-2xl overflow-hidden mb-4 md:mb-0'>
                <Image src={imageSrc} alt={title} width={360} height={256} />
            </div>
            <div className='flex flex-col items-start gap-2 md:gap-4 flex-[1_0_0%]'>
                <div className='flex flex-col justify-center items-start gap-1 md:gap-2 self-stretch'>
                    <div className="flex gap-2">
                        <p className='text-xl md:text-2xl font-medium text-black'>
                            {title}
                        </p>

                        <TechStackCard text={platform} bgColor="black" textColor="white" size={Size.small} />
                    </div>
                    <p className="self-stretch text-lg line-clamp-2 md:text-xl font-extralight text-black">
                        {description}
                    </p>
                </div>

                <div className='flex flex-wrap items-start gap-2 md:gap-4'>
                    {techStack.map((tech, index) =>
                        <TechStackCard key={index} text={tech} bgColor="yellow" textColor="black" size={Size.medium} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
