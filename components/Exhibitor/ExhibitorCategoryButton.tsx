type Props = {
  left: string;
  top: string;
  label: string;
  type?: 'default' | 'primary';
  size?: 'large' | 'default';
  action(): void;
};

const ExhibitorCategoryButton = (props: Props) => {
  return (
    <div
      onClick={props.action}
      className="absolute opacity-75 rounded-md flex items-center justify-center cursor-pointer hover:opacity-100 border-2 border-dashed"
      style={{
        left: props.left,
        top: props.top,
        width: props.size === 'large' ? '15vw' : '12vw',
        height: props.size === 'large' ? '7vw' : '5vw',
        padding: '1vw',
        backgroundColor: props.type === 'primary' ? '#057DC1' : '#FFF',
        borderColor: props.type === 'primary' ? '#FFF' : '#057DC1',
      }}
    >
      <p
        className={
          props.type === 'primary' ? 'text-exhibitor-category-white' : 'text-exhibitor-category'
        }
      >
        {props.label}
      </p>
    </div>
  );
};

export default ExhibitorCategoryButton;
