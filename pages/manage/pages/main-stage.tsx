import FileUploadButton from '@components/Manage/Components/FileUploadButton';
import ContentLayout, { ContentTypes } from '@components/Manage/Layout/ContentLayout';

type Props = {};

const MainStage = (props: Props) => {
  return (
    <ContentLayout title="Main Stage" type={ContentTypes.Single}>
      <div className="p-8 flex">
        <div className="w-1/6">
          <p className="text-primary font-body font-medium text-xs">Upload File</p>
        </div>
        <div className="w-5/6 border border-dashed border-blue-300 p-6 flex flex-col items-center">
          <p className="text-gray-500 text-xs font-body font-light mb-5">
            File supported: JPG, PNG, GIF
          </p>

          <FileUploadButton onClick={() => {}} />

          <p className="text-gray-500 text-xs font-body font-light mt-5">Maximum file size: 5MB</p>
        </div>
      </div>
    </ContentLayout>
  );
};

export default MainStage;
