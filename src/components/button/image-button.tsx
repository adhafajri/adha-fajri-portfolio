import Image from 'next/image';

const ImageButton = ({ imageSrc, label, isShowLabel, height, width, onClick }: { imageSrc: string, label: string, isShowLabel: boolean, height: number, width: number, onClick: () => void }) => {
    return (
        <button className='flex gap-4 px-8 py-4 rounded-2xl bg-[#FF5943]' onClick={onClick}>
            <Image src={imageSrc} alt={label} height={height} width={width} objectFit="contain" />

            {isShowLabel && (
                <span className="text-center text-white text-xl font-poppins">{label}</span>
            )}
        </button>
    );
};

export default ImageButton;
