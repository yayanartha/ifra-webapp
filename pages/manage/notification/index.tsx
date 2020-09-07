import BaseLayout from '@components/Manage/Layout/BaseLayout';
import ContentLayout, { ContentTypes } from '@components/Manage/Layout/ContentLayout';
import { TabHeader } from '@components/Manage/Layout/TabLayout';
import Link from 'next/link';
import { useState } from 'react';
import DataTable from 'react-data-table-component';

const sampleTabs: TabHeader[] = [
  {
    id: 0,
    name: 'General',
  },
];

const Index = () => {
  const [selected, setSelected] = useState<any[]>([]);

  return (
    <BaseLayout>
      <ContentLayout
        title="Notifications"
        type={ContentTypes.Tab}
        tabs={sampleTabs}
        activeTab={0}
        setActiveTab={() => {}}
        // primaryAction={() => {}}
        // primaryActionTitle="Add New"
        defaultAction={() => {}}
        defaultActionTitle="Delete"
      >
        <div className="p-8">
          <DataTable
            striped
            selectableRows
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
                name: 'Title 1',
                schedule: '11.00-12.00',
                category: 'Main Stage',
              },
              {
                id: 2,
                name: 'Title 2',
                schedule: '14.00-14.30',
                category: 'Classroom',
              },
              {
                id: 3,
                name: 'Title 3',
                schedule: '15.00-16.00',
                category: 'Main Stage',
              },
            ]}
            columns={[
              {
                name: 'Name',
                selector: 'name',
              },
              {
                name: 'Schedule',
                selector: 'schedule',
                style: {
                  color: '#b8b8b8',
                },
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
                  <Link href="/manage/notification/detail">
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

function onClickTab(tabIndex: number): void {
  alert(tabIndex);
}
