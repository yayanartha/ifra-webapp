import Menu from '@components/Manage/Layout/Sidebar/Menu';
import ActiveMenu from '@components/Manage/Layout/Sidebar/ActiveMenu';
import Head from 'next/head';
import { Container } from 'next/app';
import { useRouter } from 'next/router';

type Props = {
  title: string;
  children?: any;
};

const Layout = (props: Props) => {
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>{props.title} - Manage</title>
      </Head>

      <div className="relative min-h-screen w-screen bg-gray-300">
        <div className="absolute inset-x-0 top-0 h-16 w-screen">
          <div className="flex flex-row h-16 header-container">
            <div className="text-white self-auto w-56 flex justify-center items-center header-left-container">
              <span className="font-semibold tracking-widest">IFRA 2020</span>
            </div>

            <div className="flex-auto bg-gray-100 px-4 py-2">
              Are you lost? Search Keywords Here
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="self-auto bg-blue-600 w-56 h-screen pt-16 sidebar-container">
            <Menu
              title="Inbox"
              linkHref="/manage/inbox"
              linkAs="/manage/inbox"
              isActive={router.pathname == '/manage/inbox' ? 'true' : 'false'}
            ></Menu>
            <Menu
              title="Ticket"
              linkHref="/manage/ticket"
              linkAs="/manage/ticket"
              isActive={router.pathname == '/manage/ticket' ? 'true' : 'false'}
            ></Menu>
            <Menu
              title="Information Desk"
              linkHref="/manage/information-desk"
              linkAs="/manage/information-desk"
              isActive={router.pathname == '/manage/information-desk' ? 'true' : 'false'}
            ></Menu>
            <Menu
              title="Press Release"
              linkHref="/manage/press-release"
              linkAs="/manage/press-release"
              isActive={router.pathname == '/manage/press-release' ? 'true' : 'false'}
            ></Menu>
            <Menu
              title="Sponsors"
              linkHref="/manage/sponsor"
              linkAs="/manage/sponsor"
              isActive={router.pathname == '/manage/sponsor' ? 'true' : 'false'}
            ></Menu>
            <Menu
              title="Exhibitor"
              linkHref="/manage/exhibitor"
              linkAs="/manage/exhibitor"
              isActive={router.pathname == '/manage/exhibitor' ? 'true' : 'false'}
            ></Menu>
            <Menu
              title="Visitor"
              linkHref="/manage/visitor"
              linkAs="/manage/visitor"
              isActive={router.pathname == '/manage/visitor' ? 'true' : 'false'}
            ></Menu>
            <Menu
              title="Main Stage"
              linkHref="/manage/main-stage"
              linkAs="/manage/main-stage"
              isActive={router.pathname == '/manage/main-stage' ? 'true' : 'false'}
            ></Menu>
            <Menu
              title="Quiz"
              linkHref="/manage/quiz"
              linkAs="/manage/quiz"
              isActive={router.pathname == '/manage/quiz' ? 'true' : 'false'}
            ></Menu>
            <Menu
              title="Lucky Draw"
              linkHref="/manage/lucky-draw"
              linkAs="/manage/lucky-draw"
              isActive={router.pathname == '/manage/lucky-draw' ? 'true' : 'false'}
            ></Menu>
            <Menu
              title="Classroom"
              linkHref="/manage/classroom"
              linkAs="/manage/classroom"
              isActive={router.pathname == '/manage/classroom' ? 'true' : 'false'}
            ></Menu>
            <Menu
              title="Meet The Expert"
              linkHref="/manage/meet-the-expert"
              linkAs="/manage/meet-the-expert"
              isActive={router.pathname == '/manage/meet-the-expert' ? 'true' : 'false'}
            ></Menu>
            <Menu
              title="Shop"
              linkHref="/manage/shop"
              linkAs="/manage/shop"
              isActive={router.pathname == '/manage/shop' ? 'true' : 'false'}
            ></Menu>
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

          .header-left-container span {
            letter-spacing: 0.23em;
            font-family: Poppins;
            font-size: 1.02rem;
            font-weight: 600;
          }
        `}</style>
      </div>
    </Container>
  );
};

export default Layout;
