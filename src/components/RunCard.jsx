import PropTypes from 'prop-types';
import {
  formatDistance,
  formatPace,
  formatTime,
  formatDate,
} from '../utils/formatUtils';

export default function RunCard({ run, isLast }) {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-between px-5 py-4 hover:bg-gray-200 duration-200 gap-3">
        <div className="flex gap-4 md:flex-col md:gap-0">
          <p className="font-medium truncate max-w-40 md:max-w-64">
            {run.name}
          </p>
          <p className=" text-gray-500">
            <span>{formatDate(run.start_date)}</span>
            <span className="hidden md:inline">
              {' '}
              - {formatTime(run.start_date)}
            </span>
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
      {!isLast && <div className="w-[95%] mx-auto border-b border-gray-400" />}
    </>
  );
}

RunCard.propTypes = {
  run: PropTypes.shape({
    name: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
    moving_time: PropTypes.number.isRequired,
  }).isRequired,
  isLast: PropTypes.bool,
};
