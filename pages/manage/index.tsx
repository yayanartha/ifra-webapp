import BaseLayout from '@components/Manage/Layout/BaseLayout';

const Manage = () => {
  return (
    <BaseLayout>
      <div className="p-8">
        <p className="text-lg font-body text-text mb-6">Exhibitor Dashboard</p>
        <p className="font-body text-gray-500 text-sm font-light">Choose menu on the left panel</p>
      </div>
    </BaseLayout>
  );
};

export default Manage;
