"use strict";

import { useState } from 'react';
import Image from 'next/image';

const DropdownButton = ({ text, optionList }: { text: string, optionList: string[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className='flex flex-col gap-2'>
            <button 
                onClick={toggleOpen} 
                className="flex p-4 items-center gap-8 rounded-2xl bg-orange hover:bg-orange-dark transition duration-300 focus:outline-none"
            >
                <p className="text-white align-center text-xl font-normal">{text}</p>
                <Image src={isOpen ? "/icons/chevron-up.svg" : "/icons/chevron-down.svg"} alt={"down icon"} width={32} height={32} />
            </button>

            {isOpen && (
                <ul className='rounded-2xl bg-white shadow-lg'>
                    {optionList.map((option, index) => (
                        <li className='flex p-4 items-center gap-8 self-stretch hover:bg-gray-200 rounded-2xl bg-white text-xl font-normal transition duration-300' key={index}>{option}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownButton;
