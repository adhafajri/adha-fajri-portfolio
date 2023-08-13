import { ContentText, HeaderText } from "../text";

const TechStackCard = ({ text }: { text: string }) => {
    return (
        <div className='flex p-4 flex-col justify-center items-start gap-2 rounded-full bg-yellow'>
            <p className='text-black text-sm font-normal'>{text}</p>
        </div>
    )
}

export default TechStackCard;