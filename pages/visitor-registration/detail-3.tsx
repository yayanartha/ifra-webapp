import SideLogo from '@components/Registration/SideLogo';
import Step from '@components/Registration/Step';
import { useRouter } from 'next/router';
import React from 'react';

interface VisitorDetailThreeRegisterProps {}

const VisitorDetailThreeRegister = (props: VisitorDetailThreeRegisterProps) => {
  const router = useRouter();

  return (
    <div className="w-screen h-screen bg-white flex">
      <SideLogo />

      <div className="h-screen w-full pt-8 pl-8 pr-8">
        <div className="h-16 flex flex-col justify-center mb-4">
          <h1 className="font-bold text-3xl text-blue-600 tracking-wider">Visitor Registration</h1>
        </div>

        <Step current={3} />

        <div className="flex flex-col mx-auto w-7/12 mt-8">
          <h1 className="text-blue-600 text-md mb-4">
            Business Matching Opportunity - Please complete the form below to
            <br />
            maximize your business matching opportunities with IFRA 2020 exhibitors
          </h1>

          <select
            className="form-select shadow-md h-12 font-light text-sm border-0 mb-4"
            placeholder="How much do you plan or willing to invest in the franchise business"
          >
            <option>{'> Rp 1.000.000.000'}</option>
            <option>{'Rp 500.000.000 - Rp 1.000.000.000'}</option>
            <option>{'Rp 250.000.000 - Rp 500.000.000'}</option>
            <option>{'Rp 100.000.000 - Rp 250.000.000'}</option>
            <option>{'Rp 50.000.000 - Rp 100.000.000'}</option>
            <option>{'Rp 25.000.000 - Rp 50.000.000'}</option>
            <option>{'Rp 10.000.000 - Rp 25.000.000'}</option>
            <option>{'< Rp 10.000.000'}</option>
          </select>

          <select
            className="form-select shadow-md h-12 font-light text-sm border-0 mb-4"
            placeholder="Choose Your Available Date*"
          >
            <option>18 September 2020</option>
            <option>19 September 2020</option>
            <option>20 September 2020</option>
          </select>

          <div className="flex flex-row gap-8 mb-4">
            <select
              className="form-select shadow-md h-12 font-light text-sm border-0 w-1/2"
              placeholder="Choose Your Exhibitor Category"
            >
              <option>Ministry of Trade of Pi Pavilion (10)</option>
              <option>Sponsor (12)</option>
              <option>Automotive (21)</option>
              <option>Ministry of Trade of Pi Pavilion (10)</option>
              <option>Beauty, Health & SPA (10)</option>
              <option>Delivery Services (30)</option>
              <option>Education Center (8)</option>
              <option>Fintech & Telco (2)</option>
              <option>Food & Beverage (2)</option>
              <option>Laundry & Services (17)</option>
              <option>Pharmacy (8)</option>
              <option>Property (13)</option>
              <option>Repair Services (8)</option>
              <option>Retail Mini Market (3)</option>
              <option>Water Refill (3)</option>
            </select>
            <select
              className="form-select shadow-md h-12 font-light text-sm border-0 w-1/2"
              placeholder="Brand Name"
            >
              <option>Brand A</option>
              <option>Brand B</option>
              <option>Brand C</option>
              <option>Brand D</option>
              <option>Brand E</option>
              <option>Brand F</option>
              <option>Brand G</option>
              <option>Brand H</option>
              <option>Brand I</option>
            </select>
          </div>

          <div className="flex gap-8">
            <button
              onClick={() => router.back()}
              className="bg-blue-600 flex self-center justify-center items-center w-full h-10 text-white font-light text-xs mt-6"
            >
              GO BACK
            </button>
            <button
              onClick={() => router.push('/visitor-registration/detail-4')}
              className="bg-blue-600 flex self-center justify-center items-center w-full h-10 text-white font-light text-xs mt-6"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorDetailThreeRegister;
