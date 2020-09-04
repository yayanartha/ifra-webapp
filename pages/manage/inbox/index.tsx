import Layout from '@components/Manage/Layout/Layout';
import Header from '@components/Manage/Layout/Content/Header';

const Index = () => {
  return (
    <Layout title="Inbox">
      <Header title="Inbox" />

      <ul className="flex border-b">
        <li className="-mb-px mr-1">
          <a
            className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold rounded-t-lg"
            href="#"
          >
            General
          </a>
        </li>
        <li className="mr-1">
          <a
            className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold rounded-t-lg"
            href="#"
          >
            Sponsor
          </a>
        </li>
        <li className="mr-1">
          <a
            className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold rounded-t-lg"
            href="#"
          >
            Exhibitor
          </a>
        </li>
      </ul>
      <div className="h-64 bg-white"></div>
    </Layout>
  );
};

export default Index;
