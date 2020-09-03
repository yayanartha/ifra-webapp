import Layout from '@components/manage/layout';

const Index = () => {
  return (
    <div className="relative min-h-screen w-screen bg-gray-300">
      <div className="absolute inset-x-0 top-0 h-16 w-screen">
        <div className="flex flex-row h-16">
          <div className="text-white self-auto bg-blue-700 w-56">
            <span className="font-semibold tracking-widest">IFRA 2020</span>
          </div>
          <div className="flex-auto bg-gray-100 px-4 py-2">Are you lost? Search Keywords Here</div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="self-auto bg-blue-600 w-56 min-h-screen pt-20">
          <div className="h-12 text-white pl-8">
            <span className="font-thin tracking-wider">Inbox</span>
          </div>
          <div className="h-12 text-white pl-8">
            <span className="font-thin tracking-wider">Ticket</span>
          </div>
          <div className="h-12 text-white pl-8">
            <span className="font-thin tracking-wider">Information Desk</span>
          </div>
          <div className="h-12 text-white pl-8">
            <span className="font-thin tracking-wider">Press Release</span>
          </div>
          <div className="h-12 text-white pl-8">
            <span className="font-thin tracking-wider">Sponsors</span>
          </div>
          <div className="h-12 text-white pl-8 bg-blue-700 border-l-8 border-blue-800">
            <span className="font-thin tracking-wider">Exhibitor</span>
          </div>
          <div className="h-12 text-white pl-8">
            <span className="font-thin tracking-wider">Visitor</span>
          </div>
          <div className="h-12 text-white pl-8">
            <span className="font-thin tracking-wider">Main Stage</span>
          </div>
          <div className="h-12 text-white pl-8">
            <span className="font-thin tracking-wider">Quiz</span>
          </div>
          {/* <div className="h-12 text-white pl-8">
            <span className="font-thin tracking-wider">Lucky Draw</span>
          </div>
          <div className="h-12 text-white pl-8">
            <span className="font-thin tracking-wider">Classroom</span>
          </div>
          <div className="h-12 text-white pl-8">
            <span className="font-thin tracking-wider">Meet The Expert</span>
          </div>
          <div className="h-12 text-white pl-8">
            <span className="font-thin tracking-wider">Shop</span>
          </div> */}
        </div>
        <div className="flex-auto bg-grey-400 px-4 py-2">2</div>
      </div>
    </div>
  );
};
export default Index;
