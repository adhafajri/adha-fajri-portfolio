"use client";

import { Circle } from '../shape';

const CarouselButton = ({ amount, activeIndex, onActiveIndexChange }: { amount: number, activeIndex: number, onActiveIndexChange: (activeIndex: number) => void }) => {
    const handleClick = (index: number) => {
        onActiveIndexChange(index);
    };

    return (
        <div className='flex items-center gap-4'>
            {Array.from({ length: amount }, (_, index) => (
                <button key={index} onClick={() => handleClick(index)} className="focus:outline-none">
                    <div className={`w-3 h-3 ${activeIndex === index ? 'bg-orange active:bg-orange-dark' : 'bg-gray-200 hover:bg-gray-400 active:bg-gray-500'} rounded-full transition duration-300`} />
                </button>
            ))}
        </div>
    );
};

export default CarouselButton;
