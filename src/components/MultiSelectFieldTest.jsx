import React, { useState } from 'react';
import { MultiSelectField, DropDownItem, CheckboxField, T } from '@admiral-ds/react-ui';
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

const statuses = ['undefined', 'success', 'error'];

const disableds = [false, true];

let propsData = [];

function func1(dimension) {
  statuses.forEach((a) => func2(dimension, a));
}
function func2(dimension, status) {
  disableds.forEach((disabled) => {
    propsData.push({
      dimension,
      status,
      disabled,
    });
  });
}
dimensions.forEach((d) => func1(d));

const MultiSelectFields = (props) => {
  const [selectValue, setValue] = useState([]);

  const options = [
    { id: 1, label: 'Option one', value: '1', disabled: true },
    { id: 2, label: 'Option two', value: '2' },
    { id: 3, label: 'Option three', value: '3' },
    { id: 4, label: 'Option four', value: '4' },
    { id: 5, label: 'Option five', value: '5' },
    { id: 6, label: 'Option six', value: '6' },
    { id: 7, label: 'Option seven', value: '7' },
  ];

  return (
    <MultiSelectField {...props} value={selectValue} placeholder="Placeholder" onChange={(value) => setValue(value)}>
      {options.map((item) => (
        <DropDownItem key={item.id} role="option" value={item.label} disabled={item.disabled}>
          <CheckboxField
            dimension={props.dimension === 's' ? 's' : 'm'}
            disabled={item.disabled}
            checked={selectValue.indexOf(item.label) > -1}
            readOnly
          >
            {item.label}
          </CheckboxField>
        </DropDownItem>
      ))}
    </MultiSelectField>
  );
};

const MultiSelectFieldTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].status}
          </T>
          <MultiSelectFields {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default MultiSelectFieldTest;
