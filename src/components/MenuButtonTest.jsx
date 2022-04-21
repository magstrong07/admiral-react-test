import React from 'react';
import { MenuButton, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const WrapperButton = styled.div`
  display: block;
  columns: auto 4;
  > * {
    margin: 10px;
  }
`;
const Separator = styled.div`
  height: 40px;
`;
// останавливаем анимацию для скриншота
// const StyledMenuButton = styled(MenuButton)`
//   & svg {
//     animation-play-state: paused;
//   }
// `;

const dimension = ['s', 'm', 'l', 'xl'];
const appearance = ['primary', 'secondary', 'ghost'];

let propsData = [];

dimension.forEach((k) => {
  appearance.forEach((j) => {
    propsData.push({
      dimension: k,
      appearance: j,
    });
  });
});
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

const MenuButtons = (props) => {
  const [selected, setSelected] = React.useState(null);
  return (
    <WrapperButton>
      <MenuButton
        {...props}
        key={items.id}
        selected={selected}
        onChange={(id) => {
          console.log(`selected: ${id}`);
          setSelected(id);
        }}
        options={items}
        onOpen={() => console.log('open menu')}
        onClose={() => console.log('close menu')}
      >
        Test
      </MenuButton>
    </WrapperButton>
  );
};
const MenuButtonTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <WrapperButton>
          <MenuButtons {...prop} />
          <T font="Additional/L" as="div">
            {propsData[key].dimension},{propsData[key].appearance}
          </T>
          <Separator />
          <MenuButtons {...prop} disabled />
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, disabled,{''}
            {propsData[key].appearance}
          </T>
          <Separator />
          <MenuButtons {...prop} loading />
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, loading, {''} {propsData[key].appearance}
          </T>
          <Separator />
          <MenuButtons {...prop} skeleton />
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, skeleton,{''}
            {propsData[key].appearance}
          </T>
          <Separator />
        </WrapperButton>
      </>
    );
  });
};

export default MenuButtonTest;
