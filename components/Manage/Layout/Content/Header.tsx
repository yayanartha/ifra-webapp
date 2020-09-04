type Props = {
  title: string;
};

const Header = (props: Props) => {
  return (
    <div className="text-2xl pb-4 content-header-container">
      <span>{props.title}</span>
      <style jsx>{`
        .content-header-container {
          font-family: Poppins;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
};

export default Header;
