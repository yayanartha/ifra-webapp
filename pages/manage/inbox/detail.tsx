import BaseLayout from '@components/Manage/Layout/BaseLayout';
import ContentLayout, { ContentTypes } from '@components/Manage/Layout/ContentLayout';
import { TabHeader } from '@components/Manage/Layout/TabLayout';
import { useRouter } from 'next/router';

const sampleTabs: TabHeader[] = [
  {
    id: 0,
    name: 'General',
  },
];

const Index = () => {
  const router = useRouter();

  return (
    <BaseLayout>
      <ContentLayout
        title="Inbox"
        type={ContentTypes.Tab}
        tabs={sampleTabs}
        activeTab={0}
        setActiveTab={() => {}}
        primaryAction={() => router.back()}
        primaryActionTitle="Back"
        // defaultAction={() => {}}
        // defaultActionTitle="Delete"
      >
        <div className="p-8">
          <h1 className="text-2xl text-blue-600">Broadcast Title 1</h1>
          <p className="text-gray-500 leading-7 font-thin text-xs mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Maecenas ultricies mi eget mauris pharetra
            et ultrices neque. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque.
            Varius quam quisque id diam vel quam elementum pulvinar etiam. At in tellus integer
            feugiat scelerisque varius morbi enim nunc. Neque egestas congue quisque egestas. Lorem
            ipsum dolor sit amet consectetur. Pellentesque pulvinar pellentesque habitant morbi
            tristique senectus et netus. Leo integer malesuada nunc vel. Sit amet cursus sit amet
            dictum sit amet justo donec. Porta nibh venenatis cras sed.
            <br />
            <br />
            Pellentesque habitant morbi tristique senectus et. Accumsan in nisl nisi scelerisque eu
            ultrices. Curabitur vitae nunc sed velit dignissim sodales ut. Nunc consequat interdum
            varius sit amet. Tincidunt praesent semper feugiat nibh sed pulvinar. Lectus magna
            fringilla urna porttitor rhoncus dolor purus. Consequat interdum varius sit amet mattis
            vulputate. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. In ornare quam
            viverra orci sagittis.
          </p>
        </div>
      </ContentLayout>
    </BaseLayout>
  );
};

export default Index;
