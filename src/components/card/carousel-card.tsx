'use client'

import { formatDate } from "@/utils";
import { DateText, ListText, SubtitleText, TitleText } from "../text";
import { ImageButton, CarouselButton } from "../button";
import { project } from "@/model";
import { useState } from "react";
import Image from "next/image";

const CarouselCard = ({ project }: { project: project | undefined }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const amount = project?.media.length || 0; // the total number of slides

    const incrementActiveIndex = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % amount);
    };

    const decrementActiveIndex = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 1 : amount - 1));
    };

    return (
        <div className="w-full flex-col justify-center items-center gap-8 inline-flex">
            <div className="self-stretch justify-center items-center gap-8 inline-flex w-full">
                {amount > 1 && (
                    <ImageButton imageSrc='/icons/chevron-left.svg' label='Left' width={16} height={16} onClick={decrementActiveIndex} isShowLabel={false} />
                )}

                {/* Only show the media that corresponds to the activeIndex */}
                {project?.media.map((mediaItem, index) => {
                    if (index !== activeIndex) return null; // Skip if it's not the active media

                    const url = new URL(mediaItem);
                    const pathname = url.pathname;

                    const isImage = ['.jpg', '.jpeg', '.png'].some(ext => pathname.endsWith(ext));
                    const isVideo = ['.mp4', '.webm'].some(ext => pathname.endsWith(ext));

                    if (isImage) {
                        return (
                            <div key={index} className="flex justify-center items-center w-[720px] rounded-2xl overflow-hidden">
                                <Image src={mediaItem} alt={`Project media ${index}`} width={1080} height={720} />
                            </div>
                        );
                    } else if (isVideo) {
                        return (
                            <div key={index} className="flex justify-center items-center w-[720px] bg-zinc-300 rounded-2xl overflow-hidden">
                                <video className='w-[1080px] bg-zinc-300 rounded-2xl' controls>
                                    <source src={mediaItem} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        );
                    } else {
                        return null; // or you can return a placeholder or error message
                    }
                })}

                {amount > 1 && (
                    <ImageButton imageSrc='/icons/chevron-right.svg' label='Right' width={16} height={16} onClick={incrementActiveIndex} isShowLabel={false} />
                )}
            </div>
            {amount > 1 && (
                <div className="self-stretch justify-center items-center gap-4 inline-flex">
                    <CarouselButton amount={amount} activeIndex={activeIndex} onActiveIndexChange={(activeIndex) => setActiveIndex(activeIndex)} />
                </div>
            )}
        </div>

    )
}

export default CarouselCard;
