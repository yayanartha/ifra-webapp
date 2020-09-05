type Props = {
  children?: any;
};

const Tabs = (props: Props) => {
  return <ul className="flex border-b">{props.children}</ul>;
};

export default Tabs;
