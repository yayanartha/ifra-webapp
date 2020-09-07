import Header from '@components/Manage/Layout/Content/Header';
import Tab from '@components/Manage/Layout/Content/NavigationTabs/Tab';
import Tabs from '@components/Manage/Layout/Content/NavigationTabs/Tabs';
import Layout from '@components/Manage/Layout/Layout';
import Menu from '@components/Manage/Layout/Sidebar/Menu';

const Index = () => {
  return (
    <Layout title="Inbox">

      <Header title="Inbox" />
      <Tabs>
        <Tab title="General" isActive />
      </Tabs>

      <div className="bg-white shadow-md h-full"></div>

    </Layout>
  );
};

export default Index;

function onClickTab(tabIndex: number): void {
  alert(tabIndex);
}
