import React, { useState } from 'react';
import { Table, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { rowList, columnListWithWidth } from './data.tsx';

const Wrapper = styled.div`
  display: block;
  > * {
    margin: 20px;
  }
`;

const dimensions = ['s', 'm', 'l', 'xl'];
const greyHeader = [false, true];

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
  const [rows, setRows] = useState(rowList);
  const handleSelectionChange = (ids) => {
    const updRows = rows.map((row) => ({ ...row, selected: ids[row.id] }));
    setRows(updRows);
  };

  return (
    <>
      <Table
        {...props}
        rowList={rows}
        columnList={columnListWithWidth}
        displayRowSelectionColumn="true"
        onRowSelectionChange={handleSelectionChange}
      />
    </>
  );
};

const TableWithCheckBoxTest = () => {
  return propsData.map((prop, key) => {
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

export default TableWithCheckBoxTest;
