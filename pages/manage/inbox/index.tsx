import Layout from '@components/Manage/Layout/Layout';
import Header from '@components/Manage/Layout/Content/Header';
import Tabs from '@components/Manage/Layout/Content/NavigationTabs/Tabs';
import Tab from '@components/Manage/Layout/Content/NavigationTabs/Tab';

const Index = () => {
  return (
    <Layout title="Inbox">
      <Header title="Inbox" />

      <div className="flex flex-1 flex-col w-full h-full">
        <div className="bg-white">{/*  */}</div>
      </div>
    </Layout>
  );
};

export default Index;

function onClickTab(tabIndex: number): void {
  alert(tabIndex);
}
