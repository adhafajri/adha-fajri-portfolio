// Convert Date to Month-Year format
export const formatDate = (date: Date | undefined) => {
    if (date == null) return '';

    return date.toLocaleDateString('default', {
        month: 'short',
        year: 'numeric',
    });
};

export function formatExperienceDate(startDate: FirebaseFirestore.Timestamp | undefined, endDate: FirebaseFirestore.Timestamp | undefined) {
    if (startDate?.toDate() == null) return 'Now';

    if (endDate?.toDate() == null) return `${formatDate(startDate.toDate())} - Now`;

    return `${formatDate(startDate.toDate())} - ${formatDate(endDate.toDate())}`
}