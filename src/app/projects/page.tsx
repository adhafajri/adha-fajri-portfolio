import DropdownButton from "@/components/button/dropdown-button";
import { ProjectCard } from "@/components/card";
import { db } from "@/config";
import { getCategoryList, getProjectList } from "@/service/firebase";
import Image from "next/image";
import Link from "next/link";

export default async function Projects() {
    const projects = await getProjectList(db); // if selectedCategory exist,
    console.log('[projects]', projects);

    return (
        <main className='flex flex-col px-4 md:px-8 gap-2 md:gap-4 items-end self-stretch'>
            <div className='flex flex-col items-start gap-4 self-stretch'>
                {projects.length > 0 && projects.map(project => {
                    return (
                        <Link key={project?.id} href={`/projects/${project?.id}`} className="w-full">
                            <ProjectCard
                                imageSrc={project?.media[0] || ''}
                                title={project?.name || ''}
                                description={project?.description || ''}
                                techStack={project?.techStack || []}
                            />
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}