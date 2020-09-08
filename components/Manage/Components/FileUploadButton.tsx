type Props = {
  onClick(): void;
};

const FileUploadButton = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-primary flex items-center justify-center w-48 h-10 hover:bg-blue_button focus:outline-none"
    >
      <p className="text-white text-xs font-body font-medium">Choose File</p>
    </button>
  );
};

export default FileUploadButton;
