import { useMemo } from 'react';

const ClassList = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <button className="h-48 rounded-lg overflow-hidden">
        <div
          className="w-full h-full"
          style={{ background: 'url(/class-a.png) no-repeat center center', objectFit: 'cover' }}
        >
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          >
            <p className="class-option-title">Classroom A</p>
          </div>
        </div>
      </button>

      <button className="h-48 rounded-lg overflow-hidden">
        <div
          className="w-full h-full"
          style={{ background: 'url(/class-b.png) no-repeat center center', objectFit: 'cover' }}
        >
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          >
            <p className="class-option-title">Classroom B</p>
          </div>
        </div>
      </button>

      <button className="h-48 rounded-lg overflow-hidden">
        <div
          className="w-full h-full"
          style={{ background: 'url(/class-c.png) no-repeat center center', objectFit: 'cover' }}
        >
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          >
            <p className="class-option-title">Classroom C</p>
          </div>
        </div>
      </button>

      <button className="h-48 rounded-lg overflow-hidden">
        <div
          className="w-full h-full"
          style={{ background: 'url(/class-d.png) no-repeat center center', objectFit: 'cover' }}
        >
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          >
            <p className="class-option-title">Classroom D</p>
          </div>
        </div>
      </button>

      <button className="h-48 rounded-lg overflow-hidden">
        <div
          className="w-full h-full"
          style={{ background: 'url(/class-e.png) no-repeat center center', objectFit: 'cover' }}
        >
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          >
            <p className="class-option-title">Classroom E</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ClassList;
