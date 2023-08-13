"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const DropdownButton = ({ optionList, onOptionSelected }: { optionList: string[], onOptionSelected: (option: string) => void }) => {
    console.log('[DropdownButton][optionList]', optionList);
    const options = ['All', ...optionList];
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleOpen = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Clean up the listener when the component is unmounted
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={dropdownRef} className='relative flex flex-col gap-2'> {/* Add the relative position to the wrapper */}
            <button
                onClick={() => {
                    console.log('test click')
                    toggleOpen()
                }}
                className="flex p-4 items-center gap-8 rounded-2xl bg-orange hover:bg-orange-hover active:bg-orange-active transition duration-300 focus:outline-none"
            >
                <p className="text-white align-center text-xl font-normal">{selectedOption}</p>
                <Image src={isOpen ? "/icons/chevron-up.svg" : "/icons/chevron-down.svg"} alt={"down icon"} width={32} height={32} />
            </button>

            {isOpen && (
                <ul className='absolute top-18 z-10 rounded-2xl bg-white shadow-lg'> {/* Make it absolute and set a higher z-index */}
                    {options.map((option, index) => (
                        <li onClick={() => {
                            setSelectedOption(option);
                            setIsOpen(false);
                            onOptionSelected(option);
                        }} className={`flex p-4 items-center gap-8 self-stretch active:bg-gray-500 hover:bg-gray-400 rounded-2xl bg-white text-xl font-normal transition duration-300 ${selectedOption === option ? 'bg-gray-300' : ''}`} key={index}>{option}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownButton;
