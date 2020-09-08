import { useState, useMemo, useCallback } from 'react';
import TabHeader from '@components/common/TabHeader';
import LargeModalContainer from '@components/common/LargeModalContainer';
import ReactIcons from '@components/common/ReactIcons';
import { FaCheck } from 'react-icons/fa';

const InfoDesk = () => {
  const tabHeader = useMemo(
    () => [
      {
        name: 'About Event',
        target: 'about',
      },
      {
        name: 'For Exhibitor',
        target: 'for-exhibitor',
      },
      {
        name: 'For Visitor',
        target: 'for-visitor',
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

  const _handleChat = useCallback(() => {
    //
  }, []);

  return (
    <LargeModalContainer>
      <TabHeader
        data={tabHeader}
        activeTab={activeTab}
        setActiveTab={_onChangeTab}
        primaryAction={_handleChat}
        primaryActionTitle="Chat Us"
      />

      {activeTab === 0 && (
        <div className="flex h-full w-full overflow-y-auto px-8">
          <div className="flex flex-col flex-1 py-4">
            <div className="flex">
              <div className="bg-primary" style={{ width: '60px', height: '60px' }}></div>
              <div className="pl-4 flex flex-col flex-1">
                <p className="class-detail-label">Event Name</p>
                <p className="brochure-desc mb-2">
                  The 18th International Franchise, License & Business Concept Expo & Conference
                  (IFRA)
                </p>
                <p className="brochure-desc mb-2">
                  The 18th International Franchise, License, & Business Concept Expo (IFRA) returns
                  with virtual expo facilitating franchise and licensing opportunity and turning
                  business concept ideas into real and concrete business.
                </p>
                <p className="brochure-desc mb-6">
                  Over the 3 value-packed days, IFRA connects thousands of business owners,
                  entrepreneurs and investors attending IFRA to more than dozens brands, franchisors
                  and exhibitors to talk business. IFRA offering the full business experience to all
                  attendees, from first-timers looking for opportunities to seasoned business owners
                  seeking for growth and expansion through franchise and licensing.
                </p>

                <p className="class-detail-label">Theme</p>
                <p className="brochure-desc mb-2">
                  “Strengthening Entrepreneurship & SME Economy Through Licensing & Franchising”
                </p>
              </div>
            </div>
          </div>

          <div style={{ width: '80px' }} />

          <div className="flex flex-col flex-1 py-4">
            <div className="flex">
              <div className="bg-primary" style={{ width: '60px', height: '60px' }}></div>
              <div className="pl-4 flex flex-col flex-1">
                <div className="mb-4">
                  <p className="class-detail-label">Event Location</p>
                  <p className="brochure-desc mb-2">
                    IFRA Virtual Platform
                    <br />
                    www.ifra-virtualexpo.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="bg-primary" style={{ width: '60px', height: '60px' }}></div>
              <div className="pl-4 flex flex-col flex-1">
                <div className="mb-4">
                  <p className="class-detail-label">Entrance Fee</p>
                  <p className="brochure-desc mb-2">
                    1 Day pass 20k / person
                    <br />3 Day pass 50k / person
                  </p>
                </div>
                <div className="mb-4">
                  <p className="section">SHOWDAYS</p>
                  <p className="brochure-desc mb-2">
                    IFRA Virtual Expo
                    <br />
                    18 – 20 Sept (10:00 – 20:00)
                    <br />- All Programs
                  </p>
                </div>
                <div className="mb-4">
                  <p className="section">AFTER EVENT</p>
                  <p className="brochure-desc mb-2">
                    Business Matching only
                    <br />
                    21 – 30 Sept (10:00 – 18:00)
                    <br />
                    live chat, video call, business meet up, drop name card, youtube live streaming,
                    Marketplace (shop)
                  </p>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="bg-primary" style={{ width: '60px', height: '60px' }}></div>
              <div className="pl-4 flex flex-col flex-1">
                <div className="mb-4">
                  <p className="section">HOSTED BY</p>
                  <p className="brochure-desc mb-2">
                    Indonesian Franchise Association (AFI) & Indonesian License Association (ASENSI)
                  </p>
                </div>

                <div className="mb-4">
                  <p className="section">ORGANIZED BY</p>
                  <p className="brochure-desc mb-2">Dyandra Promosindo, PT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 1 && (
        <div className="flex flex-col h-full w-3/5 overflow-y-auto px-8">
          <p className="class-detail-label my-4">The Advantages of Virtual Expo for Exhibitors</p>
          {[
            'Involve more participants',
            'Not limited to space and time',
            'There are no queues when visiting',
            'Design according to company branding',
            'Realtime communication with booth owners',
            'Can be accessed via tablet & smartphone',
            'Professional tech support',
            'IFRA as a Trusted platform to boost your brand image to the market',
            'Get market update, trend and intelligence to grow your business',
            'Expand your network and business contacts in the franchise and licensing industry',
            'Opportunity to see and interact with more than a thousand potential business partners',
          ].map((item, i) => (
            <div className="flex">
              <ReactIcons Icon={FaCheck} className="text-primary w-4 h-4 mr-4" />
              <div className="mb-2">
                <p className="brochure-desc">{item}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 2 && (
        <div className="flex flex-col h-full w-3/5 overflow-y-auto px-8">
          <p className="class-detail-label my-4">
            5 Reason Why Must to Attend IFRA Virtual Expo for Visitors:
          </p>
          <p className="brochure-desc mb-4">
            IFRA makes a valuable and effective tool for franchisor, licensor and producers to have
            a direct interaction with potential franchisee, licensee, investor, entrepreneur and
            business owner:
          </p>

          {[
            'Visit dozens of virtual booths, making connections with key industry contacts.',
            'Easy access & Flexible times for franchisee/licensee to see the profile of franchisor/licensor.',
            'Schedule One-on-one between exhibitors and visitors via business matching.',
            'Find the right business opportunity in every industry and investment level.',
            'Learn from experts in virtual business presentation session.',
          ].map((item, i) => (
            <div className="flex">
              <div className="w-6">
                <p className="brochure-desc">{i + 1}.</p>
              </div>
              <div className="mb-2">
                <p className="brochure-desc">{item}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </LargeModalContainer>
  );
};

export default InfoDesk;
