import React, { useState, Fragment } from 'react';
import { Select, Tooltip, Option } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';

const Wrapper = styled.div`
  display: block;
  > * {
    margin: 20px;
  }
  width: 800px;
`;

const WrapperContent = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  & svg {
    margin-right: 10px;
  }
`;
const StyledLabel = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const WrapperInputValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const StyledSelect = styled(Select)`
  width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 auto;
`;
const StyledOption = styled(Option)`
  & > * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const dimensions = ['s', 'm', 'xl'];
const disableds = [false, true];
const statused = [undefined, 'success', 'error'];

let propsData = [];
const options = [
  { id: 1, label: 'Option one', value: '1' },
  { id: 2, label: 'Option two', value: '2' },
  { id: 3, label: 'Option three', value: '3' },
  { id: 4, label: 'Option four', value: '4' },
  { id: 5, label: 'Option five', value: '5' },
  { id: 6, label: 'Option six', value: '6' },
  { id: 7, label: 'Option seven', value: '7' },
  {
    id: 8,
    label:
      'Option eight long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text',
    value: '8',
  },
];
const optionsOne = [
  { id: 1, label: 'Option one', value: '1', content: <StarSolid width={24} /> },
  { id: 2, label: 'Option two', value: '2', content: <CardSolid width={24} /> },
  { id: 3, label: 'Option three', value: '3', content: <CardSolid width={24} /> },
  { id: 4, label: 'Option four', value: '4', content: <CardSolid width={24} /> },
  { id: 5, label: 'Option five', value: '5', content: <CardSolid width={24} /> },
  { id: 6, label: 'Option six', value: '6', content: <StarSolid width={24} /> },
  { id: 7, label: 'Disabled Option seven', value: '7', content: <StarSolid width={24} />, disabled: true },
  { id: 11, label: '?????????? 1', value: '8', content: <StarSolid width={24} /> },
  { id: 21, label: '?????????? 2', value: '9', content: <CardSolid width={24} /> },
  { id: 31, label: '?????????? 3', value: '10', content: <CardSolid width={24} /> },
  { id: 41, label: '?????????? 4', value: '11', content: <CardSolid width={24} /> },
  { id: 51, label: '?????????? 5', value: '12', content: <CardSolid width={24} /> },
  { id: 61, label: '?????????? 6', value: '13', content: <StarSolid width={24} /> },
  { id: 71, label: '?????????? 7', value: '14', content: <StarSolid width={24} /> },
];
const optionsTwo = [
  { id: 1, label: 'Option one long text long text', value: '1' },
  { id: 2, label: 'Option two long text long text ', value: '2' },
  { id: 3, label: 'Option three long text long text', value: '3' },
  {
    id: 4,
    label: 'Option four long text long text long text long text long text long text long text long text',
    value: '4',
  },
  { id: 5, label: 'Option five long text long text', value: '5' },
  { id: 6, label: 'Option six long text long text', value: '6' },
  { id: 7, label: 'Option seven long text long text', value: '7' },
];

function func1(dimension) {
  disableds.forEach((a) => func2(dimension, a));
}
function func2(dimension, disabled) {
  statused.forEach((status) => {
    propsData.push({
      dimension,
      disabled,
      status,
    });
  });
}
dimensions.forEach((d) => func1(d));

