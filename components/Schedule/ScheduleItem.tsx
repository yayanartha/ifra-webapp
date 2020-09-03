import ReactIcons from '@components/common/ReactIcons';
import { MdNotificationsActive, MdNotificationsOff } from 'react-icons/md';
import { useCallback, useState } from 'react';

export interface ScheduleItemProps {
  startTime: string;
  endTime: string;
  category: string;
  title: string;
}

const ScheduleItem = (props: ScheduleItemProps) => {
  const [isReminded, setIsReminded] = useState(false);

  const _toggleReminder = useCallback(() => {
    setIsReminded(!isReminded);
  }, [isReminded]);

  return (
    <div className="w-full flex items-center mb-8">
      <div className="pl-8" style={{ width: '110px' }}>
        <p className="schedule-time-start">{props.startTime}</p>
        <p className="schedule-time-end">{props.endTime}</p>
      </div>

      <div className="flex flex-1 flex-col px-4 border-l-4 border-primary">
        <p className="schedule-event-category">{props.category}</p>
        <p className="schedule-event-title">{props.title}</p>
      </div>

      <button
        onClick={_toggleReminder}
        className="flex items-center justify-center mr-8 focus:outline-none hover:bg-gray-100"
        style={{ width: '50px', height: '50px' }}
      >
        <ReactIcons
          Icon={isReminded ? MdNotificationsActive : MdNotificationsOff}
          className="w-8 h-8"
          style={{ color: isReminded ? '#63B0F6' : '#cbd5e0' }}
        />
      </button>
    </div>
  );
};

export default ScheduleItem;
