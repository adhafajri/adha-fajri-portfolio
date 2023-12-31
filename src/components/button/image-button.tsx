import Image from 'next/image';

const ImageButton = ({ imageSrc, label, isShowLabel, height, width, onClick }: { imageSrc: string, label: string, isShowLabel: boolean, height: number, width: number, onClick: () => void }) => {
    return (
        <button
            className='flex gap-4 px-8 py-4 rounded-2xl items-center bg-orange hover:bg-orange-hover active:bg-orange-active transform hover:scale-105 transition duration-300'
            onClick={onClick}
        >
            <Image src={imageSrc} alt={label} height={height} width={width} />

            {isShowLabel && (
                <span className="text-center text-white text-sm font-poppins">{label}</span>
            )}
        </button>
    );
};

export default ImageButton;
