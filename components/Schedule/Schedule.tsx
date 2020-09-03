import ReactIcons from '@components/common/ReactIcons';
import { FaChevronDown } from 'react-icons/fa';
import { useMemo } from 'react';
import ScheduleItem, { ScheduleItemProps } from './ScheduleItem';

type Props = {
  title: string;
};

const Schedule = (props: Props) => {
  const schedule: ScheduleItemProps[] = useMemo(
    () => [
      {
        startTime: '10:00',
        endTime: '10:30',
        category: 'Opening Ceremony',
        title: 'IFRA 2020 Virtual Expo',
      },
      {
        startTime: '10:30',
        endTime: '11:30',
        category: 'Conference',
        title: 'Official Announcement',
      },
      {
        startTime: '11:30',
        endTime: '12:00',
        category: 'Business Presentation',
        title: 'Talk with - Ahmed Alarfaj',
      },
      {
        startTime: '14:00',
        endTime: '14:30',
        category: 'Business Presentation',
        title: 'Talk with - Mohamed Maskati',
      },
      {
        startTime: '14:00',
        endTime: '14:30',
        category: 'Business Presentation',
        title: 'Talk with - Mohamed Maskati',
      },
    ],
    []
  );

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-8 ml-4">
        <p className="schedule-title">Day 1</p>
        <ReactIcons Icon={FaChevronDown} className="text-white ml-4 text-xs" />
      </div>

      <div className="mb-4">
        <p className="schedule-location">{props.title}</p>
      </div>

      <div className="bg-white overflow-y-auto" style={{ width: '550px', height: '380px' }}>
        <div className="h-8" />

        {schedule.map((s, i) => (
          <ScheduleItem key={i} {...s} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
