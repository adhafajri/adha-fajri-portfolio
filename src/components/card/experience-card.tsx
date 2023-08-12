import { formatDate } from "@/utils";
import { DateText, ListText, SubtitleText, TitleText } from "../text";

const ExperienceCard = ({ title, subtitle, date, experienceList }: { title: string, subtitle: string, date: string | undefined, experienceList: string[] }) => {
    return (
        <div className="flex flex-col items-start justify-center p-8 w-full rounded-2xl bg-white">
            <div className="flex items-center gap-2">
                <TitleText text={title} /> <DateText text={`(${date})`} />
            </div>
            <SubtitleText text={subtitle} />
            <ListText textList={experienceList} />
        </div>
    )
}

export default ExperienceCard;