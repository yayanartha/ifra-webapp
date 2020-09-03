import Menu from '@components/Manage/Layout/Sidebar/Menu';
import ActiveMenu from '@components/Manage/Layout/Sidebar/ActiveMenu';

const Index = () => {
  return (
    <div className="relative min-h-screen w-screen bg-gray-300">
      <div className="absolute inset-x-0 top-0 h-16 w-screen">
        <div className="flex flex-row h-16 header-container">
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
          <Menu title="Luckey Draw"></Menu>
          <Menu title="QuClassroomiz"></Menu>
          <Menu title="Meet The Expert"></Menu>
          <Menu title="Shop"></Menu>
        </div>
        <div className="flex-auto bg-grey-600 h-screen content-container">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://i.picsum.photos/id/237/300/300.jpg?hmac=9iUR3VHqf0Y9abGyuPZTpEIxHJL0sSvyNtJtDIMSylM"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <br />
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://i.picsum.photos/id/237/300/300.jpg?hmac=9iUR3VHqf0Y9abGyuPZTpEIxHJL0sSvyNtJtDIMSylM"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
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
      `}</style>
    </div>
  );
};
export default Index;
