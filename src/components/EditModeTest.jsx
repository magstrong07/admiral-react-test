import React from 'react';
import { EditMode, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 600px;
  > * {
    margin: 10px;
  }
`;

const Separator = styled.div`
  height: 50px;
`;

const dimensions = ['s', 'm', 'xl', 'xxl'];

const bolds = [false, true];

const disableds = [false, true];

let propsData = [];

function func1(dimension) {
  bolds.forEach((a) => func2(dimension, a));
}
function func2(dimension, bold) {
  disableds.forEach((disabled) => {
    propsData.push({
      dimension,
      bold,
      disabled,
    });
  });
}
dimensions.forEach((d) => func1(d));

const EditModes = (props) => {
  const [localValue, setValue] = React.useState(props.value ?? 'asdfasdfa');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <div>
      <Wrapper>
        <EditMode multilineView {...props} value={localValue} onChange={handleChange}></EditMode>
      </Wrapper>
    </div>
  );
};
const EditModeTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <Separator />
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].disabled ? 'disabled true' : 'disabled false'},
            {propsData[key].bold ? 'bold true' : 'bold false'}
          </T>
          <EditModes {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default EditModeTest;
