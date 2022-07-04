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
  return (
    <>
      {/* <Wrapper> */}
      {/* <NumberInput {...props} defaultValue="85.00" suffix="$" onChange={function noRefCheck() {}} />
        <NumberInput {...props} defaultValue="5.00" suffix="$" onChange={function noRefCheck() {}} />
        <NumberInput {...props} defaultValue="85.00" prefix="From" onChange={function noRefCheck() {}} />
        <NumberInput {...props} defaultValue="0" prefix="From" onChange={function noRefCheck() {}} />
        <NumberInput {...props} defaultValue="0" suffix="$" onChange={function noRefCheck() {}} /> */}

      <NumberInput
        {...props}
        prefix="From"
        suffix="$"
        defaultValue="85.00"
        onChange={(event) => {
          console.log(event.target.value);
        }}
        status="success"
      />
      {/* <NumberInput
          {...props}
          onChange={function noRefCheck() {}}
          status="error"
          step={1000}
          thousand=","
          suffix="$"
          placeholder="0 $"
          precision={0}
        /> */}
      {/* </Wrapper> */}
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
          <NumberInput {...prop} dimension="s" defaultValue="85.00" suffix="$" onChange={function noRefCheck() {}} />
          <NumberInput
            {...prop}
            dimension="s"
            status="success"
            defaultValue="85.00"
            suffix="$"
            onChange={function noRefCheck() {}}
          />
          <NumberInput
            {...prop}
            dimension="s"
            status="error"
            defaultValue="85.00"
            suffix="$"
            onChange={function noRefCheck() {}}
          />

          <NumberInput {...prop} dimension="s" defaultValue="5.00" suffix="$" onChange={function noRefCheck() {}} />
          <NumberInput {...prop} dimension="s" defaultValue="85.00" prefix="From" onChange={function noRefCheck() {}} />
          <NumberInput {...prop} dimension="s" defaultValue="0" prefix="From" onChange={function noRefCheck() {}} />
          <NumberInput {...prop} dimension="s" defaultValue="0" suffix="$" onChange={function noRefCheck() {}} />
        </Wrapper>
      </>
    );
  });
};

export default NumberInputTest;
