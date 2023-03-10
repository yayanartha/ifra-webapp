import SideLogo from '@components/Registration/SideLogo';
import Step from '@components/Registration/Step';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface VisitorDetailTwoRegisterProps {}

const VisitorDetailTwoRegister = (props: VisitorDetailTwoRegisterProps) => {
  const router = useRouter();
  const [business, setBusiness] = useState('placeholder');
  const [purposeVisit, setPurposeVisit] = useState('placeholder');
  const [expoVisited, setExpoVisited] = useState('placeholder');
  const [position, setPosition] = useState('placeholder');

  const setGrayText = (value: string) => {
    return value === 'placeholder' ? 'text-gray-400' : 'text-black';
  };

  return (
    <div className="w-screen h-screen bg-white flex">
      <SideLogo />

      <div className="h-screen w-full pt-8 pl-8 pr-8">
        <div className="h-16 flex flex-col justify-center mb-4">
          <h1 className="font-bold text-3xl text-blue-600 tracking-wider">Visitor Registration</h1>
        </div>

        <Step current={2} />

        <div className="flex flex-col mx-auto w-7/12 mt-8">
          <select
            className={`form-select shadow-md h-12 font-light text-sm border-0 mb-4 ${setGrayText(
              business
            )}`}
            placeholder="Choose Your Scope of Business*"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
          >
            <option value="placeholder" disabled>
              Choose Your Scope of Business*
            </option>
            <option>Franchise</option>
            <option>License</option>
            <option>Retailer</option>
            <option>Investor</option>
            <option>Entrepreneur</option>
            <option>Business Owner</option>
            <option>Distributor</option>
            <option>Individual Investment</option>
          </select>

          <select
            className={`form-select shadow-md h-12 font-light text-sm border-0 mb-4 ${setGrayText(
              purposeVisit
            )}`}
            placeholder="Choose Your Purpose of Visit*"
            value={purposeVisit}
            onChange={(e) => setPurposeVisit(e.target.value)}
          >
            <option value="placeholder" disabled>
              Choose Your Purpose of Visit*
            </option>
            <option>Visit Business Partner???s Booth</option>
            <option>Evaluate Opportunity to Join</option>
            <option>To Purchase Product</option>
            <option>Gather Information</option>
            <option>Evaluate Products</option>
            <option>Renew Suppliers Contact</option>
            <option>To Look Business Agency</option>
            <option>Looking for Investment and Business Opportunity</option>
            <option>Find The Right Business Partner</option>
            <option>Others</option>
          </select>

          <select
            className={`form-select shadow-md h-12 font-light text-sm border-0 mb-4 ${setGrayText(
              expoVisited
            )}`}
            placeholder="Choose Your Expo Visited*"
            value={expoVisited}
            onChange={(e) => setExpoVisited(e.target.value)}
          >
            <option value="placeholder" disabled>
              Choose Your Expo Visited*
            </option>
            <option>Franchising & Licensing Asia Singapore</option>
            <option>Malaysia International Retail & Franchise Exhibition</option>
            <option>Vietnam Int???l Retail & Franchise Show</option>
            <option>Franchise Asia Philippines</option>
            <option>Hong Kong International Licensing Show</option>
            <option>Japan International Franchise Show</option>
            <option>Others</option>
          </select>

          <select
            className={`form-select shadow-md h-12 font-light text-sm border-0 ${setGrayText(
              position
            )}`}
            placeholder="Position*"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="placeholder" disabled>
              Position*
            </option>
            <option>CEO / Chairman</option>
            <option>Director</option>
            <option>General Manager</option>
            <option>Manager</option>
            <option>Supervisor</option>
            <option>Buyer / Purchaser / Merchandiser</option>
            <option>Sales / Marketing / Business Development</option>
            <option>Admin / Finance / Project Procurement</option>
            <option>Others</option>
          </select>

          <h1 className="text-blue-600 text-md mt-4">How Do You Know IFRA?</h1>

          <div className="flex">
            <div className="flex flex-col flex-1">
              {[
                'Email from Organizer',
                'Social Media Platform',
                'Online Media',
                'Government / Trade Attache',
                'Others',
              ].map((item) => {
                return (
                  <label className="flex font-light text-sm text-gray-800 mt-2 items-center">
                    <input
                      className="form-checkbox appearance-none mr-2 h-6 w-6 border-2 border-blue-600 rounded-md"
                      type="checkbox"
                    />
                    <span>{item}</span>
                  </label>
                );
              })}
            </div>
            <div className="flex flex-col flex-1">
              {[
                'Invitation by Exhibitor / Organizer',
                'Visited Before',
                'Internet Search Engine',
                'Recommendation from Partner',
              ].map((item) => {
                return (
                  <label className="flex font-light text-sm text-gray-800 mt-2 items-center">
                    <input
                      className="form-checkbox appearance-none mr-2 h-6 w-6 border-2 border-blue-600 rounded-md"
                      type="checkbox"
                    />
                    <span>{item}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <label className="flex font-light text-sm text-gray-800 mt-4 items-center">
            <input
              className="form-checkbox appearance-none mr-2 h-6 w-6 border-2 border-blue-600 rounded-md"
              type="checkbox"
            />
            <span>
              {
                'By completing the pre-registration, applicant will be automatically enrolled in the IFRA 2020 Business Matching program'
              }
            </span>
          </label>

          <div className="flex gap-8">
            <button
              onClick={() => router.back()}
              className="bg-blue-600 flex self-center justify-center items-center w-full h-10 text-white font-light text-xs mt-6"
            >
              GO BACK
            </button>
            <button
              onClick={() => router.push('/visitor-registration/detail-3')}
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

export default VisitorDetailTwoRegister;
