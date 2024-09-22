import { Table, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { rowList, columnList } from './data.tsx';
import * as React from 'react';

const Wrapper = styled.div`
  display: block;
  width: 800px;
  > * {
    margin: 20px;
  }
`;

const dimensions = ['s', 'm', 'l', 'xl'];
const greyHeader = [false, true];
const [cols, setCols] = React.useState(columnList);
const handleResize = ({ name, width }) => {
  const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
  setCols(newCols);
};

let propsData = [];

function func1(dimension) {
  greyHeader.forEach((greyHeader) => {
    propsData.push({
      dimension,
      greyHeader,
    });
  });
}
dimensions.forEach((d) => func1(d));

const Tables = (props) => {
  return (
    <>
      <Table {...props} rowList={rowList} columnList={columnList} onColumnResize={handleResize} />
    </>
  );
};

const TableTest = () => {
  return propsData.map((prop, key) => {
    console.log(propsData);
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].greyHeader ? 'greyHeader true' : 'greyHeader false'}
          </T>
          <Tables {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default TableTest;
