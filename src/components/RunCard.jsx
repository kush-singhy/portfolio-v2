import PropTypes from 'prop-types';

export default function RunCard({ run }) {
  const formatDistance = (meters) => {
    return (meters / 1000).toFixed(2) + ' km';
  };

  const formatPace = (meters, seconds) => {
    const paceInSeconds = seconds / (meters / 1000);
    const minutes = Math.floor(paceInSeconds / 60);
    const remainingSeconds = Math.floor(paceInSeconds % 60);
    return `${minutes}'${remainingSeconds.toString().padStart(2, '0')}" / km`;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    if (hours > 0) {
      return `${hours}:${remainingMinutes
        .toString()
        .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full flex justify-between border border-gray-500 rounded-xl px-4 py-3">
      <div className="flex flex-col gap-1">
        <p className="font-medium max-w-64 truncate">{run.name}</p>
        <p className=" text-gray-500">
          {new Date(run.start_date).toLocaleString()}
        </p>
      </div>
      <div className="flex gap-9">
        <div>
          <p className=" text-gray-500">Distance</p>
          <p>{formatDistance(run.distance)}</p>
        </div>
        <div>
          <p className=" text-gray-500">Pace</p>
          <p>{formatPace(run.distance, run.moving_time)}</p>
        </div>
        <div>
          <p className=" text-gray-500">Time</p>
          <p>{formatTime(run.moving_time)}</p>
        </div>
      </div>
    </div>
  );
}

RunCard.propTypes = {
  run: PropTypes.shape({
    name: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
    moving_time: PropTypes.number.isRequired,
  }).isRequired,
};
