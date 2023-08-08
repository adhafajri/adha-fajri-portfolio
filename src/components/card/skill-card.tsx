import { ContentText, HeaderText } from "../text";

const SkillCard = ({ text }: { text: string }) => {
    return (
        <div className="flex p-4 flex-col justify-center items-start rounded-2xl bg-white">
            <ContentText text={text} />
        </div>
    )
}

export default SkillCard;