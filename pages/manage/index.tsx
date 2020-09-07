import BaseLayout from '@components/Manage/Layout/BaseLayout';
import ContentLayout, { ContentTypes } from '@components/Manage/Layout/ContentLayout';
import { TabHeader } from '@components/Manage/Layout/TabLayout';

const sampleTabs: TabHeader[] = [
  {
    id: 0,
    name: 'General',
  },
  {
    id: 1,
    name: 'Result',
  },
];

const Manage = () => {
  return (
    <BaseLayout>
      <div className="p-8">
        <p className="text-lg font-body text-text mb-6">Exhibitor Dashboard</p>
        <p className="font-body text-gray-500 text-sm font-light">Choose menu on the left panel</p>
      </div>

      {/* NE UNTUK LAYOUT TAB GUH */}
      {/* <ContentLayout
        title="Inbox"
        type={ContentTypes.Tab}
        tabs={sampleTabs}
        activeTab={0}
        setActiveTab={() => {}}
        primaryAction={() => {}}
        primaryActionTitle="Add New"
        defaultAction={() => {}}
        defaultActionTitle="Delete"
      >
        <div className="p-8">
          <p className="font-body text-gray-500 text-sm font-light">
            Choose menu on the left panel
          </p>
        </div>
      </ContentLayout> */}

      {/* NE UNTUK SINGLE LAYOUT GUH */}
      {/* <ContentLayout title="Messages" type={ContentTypes.Single}>
        <div className="p-8">
          <p className="font-body text-gray-500 text-sm font-light">Layout Single</p>
        </div>
      </ContentLayout> */}
    </BaseLayout>
  );
};

export default Manage;
