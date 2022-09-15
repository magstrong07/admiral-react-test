import React, { useState } from 'react';
import { InputEx } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 300px;
  > * {
    margin: 20px;
  }
`;

const InputExTest = (props) => {
  const [localValue, setValue] = useState(
    'Работает! очень много текста Работает! очень много текста Работает! очень много текста Работает! очень много текста Работает! очень много текстаРаботает! очень много текста ',
  );
  const [localValue1, setValue1] = useState('Тоже работает!');

  const [prefixValue, setPrefixValue] = useState('prefix');
  const [suffixValue, setSuffixValue] = useState('suffix много текста');
  const cleanProps = Object.keys(props).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {});
  const handleChange = (e) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  const handleChange1 = (e) => {
    const inputValue = e.currentTarget.value;
    setValue1(inputValue);
    props.onChange?.(e);
  };
  const PREFIX_OPTIONS = ['one', 'two', 'three'];
  const SUFFIX_OPTIONS = ['four', 'five', 'six'];

  return (
    <>
      <Wrapper>
        <InputEx {...cleanProps} value={localValue} onChange={handleChange} status={'success'}></InputEx>
        {/* <InputEx
          {...cleanProps}
          value={localValue1}
          onChange={handleChange1}
          prefixValue={prefixValue}
          suffixValue={suffixValue}
          prefixValueList={PREFIX_OPTIONS}
          suffixValueList={SUFFIX_OPTIONS}
          onPrefixValueChange={setPrefixValue}
          onSuffixValueChange={setSuffixValue}
          displayClearIcon
          placeholder="placeholder"
          status="error"
        ></InputEx>
        <InputEx
          {...cleanProps}
          value={localValue1}
          onChange={handleChange1}
          prefixValue={prefixValue}
          suffixValue={suffixValue}
          prefixValueList={PREFIX_OPTIONS}
          suffixValueList={SUFFIX_OPTIONS}
          onPrefixValueChange={setPrefixValue}
          onSuffixValueChange={setSuffixValue}
          displayClearIcon
          placeholder="placeholder"
          status="error"
          dimension="s"
        ></InputEx> */}
        <InputEx
          {...cleanProps}
          value={localValue1}
          onChange={handleChange1}
          prefixValue={prefixValue}
          suffixValue={suffixValue}
          prefixValueList={PREFIX_OPTIONS}
          suffixValueList={SUFFIX_OPTIONS}
          onPrefixValueChange={setPrefixValue}
          onSuffixValueChange={setSuffixValue}
          displayClearIcon
          placeholder="placeholder"
          dimension="xl"
        ></InputEx>
      </Wrapper>
    </>
  );
};

export default InputExTest;
