import Menu from '@components/Manage/Layout/Sidebar/Menu';
import Head from 'next/head';
import { Container } from 'next/app';
import { useRouter } from 'next/router';
import ChatBubbleDots from '@public/zondicons/chat-bubble-dots.svg';
import Notifications from '@public/zondicons/notifications.svg';
import CheveronDown from '@public/zondicons/cheveron-down.svg';
import PhotoProfile from '@components/Manage/Layout/Header/PhotoProfile';

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
            {/* Header left */}
            <div className="text-white self-auto w-56 flex justify-center items-center header-left-container">
              <span className="font-semibold tracking-widest">IFRA 2020</span>
            </div>
            {/* Header left */}

            {/* Header right */}
            <div className="flex-auto bg-red-400">
              <div className="flex items-center justify-end bg-gray-200 h-16">
                <div className="pl-2 pr-2 pt-1">
                  <div className="h-4 w-4 fill-current text-gray-500 inline-block cursor-pointer hover:text-gray-600 duration-200 select-none">
                    <ChatBubbleDots />
                  </div>
                </div>

                <div className="pl-2 pr-2 pt-1">
                  <div className="h-4 w-4 fill-current text-gray-500 inline-block cursor-pointer hover:text-gray-600 duration-200 select-none">
                    <Notifications />
                  </div>
                </div>

                <div className="pr-2"></div>
                <div className="border-gray-500 border-solid border-l-2 h-4"></div>
                <div className="pr-2"></div>

                <div className="pl-2 pr-2 text-gray-700 text-sm cursor-pointer select-none">
                  <span className="">John Doe</span>
                  <div className="ml-1 pt-1 h-4 w-4 fill-current text-gray-500 inline-block stroke-current">
                    <CheveronDown />
                  </div>
                </div>

                <div className="pr-4">
                  <PhotoProfile src="https://i.picsum.photos/id/1027/50/50.jpg?hmac=VT9uiEVn7kBNuZoQdDuYyevPpQatjOyPSvZc4saOCDg" />
                </div>
              </div>
            </div>
            {/* Header right */}
          </div>
        </div>
        <div className="flex flex-row">
          {/* Sidebar */}
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
          {/* Sidebar */}

          {/* Content */}
          <div className="flex-auto bg-grey-600 h-screen content-container pl-6 pt-20 pr-4 pb-1">
            {props.children}
          </div>
          {/* Content */}
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
