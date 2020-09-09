import FileUploadButton from '@components/Manage/Components/FileUploadButton';
import ContentLayout, { ContentTypes } from '@components/Manage/Layout/ContentLayout';
import { TabHeader } from '@components/Manage/Layout/TabLayout';
import { useState } from 'react';
import DataTable from 'react-data-table-component';

const sampleTabs: TabHeader[] = [
  {
    id: 0,
    name: 'General',
  },
  {
    id: 1,
    name: 'Themes',
  },
];

type Props = {};

const Exhibitor = (props: Props) => {
  const [tab, setTab] = useState(0);

  return (
    <ContentLayout
      title="Exhibitor"
      type={ContentTypes.Tab}
      tabs={sampleTabs}
      activeTab={tab}
      setActiveTab={setTab}
      primaryAction={() => {
        if (tab !== 2) {
          setTab(2);
        }
      }}
      primaryActionTitle={tab === 2 ? 'Publish' : 'Add New'}
      defaultAction={tab === 2 ? undefined : () => {}}
      defaultActionTitle="Delete"
    >
      {tab === 0 && <General />}

      {tab === 1 && <Themes />}

      {tab === 2 && <AddNew />}
    </ContentLayout>
  );
};

const General = () => {
  return (
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
        data={(() => {
          let acc = [];

          for (let x = 1; x <= 10; x++) {
            acc.push({
              id: x,
              name: `Name Exhibitor ${x}`,
              theme: 'Booth A',
              category: 'Sponsors, Retail Mini Market',
            });
          }

          return acc;
        })()}
        columns={[
          {
            name: 'Name',
            selector: 'name',
          },
          {
            name: 'Themes',
            selector: 'theme',
            style: {
              color: '#b8b8b8',
            },
          },
          {
            name: 'Categories',
            selector: 'category',
            style: {
              color: '#b8b8b8',
            },
          },
          {
            name: 'Actions',
            cell: (item) => <button onClick={() => {}}>Edit</button>,
            button: true,
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
  );
};

const AddNew = () => {
  return (
    <div className="p-8">
      <div className="flex">
        <div className="w-40">
          <p className="text-primary font-body font-medium text-sm">Title</p>
        </div>
        <div className="flex-1">
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="flex">
          <div className="w-40">
            <p className="text-primary font-body font-medium text-xs">Select Themes</p>
          </div>
          <div className="flex-1">
            <input
              type="text"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Select Themes"
            />
          </div>
        </div>

        <div className="flex">
          <div className="w-40">
            <p className="text-primary font-body font-medium text-xs">Upload Booth</p>
          </div>
          <div className="flex-1">
            <FileUploadButton onClick={() => {}} />
          </div>
        </div>
      </div>

      <div className="flex mt-8">
        <div className="w-40">
          <p className="text-primary font-body font-medium text-xs">Categories</p>
        </div>

        <div className="w-64">
          {[
            'Ministry of Trade of PI Pavilion',
            'Automotive',
            'Beauty, Health & SPA',
            'Delivery Services',
            'Education Center',
            'Fintech & Telco',
            'Food & Beverage',
          ].map((item) => {
            return (
              <label className="flex font-light text-sm text-gray-800 mb-2 items-center">
                <input
                  className="form-checkbox appearance-none mr-2 h-6 w-6 border-2 border-blue-600 rounded-md"
                  type="checkbox"
                />
                <span>{item}</span>
              </label>
            );
          })}
        </div>

        <div className="w-64">
          {[
            'Laundry & Services',
            'Pharmacy',
            'Property',
            'Repair Services',
            'Retail Mini Market',
            'Water Refill',
          ].map((item) => {
            return (
              <label className="flex font-light text-sm text-gray-800 mb-2 items-center">
                <input
                  className="form-checkbox appearance-none mr-2 h-6 w-6 border-2 border-blue-600 rounded-md"
                  type="checkbox"
                />
                <span>{item}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="flex mt-8">
        <div className="w-40">
          <p className="text-primary font-body font-medium text-xs">Sponsors</p>
        </div>

        <div className="w-64">
          {['Yes', 'No'].map((item) => {
            return (
              <label className="flex font-light text-sm text-gray-800 mb-2 items-center">
                <input
                  className="form-checkbox appearance-none mr-2 h-6 w-6 border-2 border-blue-600 rounded-md"
                  type="checkbox"
                />
                <span>{item}</span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Themes = () => {
  return (
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
        data={(() => {
          let acc = [];

          for (let x = 1; x <= 10; x++) {
            acc.push({
              id: x,
              name: `Theme A`,
              hotspot: '6 points',
            });
          }

          return acc;
        })()}
        columns={[
          {
            name: 'Name',
            selector: 'name',
          },
          {
            name: 'Hotspot',
            selector: 'hotspot',
            style: {
              color: '#b8b8b8',
            },
          },
          {
            name: 'Actions',
            cell: (item) => <button onClick={() => {}}>Edit</button>,
            button: true,
          },
        ]}
      />
    </div>
  );
};

export default Exhibitor;
