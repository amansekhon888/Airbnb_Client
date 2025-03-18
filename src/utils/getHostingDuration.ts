import { formatDistanceToNow } from 'date-fns';

export const getHostingDuration = (createdAt) => {
    if (!createdAt) return "N/A"; // Handle missing data

    const createdDate = new Date(createdAt);
    const currentDate = new Date();

    // Calculate the time difference in words
    const timeDifference = formatDistanceToNow(createdDate, { addSuffix: false });

    return `${timeDifference} hosting`;
};