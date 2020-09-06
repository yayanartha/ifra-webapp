import ReactIcons from '@components/common/ReactIcons';
import { FaChevronDown } from 'react-icons/fa';
import { useMemo, useCallback, useState } from 'react';
import ScheduleItem, { ScheduleItemProps } from './ScheduleItem';
import DropdownContainer from '@components/common/DropdownContainer';

type Props = {
  dayNo: number;
  title: string;
  scheduleData: ScheduleItemProps[][];
  changeDayNo(dayNo: number): void;
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

  const [isShowDaySelect, setIsShowDaySelect] = useState(false);

  const _toggleDaySelect = useCallback(() => {
    setIsShowDaySelect(!isShowDaySelect);
  }, [isShowDaySelect]);

  const _selectDay = useCallback(
    (dayNo: number) => {
      props.changeDayNo(dayNo);
      _toggleDaySelect();
    },
    [isShowDaySelect]
  );

  return (
    <div className="flex flex-col items-center">
      <button onClick={_toggleDaySelect} className="flex items-center mb-8 ml-4 focus:outline-none">
        <p className="schedule-title hover:text-gray-300">{`Day ${props.dayNo}`}</p>
        <ReactIcons Icon={FaChevronDown} className="text-white ml-4 text-xs hover:text-gray-300" />
      </button>

      <div className="mb-4">
        <p className="schedule-location">{props.title}</p>
      </div>

      <div className="bg-white overflow-y-auto" style={{ width: '550px', height: '380px' }}>
        <div className="h-8" />

        {schedule.map((s, i) => (
          <ScheduleItem key={i} {...s} />
        ))}
      </div>

      {isShowDaySelect && (
        <DropdownContainer onDismiss={_toggleDaySelect}>
          <div
            className="fixed z-20 shadow-2xl bg-white border-b-4 border-primary"
            style={{ top: '10%', width: '150px' }}
          >
            <div style={{ height: '12px' }} />
            {props.dayNo !== 1 && (
              <button onClick={() => _selectDay(1)} className="hover:bg-gray-200 py-3 w-full">
                <p className="main-rundown-item">Day 1</p>
              </button>
            )}
            {props.dayNo !== 2 && (
              <button onClick={() => _selectDay(2)} className="hover:bg-gray-200 py-3 w-full">
                <p className="main-rundown-item">Day 2</p>
              </button>
            )}
            {props.dayNo !== 3 && (
              <button onClick={() => _selectDay(3)} className="hover:bg-gray-200 py-3 w-full">
                <p className="main-rundown-item">Day 3</p>
              </button>
            )}
            <div style={{ height: '12px' }} />
          </div>
        </DropdownContainer>
      )}
    </div>
  );
};

export default Schedule;
