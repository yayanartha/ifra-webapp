type Props = {
  title: string;
};

const ActiveMenu = (props: Props) => {
  return (
    <div className="h-12 text-white border-l-8 border-blue-800 flex items-center menu-container">
      <span className="font-thin tracking-wider noselect">{props.title}</span>

      <style jsx>{`
        .menu-container {
          padding-left: 1.49rem;
          background-color: #0470ad;
        }
        .menu-container span {
          font-family: Poppins;
          font-size: 1rem;
          font-weight: 200;
        }
        .menu-container:hover {
          cursor: default;
        }
        .noselect {
          -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
          -khtml-user-select: none; /* Konqueror HTML */
          -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                          supported by Chrome, Edge, Opera and Firefox */
        }
      `}</style>
    </div>
  );
};

export default ActiveMenu;
