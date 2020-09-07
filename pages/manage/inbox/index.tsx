import BaseLayout from '@components/Manage/Layout/BaseLayout';
import ContentLayout, { ContentTypes } from '@components/Manage/Layout/ContentLayout';
import { TabHeader } from '@components/Manage/Layout/TabLayout';
import Link from 'next/link';
import DataTable from 'react-data-table-component';

const sampleTabs: TabHeader[] = [
  {
    id: 0,
    name: 'General',
  },
];

const Index = () => {
  return (
    <BaseLayout>
      <ContentLayout
        title="Inbox"
        type={ContentTypes.Tab}
        tabs={sampleTabs}
        activeTab={0}
        setActiveTab={() => {}}
        // primaryAction={() => {}}
        // primaryActionTitle="Add New"
        // defaultAction={() => {}}
        // defaultActionTitle="Delete"
      >
        <div className="p-8">
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
                  <Link href="/manage/inbox/detail">
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
      </ContentLayout>
    </BaseLayout>
  );
};

export default Index;
