import CountDown from '@components/MainHall/CountDown';

const CountDownScreen = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="fixed">
        <img src="/bg-main1.webp" alt="Main background" className="w-full h-auto fixed" />
      </div>

      <CountDown />
    </div>
  );
};

export default CountDownScreen;
