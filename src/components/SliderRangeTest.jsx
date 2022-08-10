import React from 'react';
import { SliderRange, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 600px;
  > * {
    margin: 20px;
  }
  text-align: center;
`;

const dimensions = ['s', 'm', 'xl'];

const inputs1Statuses = [{ status: 'undefined' }, { status: 'success' }, { status: 'error' }];
const inputs2Statuses = [{ status: 'undefined' }, { status: 'success' }, { status: 'error' }];
const disableds = [false, true];

let propsData = [];

function func1(dimension) {
  inputs1Statuses.forEach((a) => func2(dimension, a));
}
function func2(input1, dimension) {
  inputs2Statuses.forEach((a) => func3(input1, dimension, a));
}
function func3(dimension, input1, input2, onChange) {
  disableds.forEach((disabled) => {
    propsData.push({
      dimension,
      input1,
      input2,
      disabled,
    });
  });
}
dimensions.forEach((d) => func1(d));
const handleChange = (value) => console.log(value);
const SliderRanges = (props) => {
  return <SliderRange {...props} label="введите диапазон" onChange={onChange || handleChange} />;
};

const SliderRangeTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].status}
          </T>
          <SliderRanges {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default SliderRangeTest;
