import Menu from '@components/Manage/Layout/Sidebar/Menu';
import ActiveMenu from '@components/Manage/Layout/Sidebar/ActiveMenu';

const Index = () => {
  return (
    <div className="relative min-h-screen w-screen bg-gray-300">
      <div className="absolute inset-x-0 top-0 h-16 w-screen">
        <div className="flex flex-row h-16">
          <div className="text-white self-auto bg-blue-700 w-56 flex justify-center items-center">
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
          <Menu title="Quiz"></Menu>
          <Menu title="Quiz"></Menu>
          <Menu title="Quiz"></Menu>
          <Menu title="Quiz"></Menu>
          <Menu title="Quiz"></Menu>
        </div>
        <div className="flex-auto bg-grey-600 h-screen content-container">
          <h1>1asas</h1>
          <h1>2asas</h1>
          <h1>3asas</h1>
          <h1>4asas</h1>
          <h1>5asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
          <h1>6asas</h1>
        </div>
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
        }

        .content-container {
          overflow-y: scroll;
          padding: 4.4rem 1rem 2rem 0.7rem;
        }
        .content-container::-webkit-scrollbar {
          display: none;
        }
        .content-container {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};
export default Index;
