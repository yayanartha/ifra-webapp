type Props = {
  title: string;
  isActive: string;
  onClick(): void;
};

const Tab = (props: Props) => {
  let liClassName: string = 'mr-1';
  let aClassName: string =
    'bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 rounded-t-lg font-light';

  if (props.isActive === 'true') {
    liClassName = '-mb-px mr-1';
    aClassName =
      'bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 rounded-t-lg font-light';
  }

  return (
    <li className={liClassName} onClick={props.onClick}>
      <a className={aClassName} href="#">
        {props.title}
      </a>
    </li>
  );
};

export default Tab;
