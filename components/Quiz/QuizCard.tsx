import { useMemo, useState, useCallback } from 'react';
import ReactIcons from '@components/common/ReactIcons';
import PrimaryButton from '@components/common/PrimaryButton';

const QuizCard = (props: {onClickJawab(): void}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isShowing, setIsShowing] = useState(true);

  const options = useMemo(
    () => [
      {
        id: 0,
        name: 'Pilihan Pertama',
      },
      {
        id: 1,
        name: 'Pilihan Kedua',
      },
      {
        id: 2,
        name: 'Pilihan Ketiga',
      },
    ],
    []
  );

  const _setAnswer = useCallback(
    (answer) => {
      setSelectedOption(answer);
    },
    [selectedOption]
  );

  const _submitAnswer = useCallback(() => {
    setIsShowing(false);
    props.onClickJawab();
  }, [selectedOption, isShowing]);

  if (!isShowing) return null;

  return (
    <div className="bg-gray-100 py-5 px-6" style={{ width: '350px' }}>
      <p className="quiz-title mb-3">QUIZ</p>
      <p className="quiz-question mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incideunt ut
        labore et dolore magna aliqua
      </p>

      {options.map((o, i) => (
        <button
          onClick={() => _setAnswer(o)}
          className="flex w-full items-center bg-white py-2 shadow-sm mb-2"
        >
          <div
            className="w-4 h-4 border-2 border-primary rounded-full mx-4"
            style={{ backgroundColor: o === selectedOption ? '#057DC1' : 'transparent' }}
          />
          <div className="flex flex-1">
            <p className="quiz-option">{o.name}</p>
          </div>
        </button>
      ))}
      <div className="h-4" />

      <PrimaryButton onClick={_submitAnswer} label="Jawab" />
    </div>
  );
};

export default QuizCard;
