import { GroupActionsPane, PaneSeparator, typography, TextButton, Button } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import React, { useState } from 'react';
// import  ColumnsButton  from '@admiral-ds/components/GroupActionsPane/ColumnsButton';
// import { SettingsButton } from '#src/components/GroupActionsPane/SettingsButton';
// import { SearchBlock } from '#src/components/GroupActionsPane/SearchBlock';

import DiamondSolid from '@admiral-ds/icons/build/category/DiamondSolid.svg?react';
import VacationIcon from '@admiral-ds/icons/build/category/VacationSolid.svg?react';
import BurnIcon from '@admiral-ds/icons/build/category/BurnSolid.svg?react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SettingsMenu = styled.div`
  width: 320px;
  padding: 20px;
  ${typography['Body/Body 2 Long']}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 28px;
  & > button:first-child {
    margin-right: 8px;
  }
`;

const columns = [
  { id: 'transfer_type', title: 'Тип сделки', visible: true },
  { id: 'transfer_date', title: 'Дата сделки', visible: true },
  { id: 'transfer_amount', title: 'Сумма', visible: false },
  { id: 'currency', title: 'Валюта', visible: true },
  { id: 'rate', title: 'Ставка', visible: true },
  { id: 'status', title: 'Статус', visible: true },
  {
    id: 'custom',
    title: 'Очень длинное название поля, которое не помещается в выпадающий список по ширине',
    visible: false,
  },
];

const GroupActionsPaneTest = ({ ...props }) => {
  const dimension = 'm';
  const [columnsVisibility, setColumnsVisibility] = React.useState(columns);
  const [searchValue, setSearchValue] = React.useState('');

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchEnter = () => {
    console.log('Search input opened');
  };

  const handleSearchLeave = () => {
    console.log('Search input left');
  };

  const renderSettingsMenu = ({ closeMenu }) => (
    <SettingsMenu>
      Здесь могут быть опции с настройками и кнопки для применения/сбрасывания настроек
      <ButtonWrapper>
        <Button dimension="s" onClick={closeMenu}>
          Сохранить
        </Button>
        <Button dimension="s" onClick={closeMenu}>
          Очистить
        </Button>
      </ButtonWrapper>
    </SettingsMenu>
  );

  return (
    <Wrapper>
      <GroupActionsPane
        {...props}
        searchValue={searchValue}
        onChangeSearchValue={handleChangeSearchValue}
        columns={columnsVisibility}
        onColumnsChange={setColumnsVisibility}
        onSearchEnter={handleSearchEnter}
        onSearchLeave={handleSearchLeave}
        columnsButtonDropContainerStyle={{ dropContainerClassName: 'columnsButtonDropContainerClass' }}
        settingsButtonDropContainerStyle={{ dropContainerClassName: 'settingsButtonDropContainerClass' }}
        renderSettingsMenu={renderSettingsMenu}
      >
        <TextButton text={'Action 1'} dimension={dimension} iconStart={<DiamondSolid />} />
        <TextButton text={'Action 2'} dimension={dimension} iconStart={<VacationIcon />} />
        <TextButton text={'Action 3'} dimension={dimension} iconStart={<BurnIcon />} disabled />
        <PaneSeparator dimension={dimension} />
        <TextButton text={'Action 4'} dimension={dimension} iconStart={<DiamondSolid />} />
      </GroupActionsPane>
    </Wrapper>
  );
};

export default GroupActionsPaneTest;
