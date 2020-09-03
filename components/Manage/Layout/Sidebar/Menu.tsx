type Props = {
  title: string;
};

const Menu = (props: Props) => {
  return (
    <div className="h-12 text-white pl-8 flex items-center">
      <span className="font-thin tracking-wider">{props.title}</span>
    </div>
  );
};

export default Menu;
