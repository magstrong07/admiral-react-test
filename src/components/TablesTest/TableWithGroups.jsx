import * as React from 'react';
import { Table, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: block;
  width: 800px;
  > * {
    margin: 20px;
  }
`;
const AmountCell = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;

  &[data-disabled='true'] {
    & > * {
      color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
`;
const numberFormatter = new Intl.NumberFormat();

const rowList = [
  {
    id: '0001',
    expanded: false,
    groupTitle: 'First group name',
    groupRows: ['0002', '0003'],
  },
  {
    id: '0002',
    transfer_type: 'GR1',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0003',
    transfer_type: 'GR1',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0004',
    expanded: true,
    groupTitle: 'Second group name',
    groupRows: ['0005', '0006'],
  },
  {
    id: '0005',
    transfer_type: 'GR2',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0006',
    transfer_type: 'GR2',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0007',
    expanded: true,
    groupTitle: 'Third group name',
    groupRows: ['0008'],
  },
  {
    id: '0008',
    transfer_type: 'GR3',
    transfer_date: new Date('2020-08-25').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(100)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
];

const columnList = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: 150,
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
    width: 170,
  },
  {
    name: 'currency',
    title: 'Валюта',
  },
  {
    name: 'rate',
    title: 'Ставка',
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
  const handleExpansionChange = (ids) => {
    const updRows = rows.map((row) => ({ ...row, expanded: ids[row.id] }));
    setRows(updRows);
  };

  return (
    <Table
      {...props}
      rowList={rows}
      columnList={cols}
      onColumnResize={handleResize}
      onRowExpansionChange={handleExpansionChange}
      displayRowSelectionColumn
      onRowSelectionChange={handleSelectionChange}
      displayRowExpansionColumn
    />
  );
};

const TableWithGroupsTest = () => {
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

export default TableWithGroupsTest;
