import { useState, useEffect } from 'react';

const useCounter = (foward) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fowardProcess = (prev) => prev + 1;
    const backwardProcess = (prev) => prev - 1;

    const interval = setInterval(() => {
      setCounter((prevCounter) =>
        foward ? fowardProcess(prevCounter) : backwardProcess(prevCounter)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [foward]);

  return counter;
};

export default useCounter;
