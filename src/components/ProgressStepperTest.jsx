import React from 'react';
import { ProgressStepper, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  > * {
    margin: 50px;
  }
`;

const ProgressStepperTest = (args) => {
  const steps = [
    'название первого шага',
    'название второго шага',
    'название третьего шага',
    'название четвертого шага',
    'название пятого шага',
    'название шестого шага',
  ];
  const steps2 = [
    'название первого этапа',
    'название второго этапа',
    'название третьего этапа',
    'название четвертого этапа',
    'название пятого этапа',
    'название шестого этапа',
  ];
  return (
    <>
      <Wrapper>
        <ProgressStepper {...args} steps={steps} activeStep={0} />

        <ProgressStepper {...args} steps={steps} activeStep={2} />

        <ProgressStepper {...args} steps={steps} activeStep={5} />
        <T font="Additional/L-bold"> Adaptive (Mobile): </T>
        <ProgressStepper {...args} steps={steps} activeStep={0} mobile />
        <ProgressStepper {...args} steps={steps} activeStep={2} mobile />
        <ProgressStepper {...args} steps={steps} activeStep={5} mobile />
        <T font="Additional/L-bold"> Кастомная подпись о следующем шаге: </T>
        <ProgressStepper
          {...args}
          steps={steps}
          activeStep={2}
          renderNextStepName={(nextStepName) => `Далее следует шаг: ${nextStepName}`}
        />
        <ProgressStepper {...args} steps={steps} activeStep={2} displayNextStepName={false} mobile />
        <T font="Additional/L-bold"> Пример настройки названия шага: </T>
        <ProgressStepper {...args} steps={steps2} activeStep={2} stepName={['этап', 'этапа', 'этапов']} />
      </Wrapper>
    </>
  );
};

export default ProgressStepperTest;
