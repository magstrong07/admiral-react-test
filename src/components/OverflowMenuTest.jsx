import React from 'react';
import { OverflowMenu, DropDownItem, T } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  flex-wrap: wrap;
  > * {
    margin: 10px 10px 30px 50px;
  }
  justify-content: center;
  align-items: center;
`;
const items = [
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
    display: (
      <div style={{ display: 'flex', width: '115px', justifyContent: 'space-between', alignItems: 'center' }}>
        <MinusCircleOutline width={20} height={20} />
        Option three
      </div>
    ),
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

const OverflowMenuTest = (...args) => {
  const [selected, setSelected] = React.useState(null);
  return (
    <div>
      <Wrapper>
        <T font="Additional/L" as="div">
          dimension S
        </T>
        <OverflowMenu
          {...args}
          dimension="s"
          selected={selected}
          onChange={(id) => setSelected(id)}
          onOpen={() => console.log('open menu')}
          onClose={() => console.log('close menu')}
          aria-label="Overflow Menu component"
        >
          {items.map((item) => {
            return (
              <DropDownItem role="option" key={item.id} id={item.id} disabled={item.disabled}>
                {item.display}
              </DropDownItem>
            );
          })}
        </OverflowMenu>
        <T font="Additional/L" as="div">
          dimension M
        </T>
        <OverflowMenu
          {...args}
          dimension="s"
          selected={selected}
          onChange={(id) => setSelected(id)}
          onOpen={() => console.log('open menu')}
          onClose={() => console.log('close menu')}
          aria-label="Overflow Menu component"
        >
          {items.map((item) => {
            return (
              <DropDownItem role="option" key={item.id} id={item.id} disabled={item.disabled}>
                {item.display}
              </DropDownItem>
            );
          })}
        </OverflowMenu>
        <T font="Additional/L" as="div">
          dimension L
        </T>
        <OverflowMenu
          dimension="l"
          {...args}
          selected={selected}
          onChange={(id) => setSelected(id)}
          onOpen={() => console.log('open menu')}
          onClose={() => console.log('close menu')}
          aria-label="Overflow Menu component"
        >
          {items.map((item) => {
            return (
              <DropDownItem role="option" key={item.id} id={item.id} disabled={item.disabled}>
                {item.display}
              </DropDownItem>
            );
          })}
        </OverflowMenu>
      </Wrapper>
    </div>
  );
};

export default OverflowMenuTest;
