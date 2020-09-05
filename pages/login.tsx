import React from 'react';
import Clickable from '@components/common/Clickable';
import PrimaryButton from '@components/common/PrimaryButton';

interface LoginProps {}

const Login = (props: LoginProps) => {
  return (
    <div className="flex flex-col flex-1">
      <div className="relative w-screen" style={{ height: '100vh' }}>
        <img src="/register.webp" alt="Main background" className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex flex-row flex-1 justify-end">
          <div className="flex flex-1" />
          <div className="flex flex-col flex-1 bg-white">
            <div className="flex flex-col flex-1 items-center justify-center">
              <img src="/logo.png" alt="Logo IFRA" className="w-64 h-32 object-contain mb-8" />

              <form className="flex flex-col w-2/4">

                <div className="mb-4">
                  {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                    Username
                  </label> */}
                  <input className="appearance-none border-b-2 w-full py-2 px-1 text-black text-xs leading-tight" autoFocus id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                  {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label> */}
                  <input className="appearance-none border-b-2 w-full py-2 px-1 text-black text-xs leading-tight" id="password" type="password" placeholder="Password" />
                  {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                </div>

                <button
                  className="mt-8 shadow bg-blue-700 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded"
                  onClick={() => {}}
                >
                  Sign In
                </button>

                <div className="flex items-center justify-between mt-6">
                  <label className="md:w-2/3 block text-gray-500 font-bold">
                    <input className="mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm font-light text-black">{'Remember me'}</span>
                  </label>

                  <Clickable onClick={() => {}}>
                    <p className="text-xs tracking-wider">{'Need Help?'}</p>
                  </Clickable>
                </div>
              </form>
            </div>

            <div className="flex flex-col items-center mb-4">
              <Clickable onClick={() => {}}>
                <p className="text-black text-xs">{'Term of use. Privacy policy'}</p>
              </Clickable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
