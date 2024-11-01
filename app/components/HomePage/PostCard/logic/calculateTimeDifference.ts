export const calculateTimeDifference = (createdAt: string | Date): string => {
    const todayTime = new Date();
    const createTime = new Date(createdAt); // Ensure createdAt is a Date object
  
    const differenceInMilliseconds = todayTime.getTime() - createTime.getTime();
  
    // Calculate difference in seconds, minutes, hours, and days
    const seconds = Math.floor(differenceInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
  };
  
  // Usage example
  const postCreatedAt = "2024-08-20T14:48:00.000Z"; // Example ISO date string
  const timeAgo = calculateTimeDifference(postCreatedAt);
  console.log(timeAgo); // Output could be something like "2 days ago"
  