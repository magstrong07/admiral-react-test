import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { T, Accordion, AccordionItem, Option, SelectField } from '@admiral-ds/react-ui';

import { links } from './links.ts';

links.sort();

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 10px 20px 10px 20px;
  }
  flex-direction: column;
  height: 400px;
`;
const OPTIONS_SIMPLE = [
  'teeext 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'texttt 6',
];

const Welcome = (props) => {
  const [selectValue, setSelectValue] = useState('');

  const onChange = (e) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };
  return (
    <>
      <T as="h2" font="Additional/L-bold">
        Welcome to admiral-ds start
      </T>

      <h3>Date : {new Date().toDateString()}</h3>
      <Accordion>
        <AccordionItem title="Components for testing">
          <Wrapper>
            {links.map((key, i) => (
              <Link appearance={'primary'} to={key} key={i}>
                {key.replace(/\\|\//g, '').charAt(0).toUpperCase() + key.slice(2)}
              </Link>
            ))}
          </Wrapper>
        </AccordionItem>
      </Accordion>
      <div style={{ height: '100px' }}></div>

      <SelectField
        {...props}
        mode="searchSelect"
        label="label"
        className="Search"
        value={selectValue}
        onChange={onChange}
        placeholder="Placeholder"
      >
        {OPTIONS_SIMPLE.map((option, ind) => (
          <Option key={option} value={option} disabled={ind === 4}>
            {option}
          </Option>
        ))}
      </SelectField>
    </>
  );
};

export default Welcome;
