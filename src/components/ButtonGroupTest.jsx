import React, { useState } from 'react';
import { ButtonGroup, ButtonGroupItem, Badge } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const Separator = styled.div`
  height: 40px;
`;
const dimensions = ['s', 'm', 'l'];
const appearances = ['primary', 'secondary'];

let propsData = [];
dimensions.forEach((dimension) => {
  appearances.forEach((appearance) => {
    propsData.push({
      dimension,
      appearance,
    });
    // });
  });
});
const list = [
  { title: 'Active button', content: '1' },
  { title: 'Default button', content: '2' },
  { title: 'Disabled button', content: '3', disabled: true },
];

const ButtonGroups = (props) => {
  const [active, setActive] = useState(0);
  const [activeS, setActiveS] = useState(0);

  return (
    <div>
      <ButtonGroup {...props}>
        {list.map((item, index) => {
          return (
            <ButtonGroupItem
              key={index}
              disabled={item.disabled}
              active={index === active}
              onClick={() => setActive(index)}
            >
              {item.title}
            </ButtonGroupItem>
          );
        })}
      </ButtonGroup>
      <Separator />
      <ButtonGroup {...props}>
        {list.map((item, index) => {
          return (
            <ButtonGroupItem
              key={index}
              disabled={item.disabled}
              active={index === activeS}
              onClick={() => setActiveS(index)}
            >
              <StarSolid
                width={20}
                style={{
                  marginRight: 8,
                }}
              />
              {item.title}
              <Badge
                style={{
                  marginLeft: 8,
                }}
              >
                6
              </Badge>
            </ButtonGroupItem>
          );
        })}
      </ButtonGroup>
      <Separator />
    </div>
  );
};

const ButtonGroupTest = () => {
  return propsData.map((prop) => {
    return (
      <>
        <ButtonGroups {...prop} />
      </>
    );
  });
};

export default ButtonGroupTest;
