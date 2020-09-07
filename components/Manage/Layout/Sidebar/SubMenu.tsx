import Link from 'next/link';

type Props = {
  title: string;
  linkHref: string;
  linkAs?: string;
  isActive?: boolean;
};

const SubMenu = (props: Props) => {
  if (props.isActive) {
    return (
      <div className="h-12 text-white border-l-8 border-blue-600 bg-blue-800 flex items-center menu-container duration-200">
        <span className="font-thin tracking-wider noselect">{props.title}</span>

        <style jsx>{`
          .menu-container {
            padding-left: 1.49rem;
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
  } else {
    return (
      <Link href={props.linkHref} as={props.linkAs}>
        <div className="h-12 text-white pl-8 flex items-center menu-container duration-200">
          <span className="tracking-wider noselect">{props.title}</span>

          <style jsx>{`
            .menu-container:hover {
              background-color: #0470ad;
              cursor: pointer;
            }
            .menu-container span {
              font-family: Poppins;
              font-size: 1rem;
              font-weight: 200;
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
      </Link>
    );
  }
};

export default SubMenu;
