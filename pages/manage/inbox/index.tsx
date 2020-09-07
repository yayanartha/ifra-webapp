import Header from '@components/Manage/Layout/Content/Header';
import Tab from '@components/Manage/Layout/Content/NavigationTabs/Tab';
import Tabs from '@components/Manage/Layout/Content/NavigationTabs/Tabs';
import Layout from '@components/Manage/Layout/Layout';

const Index = () => {
  return (
    <Layout title="Inbox">
      <Header title="Inbox" />

      <Tabs>
        <Tab title="General" isActive />
      </Tabs>

      <div className="bg-white tab-content-container"></div>
      <style jsx>{`
        .tab-content-container {
          min-height: 64vh;
        }
      `}</style>
    </Layout>
  );
};

export default Index;

function onClickTab(tabIndex: number): void {
  alert(tabIndex);
}
