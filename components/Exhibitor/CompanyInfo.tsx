import PrimaryButton from '@components/common/PrimaryButton';
import { useCallback } from 'react';

const CompanyInfo = () => {
  const _handleSave = useCallback(() => {
    //
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-8 py-4 flex flex-col overflow-y-auto" style={{ height: '446px' }}>
        <div className="flex">
          <div className="flex-1">
            <p className="company-text mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="company-text mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="company-text mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <Section label="Company Name" value="Lorem ipsum" />
            <Section label="Brand Name" value="Lorem ipsum" />
            <Section label="Contact Person" value="Lorem ipsum" />
            <Section label="Position" value="Lorem ipsum" />
            <Section label="Company Address" value="Lorem ipsum" />
            <Section label="City / Country" value="Lorem ipsum" />
          </div>

          <div style={{ width: '24px' }} />

          <div className="flex-1">
            <Section label="Phone Number" value="Lorem ipsum" />
            <Section label="Fax" value="Lorem ipsum" />
            <Section label="Company Email" value="Lorem ipsum" />
            <Section label="Website" value="Lorem ipsum" />
            <Section label="Social Media" value="Lorem ipsum" />
            <Section label="Type of Business" value="Lorem ipsum" />
            <Section label="Industry Category" value="Lorem ipsum" />
            <Section label="Number of Branch" value="Lorem ipsum" />
          </div>

          <div style={{ width: '24px' }} />

          <div className="flex-1">
            <Section label="Investment Range" value="Lorem ipsum" />
            <Section label="Payback Estimation Period" value="Lorem ipsum" />
            <Section label="Description" value="Lorem ipsum" />
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end px-8 pb-6 pt-4 border-t border-gray-200">
        <PrimaryButton label="Simpan" onClick={_handleSave} width="200px" />
      </div>
    </div>
  );
};

interface SectionProps {
  label: string;
  value: string;
}

const Section = (props: SectionProps) => {
  return (
    <div className="mb-4">
      <p className="company-label">{props.label}</p>
      <p className="company-text">{props.value}</p>
    </div>
  );
};

export default CompanyInfo;
