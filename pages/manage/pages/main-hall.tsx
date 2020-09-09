import FileUploadButton from '@components/Manage/Components/FileUploadButton';
import ContentLayout, { ContentTypes } from '@components/Manage/Layout/ContentLayout';
import { TabHeader } from '@components/Manage/Layout/TabLayout';
import { useState } from 'react';

const sampleTabs: TabHeader[] = [
  {
    id: 0,
    name: 'General',
  },
  {
    id: 1,
    name: 'Sponsor',
  },
  {
    id: 2,
    name: 'Exhibitor',
  },
  {
    id: 3,
    name: 'Media',
  },
  {
    id: 4,
    name: 'Banner',
  },
  {
    id: 5,
    name: 'Video Looping',
  },
];

type Props = {};

const PagesMainHall = (props: Props) => {
  const [tab, setTab] = useState(0);

  return (
    <ContentLayout
      title="Main Hall"
      type={ContentTypes.Tab}
      tabs={sampleTabs}
      activeTab={tab}
      setActiveTab={setTab}
    >
      {tab === 0 && <General />}

      {tab === 1 && <Sponsor />}

      {tab === 2 && <Sponsor />}

      {tab === 3 && <Sponsor />}

      {tab === 4 && <Banner />}

      {tab === 5 && <General />}
    </ContentLayout>
  );
};

const General = () => {
  return (
    <div className="p-8 flex">
      <div className="w-1/6">
        <p className="text-primary font-body font-medium text-xs">Upload File</p>
      </div>
      <div className="w-5/6 border border-dashed border-blue-300 p-6 flex flex-col items-center">
        <p className="text-gray-500 text-xs font-body font-light mb-5">
          File supported: JPG, PNG, GIF
        </p>

        <FileUploadButton onClick={() => {}} />

        <p className="text-gray-500 text-xs font-body font-light mt-5">Maximum file size: 5MB</p>
      </div>
    </div>
  );
};

const Sponsor = () => {
  return (
    <div className="p-8">
      <div className="flex">
        <div className="w-1/6">
          <p className="text-primary font-body font-medium text-xs">Add New</p>
          <p className="text-primary font-body text-xs">(300 x 180 pixel)</p>
        </div>
        <div className="w-5/6 border border-dashed border-blue-300 p-6 flex flex-col items-center">
          <p className="text-gray-500 text-xs font-body font-light mb-5">
            File supported: JPG, PNG, GIF
          </p>

          <FileUploadButton onClick={() => {}} />

          <p className="text-gray-500 text-xs font-body font-light mt-5">Maximum file size: 5MB</p>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 mt-8">
        <img src="/job-logo-5.png" className="object-contain p-4 w-32 h-32 shadow-md bg-white" />
        <img src="/job-logo-5.png" className="object-contain p-4 w-32 h-32 shadow-md bg-white" />
        <img src="/job-logo-5.png" className="object-contain p-4 w-32 h-32 shadow-md bg-white" />
        <img src="/job-logo-5.png" className="object-contain p-4 w-32 h-32 shadow-md bg-white" />
        <img src="/job-logo-5.png" className="object-contain p-4 w-32 h-32 shadow-md bg-white" />
        <img src="/job-logo-5.png" className="object-contain p-4 w-32 h-32 shadow-md bg-white" />
        <img src="/job-logo-5.png" className="object-contain p-4 w-32 h-32 shadow-md bg-white" />
        <img src="/job-logo-5.png" className="object-contain p-4 w-32 h-32 shadow-md bg-white" />
        <img src="/job-logo-5.png" className="object-contain p-4 w-32 h-32 shadow-md bg-white" />
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="p-8">
      <div className="flex">
        <div className="w-1/6">
          <p className="text-primary font-body font-medium text-xs">Long Banner</p>
          <p className="text-primary font-body text-xs">(1900 x 667 pixel)</p>
        </div>
        <div className="w-5/6 border border-dashed border-blue-300 p-6 flex flex-col items-center">
          <p className="text-gray-500 text-xs font-body font-light mb-5">
            File supported: JPG, PNG, GIF
          </p>

          <FileUploadButton onClick={() => {}} />

          <p className="text-gray-500 text-xs font-body font-light mt-5">Maximum file size: 5MB</p>
        </div>
      </div>

      <div className="flex mt-8">
        <div className="w-1/6">
          <p className="text-primary font-body font-medium text-xs">Rectangle Banner</p>
          <p className="text-primary font-body text-xs">(300 x 250 pixel)</p>
        </div>
        <div className="w-5/6 border border-dashed border-blue-300 p-6 flex flex-col items-center">
          <p className="text-gray-500 text-xs font-body font-light mb-5">
            File supported: JPG, PNG, GIF
          </p>

          <FileUploadButton onClick={() => {}} />

          <p className="text-gray-500 text-xs font-body font-light mt-5">Maximum file size: 5MB</p>
        </div>
      </div>
    </div>
  );
};

export default PagesMainHall;
