"use client"

import { CarouselButton, ImageButton } from "@/components/button";
import { CarouselCard } from "@/components/card";
import { NavLinkImage } from "@/components/nav";
import { db } from "@/config";
import { project } from "@/model";
import { getProject } from "@/service/firebase";
import Image from "next/image";
import { useEffect, useState } from "react";

export default async function Page({ params }: any) {
    const { id } = params;
    console.log('[id]', id);

    const project = await getProject(db, id);
    console.log('[project]', project);

    return (
        <main className='w-full px-8'>
            <div className='items-center gap-8 rounded-2xl bg-white flex p-8 flex-col'>
                <div className='flex items-center'>
                    <p className='text-2xl font-medium text-black'>
                        {project?.name || ''}
                    </p>
                </div>

                <CarouselCard project={project} />

                <div className='flex flex-col items-start gap-4 flex-[1_0_0%] w-full'>
                    <div className='flex flex-col justify-center items-start gap-2 self-stretch'>
                        <p className='self-stretch text-xl font-extralight text-black'>
                            {project?.description}
                        </p>
                    </div>

                    <div className='flex justify-between items-start w-full'>
                        <div className='flex items-start gap-4'>
                            {project?.techStack?.map((techStack, index) => (
                                <div key={index} className='flex p-4 flex-col justify-center items-start gap-2 rounded-2xl bg-yellow'>
                                    <p key={index} className='text-black text-base font-normal'>{techStack}</p>
                                </div>
                            ))}
                        </div>

                        <div className='flex items-end gap-4'>
                            <NavLinkImage href={project?.github || ''} imgSrc='/icons/github.svg' label='Open Github' height={32} width={32} isShowLabel={true} />
                            <NavLinkImage href={project?.link || ''} imgSrc='/icons/arrow-top-right-on-square.svg' label='Open Projects' height={32} width={32} isShowLabel={true} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}