type Props = {
  title: string;
};

const ActiveMenu = (props: Props) => {
  return (
    <div className="h-12 text-white bg-blue-700 border-l-8 border-blue-800 flex items-center container">
      <span className="font-thin tracking-wider">{props.title}</span>

      <style jsx>{`
        .container {
          padding-left: 1.49rem;
        }
      `}</style>
    </div>
  );
};

export default ActiveMenu;
