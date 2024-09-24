import * as React from 'react';
import { Table, OverflowMenu, RowAction, TooltipHoc, MenuItem } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';

const Wrapper = styled.div`
  display: block;
  width: 800px;
  > * {
    margin: 20px;
  }
`;

const StrToDate = (str) => {
  const res = str.split('.').reverse().join('-');
  return new Date(res);
};
const numberFormatter = new Intl.NumberFormat();
const TooltipedRowAction = TooltipHoc(RowAction);

const items = [
  {
    id: '1',
    display: 'Вывести дату сделки в локали ru',
  },
  {
    id: '2',
    display: 'Вывести дату сделки в локали en-US',
  },
  {
    id: '3',
    display: 'Вывести дату сделки в локали de-AT',
  },
];

const Menu = ({ row, onVisibilityChange }) => {
  const model = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options) => (
        <MenuItem dimension="m" {...options} key={item.id} role="option">
          {item.display}
        </MenuItem>
      ),
    }));
  }, []);

  return (
    <OverflowMenu
      onSelectItem={(id) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        if (id === '1') alert(StrToDate(row['transfer_date']).toLocaleString('ru', options));
        if (id === '2') alert(StrToDate(row['transfer_date']).toLocaleString('en-US', options));
        if (id === '3') alert(StrToDate(row['transfer_date']).toLocaleString('de-AT', options));
      }}
      onVisibilityChange={onVisibilityChange}
      aria-label="Overflow Menu component"
      dimension="m"
      isVertical
      items={model}
    />
  );
};

const rowList = [
  {
    id: '0001',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString('ru'),
    transfer_amount: numberFormatter.format(500_000),
    currency: 'RUB',
    rate: 2.5,
    overflowMenuRender: (row, onVisibilityChange) => <Menu row={row} onVisibilityChange={onVisibilityChange} />,
  },
  {
    id: '0002',
    transfer_type: 'МНО',
    transfer_date: new Date('2021-04-05').toLocaleDateString('ru'),
    transfer_amount: numberFormatter.format(32_500_000_000),
    currency: 'RUB',
    rate: 5.5,
    overflowMenuRender: (row, onVisibilityChange) => <Menu row={row} onVisibilityChange={onVisibilityChange} />,
  },
  {
    id: '0003',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-11-06').toLocaleDateString('ru'),
    transfer_amount: numberFormatter.format(189_000_000),
    currency: 'RUB',
    rate: 6,
    actionRender: () => (
      <TooltipedRowAction renderContent={() => `Delete`} onClick={() => console.log('row action happens')}>
        <DeleteOutline />
      </TooltipedRowAction>
    ),
  },
  {
    id: '0004',
    transfer_type: 'МНО',
    transfer_date: new Date('2010-12-09').toLocaleDateString('ru'),
    transfer_amount: numberFormatter.format(350_000_000),
    currency: 'RUB',
    rate: 1,
    actionRender: () => (
      <TooltipedRowAction renderContent={() => `Delete`} onClick={() => console.log('row action happens')}>
        <DeleteOutline />
      </TooltipedRowAction>
    ),
  },
  {
    id: '0005',
    transfer_type: 'МНО',
    transfer_date: new Date('2019-08-06').toLocaleDateString('ru'),
    transfer_amount: numberFormatter.format(60_000),
    currency: 'RUB',
    rate: 4,
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
      showRowsActions
    />
  );
};

const TableWithOverflowMenuTest = () => {
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

export default TableWithOverflowMenuTest;
