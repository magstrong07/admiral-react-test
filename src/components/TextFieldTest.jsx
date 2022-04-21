import React from 'react';
import { TextField, Hint, HintDialog, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { ReactComponent as HelpSolidSVG } from '@admiral-ds/icons/build/service/HelpSolid.svg';

//TODO доделать
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
const HelpSolid = styled(HelpSolidSVG)`
  & *[fill^='#'] {
    fill: ${(p) => p.theme.color.text.secondary};
  }
  [data-focus-within] & *[fill^='#'] {
    fill: ${(props) => props.theme.color.basic.hover};
  }
`;

const InverseColor = styled(T)`
  color: ${(p) => p.theme.color.text.staticWhite};
`;

const InverseBackgroundHint = styled(Hint)`
  & ${HintDialog} {
    background-color: ${(p) => p.theme.color.background.inversion};
  }
`;

const TextFields = (props) => {
  const [localValue, setValue] = React.useState(props.value);
  const fieldRef = React.useRef(null);
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <>
      <TextField {...props} value={localValue} onChange={handleChange} />
      <TextField required label="Поле необходимо заполнить" />
      <TextField
        ref={fieldRef}
        label="Напишите сочинение на заданную тему"
        icons={
          <InverseBackgroundHint
            target={fieldRef}
            renderContent={() => (
              <InverseColor as="span" font="Additional/S">
                Тема сочинения: Как я использую компоненты?
              </InverseColor>
            )}
          >
            <HelpSolid />
          </InverseBackgroundHint>
        }
      />
    </>
  );
};

const TextFieldTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].status}
          </T>
          <TextFields {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default TextFieldTest;
