import ModalTNC from '@components/MainHall/ModalTNC';
import { useRouter } from 'next/router';

const CountDownScreen = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col flex-1">
      <div className="fixed">
        <img src="/bg-main1.webp" alt="Main background" className="w-full h-auto fixed" />
      </div>

      <ModalTNC isShow={true} onCloseModal={() => router.push('/main-hall')} />
    </div>
  );
};

export default CountDownScreen;
