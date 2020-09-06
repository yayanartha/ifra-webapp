import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/countdown');
    }, 3000);
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <img src="/logo.png" />
    </div>
  );
};

export default SplashScreen;
