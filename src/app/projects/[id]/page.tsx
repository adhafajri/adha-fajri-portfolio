import { CarouselCard, TechStackCard } from "@/components/card";
import { NavLinkImage } from "@/components/nav";
import { db } from "@/config";
import { getProject } from "@/service/firebase";

export default async function Page({ params }: any) {
    const { id } = params;
    const project = await getProject(db, id);

    return (
        <main className='w-full px-4 sm:px-8'>
            <div className='items-center gap-4 sm:gap-8 rounded-2xl bg-white flex p-4 sm:p-8 flex-col'>
                <div className='flex items-center mb-4 md:mb-0'>
                    <p className='text-xl sm:text-2xl font-medium text-black'>
                        {project?.name || ''}
                    </p>
                </div>

                <CarouselCard project={project} data-superjson />

                <div className='flex flex-col items-start gap-4 flex-1 w-full mt-4 md:mt-0'>
                    <div className='flex flex-col justify-center items-start gap-2 self-stretch'>
                        <p className='self-stretch text-lg sm:text-xl font-extralight text-black'>
                            {project?.description}
                        </p>
                    </div>

                    <div className='flex md:flex-row flex-col justify-between gap-8 items-start w-full mt-4'>
                        <div className='flex flex-wrap md:w-auto w-full items-start gap-2 sm:gap-4 mb-4 sm:mb-0'>
                            {project?.techStack?.map((techStack, index) => (
                                <TechStackCard key={index} text={techStack} />
                            ))}
                        </div>

                        <div className='flex flex-wrap md:w-auto w-full items-start sm:items-end gap-2 sm:gap-4'>
                            {project?.github && (
                                <NavLinkImage
                                    href={project?.github || ''}
                                    imgSrc='/icons/github.svg'
                                    label='Open Github' height={32}
                                    width={32}
                                    isShowLabel={true}
                                    isExternalLink={true}
                                />
                            )}
                            {project?.link && (
                                <NavLinkImage
                                    href={project?.link || ''}
                                    imgSrc='/icons/arrow-top-right-on-square.svg'
                                    label='Open Projects'
                                    height={32}
                                    width={32}
                                    isShowLabel={true}
                                    isExternalLink={true}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
