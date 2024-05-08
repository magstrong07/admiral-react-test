import { useState, useRef } from 'react';
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
  const [visible, setVisible] = useState(false);
  const btnRef1 = useRef(null);
  const [visible1, setVisible1] = useState(false);

  return (
    <>
      <Wrapper>
        <Button ref={btnRef} dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test2">
          <DeleteOutline height={24} width={24} />
        </Button>
        <Tooltip
          targetRef={btnRef}
          visible={visible}
          onVisibilityChange={(visible) => setVisible(visible)}
          renderContent={() => 'Delete file'}
          id="test2"
        />
        <Button ref={btnRef1} dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test2">
          <DeleteOutline height={24} width={24} />
        </Button>
        <Tooltip
          targetRef={btnRef1}
          visible={visible1}
          onVisibilityChange={(visible) => setVisible1(visible)}
          renderContent={() => 'Delete file'}
          id="test3"
          tooltipPosition="right"
          withDelay
        />
      </Wrapper>
    </>
  );
};

export default TooltipTest;
