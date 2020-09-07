import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/countdown');
    }, 4000);
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <img src="/ifra-loading.gif" />
    </div>
  );
};

export default SplashScreen;
