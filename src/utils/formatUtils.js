export const formatDistance = (meters) => {
  return (meters / 1000).toFixed(2) + ' km';
};

export const formatPace = (meters, seconds) => {
  const paceInSeconds = seconds / (meters / 1000);
  const minutes = Math.floor(paceInSeconds / 60);
  const remainingSeconds = Math.floor(paceInSeconds % 60);
  return `${minutes}'${remainingSeconds.toString().padStart(2, '0')}"`;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export const formatTime = (dateString) => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 || 12;

  return `${formattedHours}:${minutes}${ampm}`;
};
