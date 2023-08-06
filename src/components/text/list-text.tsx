const ListText = ({ textList }: { textList: string[] }) => {
    return (
        <ul className="text-black text-xl font-light list-disc list-inside">
            {textList.map((text, index) =>
                <li key={index}>
                    {text}
                </li>
            )}
        </ul>
    )
}

export default ListText;