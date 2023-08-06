import { HeaderText } from "../text";

const HeaderCard = ({ text }: { text: string }) => {
    return (
        <div className="flex items-center justify-center p-4 rounded-2xl bg-orange">
            <HeaderText text={text} />
        </div>
    )
}

export default HeaderCard;