import { useState } from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Toggle, LIGHT_THEME, DARK_THEME } from '@admiral-ds/react-ui';

import AccordionHideDividersTest from './components/AccordionHideDividers.jsx';
import AccordionTest from './components/Accordion.jsx';
import AccordionTestFormRadio from './components/Forms/AccordionForm.jsx';
import AvatarGroupTest from './components/AvatarGroup.jsx';
import AvatarTest from './components/Avatar.jsx';
import BadgeTest from './components/Badge.jsx';
import BreadcrumbsTest from './components/Breadcrumbs.jsx';
import ButtonTest from './components/Button.jsx';
import CalendarTest from './components/Calendar.jsx';
import CheckBoxFieldTestHookForm from './components/Forms/CheckBoxFieldForms.jsx';
import CheckboxCompositeGroupTest from './components/CheckboxCompositeGroup.jsx';
import CheckboxFieldTest from './components/CheckBoxField.jsx';
import ChipsTest from './components/Chips.jsx';
import ContentSwitcherTest from './components/ContentSwitcher.jsx';
import DateFieldTest from './components/DateField.jsx';
import DateFieldTestHookForm from './components/Forms/DateFieldForms.jsx';
import DateInputTest from './components/DateInput.jsx';
import DateInputTestHookForm from './components/Forms/DateInputForms.jsx';
import DropMenuTest from './components/DropMenu.jsx';
import EditModeAreaTest from './components/EditModeArea.jsx';
import EditModeFieldTest from './components/EditModeField.jsx';
import EditModeFieldsForms from './components/Forms/EditModeFieldForms.jsx';
import EditModeTest from './components/EditMode.jsx';
import FieldSetRadioTest from './components/FieldSetRadio.jsx';
import FieldSetTest from './components/FieldSet.jsx';
import FileInputTest from './components/FileInput.jsx';
import FloatingButtonTest from './components/FloatingButton.jsx';
import HintTest from './components/Hint.jsx';
import IconButtonTest from './components/IconButton.jsx';
// import IconsTest from './icons/IconsTest.jsx';
import InputExTest from './components/InputEx.jsx';
import InputFieldTest from './components/InputField.jsx';
import LinkTest from './components/Link.jsx';
import MenuButtonTest, { items } from './components/MenuButton.jsx';
import ModalTest from './components/Modal.jsx';
import MultiButtonTest from './components/MultiButton.jsx';
import MultiSelectTest from './components/Select/MultiSelect.jsx';
import NotificationTest from './components/Notification.jsx';
import NumberInputFieldTest from './components/NumberInputField.jsx';
import NumberInputTest from './components/NumberInput.jsx';
import OverflowMenuTest from './components/OverflowMenu.jsx';
import PaginationOneTest from './components/PaginationOne.jsx';
import PaginationSimpleTest from './components/PaginationSimple.jsx';
import PaginationTwoTest from './components/PaginationTwo.jsx';
import PhoneInputFieldTest from './components/PhoneInputField.jsx';
import PhoneNumberInputTest from './components/PhoneNumberInput.jsx';
import ProgressHeaderTest from './components/ProgressHeader.jsx';
import ProgressPageTest from './components/ProgressPage.jsx';
import ProgressStepperTest from './components/ProgressStepper.jsx';
import RadioButtonTest from './components/RadioButton.jsx';
import SearchSelectFieldTest from './components/SearchSelect/SearchSelectField.jsx';
import SelectFieldTest from './components/Select/SelectField.jsx';
import SelectTest from './components/Select/Select.jsx';
// import SelectTreeTest from './components/SelectTreeTest/SelectTree.jsx';
import SliderInputFieldTest from './components/SliderInputField.jsx';
import SliderInputTest from './components/SliderInput.jsx';
import SliderRangeFieldTest from './components/SliderRangeField.jsx';
import SliderRangeTest from './components/SliderRange.jsx';
import SliderTest from './components/Slider.jsx';
import SpinnerTest from './components/Spinner.jsx';
import StatusIndicatorTest from './components/StatusIndicator.jsx';
import StepperTest from './components/Stepper.jsx';
import SuggestFieldTest from './components/SuggestField.jsx';
import SuggestInputTest from './components/SuggestInput.jsx';
import TTest from './components/Typography.jsx';
import TabMenuTest from './components/TabMenu.jsx';
import TableColumnOrientationTest from './components/TablesTest/TableColumnOrientation.jsx';
import TableTest from './components/TablesTest/TableBase.jsx';
import TableWidthColumnTest from './components/TablesTest/TableWidthColumn.jsx';
import TableWithCheckboxTest from './components/TablesTest/TableWithCheckBox.jsx';
import TableWithPercentsTest from './components/TablesTest/TableColumnWidthPercents.jsx';
import TableWithPercentsAndScrollTest from './components/TablesTest/TableWithPercentsAndScroll.jsx';
import TableWithPercentsAndStatusTest from './components/TablesTest/TableColumnWidthPercentsStatus.jsx';
// import TableWithPercentsTest from './components/TablesTest/TableColumnWidthPercents.jsx';
import TableWithGroupsTest from './components/TablesTest/TableWithGroups.jsx';
import TableCustomCellTest from './components/TablesTest/TableCustomCell.jsx';

