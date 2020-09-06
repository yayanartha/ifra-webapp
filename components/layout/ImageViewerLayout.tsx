type Props = {
  title: string;
};

const ImageViewerLayout = (props: Props) => {
  return (
    <div className="flex pl-8" style={{ height: '535px' }}>
      <div className="flex flex-col flex-1 pt-4 pb-8">
        <div
          className="w-full bg-red-100 flex items-center justify-center"
          style={{ height: '360px' }}
        >
          {/* <img src=""/> */}
          <p>600x360 px</p>
        </div>
        <div className="flex items-end justify-center" style={{ height: '125px' }}>
          <div className="bg-gray-200" style={{ width: '120px', height: '72px' }} />
          <div style={{ width: '16px' }} />
          <div
            className="bg-gray-200"
            style={{ marginBottom: '24px', width: '120px', height: '72px' }}
          />
          <div style={{ width: '16px' }} />
          <div className="bg-gray-200" style={{ width: '120px', height: '72px' }} />
        </div>
      </div>

      <div className="px-8 overflow-y-auto pt-4 pb-8" style={{ width: '448px' }}>
        <p className="class-detail-title mb-4">{props.title}</p>
        <p className="class-detail-value">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <p className="class-detail-value">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </div>
    </div>
  );
};

export default ImageViewerLayout;
