import FileUploadButton from '@components/Manage/Components/FileUploadButton';
import ContentLayout, { ContentTypes } from '@components/Manage/Layout/ContentLayout';

type Props = {};

const Classroom = (props: Props) => {
  return (
    <ContentLayout title="Classroom" type={ContentTypes.Single}>
      <div className="p-8">
      <div className="flex">
        <div className="w-1/6">
          <p className="text-primary font-body font-medium text-xs">Outer</p>
        </div>
        <div className="w-5/6 border border-dashed border-blue-300 p-6 flex flex-col items-center">
          <p className="text-gray-500 text-xs font-body font-light mb-5">
            File supported: JPG, PNG, GIF
          </p>

          <FileUploadButton onClick={() => {}} />

          <p className="text-gray-500 text-xs font-body font-light mt-5">Maximum file size: 5MB</p>
        </div>
      </div>

      <div className="flex mt-8">
        <div className="w-1/6">
          <p className="text-primary font-body font-medium text-xs">In Live Class</p>
        </div>
        <div className="w-5/6 border border-dashed border-blue-300 p-6 flex flex-col items-center">
          <p className="text-gray-500 text-xs font-body font-light mb-5">
            File supported: JPG, PNG, GIF
          </p>

          <FileUploadButton onClick={() => {}} />

          <p className="text-gray-500 text-xs font-body font-light mt-5">Maximum file size: 5MB</p>
        </div>
      </div>
    </div>
    </ContentLayout>
  );
};

export default Classroom;
