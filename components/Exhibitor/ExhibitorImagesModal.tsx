import TabHeader, { TabItem } from '@components/common/TabHeader';
import LargeModalContainer from '@components/common/LargeModalContainer';
import ImageViewerLayout from '@components/layout/ImageViewerLayout';
import { useMemo, useState, useCallback } from 'react';
import CompanyInfo from './CompanyInfo';

const ExhibitorImagesModal = () => {
  const tabs: TabItem[] = useMemo(
    () => [
      {
        name: 'Brochure',
        target: 'brochure',
      },
      {
        name: 'Photos',
        target: 'photos',
      },
      {
        name: 'Company Info',
        target: 'info',
      },
      {
        name: 'Investment Package',
        target: 'package',
      },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState(0);

  const _onTabChange = useCallback(
    (tabIndex: number) => {
      setActiveTab(tabIndex);
    },
    [activeTab]
  );

  return (
    <LargeModalContainer>
      <TabHeader data={tabs} activeTab={activeTab} setActiveTab={_onTabChange} />

      {activeTab === 0 && <ImageViewerLayout title="Brochures" />}

      {activeTab === 1 && <ImageViewerLayout title="Photos" />}

      {activeTab === 2 && <CompanyInfo />}

      {activeTab === 3 && <ImageViewerLayout title="Investment Package" />}
    </LargeModalContainer>
  );
};

export default ExhibitorImagesModal;
