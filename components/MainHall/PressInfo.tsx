import { useState, useMemo, useCallback } from 'react';
import TabHeader from '@components/common/TabHeader';
import ImageViewerLayout from '@components/layout/ImageViewerLayout';
import LargeModalContainer from '@components/common/LargeModalContainer';

const PressInfo = () => {
  const tabHeader = useMemo(
    () => [
      {
        name: 'Press Release',
        target: 'press',
      },
      {
        name: 'Documentation',
        target: 'documentation',
      },
      {
        name: 'Rundown',
        target: 'rundown',
      },
    ],
    []
  );
  const [activeTab, setActiveTab] = useState(0);

  const _onChangeTab = useCallback(
    (tabIndex: number) => {
      setActiveTab(tabIndex);
    },
    [activeTab]
  );

  return (
    <LargeModalContainer>
      <TabHeader data={tabHeader} activeTab={activeTab} setActiveTab={_onChangeTab} />

      {activeTab === 0 && <ImageViewerLayout title="judul" />}
    </LargeModalContainer>
  );
};

export default PressInfo;
