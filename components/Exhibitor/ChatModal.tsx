import ReactIcons from '@components/common/ReactIcons';
import { GrClose } from 'react-icons/gr';
import { useState, useCallback, createRef, useEffect } from 'react';

export interface ChatItem {
  message: string;
  senderId: number;
}

type Props = {
  handleClose(): void;
};

const ChatModal = (props: Props) => {
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
    <div
      className="fixed bg-white shadow-lg"
      style={{
        bottom: '20px',
        right: '35px',
        width: '22vw',
        height: '420px',
      }}
    >
      <div className="flex border-b border-gray-200" style={{ height: '56px' }}>
        <div className="flex items-center justify-center" style={{ width: '64px' }}>
          <div className="rounded-full bg-gray-300" style={{ width: '36px', height: '36px' }}></div>
        </div>
        <div className="flex flex-col flex-1 justify-center" style={{ paddingRight: '16px' }}>
          <p className="sales-name">Lindsey Rivard</p>
          <p className="sales-position">Sales Representative</p>
        </div>
        <button
          onClick={props.handleClose}
          className="flex items-center justify-center hover:bg-gray-200 focus:outline-none"
          style={{ width: '50px' }}
        >
          <ReactIcons Icon={GrClose} className="text-primary" />
        </button>
      </div>

      <div className="overflow-y-auto" style={{ height: '312px', padding: '0px 16px' }}>
        <div style={{ height: '16px' }} />
        {chatLogs.map((chat, i) => (
          <ChatBubble data={chat} />
        ))}
        <div ref={endOfChat} style={{ height: '16px' }} />
      </div>

      <div
        className="flex border-t border-gray-200"
        style={{ height: '50px', padding: '0px 16px' }}
      >
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
  );
};

export const ChatBubble = ({ data }: { data: ChatItem }) => {
  if (data.senderId === 0) {
    return (
      <div className="flex-col inline-flex" style={{ maxWidth: '80%', marginBottom: '20px' }}>
        <div
          className="bg-gray-200 rounded-t-lg rounded-br-rounded-t-lg "
          style={{ padding: '8px 12px', marginBottom: '4px' }}
        >
          <p className="font-body text-gray-700" style={{ fontSize: '10pt' }}>
            {data.message}
          </p>
        </div>
        <p className="font-body text-gray-600" style={{ fontSize: '8pt' }}>
          10:24
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-end">
      <div className="flex flex-col items-end" style={{ maxWidth: '80%', marginBottom: '20px' }}>
        <div
          className="bg-primary rounded-t-lg rounded-bl-lg"
          style={{ padding: '8px 12px', marginBottom: '4px' }}
        >
          <p className="font-body text-white" style={{ fontSize: '10pt' }}>
            {data.message}
          </p>
        </div>
        <p className="font-body text-gray-600" style={{ fontSize: '8pt' }}>
          10:25
        </p>
      </div>
    </div>
  );
};

export default ChatModal;
