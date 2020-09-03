import Menu from '@components/Manage/Layout/Sidebar/Menu';
import ActiveMenu from '@components/Manage/Layout/Sidebar/ActiveMenu';

type Props = {
  title?: string;
  children?: any;
};

const Layout = (props: Props) => {
  return (
    <div className="relative min-h-screen w-screen bg-gray-300">
      <div className="absolute inset-x-0 top-0 h-16 w-screen">
        <div className="flex flex-row h-16 header-container">
          <div className="text-white self-auto w-56 flex justify-center items-center header-left-container">
            <span className="font-semibold tracking-widest">IFRA 2020</span>
          </div>

          <div className="flex-auto bg-gray-100 px-4 py-2">Are you lost? Search Keywords Here</div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="self-auto bg-blue-600 w-56 h-screen pt-16 sidebar-container">
          <Menu title="Inbox"></Menu>
          <Menu title="Ticket"></Menu>
          <Menu title="Information Desk"></Menu>
          <Menu title="Press Release"></Menu>
          <Menu title="Sponsors"></Menu>
          <ActiveMenu title="Exhibitor"></ActiveMenu>
          <Menu title="Visitor"></Menu>
          <Menu title="Main Stage"></Menu>
          <Menu title="Quiz"></Menu>
          <Menu title="Luckey Draw"></Menu>
          <Menu title="QuClassroomiz"></Menu>
          <Menu title="Meet The Expert"></Menu>
          <Menu title="Shop"></Menu>
        </div>
        <div className="flex-auto bg-grey-600 h-screen content-container">{props.children}</div>
      </div>

      <style jsx>{`
        .sidebar-container {
          overflow-y: scroll;
        }
        .sidebar-container::-webkit-scrollbar {
          display: none;
        }
        .sidebar-container {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          background-color: #057dc1;
        }

        .content-container {
          overflow-y: scroll;
          padding: 4.6rem 0.7rem 0.7rem 0.7rem;
        }
        .content-container::-webkit-scrollbar {
          display: none;
        }
        .content-container {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        .header-container {
          box-shadow: 0px -20px 10px 0px rgb(255 255 255 / 6%),
            0px 2px 6px 1px rgb(130 123 123 / 4%);
        }

        .header-left-container {
          background-color: #046fac;
        }
      `}</style>
    </div>
  );
};

export default Layout;
