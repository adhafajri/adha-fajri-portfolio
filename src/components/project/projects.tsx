'use client'

import { useState, useEffect } from 'react';
import DropdownButton from "@/components/button/dropdown-button";
import { ProjectCard } from "@/components/card";
import { db } from "@/config";
import { getProjectList, getProjectListByPlatform } from "@/service/firebase"; // Make sure to import this function
import Link from "next/link";
import { Project } from '@/model';
import Loading from '@/app/loading';

const Projects = ({ platformList }: { platformList: string[] }) => {
    console.log('[platformList][', platformList)
    const [selectedPlatform, setSelectedPlatform] = useState('All');
    const [projects, setProjects] = useState<(Project | undefined)[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);

            let fetchedProjects;
            if (selectedPlatform === 'All') {
                fetchedProjects = await getProjectList(db);
            } else {
                fetchedProjects = await getProjectListByPlatform(db, selectedPlatform);
            }
            setProjects(fetchedProjects);
            setLoading(false);
        };


        fetchProjects();
    }, [selectedPlatform]);

    return (<>
        <DropdownButton
            optionList={platformList}
            onOptionSelected={(option) => setSelectedPlatform(option)}
        />

        <div className='flex flex-col items-start gap-4 self-stretch h-full'>
            {!isLoading && projects.length > 0 ? projects.map(project => {
                return (
                    <Link key={project?.id} href={`/projects/${project?.id}`} className="w-full">
                        <ProjectCard
                            imageSrc={project?.media[0] || ''}
                            title={project?.name || ''}
                            description={project?.description || ''}
                            platform={project?.platform || ''}
                            techStack={project?.techStack || []}
                        />
                    </Link>
                )
            }) : (<Loading />)}
        </div>
    </>
    );
}

export default Projects;