import TagMenuTest from './components/TagMenu.jsx';
import TagsTest from './components/Tags.jsx';
import TextAreaTest from './components/TextArea.jsx';
import TextButtonTest from './components/TextButton.jsx';
import TextFieldTest from './components/TextField.jsx';
import TextInputTest from './components/TextInput.jsx';
import TimeFieldTest from './components/TimeField.jsx';
import TimeInputTest from './components/TimeInput.jsx';
import ToastTest from './components/Toast.jsx';
import TogglesTest from './components/Toggle.jsx';
import TooltipTest from './components/Tooltip.jsx';
import TreeTest from './components/Tree/Tree.jsx';
import Welcome from './components/Welcome/Welcome.jsx';
import { MyChips } from './components/MyComponentsTest/MyChips/index.jsx';
import TableExtraTextHeader from './components/TablesTest/TableExtraTextHeader.jsx';
import TableSticky from './components/TablesTest/TableSticky.jsx';
import TableZebra from './components/TablesTest/TableZebra.jsx';
import GroupActionsPaneTest from './components/GroupActionsPane.jsx';
import TableWithGroupsCustomTest from './components/TablesTest/TableWithGroupsCustom.jsx';
import TableDragDropColumnTest from './components/TablesTest/TableDragDropColumn.jsx';
import TableDragDropRowsTest from './components/TablesTest/TableDragDropRows.jsx';
import TableDetailRowTest from './components/TablesTest/TableDetailRow.jsx';
import TableWithOverflowMenuTest from './components/TablesTest/TableWithOverflowMenu.jsx';
import TableFilterTest from './components/TablesTest/TableFilter.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color['Neutral/Neutral 00']};
    font-family: 'VTB Group UI';
  }
`;
const ToggleStyled = styled(Toggle)`
  margin: 10px 0 30px 10px;
