"use client"

import { Circle } from '../shape';

const CarouselButton = ({ amount, activeIndex, onActiveIndexChange }: { amount: number, activeIndex: number, onActiveIndexChange: (activeIndex: number) => void }) => {
    const handleClick = (index: number) => {
        onActiveIndexChange(index);
    };

    return (
        <div className='flex items-center gap-4'>
            {Array.from({ length: amount }, (_, index) => (
                <button key={index} onClick={() => handleClick(index)}>
                    <div className={`w-4 h-4 ${activeIndex === index ? 'bg-orange' : 'bg-gray-200'} rounded-full`} />
                </button>
            ))}
        </div>
    );
};

export default CarouselButton;
