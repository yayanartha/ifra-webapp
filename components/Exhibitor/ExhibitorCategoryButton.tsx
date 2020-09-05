type Props = {
  left: string;
  top: string;
  label: string;
  action(): void;
};

const ExhibitorCategoryButton = (props: Props) => {
  return (
    <div
      onClick={props.action}
      className="absolute bg-white opacity-75 rounded-md flex items-center justify-center cursor-pointer hover:opacity-100 border-2 border-dashed border-primary"
      style={{
        left: props.left,
        top: props.top,
        width: '12vw',
        height: '5vw',
        padding: '1vw',
      }}
    >
      <p className="text-exhibitor-category">{props.label}</p>
    </div>
  );
};

export default ExhibitorCategoryButton;