`;

export default function App() {
  const [selectedTheme, setSelectedTheme] = useState(LIGHT_THEME);
  const [checked, setChecked] = useState(false);

  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <ToggleStyled
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          HandleThemeChange(checked ? LIGHT_THEME : DARK_THEME);
        }}
      >
        Dark_mode
      </ToggleStyled>
      <div>
        <HashRouter>
          <Routes>
            <Route path="" element={<Welcome />} />
            <Route path="accordion" element={<AccordionTest />} />
            <Route path="accordionDeviders" element={<AccordionHideDividersTest />} />
            <Route path="accordion_forms_radio" element={<AccordionTestFormRadio />} />
            <Route path="avatar" element={<AvatarTest />} />
            <Route path="avatar_group" element={<AvatarGroupTest />} />
            <Route path="badge" element={<BadgeTest />} />
            <Route path="breadcrumbs" element={<BreadcrumbsTest />} />
            <Route path="button" element={<ButtonTest />} />
            <Route path="calendar" element={<CalendarTest />} />
            <Route path="checkbox_composite_group" element={<CheckboxCompositeGroupTest />} />
            <Route path="checkbox_field" element={<CheckboxFieldTest />} />
            <Route path="checkbox_forms" element={<CheckBoxFieldTestHookForm />} />
            <Route path="chips" element={<ChipsTest />} />
            <Route path="contentSwitcher" element={<ContentSwitcherTest />} />
            <Route path="date_field" element={<DateFieldTest />} />
            <Route path="date_fields_forms" element={<DateFieldTestHookForm />} />
            <Route path="date_input" element={<DateInputTest />} />
            <Route path="date_input_forms" element={<DateInputTestHookForm />} />
            <Route path="drop_menu" element={<DropMenuTest />} />
            <Route path="edit_mode" element={<EditModeTest />} />
            <Route path="edit_mode_field" element={<EditModeFieldTest />} />
            <Route path="edit_mode_field_forms" element={<EditModeFieldsForms />} />
            <Route path="edit_modearea" element={<EditModeAreaTest />} />
            <Route path="field_set" element={<FieldSetTest />} />
            <Route path="field_set_radio" element={<FieldSetRadioTest />} />
            <Route path="file_input" element={<FileInputTest />} />
            <Route path="floating_button" element={<FloatingButtonTest />} />
            <Route path="hint" element={<HintTest />} />
            <Route path="icon_button" element={<IconButtonTest />} />
            {/* <Route path="icons" element={<IconsTest />} /> */}
            <Route path="input_ex" element={<InputExTest />} />
            <Route path="input_field" element={<InputFieldTest />} />
            <Route path="link" element={<LinkTest />} />
            <Route path="menu_button" element={<MenuButtonTest items={items} />} />
            <Route path="modal" element={<ModalTest />} />
            <Route path="multibutton" element={<MultiButtonTest />} />
            <Route path="multiselect" element={<MultiSelectTest />} />
            <Route path="my_chips" element={<MyChips />} />
            <Route path="notifications" element={<NotificationTest />} />
            <Route path="number_input" element={<NumberInputTest />} />
            <Route path="number_input_field" element={<NumberInputFieldTest />} />
            <Route path="ovetflowmenu" element={<OverflowMenuTest />} />
            <Route path="pagination_one" element={<PaginationOneTest />} />
            <Route path="pagination_simple" element={<PaginationSimpleTest />} />
            <Route path="pagination_two" element={<PaginationTwoTest />} />
            <Route path="phone_input_field" element={<PhoneInputFieldTest />} />
            <Route path="phone_number_input" element={<PhoneNumberInputTest />} />
            <Route path="progress_header" element={<ProgressHeaderTest />} />
            <Route path="progress_page" element={<ProgressPageTest />} />
            <Route path="progress_stepper" element={<ProgressStepperTest />} />
            <Route path="radio_button" element={<RadioButtonTest />} />
            <Route path="search_select_field" element={<SearchSelectFieldTest />} />
            <Route path="select" element={<SelectTest />} />
            <Route path="select_field" element={<SelectFieldTest />} />
            {/* <Route path="select_tree" element={<SelectTreeTest />} /> */}
            <Route path="slider" element={<SliderTest />} />
            <Route path="slider_input" element={<SliderInputTest />} />
            <Route path="slider_input_field" element={<SliderInputFieldTest />} />
            <Route path="slider_range" element={<SliderRangeTest />} />
            <Route path="slider_range_field" element={<SliderRangeFieldTest />} />
            <Route path="spinner" element={<SpinnerTest />} />
            <Route path="status_indicator" element={<StatusIndicatorTest />} />
            <Route path="stepper" element={<StepperTest />} />
            <Route path="suggest_field" element={<SuggestFieldTest />} />
            <Route path="suggest_input" element={<SuggestInputTest />} />
            <Route path="table" element={<TableTest />} />
            <Route path="table_sticky" element={<TableSticky />} />
            <Route path="table_zebra" element={<TableZebra />} />
            <Route path="table_extra_text" element={<TableExtraTextHeader />} />
            {/* <Route path="table_filter" element={<TableFilter />} /> */}
            <Route path="table_with_group" element={<TableWithGroupsTest />} />
            <Route path="table_with_group_custom" element={<TableWithGroupsCustomTest />} />
            <Route path="table_column_orientation" element={<TableColumnOrientationTest />} />
            <Route path="table_width" element={<TableWidthColumnTest />} />
            <Route path="table_with_checkbox" element={<TableWithCheckboxTest />} />
            <Route path="tabmenu" element={<TabMenuTest />} />
            <Route path="tag_menu" element={<TagMenuTest />} />
            <Route path="tags" element={<TagsTest />} />
            <Route path="text_area" element={<TextAreaTest />} />
            <Route path="text_button" element={<TextButtonTest />} />
            <Route path="text_field" element={<TextFieldTest />} />
            <Route path="text_input" element={<TextInputTest />} />
            <Route path="time_field" element={<TimeFieldTest />} />
            <Route path="time_input" element={<TimeInputTest />} />
            <Route path="toast" element={<ToastTest />} />
            <Route path="toggle" element={<TogglesTest />} />
            <Route path="tooltip" element={<TooltipTest />} />
            <Route path="tree" element={<TreeTest />} />
            <Route path="typography" element={<TTest />} />
            <Route path="groupActionsPane" element={<GroupActionsPaneTest />} />
            <Route path="table_with_percents" element={<TableWithPercentsTest />} />
            <Route path="table_with_percents_scroll" element={<TableWithPercentsAndScrollTest />} />
            <Route path="table_with_percents_status" element={<TableWithPercentsAndStatusTest />} />
            <Route path="table_custom_cell" element={<TableCustomCellTest />} />
            <Route path="table_drag_column" element={<TableDragDropColumnTest />} />
            <Route path="table_drag_row" element={<TableDragDropRowsTest />} />
            <Route path="table_detail_row" element={<TableDetailRowTest />} />
            <Route path="table_ovefrlow_menu" element={<TableWithOverflowMenuTest />} />
            <Route path="table_filter_test" element={<TableFilterTest />} />
          </Routes>
        </HashRouter>
      </div>
    </ThemeProvider>
  );
}
