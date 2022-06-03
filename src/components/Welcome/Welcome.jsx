import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { T, Accordion, AccordionItem, PhoneNumberInput } from '@admiral-ds/react-ui';
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

const Welcome = (props) => {
  return (
    <>
      <T as="h2" font="Additional/L-bold">
        Welcome to admiral-ds
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
    </>
  );
};

export default Welcome;