const Selects = (props) => {
  const [selectValue, setValue] = useState('');
  const [selectValue1, setValue1] = useState('');
  const [selectValue2, setValue2] = useState('');
  const [selectValue3, setValue3] = useState('');

  const handleChange = (e) => {
    console.log(e);
    setValue(e.target.value);
  };
  const renderValue = (value) => {
    const content = [...category[0].content, ...category[1].content].filter((d) => d.value?.toString() === value)[0];
    return (
      <WrapperInputValue>
        <StyledLabel>{content.label}</StyledLabel>
        {content.icon}
      </WrapperInputValue>
    );
  };

  const iconWidth = props.dimension === 's' ? 24 : 30;
  const category = [
    {
      name: '?????????????????? 1',
      id: '1',
      content: [
        {
          id: '2',
          label: '?????????? ?????????? /****45',
          value: '1',
          icon: <CardSolid width={iconWidth} height={iconWidth} />,
          subText: '???????????????????????????? ??????????',
        },
        {
          id: '3',
          label: '?????????? ?????????? /****75',
          value: '2',
          icon: <CardSolid width={iconWidth} height={iconWidth} />,
          subText: '???????????????????????????? ??????????',
        },
        {
          id: '4',
          label: '?????????? ?????????? /****22',
          value: '3',
          icon: <CardSolid width={iconWidth} height={iconWidth} />,
          subText: '???????????????????????????? ??????????',
        },
        {
          id: '5',
          label: '?????????? ?????????? /****33',
          value: '4',
          icon: <CardSolid width={iconWidth} height={iconWidth} />,
          subText: '???????????????????????????? ??????????',
        },
      ],
    },
    {
      name: '?????????????????? 2',
      id: '9',
      content: [
        {
          id: '10',
          label: '?????????? ?????????? /****21',
          value: '5',
          icon: <StarSolid width={iconWidth} height={iconWidth} />,
          subText: '???????????????????????????? ??????????',
        },
        {
          id: '11',
          label: '?????????? ?????????? /****35',
          value: '6',
          icon: <StarSolid width={iconWidth} height={iconWidth} />,
          subText: '???????????????????????????? ??????????',
        },
        {
          id: '12',
          label: '?????????? ?????????? /****39',
          value: '7',
          subText: '???????????????????????????? ??????????',
          icon: <StarSolid width={iconWidth} height={iconWidth} />,
        },
        {
          id: '13',
          label: '?????????? ?????????? /****41',
          value: '8',
          icon: <StarSolid width={iconWidth} height={iconWidth} />,
          subText: '???????????????????????????? ??????????',
        },
      ],
    },
  ];

  return (
    <>
      <Wrapper>
        {/* ===============================================1==================================================         */}

        <Select {...props} value={selectValue} placeholder={'Placeholder 1'} onChange={handleChange}>
          {options.map((item) => {
            return (
              <Option role="option" value={item.label} key={item.id}>
                {item.label}
              </Option>
            );
          })}
        </Select>
        {/* ===============================================2==================================================         */}
        <Select
          {...props}
          value={selectValue1}
          placeholder={'Placeholder 2'}
          onChange={(e) => {
            setValue1(e.target.value);
          }}
          renderInputValue={(currentValue) => (
            <WrapperContent>
              {optionsOne.filter((d) => d.value === currentValue)[0]?.content}
              <StyledLabel>{optionsOne.filter((d) => d.value === currentValue)[0]?.label}</StyledLabel>
            </WrapperContent>
          )}
        >
          {optionsOne.map((item) => {
            return (
              <Option
                aria-selected={selectValue1 === item.value}
                key={item.id}
                role="option"
                value={item.value}
                disabled={item.disabled}
              >
                <WrapperContent>
                  {item.content} {item.label}
                </WrapperContent>
              </Option>
            );
          })}
        </Select>
        {/* ===============================================3==================================================         */}
        <Select
          {...props}
          value={selectValue2}
          renderInputValue={renderValue}
          placeholder={'Placeholder 3'}
          onChange={(e) => {
            setValue2(e.target.value);
          }}
        >
          {category.map((item, index) => {
            return (
              <Fragment key={index}>
                <Option disabled key={item.id}>
                  {item.name}
                </Option>
                {item.content.map((subCategory) => {
                  return (
                    <Option
                      tabIndex={0}
                      role="option"
                      key={subCategory.id}
                      value={subCategory.value}
                      id={subCategory.id}
                    >
                      <div style={{ width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          {subCategory.label} {subCategory.icon}
                        </div>
                        {subCategory.subText}
                      </div>
                    </Option>
                  );
                })}
              </Fragment>
            );
          })}
        </Select>
        {/* ===============================================4==================================================         */}
        <StyledSelect
          {...props}
          placeholder={'Placeholder 4'}
          renderInputValue={(selectValue3) => {
            return (
              <Tooltip renderContent={() => selectValue3}>
                <div>{selectValue3}</div>
              </Tooltip>
            );
          }}
          value={selectValue3}
          onChange={(e) => {
            setValue3(e.target.value);
          }}
        >
          {optionsTwo.map((item) => {
            return (
              <StyledOption role="option" value={item.label} key={item.id}>
                <Tooltip renderContent={() => item.label}>{item.label}</Tooltip>
              </StyledOption>
            );
          })}
        </StyledSelect>
      </Wrapper>
    </>
  );
};
const SelectTest = () => {
  return propsData.map((prop) => {
    return (
      <>
        <Wrapper>
          <Selects {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default SelectTest;
