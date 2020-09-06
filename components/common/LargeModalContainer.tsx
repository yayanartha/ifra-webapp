import { ReactNode } from 'react';

const LargeModalContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col bg-white" style={{ width: '1080px', height: '600px' }}>
      {children}
    </div>
  );
};

export default LargeModalContainer;
