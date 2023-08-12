const ListText = ({ textList }: { textList: string[] }) => {
    // If there's only one item in the list, return it as plain text.
    if (textList.length === 1) {
        return <p className="text-black text-base font-light">{textList[0]}</p>;
    }

    return (
        <ul className="text-black text-base font-light list-disc list-inside">
            {textList.map((text, index) =>
                <li key={index}>
                    {text}
                </li>
            )}
        </ul>
    )
}

export default ListText;
