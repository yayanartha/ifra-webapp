import BaseLayout from '@components/Manage/Layout/BaseLayout';
import ContentLayout, { ContentTypes } from '@components/Manage/Layout/ContentLayout';
import SubmenuLayout, { SubmenuItem } from '@components/Manage/Layout/SubmenuLayout';
import { useMemo, useState, useCallback, createRef, useEffect } from 'react';
import { ChatBubble, ChatItem } from '@components/Exhibitor/ChatModal';

const Messages = () => {
  const chatPersons: SubmenuItem[] = useMemo(
    () => [
      {
        id: 0,
        name: 'User A',
        badgeCount: 2,
      },
      {
        id: 1,
        name: 'User B',
        badgeCount: 0,
      },
      {
        id: 2,
        name: 'User C',
        badgeCount: 0,
      },
      {
        id: 3,
        name: 'User D',
        badgeCount: 4,
      },
      {
        id: 4,
        name: 'User E',
        badgeCount: 0,
      },
      {
        id: 5,
        name: 'User F',
        badgeCount: 1,
      },
    ],
    []
  );

  const endOfChat = createRef<HTMLDivElement>();

  const [chatLogs, setChatLogs] = useState<ChatItem[]>([
    {
      message: 'Hi Alison, how can I help you?',
      senderId: 0,
    },
    {
      message: 'Hey John, I have a question regarding my account. Do you have time for a call?',
      senderId: 1,
    },
  ]);
  const [message, setMessage] = useState('');

  const _submitChat = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();

        setChatLogs([
          ...chatLogs,
          {
            senderId: 1,
            message,
          },
        ]);
        setMessage('');
      }
    },
    [message, chatLogs]
  );

  useEffect(() => {
    if (endOfChat.current) {
      endOfChat.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatLogs]);

  return (
    <BaseLayout>
      <SubmenuLayout
        data={chatPersons}
        selectedSubmenu={chatPersons[0]}
        setSelectedSubmenu={() => {}}
      >
        <ContentLayout title="Messages" type={ContentTypes.Single}>
          <div className="">
            <div className="border-b h-16 w-full flex items-center px-6">
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              <div className="w-full px-4">
                <p className="text-text font-body font-medium text-sm">User Name</p>
              </div>
            </div>

            <div
              className="w-full overflow-y-auto px-6"
              style={{ height: 'calc(100vh - 11rem - 4rem - 4rem)' }}
            >
              <div style={{ height: '16px' }} />
              {chatLogs.map((chat, i) => (
                <ChatBubble data={chat} />
              ))}
              <div ref={endOfChat} style={{ height: '16px' }} />
            </div>

            <div className="border-t h-16 w-full flex px-6">
              <form className="flex-1 flex items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="flex-1 font-body text-text focus:outline-none"
                  placeholder="Type message..."
                  onKeyDown={_submitChat}
                  style={{ fontSize: '10pt' }}
                />
              </form>
            </div>
          </div>
        </ContentLayout>
      </SubmenuLayout>
    </BaseLayout>
  );
};

export default Messages;
