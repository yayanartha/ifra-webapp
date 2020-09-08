export interface TabItem {
  name: string;
  target: string;
}

type Props = {
  data: TabItem[];
  activeTab: number;
  setActiveTab(index: number): void;
  primaryAction?: () => void;
  primaryActionTitle?: string;
};

const TabHeader = (props: Props) => {
  const activeTabStyle = 'border-l border-t border-r rounded-t text-primary';
  const defaultTabStyle = 'text-gray-500 hover:text-blue-500';

  return (
    <div className="relative">
      <ul className="flex border-b pt-6 px-8">
        {props.data.map((d, i) => (
          <li className={`mr-1 ${props.activeTab === i ? '-mb-px' : ''}`}>
            <a
              onClick={() => props.setActiveTab(i)}
              className={`bg-white inline-block py-2 px-4 font-body font-medium ${
                props.activeTab === i ? activeTabStyle : defaultTabStyle
              }`}
              href={`#${d.target}`}
            >
              {d.name}
            </a>
          </li>
        ))}
      </ul>

      {props.primaryAction && (
        <button
          onClick={props.primaryAction}
          className="bg-primary absolute w-48 h-10 flex items-center justify-center shadow-lg hover:bg-blue_button focus:outline-none"
          style={{ top: '12px', right: '2rem' }}
        >
          <p className="text-white font-body font-medium text-sm">{props.primaryActionTitle}</p>
        </button>
      )}
    </div>
  );
};

export default TabHeader;
