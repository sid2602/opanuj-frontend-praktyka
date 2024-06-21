import { useState } from 'react';

export const useSolver = () => {
  const [numA, setNumA] = useState<string>('0');
  const [numB, setNumB] = useState<string>('0');
  const [sum, setSum] = useState<number | string>(0);
  const [isError, setIsError] = useState<boolean>(false);

  const parseInputs = (): {
    parsedNumAValue: number;
    parsedNumBValue: number;
  } => {
    const parsedNumAValue = parseFloat(numA);
    const parsedNumBValue = parseFloat(numB);

    return { parsedNumAValue, parsedNumBValue };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    return value;
  };

  const handleSubmit = (func: (a: number, b: number) => number) => {
    setIsError(false);
    const { parsedNumAValue, parsedNumBValue } = parseInputs();

    if (isNaN(parsedNumAValue) || isNaN(parsedNumBValue)) {
      setIsError(true);
      return;
    }

    setSum(func(parsedNumAValue, parsedNumBValue));
  };

  const handleSetNumA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumA(handleInputChange(e));
  };

  const handleSetNumB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumB(handleInputChange(e));
  };

  return {
    numA,
    handleSetNumA,
    numB,
    sum,
    handleSetNumB,
    isError,
    handleSubmit,
  };
};
