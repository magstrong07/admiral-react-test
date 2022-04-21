// import React from 'react';
// import { Tooltip, typography } from '@admiral-ds/react-ui';
// import styled from 'styled-components';
// import metadata from '@admiral-ds/icons/metadata.json';
// import { ReactComponent as CopyOutline } from '@admiral-ds/icons/build/documents/CopyOutline.svg';
// import * as CardsIcons from './IconComponents-cards';
// import * as CategoryIcons from './IconComponents-category';
// import * as CommunicationIcons from './IconComponents-communication';
// import * as DocumentsIcons from './IconComponents-documents';
// import * as FinanceIcons from './IconComponents-finance';
// import * as FlagsIcons from './IconComponents-flags';
// import * as LocationIcons from './IconComponents-location';
// import * as PaymentIcons from './IconComponents-payment';
// import * as RedactIcons from './IconComponents-redact';
// import * as SecurityIcons from './IconComponents-security';
// import * as ServiceIcons from './IconComponents-service';
// import * as SystemIcons from './IconComponents-system';

// const Title = styled.div`
//   ${typography['Main/XS-bold']}
//   color: ${({ theme }) => theme.color.text.primary};
//   margin-bottom: 20px;
// `;

// const IconsWrapper = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   gap: 8px;
//   background: ${({ theme }) => theme.color.background.secondary};
//   padding: 32px 0;
//   border-radius: 8px;
//   & svg {
//     flex-shrink: 0;
//     *[fill^='#62'],
//     *[fill^='#2B'] {
//       fill: ${({ theme }) => theme.color.text.secondary};
//     }
//   }
//   justify-content: center;
// `;

// const CategoryWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 40px;
// `;

// const IconCard = styled.div`
//   display: flex;
//   flex-shrink: 0;
//   flex-direction: column;
//   align-items: center;
//   width: 200px;
//   height: 100px;
// `;

// const IconName = styled.div`
//   margin-top: 16px;
//   ${typography['Caption/XS']}
//   color: ${({ theme }) => theme.color.text.secondary};
//   display: flex;
//   gap: 8px;
// `;

// const CopyButton = (text) => {
//   const copyToClipboard = () => {
//     const el = document.createElement('textarea');
//     el.value = text;
//     el.setAttribute('readonly', '');
//     el.style.position = 'absolute';
//     el.style.left = '-9999px';
//     document.body.appendChild(el);
//     el.select();
//     document.execCommand('copy');
//     document.body.removeChild(el);
//   };
//   return (
//     <Tooltip renderContent={() => 'Копировать импорт'}>
//       <CopyOutline width={16} height={16} onClick={copyToClipboard} />
//     </Tooltip>
//   );
// };

// const Category = (label, children) => {
//   return (
//     <CategoryWrapper>
//       <Title>{label}</Title>
//       <IconsWrapper>{children}</IconsWrapper>
//     </CategoryWrapper>
//   );
// };

// const getIcons = ({ category, pack }) => {
//   return metadata[category].map(({ iconMetaInfo }) => ({
//     ...iconMetaInfo,
//     Component: pack[iconMetaInfo.name],
//   }));
// };

// const CATEGORIES = [
//   { label: 'Cards', value: 'cards', icons: getIcons('cards', CardsIcons) },
//   { label: 'Category', value: 'category', icons: getIcons('category', CategoryIcons) },
//   { label: 'Communication', value: 'communication', icons: getIcons('communication', CommunicationIcons) },
//   { label: 'Documents', value: 'documents', icons: getIcons('documents', DocumentsIcons) },
//   { label: 'Finance', value: 'finance', icons: getIcons('finance', FinanceIcons) },
//   { label: 'Flags', value: 'flags', icons: getIcons('flags', FlagsIcons) },
//   { label: 'Payment', value: 'payment', icons: getIcons('payment', PaymentIcons) },
//   { label: 'Redact', value: 'redact', icons: getIcons('redact', RedactIcons) },
//   { label: 'Location', value: 'location', icons: getIcons('location', LocationIcons) },
//   { label: 'Security', value: 'security', icons: getIcons('security', SecurityIcons) },
//   { label: 'Service', value: 'service', icons: getIcons('service', ServiceIcons) },
//   { label: 'System', value: 'system', icons: getIcons('system', SystemIcons) },
// ];

// const IconsTest = () => {
//   return (
//     <div>
//       <Title style={{ fontWeight: 400 }}>
//         Иконки — гафические символы используемые для представления действий, идей или объектов. Позволяют быстро
//         передавать смысл отображаемой информации или привлекать к ней дополнительное внимание.
//       </Title>
//       {CATEGORIES.map(({ label, icons }) => (
//         <Category key={label} label={label}>
//           {icons.map(({ Component, name, path }, index) => (
//             <IconCard key={name + index}>
//               <Component width={24} height={24} />
//               <IconName>
//                 {name}
//                 <CopyButton text={`import { ReactComponent as ${name} } from '@admiral-ds/icons/${path}';`} />
//               </IconName>
//             </IconCard>
//           ))}
//         </Category>
//       ))}
//     </div>
//   );
// };

// export default IconsTest;
