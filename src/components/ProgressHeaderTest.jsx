import React, { useState, useEffect } from 'react';
import { ProgressHeader } from '@admiral-ds/react-ui';
import styled from 'styled-components';

// останавливаем анимацию для скриншота
const StyledProgressHeader = styled(ProgressHeader)`
  & > * div {
    transition-delay: 0s;
  }
`;
const ProgressHeaderTest = () => {
  const [tik, setTick] = useState(0);
  useEffect(() => {
    const counter = () => setTick((prev) => prev + 1);
    const timerId = setTimeout(counter, 1000);
    if (tik >= 20) {
      clearTimeout(timerId);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [tik]);
  return (
    <>
      <ProgressHeader percent={40} role="alert" />
      <ProgressHeader percent={60} appearance="error" style={{ position: 'fixed', top: '20px' }} />
      <StyledProgressHeader percent={tik} role="alert" style={{ position: 'fixed', top: '80px' }} />
    </>
  );
};

export default ProgressHeaderTest;
