import React from 'react';

const Step = (props: { current: number }) => {
  const steps = [
    'Your Details',
    'Your Details',
    'Business Matching',
    'Ticket & Payment',
    'Confirmation',
  ];

  return (
    <div className="flex flex-row justify-center">
      {steps.map((step, index) => {
        return (
          <div className="flex flex-row">
            <div className="flex flex-col items-center">
              <div
                className={`${
                  index + 1 <= props.current ? 'text-white bg-blue-600' : 'text-blue-600 bg-white'
                } flex justify-center items-center rounded-full border border-blue-600 w-10 h-10 text-sm font-light`}
              >
                {index + 1}
              </div>
              <p className="font-light text-xs mt-2">{step}</p>
            </div>
            {index < 4 && (
              <div
                className={`${index <= props.current - 2 ? 'bg-blue-400' : 'bg-gray-400'} w-32 mt-6`}
                style={{
                  height: index <= props.current - 2 ? '2px' : '1px',
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Step;
