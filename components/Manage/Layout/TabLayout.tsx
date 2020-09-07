import { ReactNode, useState } from 'react';

export interface TabHeader {
  id: number;
  name: string;
}

type Props = {
  tabs: TabHeader[];
  activeTab: number;
  setActiveTab(tabIndex: number): void;
  defaultAction?: () => void;
  defaultActionTitle?: string;
  primaryAction?: () => void;
  primaryActionTitle?: string;
  children: ReactNode;
};

const TabLayout = (props: Props) => {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="flex flex-1">
          {props.tabs.map((tab, i) => (
            <TabItem
              onClick={() => props.setActiveTab(i)}
              key={i}
              data={tab}
              isActive={props.activeTab === i}
            />
          ))}
        </div>

        <div className="flex">
          {props.defaultAction && (
            <button
              onClick={props.defaultAction}
              className="bg-white h-10 px-6 flex items-center justify-center shadow-sm hover:bg-gray-200 focus:outline-none"
              style={{ minWidth: '120px' }}
            >
              <p className="text-sm text-blue-700 font-body font-medium">
                {props.defaultActionTitle}
              </p>
            </button>
          )}

          {/* <div className="w-3" /> */}

          {props.primaryAction && (
            <button
              onClick={props.primaryAction}
              className="ml-3 bg-blue-700 h-10 px-6 flex items-center justify-center shadow-lg hover:bg-blue-600 focus:outline-none"
              style={{ minWidth: '120px' }}
            >
              <p className="text-sm text-white font-body font-medium">{props.primaryActionTitle}</p>
            </button>
          )}
        </div>
      </div>

      <div className="bg-white shadow-lg" style={{ minHeight: 'calc(100vh - 14rem)' }}>
        {props.children}
      </div>
    </div>
  );
};

interface TabItemProps {
  data: TabHeader;
  isActive: boolean;
  onClick(): void;
}

const TabItem = (props: TabItemProps) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-white h-12 px-8 rounded-t-md border-t border-l border-r flex flex-col justify-center mr-1 hover:bg-gray-100 focus:outline-none"
      style={{ opacity: props.isActive ? 1 : 0.5 }}
    >
      <p className="text-blue-500 font-body text-sm font-medium ">{props.data.name}</p>
    </button>
  );
};

export default TabLayout;
