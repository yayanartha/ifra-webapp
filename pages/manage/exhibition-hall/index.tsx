import Header from '@components/Manage/Layout/Content/Header';
import Tab from '@components/Manage/Layout/Content/NavigationTabs/Tab';
import Tabs from '@components/Manage/Layout/Content/NavigationTabs/Tabs';
import Layout from '@components/Manage/Layout/Layout';
import SubMenu from '@components/Manage/Layout/Sidebar/SubMenu';

const Index = () => {
  return (
    <Layout title="Exhibition Hall">
      <div className="flex flex-1 gap-8">
        <div className="w-56 h-full bg-blue-700">
          <SubMenu title="Loading Screen" linkHref="/manage/inbox" isActive={false} />
          <SubMenu title="Welcome Screen" linkHref="/manage/inbox" isActive={true} />
          <SubMenu title="Main Hall" linkHref="/manage/inbox" isActive={true} />
          <SubMenu title="Exhibition Hall" linkHref="/manage/inbox" isActive={false} />
          <SubMenu title="Exhibition List" linkHref="/manage/inbox" isActive={false} />
          <SubMenu title="Exhibitor" linkHref="/manage/inbox" isActive={false} />
          <SubMenu title="Main Stage" linkHref="/manage/inbox" isActive={false} />
          <SubMenu title="Classroom" linkHref="/manage/inbox" isActive={false} />
          <SubMenu title="Meet The Expert" linkHref="/manage/inbox" isActive={false} />
          <SubMenu title="Shop" linkHref="/manage/inbox" isActive={false} />
        </div>

        <div className="flex-1 mt-8 mr-8">
          <Header title="Exhibition Hall" />

          <Tabs>
            <Tab title="General" isActive />
          </Tabs>

          <div className="bg-white flex items-start flex-1 mb-12 shadow-md p-8">
            <h1 className="text-blue-600 text-md mr-8">Upload File</h1>

            <div className="border-dashed flex flex-col items-center flex-1 border border-gray-400 p-4">
              <p className="font-thin text-gray-400 text-xs text-center">
                File Supported: JPG, PNG, GIF
              </p>

              <button
                onClick={() => {}}
                className="focus:outline-none bg-blue-600 shadow-md w-64 h-10 text-white font-light text-xs mb-4 mt-4"
              >
                Choose File
              </button>

              <p className="font-thin text-gray-400 text-xs text-center">Maximum size: 5MB</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
