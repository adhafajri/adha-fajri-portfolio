'use client'

import { formatDate } from "@/utils";
import { DateText, ListText, SubtitleText, TitleText } from "../text";
import { ImageButton, CarouselButton } from "../button";
import { Project } from "@/model";
import { useState } from "react";
import Image from "next/image";

const CarouselCard = ({ media }: { media: string[] | undefined }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const amount = media?.length || 0; // the total number of slides
    console.log('[CarouselCard][amount]', amount);

    const incrementActiveIndex = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % amount);
    };

    const decrementActiveIndex = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 1 : amount - 1));
    };

    return (
        <div className="w-full flex-col justify-center items-center gap-8 inline-flex relative">
            <div className="self-stretch justify-center items-center gap-8 inline-flex w-full relative transition-transform duration-500 ease-in-out transform">

                {/* Only show the media that corresponds to the activeIndex */}
                {media?.map((mediaItem, index) => {
                    console.log('[mediaItem]', mediaItem);
                    const url = new URL(mediaItem);
                    const pathname = url.pathname;
                    let lastSegment = pathname.substring(pathname.lastIndexOf('/'));

                    // If the last segment of the pathname doesn't have an extension, check the query parameters
                    if (!lastSegment.includes('.')) {
                        const queryEntries = Array.from(url.searchParams.entries());
                        for (let [, value] of queryEntries) {
                            if (value.includes('.')) {
                                lastSegment = value;
                                break;
                            }
                        }
                    }

                    const isImage = ['.jpg', '.jpeg', '.png'].some(ext => lastSegment.toLowerCase().endsWith(ext));
                    const isVideo = ['.mp4', '.webm'].some(ext => lastSegment.toLowerCase().endsWith(ext));

                    console.log('Is Image:', isImage);
                    console.log('Is Video:', isVideo);

                    return (
                        <div key={index} className={`justify-center items-center w-full sm:w-[360px] md:w-[480px] lg:w-[600px] xl:w-[720px] rounded-2xl overflow-hidden duration-700 ease-in-out ${activeIndex === index ? '' : 'hidden'} `}>
                            {isImage && (
                                <Image src={mediaItem} alt={`Project media ${index}`} width={1080} height={720} />
                            )}
                            {isVideo && (
                                <video className='w-full bg-zinc-300 rounded-2xl' controls>
                                    <source src={mediaItem} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>)
                })}
            </div>
            {amount > 1 && (
                <div className="self-stretch justify-center items-center gap-4 inline-flex w-full">
                    <ImageButton imageSrc='/icons/chevron-left.svg' label='Left' width={16} height={16} onClick={decrementActiveIndex} isShowLabel={false} />
                    <CarouselButton amount={amount} activeIndex={activeIndex} onActiveIndexChange={(activeIndex) => setActiveIndex(activeIndex)} />
                    <ImageButton imageSrc='/icons/chevron-right.svg' label='Right' width={16} height={16} onClick={incrementActiveIndex} isShowLabel={false} />
                </div>
            )}
        </div>
    )
}

export default CarouselCard;
