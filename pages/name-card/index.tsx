import Header from '@components/Manage/Layout/Content/Header';
import Tab from '@components/Manage/Layout/Content/NavigationTabs/Tab';
import Tabs from '@components/Manage/Layout/Content/NavigationTabs/Tabs';
import Layout from '@components/Manage/Layout/Layout';
import NameCardModal from '@components/NameCard/NameCardModal';
import { useState } from 'react';
import DataTable from 'react-data-table-component';

const Index = () => {
  const [selected, setSelected] = useState<any[]>([]);
  const [showCard, setShowCard] = useState(true);

  return (
    <Layout title="Name Card">
      <Header title="Name Card" />
      <div className="flex">
        <div className="flex-1">
          <Tabs>
            <Tab title="General" isActive />
          </Tabs>
        </div>

        <button
          onClick={() => {}}
          className="bg-blue-600 flex justify-center items-center shadow-md w-32 h-8 text-white text-xs"
        >
          Send to Email
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
          data={(() => {
            let acc = [];

            for (let x = 1; x <= 10; x++) {
              acc.push({
                id: x,
                name: 'Visitor Name',
              });
            }

            return acc;
          })()}
          columns={[
            {
              name: 'Name',
              selector: 'name',
              cell: () => (
                <div className="flex items-center">
                  <img
                    src="https://www.fs.usda.gov/research/people/ritsdocs/drlederle.jpg"
                    className="w-8 h-8 rounded-full mr-4"
                  />
                  <p>{'Visitor Name'}</p>
                </div>
              ),
              minWidth: '300px',
            },
            {
              name: 'Actions',
              cell: (item) => (
                <div className="grid grid-cols-2 gap-8">
                  <button onClick={() => setShowCard(true)}>
                    <div className="focus:outline-none cursor-pointer bg-white shadow-md h-10 w-32 text-blue-600 flex items-center justify-center">
                      View
                    </div>
                  </button>
                  <button onClick={() => {}}>
                    <div className="focus:outline-none cursor-pointer bg-blue-600 shadow-md h-10 w-32 text-white flex items-center justify-center">
                      Send to Email
                    </div>
                  </button>
                </div>
              ),
              button: true,
              width: '400px',
            },
          ]}
        />

        <div className="mt-8 flex justify-center">
          <button
            className="focus:outline-none h-8 px-4 rounded-l-md border border-gray-400 text-xs text-blue-600"
            onClick={() => {}}
          >
            Previous
          </button>
          <button
            className="focus:outline-none h-8 w-8 border-0 border-gray-400 text-xs text-white bg-blue-600"
            onClick={() => {}}
          >
            1
          </button>
          <button
            className="focus:outline-none h-8 w-8 border border-gray-400 text-xs text-blue-600"
            onClick={() => {}}
          >
            2
          </button>
          <button
            className="focus:outline-none h-8 w-8 border border-gray-400 text-xs text-blue-600"
            onClick={() => {}}
          >
            3
          </button>
          <button
            className="focus:outline-none h-8 w-8 border border-gray-400 text-xs text-blue-600"
            onClick={() => {}}
          >
            4
          </button>
          <button
            className="focus:outline-none h-8 px-4 rounded-r-md border border-gray-400 text-xs text-blue-600"
            onClick={() => {}}
          >
            Next
          </button>
        </div>
      </div>

      <NameCardModal isOpen={showCard} onRequestClose={() => setShowCard(false)} />
    </Layout>
  );
};

export default Index;

function onClickTab(tabIndex: number): void {
  alert(tabIndex);
}
