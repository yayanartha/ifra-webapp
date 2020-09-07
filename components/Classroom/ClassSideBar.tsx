import PrimaryButton from '@components/common/PrimaryButton';
import { useCallback } from 'react';

type Props = {
  handleBuyTicket(): void;
};

const ClassSideBar = (props: Props) => {
  const _buyTicket = useCallback(() => props.handleBuyTicket(), []);

  return (
    <div className="bg-white h-screen overflow-y-auto pt-12 relative" style={{ width: '450px' }}>
      <div className="px-4 py-6 flex border-b border-gray-400">
        <div className="flex flex-col items-center">
          <div
            className="flex items-center justify-center rounded-lg bg-primary"
            style={{ width: '90px', height: '90px' }}
          >
            <p className="class-countdown">07</p>
          </div>
          <p className="class-countdown-label">DAY</p>
        </div>

        <div className="w-4" />

        <div className="flex flex-col items-center">
          <div
            className="flex items-center justify-center rounded-lg bg-primary"
            style={{ width: '90px', height: '90px' }}
          >
            <p className="class-countdown">11</p>
          </div>
          <p className="class-countdown-label">HOUR</p>
        </div>

        <div className="w-4" />

        <div className="flex flex-col items-center">
          <div
            className="flex items-center justify-center rounded-lg bg-primary"
            style={{ width: '90px', height: '90px' }}
          >
            <p className="class-countdown">25</p>
          </div>
          <p className="class-countdown-label">MINUTE</p>
        </div>

        <div className="w-4" />

        <div className="flex flex-col items-center">
          <div
            className="flex items-center justify-center rounded-lg bg-primary"
            style={{ width: '90px', height: '90px' }}
          >
            <p className="class-countdown">23</p>
          </div>
          <p className="class-countdown-label">SECOND</p>
        </div>
      </div>

      <div className="px-4 py-6">
        <p className="class-detail-title">Details</p>

        <p className="class-detail-label">Information</p>
        <p className="class-detail-value">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>

        <p className="class-detail-label">Hosted by</p>
        <p className="class-detail-value">Nama Speaker</p>

        <p className="class-detail-label">Duration</p>
        <p className="class-detail-value">120 minutes</p>
      </div>

      <div className="absolute shadow-lg" style={{ bottom: '30px', left: 'calc(50% - 100px)' }}>
        <PrimaryButton onClick={_buyTicket} label="Beli Tiket" width="200px" />
      </div>
    </div>
  );
};

export default ClassSideBar;
