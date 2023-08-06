import DropdownButton from "@/components/button/dropdown-button";
import { ProjectCard } from "@/components/card";
import Image from "next/image";

export default function Projects() {
    return (
        <main className='flex flex-col px-8 gap-4 items-end mt-8 self-stretch'>
            <DropdownButton text="test" optionList={['test1', 'test2', 'test3']} />
            <div className='flex flex-col items-start gap-4 self-stretch'>
                <ProjectCard
                    imageSrc=""
                    title="Project Name"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    techStack={['test1', 'test2', 'test3']}
                />
                <ProjectCard
                    imageSrc=""
                    title="Project Name"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    techStack={['test1', 'test2', 'test3']}
                />
            </div>
        </main>
    )
}