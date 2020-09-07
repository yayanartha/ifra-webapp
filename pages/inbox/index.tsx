import Header from '@components/Manage/Layout/Content/Header';
import Tab from '@components/Manage/Layout/Content/NavigationTabs/Tab';
import Tabs from '@components/Manage/Layout/Content/NavigationTabs/Tabs';
import Layout from '@components/Manage/Layout/Layout';
import Link from 'next/link';
import DataTable from 'react-data-table-component';

const Index = () => {
  return (
    <Layout title="Inbox">
      <Header title="Inbox" />
      <Tabs>
        <Tab title="General" isActive />
      </Tabs>

      <div className="bg-white shadow-md h-full">
        <DataTable
          striped
          customStyles={{
            headCells: {
              style: {
                color: '#3182ce',
              },
            },
            cells: {
              style: {
                color: '#3182ce',
              },
            },
          }}
          data={[
            {
              id: 1,
              name: 'Broadcast Title 3',
              category: 'News',
            },
            {
              id: 2,
              name: 'Broadcast Title 2',
              category: 'News',
            },
            {
              id: 3,
              name: 'Broadcast Title 1',
              category: 'News',
            },
          ]}
          columns={[
            {
              name: 'Name',
              selector: 'name',
            },
            {
              name: 'Category',
              selector: 'category',
              style: {
                color: '#b8b8b8',
              },
            },
            {
              name: 'Actions',
              cell: (item) => (
                <Link href="/inbox/detail">
                  <div className="focus:outline-none cursor-pointer bg-white shadow-md h-10 w-32 text-blue-600 flex items-center justify-center">
                    View
                  </div>
                </Link>
              ),
              button: true,
              width: '400px',
            },
          ]}
        />
      </div>
    </Layout>
  );
};

export default Index;

function onClickTab(tabIndex: number): void {
  alert(tabIndex);
}
