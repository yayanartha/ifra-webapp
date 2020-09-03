type Props = {
  title: string;
};

const Menu = (props: Props) => {
  return (
    <div className="h-12 text-white pl-8 flex items-center menu-container">
      <span className="tracking-wider noselect">{props.title}</span>

      <style jsx>{`
        .menu-container:hover {
          background-color: #0470ad;
          cursor: default;
        }
        .menu-container span {
          font-family: Poppins-Thin;
          font-size: 1rem;
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

export default Menu;
