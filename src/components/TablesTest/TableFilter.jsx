import * as React from 'react';
import { Table, FieldSet, RadioButton, Button, DateField } from '@admiral-ds/react-ui';
import AcceptSolid from '@admiral-ds/icons/build/category/AcceptSolid.svg?react';
import styled from 'styled-components';
// const Wrapper = styled.div`
//   display: block;
//   width: 800px;
//   > * {
//     margin: 20px;
//   }
// `;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const numberFormatter = new Intl.NumberFormat();
const rowList = [
  {
    id: '0001',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: numberFormatter.format(500_000),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0002',
    transfer_type: 'МНО',
    transfer_date: new Date('2021-04-05').toLocaleDateString(),
    transfer_amount: numberFormatter.format(32_500_000_000),
    currency: 'RUB',
    rate: 5.5,
  },
  {
    id: '0003',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-11-06').toLocaleDateString(),
    transfer_amount: numberFormatter.format(189_000_000),
    currency: 'RUB',
    rate: 6,
  },
  {
    id: '0004',
    transfer_type: 'МНО',
    transfer_date: new Date('2010-12-09').toLocaleDateString(),
    transfer_amount: numberFormatter.format(350_000_000),
    currency: 'RUB',
    rate: 1,
  },
  {
    id: '0005',
    transfer_type: 'МНО',
    transfer_date: new Date('2019-08-06').toLocaleDateString(),
    transfer_amount: numberFormatter.format(60_000),
    currency: 'RUB',
    rate: 4,
  },
  {
    id: '0006',
    transfer_type: 'МНО',
    transfer_date: new Date('2021-04-05').toLocaleDateString(),
    transfer_amount: numberFormatter.format(700_000),
    currency: 'RUB',
    rate: 1,
  },
  {
    id: '0007',
    transfer_type: 'МНО',
    transfer_date: new Date('2019-12-01').toLocaleDateString(),
    transfer_amount: numberFormatter.format(500_000),
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

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 28px;
  & > button:first-child {
    margin-right: 8px;
  }
`;
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
  const [selected, setSelected] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState('');
  const [rows, setRows] = React.useState([...rowList]);
  const [columns, setCols] = React.useState([...columnList]);
  const [numFilterActive, setNumFilterActive] = React.useState(false);
  const [dateFilterActive, setDateFilterActive] = React.useState(false);

  const renderNumFilter = ({ closeMenu }, column) => (
    <Wrapper>
      <FieldSet
        legend="Варианты фильтрации:"
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      >
        <RadioButton value="1" name="test" defaultChecked={'1' === selected}>
          Сумма превышает миллиард
        </RadioButton>
        <RadioButton value="2" name="test" defaultChecked={'2' === selected}>
          Сумма меньше миллиарда
        </RadioButton>
      </FieldSet>
      <ButtonWrapper>
        <Button
          dimension="m"
          onClick={() => {
            closeMenu();
            setNumFilterActive(true);
            if (selected === '1') {
              const newRows = rowList.filter((row) => Number(row[column.name].replace(/\D/g, '')) > 1000000000);
              setRows(newRows);
            } else {
              const newRows = rowList.filter((row) => Number(row[column.name].replace(/\D/g, '')) < 1000000000);
              setRows(newRows);
            }
          }}
        >
          Применить
        </Button>
        <Button
          dimension="m"
          onClick={() => {
            closeMenu();
            setNumFilterActive(false);
            setSelected('');
            setRows([...rowList]);
          }}
        >
          Очистить
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );

  const renderDateFilter = ({ closeMenu }, column) => (
    <Wrapper>
      <DateField
        label="Выберите дату:"
        value={selectedDate}
        onChange={(e) => {
          setSelectedDate(e.target.value);
        }}
      />
      <ButtonWrapper>
        <Button
          dimension="m"
          onClick={() => {
            closeMenu();
            setDateFilterActive(true);
            const newRows = rowList.filter((row) => row[column.name] === selectedDate);
            setRows(newRows);
          }}
        >
          Применить
        </Button>
        <Button
          dimension="m"
          onClick={() => {
            closeMenu();
            setDateFilterActive(false);
            setSelectedDate('');
            setRows([...rowList]);
          }}
        >
          Очистить
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );

  const onFilterMenuClickOutside = ({ closeMenu }) => closeMenu();

  const cols = React.useMemo(
    () =>
      columns.map((col, index) => {
        if (index === 0) {
          return {
            ...col,
            renderFilter: () => (
              <Wrapper>Пример кастомизации иконки фильтра с помощью функции renderFilterIcon</Wrapper>
            ),
            renderFilterIcon: () => <AcceptSolid />,
            onFilterMenuClickOutside,
          };
        }
        if (index === 1) {
          return {
            ...col,
            isFilterActive: dateFilterActive,
            renderFilter: renderDateFilter,
            onFilterMenuClickOutside,
          };
        }
        if (index === 2) {
          return {
            ...col,
            isFilterActive: numFilterActive,
            renderFilter: renderNumFilter,
            onFilterMenuClose: () => console.log('filter menu close'),
            onFilterMenuOpen: () => console.log('filter menu open'),
            onFilterMenuClickOutside,
          };
        } else if (index === 4) {
          return {
            ...col,
            cellAlign: 'right',
            renderFilter: () => <Wrapper>Пример отображения фильтра в колонке с выравниванием по правому краю</Wrapper>,
            onFilterMenuClickOutside,
          };
        } else return col;
      }),
    [columns, selected, selectedDate, numFilterActive, dateFilterActive],
  );

  //===============================================

  const handleResize = ({ name, width }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return <Table {...props} columnList={cols} rowList={rows} onColumnResize={handleResize} />;
};

const TableFilterTest = () => {
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

export default TableFilterTest;
