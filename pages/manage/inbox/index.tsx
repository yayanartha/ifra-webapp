import Layout from '@components/Manage/Layout/Layout';
import Header from '@components/Manage/Layout/Content/Header';
import Tabs from '@components/Manage/Layout/Content/NavigationTabs/Tabs';
import Tab from '@components/Manage/Layout/Content/NavigationTabs/Tab';

const Index = () => {
  return (
    <Layout title="Inbox">
      <Header title="Inbox" />

      <Tabs>
        <Tab title="General" isActive="false" onClick={() => onClickTab(0)} />
        <Tab title="Sponsor" isActive="true" onClick={() => onClickTab(1)} />
        <Tab title="Exhibitor" isActive="false" onClick={() => onClickTab(2)} />
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
