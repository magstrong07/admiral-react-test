import { AvatarGroup, T } from '@admiral-ds/react-ui';
import { SystemPersonSolid } from '@admiral-ds/icons';
import styled from 'styled-components';

const imageURL = 'https://github.com/DrUNE.png?size=100';
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 20px;
  }
`;

const dimensions = ['s', 'm', 'l', 'xs', 'xl'];

const appearances = ['light', 'white', 'grey', 'dark'];

const propsData = [];

function func1(dimension) {
  appearances.forEach((a) => func2(dimension, a));
}
function func2(dimension, appearance) {
  propsData.push({
    dimension,
    appearance,
  });
}
dimensions.forEach((d) => func1(d));

const items = [
  { userName: 'Lena Ivanova', icon: <SystemPersonSolid />, status: 'warn', id: '1' },
  { userName: 'Petr Lesov', icon: <SystemPersonSolid />, status: 'warn', id: '2' },
  { userName: 'Agata Petrova', icon: <SystemPersonSolid />, status: 'warn', id: '3' },
  { userName: 'Arina Leskova', icon: <SystemPersonSolid />, status: 'warn', id: '4' },
  { userName: 'Rita', appearance: 'dark', status: 'danger', id: '5' },
  { userName: 'Drune', icon: <SystemPersonSolid />, href: imageURL, status: 'warn', id: '6' },
  { userName: 'Lisa Kotova', icon: <SystemPersonSolid />, status: 'warn', id: '7' },
  { userName: 'Ирина Глушко', icon: <SystemPersonSolid />, status: 'warn', id: '8' },
  { userName: 'Rosa Farrel', icon: <SystemPersonSolid />, status: 'warn', id: '9' },
  { userName: 'Tom Hidlton', appearance: 'dark', status: 'danger', id: '10' },
];

const AvatarGroupTest = () => {
  return propsData.map((prop, key) => {
    console.log(propsData);
    return (
      <Wrapper key={`key_${key}`}>
        <T font="Additional/L" as="div">
          {propsData[key].dimension}, {propsData[key].appearance}
        </T>
        <AvatarGroup {...prop} items={items} />
      </Wrapper>
    );
  });
};

export default AvatarGroupTest;
