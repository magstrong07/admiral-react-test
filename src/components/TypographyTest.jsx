import React from 'react';
import { T } from '@admiral-ds/react-ui';
import styled, { css } from 'styled-components';

const WrapperT = styled.div`
  display: block;
  > * {
    margin: 20px;
  }
`;
const BlueText = styled(T)`
  color: ${(p) => p.theme.color.basic.primary};
`;
const CustomParagraph = styled(T)`
  color: ${(p) => p.theme.color.basic.tertiary};
`;

const OrangeColor = css`
  color: ${(p) => p.theme.color.status.warn};
`;

const typographys = [
  'Main/XXL',
  'Main/XL',
  'Main/L',
  'Main/M',
  'Main/S',
  'Main/XS-bold',
  'Main/XS',
  'Additional/L-bold',
  'Additional/L',
  'Additional/M',
  'Additional/S',
  'Additional/S-bold',
  'Additional/XS',
  'Button/M',
  'Button/S',
  'Caption/XS',
];

const TTest = (props, index) => {
  console.log(props, index);
  return (
    <div>
      <WrapperT>
        {typographys.map((typographys) => {
          return (
            <>
              <T key={typographys} font={typographys}>
                {typographys}
              </T>
              <BlueText as={'a'} href={'#'} font={typographys}>
                {typographys} link Primary
              </BlueText>
              <CustomParagraph font={typographys} as="p">
                {typographys} p Tertiary
              </CustomParagraph>
              <T font={typographys} as="h3" cssMixin={OrangeColor}>
                {typographys} h3 Orange
              </T>
            </>
          );
        })}
      </WrapperT>
    </div>
  );
};

export default TTest;
