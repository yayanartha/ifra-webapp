import ReactIcons from '@components/common/ReactIcons';
import { MdNotificationsOff } from 'react-icons/md';

export interface ScheduleItemProps {
  startTime: string;
  endTime: string;
  category: string;
  title: string;
}

const ScheduleItem = (props: ScheduleItemProps) => {
  return (
    <div className="flex items-center">
      <div className="w-24 bg-red-200">
        <p>{props.startTime}</p>
        <p>{props.endTime}</p>
      </div>

      <div className="flex flex-1 flex-col">
        <p>{props.category}</p>
        <p>{props.title}</p>
      </div>

      <div className="w-1/5">
        <button className="w-32 h-32 flex items-center justify-center">
          <ReactIcons Icon={MdNotificationsOff} className="w-8 h-8 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default ScheduleItem;
