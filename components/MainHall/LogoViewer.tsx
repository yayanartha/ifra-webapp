type Props = {
  type?: string;
};

const LogoViewer = (props: Props) => {
  return (
    <div className="bg-white w-64 h-64 shadow-lg flex items-center justify-center">
      <div className="bg-gray-400 rounded-full w-48 h-48 flex items-center justify-center">
        <p className="text-gray-600">{props.type || 'LOGO'}</p>
      </div>
    </div>
  );
};

export default LogoViewer;
