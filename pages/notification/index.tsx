import Header from '@components/Manage/Layout/Content/Header';
import Tab from '@components/Manage/Layout/Content/NavigationTabs/Tab';
import Tabs from '@components/Manage/Layout/Content/NavigationTabs/Tabs';
import Layout from '@components/Manage/Layout/Layout';
import Link from 'next/link';
import { useState } from 'react';
import DataTable from 'react-data-table-component';

const Index = () => {
  const [selected, setSelected] = useState<any[]>([]);

  return (
    <Layout title="Notifications">
      <Header title="Notifications" />
      <div className="flex">
        <div className="flex-1">
          <Tabs>
            <Tab title="General" isActive />
          </Tabs>
        </div>

        <button
          onClick={() => {}}
          className="bg-white flex justify-center items-center shadow-md w-24 h-8 text-blue-600 text-xs"
        >
          Delete
        </button>
      </div>

      <div className="bg-white shadow-md h-full">
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
                <Link href="/notification/detail">
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
