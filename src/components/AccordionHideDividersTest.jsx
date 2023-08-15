import React from 'react';
import { Accordion, AccordionItem } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div`
  height: 70px;
`;
// const Wrapper = styled.div`
//   width: 70px;
// `;

const AccordionHideDividersTest = () => {
  const Text = `
  Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей.
`;

  return (
    <div style={{ width: '580px' }}>
      <Accordion iconPosition="left" hideTopDivider>
        <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
        <AccordionItem title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem title="Третий пункт"> {Text} </AccordionItem>
      </Accordion>
      <Separator />
      <Accordion iconPosition="left" hideBottomDivider>
        <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
        <AccordionItem title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem title="Третий пункт"> {Text} </AccordionItem>
      </Accordion>
      <Separator />
      <Accordion iconPosition="left" hideTopDivider hideBottomDivider>
        <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
        <AccordionItem title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem title="Третий пункт"> {Text} </AccordionItem>
      </Accordion>
      <Separator />
    </div>
  );
};

export default AccordionHideDividersTest;
