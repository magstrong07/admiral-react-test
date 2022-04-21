import React from 'react';
import { Tooltip, Button } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';

const Wrapper = styled.div`
  display: block;
  > * {
    margin: 40px;
  }
  text-align: center;
`;

const TooltipTest = () => {
  return (
    <>
      <Wrapper>
        <Tooltip
          renderContent={() => (
            <div style={{ maxWidth: 400 }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
              Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum
            </div>
          )}
          tooltipPosition="bottom"
          id="test1"
        >
          <Button
            dimension="m"
            displayAsSquare
            aria-label="Delete"
            aria-describedby="test1"
            title={'Это title на кнопке'}
          >
            <DeleteOutline aria-hidden />
          </Button>
        </Tooltip>
        <Tooltip renderContent={() => 'Delete file'} withDelay id="test2">
          <Button dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test2">
            <DeleteOutline height={24} width={24} />
          </Button>
        </Tooltip>
      </Wrapper>
    </>
  );
};

export default TooltipTest;
