import Header from '@components/Manage/Layout/Content/Header';
import Tab from '@components/Manage/Layout/Content/NavigationTabs/Tab';
import Tabs from '@components/Manage/Layout/Content/NavigationTabs/Tabs';
import Layout from '@components/Manage/Layout/Layout';
import DataTable from 'react-data-table-component';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  return (
    <Layout title="Inbox">
      <div className="flex-1 p-8">
        <Header title="Inbox" />
        <div className="flex">
        <div className="flex-1">
        <Tabs>
          <Tab title="General" isActive />
        </Tabs>
        </div>

        <button
          onClick={() => router.back()}
          className="bg-blue-600 flex justify-center items-center shadow-md w-24 h-8 text-white font-light text-xs"
        >
          Back
        </button>
        </div>

        <div className="bg-white shadow-md h-full p-8">
          <h1 className="text-2xl text-blue-600">Broadcast Title 1</h1>
          <p className="text-gray-500 leading-7 font-thin text-xs mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Varius quam quisque id diam vel quam elementum pulvinar etiam. At in tellus integer feugiat scelerisque varius morbi enim nunc. Neque egestas congue quisque egestas. Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Leo integer malesuada nunc vel. Sit amet cursus sit amet dictum sit amet justo donec. Porta nibh venenatis cras sed.
<br />
<br />
Pellentesque habitant morbi tristique senectus et. Accumsan in nisl nisi scelerisque eu ultrices. Curabitur vitae nunc sed velit dignissim sodales ut. Nunc consequat interdum varius sit amet. Tincidunt praesent semper feugiat nibh sed pulvinar. Lectus magna fringilla urna porttitor rhoncus dolor purus. Consequat interdum varius sit amet mattis vulputate. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. In ornare quam viverra orci sagittis.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

function onClickTab(tabIndex: number): void {
  alert(tabIndex);
}
