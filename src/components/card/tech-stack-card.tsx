import { Size } from "@/config/size-config";
import { ContentText, HeaderText } from "../text";

const TechStackCard = ({ text, bgColor, textColor, size = Size.medium }: { text: string | undefined, bgColor: string, textColor: string, size: Size }) => {
    return (
        <div className={`flex flex-col justify-center items-start ${size === Size.medium ? 'gap-2 p-4' : 'p-2'} rounded-full ${bgColor === 'yellow' ? 'bg-yellow' : 'bg-black'}`}>
            <p className={`text-${textColor} ${size === Size.medium ? 'text-sm' : ' text-xs'} font-normal line-clamp-1`}>{text}</p>
        </div>
    )
}

export default TechStackCard;