import { CarouselCard, TechStackCard } from "@/components/card";
import { NavLinkImage } from "@/components/nav";
import { db } from "@/config";
import { getProject } from "@/service/firebase";
import DOMPurify from 'isomorphic-dompurify';

export default async function Page({ params }: any) {
    const { id } = params;
    const project = await getProject(db, id);

    const description = DOMPurify.sanitize(project?.description || '');

    return (
        <main className='w-full px-8'>
            <div className='items-center gap-8 rounded-2xl bg-white flex p-8 flex-col'>
                <div className='flex items-center'>
                    <p className='text-2xl font-medium text-black'>
                        {project?.name || ''}
                    </p>
                </div>

                <CarouselCard project={project} data-superjson />

                <div className='flex flex-col items-start gap-4 flex-[1_0_0%] w-full'>
                    <div className='flex flex-col justify-center items-start gap-2 self-stretch'>
                        <div
                            className='self-stretch text-xl font-extralight text-black'
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </div>

                    <div className='flex justify-between items-start w-full'>
                        <div className='flex items-start gap-4'>
                            {project?.techStack?.map((techStack, index) => (
                                <TechStackCard key={index} text={techStack} />
                            ))}
                        </div>

                        <div className='flex items-end gap-4'>
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