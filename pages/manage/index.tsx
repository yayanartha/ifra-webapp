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
        <div className="self-auto bg-blue-600 w-56 min-h-screen pt-20">
          <Menu title="Inbox"></Menu>
          <Menu title="Ticket"></Menu>
          <Menu title="Information Desk"></Menu>
          <Menu title="Press Release"></Menu>
          <Menu title="Sponsors"></Menu>
          <ActiveMenu title="Exhibitor"></ActiveMenu>

          <Menu title="Visitor"></Menu>
          <Menu title="Main Stage"></Menu>
          <Menu title="Quiz"></Menu>
        </div>
        <div className="flex-auto bg-grey-400 px-4 py-2">2</div>
      </div>
    </div>
  );
};
export default Index;
