import { FloatingButton, FloatingButtonMenu } from '@admiral-ds/react-ui';
import styled from 'styled-components';

import EmailOutline from '@admiral-ds/icons/build/system/EmailOutline.svg?react';
import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';
import PrintOutline from '@admiral-ds/icons/build/system/PrintOutline.svg?react';

const Layout = styled.div`
  width: 100%;
  height: 100px;
`;
const FloatingButtonTest = ({ ...props }) => {
  return (
    <Layout>
      <FloatingButtonMenu
        icon={<EmailOutline />}
        onOpenChange={(isOpen) => console.log(isOpen ? 'Open menu' : 'Close menu')}
        {...props}
      >
        <FloatingButton appearance="secondary">
          <DeleteOutline />
        </FloatingButton>
        <FloatingButton appearance="secondary">
          <PrintOutline />
        </FloatingButton>
      </FloatingButtonMenu>
    </Layout>
  );
};
export default FloatingButtonTest;
