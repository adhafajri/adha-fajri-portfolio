"use client"

import { CarouselButton, ImageButton } from "@/components/button";
import { NavLinkImage } from "@/components/nav";
import Image from "next/image";
import { useState } from "react";

export interface Project {
    id: string
}

export default function Page({ params }: { params: Project }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const amount = 3; // the total number of slides

    const incrementActiveIndex = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % amount);
    };

    const decrementActiveIndex = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 1 : amount - 1));
    };

    return (
        <main className='flex p-8 flex-col items-center gap-8 rounded-2xl bg-white mx-8'>
            <div className='flex items-center'>
                <p className='text-2xl font-medium text-black'>
                    Project name
                </p>
            </div>

            <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch justify-between items-center gap-8 inline-flex w-full">
                    <ImageButton imageSrc='/icons/chevron-left.svg' label='Left' width={32} height={32} onClick={decrementActiveIndex} isShowLabel={false} />
                    <div className="w-full h-full relative bg-zinc-300 rounded-2xl" >
                        <Image src={"/example.png"} width={1920} height={1920} objectFit="contain" alt={"Project image"} />
                    </div>
                    <ImageButton imageSrc='/icons/chevron-right.svg' label='Right' width={32} height={32} onClick={incrementActiveIndex} isShowLabel={false} />
                </div>
                <div className="self-stretch justify-center items-center gap-4 inline-flex">
                    <CarouselButton amount={3} activeIndex={activeIndex} onActiveIndexChange={(activeIndex) => setActiveIndex(activeIndex)} />
                </div>
            </div>

            <div className='flex flex-col items-start gap-4 flex-[1_0_0%]'>
                <div className='flex flex-col justify-center items-start gap-2 self-stretch'>
                    <p className='self-stretch text-xl font-extralight text-black'>
                        {params.id} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className='flex justify-between items-start w-full'>
                    <div className='flex items-start gap-4'>
                        {/* {techStack.map((tech, index) => */}
                        <div className='flex p-4 flex-col justify-center items-start gap-2 rounded-2xl bg-yellow'>
                            <p key={0} className='text-black text-xl font-normal'>test1</p>
                        </div>
                        {/* )} */}
                    </div>

                    <div className='flex items-end gap-4'>
                        <NavLinkImage href='/' imgSrc='/icons/github.svg' label='Open Github' height={32} width={32} isShowLabel={true} />
                        <NavLinkImage href='/' imgSrc='/icons/arrow-top-right-on-square.svg' label='Open Projects' height={32} width={32} isShowLabel={true} />
                    </div>
                </div>
            </div>
        </main>
    )
}