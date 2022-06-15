import React from 'react';
import { NumberInput, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 400px;
  > * {
    margin: 20px;
  }
  text-align: center;
`;
const dimensions = ['s', 'm', 'xl'];

const displayClearIcons = [false, true];

const disableds = [false, true];

let propsData = [];

function func1(dimension) {
  displayClearIcons.forEach((a) => func2(dimension, a));
}
function func2(dimension, displayClearIcon) {
  disableds.forEach((disabled) => {
    propsData.push({
      dimension,
      displayClearIcon,
      disabled,
    });
  });
}
dimensions.forEach((d) => func1(d));

const NumberInputs = (props) => {
  const [value1, setValue1] = React.useState('From 85.00$');
  return (
    <>
      <Wrapper>
        <NumberInput {...props} onChange={function noRefCheck() {}} />
        <NumberInput
          {...props}
          prefix="From"
          suffix="$"
          value={value1}
          onChange={(event, fullStr, shortStr) => {
            console.log({ event, fullStr, shortStr });
            setValue1(fullStr);
          }}
          status="success"
        />
        <NumberInput
          {...props}
          onChange={function noRefCheck() {}}
          status="error"
          step={1000}
          thousand=","
          suffix="$"
          placeholder="0 $"
          precision={0}
        />
      </Wrapper>
    </>
  );
};

const NumberInputTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].type}
          </T>
          <NumberInputs {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default NumberInputTest;
