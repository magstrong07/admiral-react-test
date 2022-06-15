import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { T, Accordion, AccordionItem, MenuButton, MenuItem } from '@admiral-ds/react-ui';

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
export const items = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: 'Option two',
  },
  {
    id: '3',
    display: 'Option three',
  },
  {
    id: '4',
    display: 'Option four',
  },
  {
    id: '5',
    display: 'Option five',
    disabled: true,
  },
  {
    id: '6',
    display: 'Option six',
  },
  {
    id: '7',
    display: 'Option seven',
  },
];

const Welcome = (args) => {
  const [selected, setSelected] = React.useState(undefined);
  const model = React.useMemo(() => {
    return args.items.map((item) => ({
      id: item.id,
      render: (items) => (
        <MenuItem dimension={args.dimension === 'xl' ? 'l' : args.dimension} {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [args.items]);
  console.log(args);
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
      <div style={{ height: '100px' }}></div>
      <MenuButton
        {...args}
        selected={selected}
        onChange={(id) => {
          console.log(`selected: ${id}`);
          setSelected(id);
        }}
        items={model}
        onOpen={() => console.log('open menu')}
        onClose={() => console.log('close menu')}
      >
        test
      </MenuButton>
    </>
  );
};

export default Welcome;
