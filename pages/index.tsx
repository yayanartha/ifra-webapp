import Head from 'next/head';
import Navbar from '@components/Navbar';

const SplashScreen = () => {
  return (
    <>
      <Navbar />
    </>
  );
  // return (
  //   <div className="flex flex-col items-center justify-center h-screen w-screen">
  //     <img src="/logo.png" alt="Logo IFRA" className="w-64 h-20 object-contain" />
  //   </div>
  // );
};

export default SplashScreen;
