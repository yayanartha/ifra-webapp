export interface ExhibitorBottomMenuItem {
  name: string;
  action(): void;
}

type Props = {
  data: ExhibitorBottomMenuItem[];
};

const ExhibitorBottomMenu = (props: Props) => {
  return (
    <div className="bg-white shadow-xl rounded-lg flex items-center p-4">
      {props.data.map((d, i) => (
        <button
          key={i}
          onClick={d.action}
          className="bg-blue_button rounded-lg h-16 w-24"
          style={{ marginLeft: i === 0 ? 0 : '10px' }}
        >
          <p className="exhibition-menu">{d.name}</p>
        </button>
      ))}
    </div>
  );
};

export default ExhibitorBottomMenu;
