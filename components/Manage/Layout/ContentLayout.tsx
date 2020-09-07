import { ReactNode } from 'react';
import TabLayout, { TabHeader } from './TabLayout';

export enum ContentTypes {
  Tab = 'tab',
  Single = 'single',
}

type Props = {
  title: string;
  children: ReactNode;
  type: ContentTypes;

  tabs?: TabHeader[];
  activeTab?: number;
  setActiveTab?: (tabIndex: number) => void;
  defaultAction?: () => void;
  defaultActionTitle?: string;
  primaryAction?: () => void;
  primaryActionTitle?: string;
};

const ContentLayout = (props: Props) => {
  return (
    <div className="px-8 py-6">
      <p className="text-lg font-body text-text mb-6">{props.title}</p>

      {props.type === ContentTypes.Tab && (
        <TabLayout
          tabs={props.tabs}
          activeTab={props.activeTab || 0}
          setActiveTab={props.setActiveTab}
          defaultAction={props.defaultAction}
          defaultActionTitle={props.defaultActionTitle}
          primaryAction={props.primaryAction}
          primaryActionTitle={props.primaryActionTitle}
        >
          {props.children}
        </TabLayout>
      )}

      {props.type === ContentTypes.Single && (
        <div className="bg-white shadow-lg relative" style={{ height: 'calc(100vh - 11rem)' }}>
          {props.children}
        </div>
      )}
    </div>
  );
};

export default ContentLayout;
