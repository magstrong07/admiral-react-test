import React, { useRef } from 'react';
import { Tooltip, Button } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';

const Wrapper = styled.div`
  display: block;
  > * {
    margin: 40px;
  }
  text-align: center;
`;

const TooltipTest = () => {
  const btnRef = useRef(null);
  const btnRef1 = useRef(null);
  const [visible, setVisible] = React.useState(true);
  const [visible1, setVisible1] = React.useState(false);

  React.useEffect(() => {
    function show() {
      setVisible(true);
    }
    function hide() {
      setVisible(false);
    }
    const button = btnRef.current;
    if (button) {
      button.addEventListener('mouseenter', show);
      button.addEventListener('focus', show);
      button.addEventListener('mouseleave', hide);
      button.addEventListener('blur', hide);
      return () => {
        button.removeEventListener('mouseenter', show);
        button.removeEventListener('focus', show);
        button.removeEventListener('mouseleave', hide);
        button.removeEventListener('blur', hide);
      };
    }
  }, [setVisible]);
  React.useEffect(() => {
    function show() {
      setVisible1(true);
    }
    function hide() {
      setVisible1(false);
    }
    const button = btnRef1.current;
    if (button) {
      button.addEventListener('mouseenter', show);
      button.addEventListener('focus', show);
      button.addEventListener('mouseleave', hide);
      button.addEventListener('blur', hide);
      return () => {
        button.removeEventListener('mouseenter', show);
        button.removeEventListener('focus', show);
        button.removeEventListener('mouseleave', hide);
        button.removeEventListener('blur', hide);
      };
    }
  }, [setVisible1]);
  return (
    <>
      <Wrapper>
        <Button ref={btnRef} dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test2">
          <DeleteOutline height={24} width={24} />
        </Button>
        {visible && (
          <Tooltip
            targetElement={btnRef.current}
            renderContent={() => 'Delete file'}
            id="test2"
            tooltipPosition="right"
          />
        )}

        <Button ref={btnRef1} dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test2">
          <DeleteOutline height={24} width={24} />
        </Button>
        {visible1 && (
          <Tooltip
            targetElement={btnRef1.current}
            renderContent={() => 'Delete file'}
            id="test3"
            tooltipPosition="right"
          />
        )}
      </Wrapper>
    </>
  );
};

export default TooltipTest;
