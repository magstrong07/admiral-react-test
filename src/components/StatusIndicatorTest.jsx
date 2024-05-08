import { StatusIndicator, T } from '@admiral-ds/react-ui';
import styled, { css } from 'styled-components';
import CheckOutline from '@admiral-ds/icons/build/service/CheckOutline.svg?react';
import InfoSolid from '@admiral-ds/icons/build/service/InfoSolid.svg?react';
import ErrorSolid from '@admiral-ds/icons/build/service/ErrorSolid.svg?react';

const Wrapper = styled.div`
  display: block;
  > * {
    margin: 20px;
  }
`;
const Separator = styled.div`
  height: 40px;
`;
const OrangeColor = css`
  color: ${(p) => p.theme.color['Warning/Warning 50 Main']};
  > div {
    svg {
      path {
        fill: ${(p) => p.theme.color['Warning/Warning 50 Main']};
      }
    }
  }
`;

const StatusIndicatorTest = () => {
  return (
    <>
      <Wrapper>
        <T font="Additional/L" as="div">
          Dimension - M
        </T>
        <StatusIndicator dimension="m" text="P 16px/24 book" icon={<CheckOutline />} />
        <StatusIndicator dimension="m" text="P 16px/24 book" displayRight={false} icon={<ErrorSolid />} />
        <StatusIndicator cssMixin={OrangeColor} dimension="m" text="P 16px/24 book" icon={<InfoSolid />} />

        <Separator />
        <T font="Additional/L" as="div">
          Dimension - S
        </T>
        <StatusIndicator dimension="s" text="P 14px/20 book" icon={<InfoSolid />} />
        <StatusIndicator dimension="s" text="P 14px/20 book" displayRight={false} icon={<ErrorSolid />} />
        <StatusIndicator cssMixin={OrangeColor} dimension="s" text="P 14px/20 book" icon={<InfoSolid />} />
      </Wrapper>
    </>
  );
};

export default StatusIndicatorTest;
