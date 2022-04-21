import React from 'react';
import { Hint, Button, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';

const Container = styled.div`
  padding: 14px;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  > * {
    margin: 8px 50px 50px 0;
  }
`;
const StyledButton = styled(Button)`
  padding: 4px;
`;

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

const HintTest = () => {
  return (
    <div>
      <Container>
        <T font="Additional/L" as="div">
          Dimension - l, click
        </T>
        <Hint anchorId="hint_base" renderContent={() => text} visibilityTrigger="click">
          <StyledButton dimension="l" aria-label="Additional information">
            <HelpOutline aria-hidden height={24} width={24} />
          </StyledButton>
        </Hint>
        <T font="Additional/L" as="div">
          Dimension - m, hover
        </T>
        <Hint anchorId="hint_base" renderContent={() => text} visibilityTrigger="hover">
          <StyledButton dimension="m" aria-label="Additional information">
            <HelpOutline aria-hidden height={24} width={24} />
          </StyledButton>
        </Hint>
        <T font="Additional/L" as="div">
          Dimension - s, hover
        </T>
        <Hint anchorId="hint_base" renderContent={() => text} visibilityTrigger="hover">
          <StyledButton dimension="s" aria-label="Additional information">
            <HelpOutline aria-hidden height={24} width={24} />
          </StyledButton>
        </Hint>
        <T font="Additional/L" as="div">
          Dimension - l, hover
        </T>
        <Hint anchorId="hint_base" renderContent={() => text} visibilityTrigger="hover">
          <StyledButton dimension="l" aria-label="Additional information">
            <HelpOutline aria-hidden height={24} width={24} />
          </StyledButton>
        </Hint>
      </Container>
    </div>
  );
};

export default HintTest;
