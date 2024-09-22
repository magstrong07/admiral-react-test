import * as React from 'react';
import { Table } from '@admiral-ds/react-ui';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: block;
  width: 800px;
  > * {
    margin: 20px;
  }
`;

const rowList = [
  {
    id: '0001',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0002',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0003',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0004',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0005',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0006',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0007',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0008',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0009',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0010',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0011',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0012',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0013',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0014',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0015',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0016',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    currency: 'RUB',
    rate: 2.5,
  },
];

const columnList = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
    width: '25%',
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: '25%',
  },
  {
    name: 'currency',
    title: 'Валюта',
    width: '25%',
  },
  {
    name: 'rate',
    title: 'Ставка',
    width: '25%',
  },
];
const Separator = styled.div`
  height: 70px;
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
  const [cols, setCols] = React.useState(columnList);
  const [rows, setRows] = React.useState(rowList);

  const handleResize = ({ name, width }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };
  const handleSelectionChange = (ids) => {
    const updRows = rows.map((row) => ({ ...row, selected: ids[row.id] }));
    setRows(updRows);
  };

  return (
    <Table
      {...props}
      rowList={rows}
      columnList={cols}
      onColumnResize={handleResize}
      style={{ height: '300px' }}
      displayRowExpansionColumn
      displayRowSelectionColumn
      onRowSelectionChange={handleSelectionChange}
      virtualScroll
    />
  );
};

const TableWithPercentsAndScrollTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          {propsData[key].dimension}, {propsData[key].greyHeader ? 'greyHeader true' : 'greyHeader false'}
          <Tables {...prop} />
          <Separator />
        </Wrapper>
      </>
    );
  });
};

export default TableWithPercentsAndScrollTest;
