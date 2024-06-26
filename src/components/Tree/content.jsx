import { TreeNode } from '@admiral-ds/react-ui';
import FolderSolid from '@admiral-ds/icons/build/documents/FolderSolid.svg?react';
export const demo1_TreeModel = [
  {
    render: (options) => (
      <TreeNode
        key={'1'}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 1'}
        {...options}
      />
    ),
    id: '1',
    checked: false,
    children: [
      {
        render: (options) => (
          <TreeNode
            key={'1-3'}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 3'}
            {...options}
          />
        ),
        id: '1-3',
        checked: false,
        children: [
          {
            render: (options) => (
              <TreeNode
                key={'2-2'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 2'}
                {...options}
              />
            ),
            id: '2-2',
          },
          {
            render: (options) => (
              <TreeNode
                key={'2-3'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 3'}
                {...options}
              />
            ),
            id: '2-3',
          },
          {
            render: (options) => (
              <TreeNode
                key={'2-4'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 4'}
                {...options}
              />
            ),
            id: '2-4',
          },
          {
            render: (options) => (
              <TreeNode
                key={'2-5'}
                icon={FolderSolid}
                label={'Текст  строки с чекбоксом, третий уровень компонента 5'}
                {...options}
              />
            ),
            id: '2-5',
            checked: false,
            children: [
              {
                render: (options) => (
                  <TreeNode
                    key={'3-1'}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 1'}
                    {...options}
                  />
                ),
                id: '3-1',
                checked: false,
              },
              {
                render: (options) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 2'}
                    key={'3-2'}
                  />
                ),
                id: '3-2',
                checked: false,
              },
              {
                render: (options) => (
                  <TreeNode
                    {...options}
                    label={
                      'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\n' +
                      '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\n' +
                      '    вложенности.'
                    }
                    key={'3-3'}
                  />
                ),
                id: '3-3',
                checked: false,
              },
              {
                render: (options) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 4'}
                    key={'3-4'}
                  />
                ),
                id: '3-4',
                checked: false,
                children: [
                  {
                    render: (options) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 1'}
                        key={'4-1'}
                      />
                    ),
                    id: '4-1',
                    checked: false,
                  },
                  {
                    render: (options) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 2'}
                        key={'4-2'}
                      />
                    ),
                    id: '4-2',
                    checked: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '1-1',
        checked: false,
        render: (options) => (
          <TreeNode
            {...options}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 1'}
            key={'1-1'}
          />
        ),
      },
      {
        id: '1-2',
        checked: false,
        render: (options) => (
          <TreeNode
            {...options}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 2'}
            key={'1-2'}
          />
        ),
      },
    ],
  },
  {
    render: (options) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 2'}
        key={'2'}
      />
    ),
    id: '2',
    checked: false,
  },
  {
    render: (options) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 3'}
        key={'3'}
      />
    ),
    id: '3',
    checked: false,
  },
  {
    render: (options) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 4'}
        key={'4'}
      />
    ),
    id: '4',
    disabled: true,
  },
];
export const demo1_TreeModel1 = [
  {
    render: (options) => (
      <TreeNode
        key={'1'}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 1'}
        {...options}
      />
    ),
    id: '1',
    checked: false,
    children: [
      {
        render: (options) => (
          <TreeNode
            key={'1-3'}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 3'}
            {...options}
          />
        ),
        id: '1-3',
        checked: false,
        children: [
          {
            render: (options) => (
              <TreeNode
                key={'2-2'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 2'}
                {...options}
              />
            ),
            id: '2-2',
          },
          {
            render: (options) => (
              <TreeNode
                key={'2-3'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 3'}
                {...options}
              />
            ),
            id: '2-3',
          },
          {
            render: (options) => (
              <TreeNode
                key={'2-4'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 4'}
                {...options}
              />
            ),
            id: '2-4',
          },
          {
            render: (options) => (
              <TreeNode
                key={'2-5'}
                icon={FolderSolid}
                label={'Текст  строки с чекбоксом, третий уровень компонента 5'}
                {...options}
              />
            ),
            id: '2-5',
            checked: false,
            children: [
              {
                render: (options) => (
                  <TreeNode
                    key={'3-1'}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 1'}
                    {...options}
                  />
                ),
                id: '3-1',
                checked: false,
              },
              {
                render: (options) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 2'}
                    key={'3-2'}
                  />
                ),
                id: '3-2',
                checked: false,
              },
              {
                render: (options) => (
                  <TreeNode
                    {...options}
                    label={
                      'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\n' +
                      '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\n' +
                      '    вложенности.'
                    }
                    key={'3-3'}
                  />
                ),
                id: '3-3',
                checked: false,
              },
              {
                render: (options) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 4'}
                    key={'3-4'}
                  />
                ),
                id: '3-4',
                checked: false,
                children: [
                  {
                    render: (options) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 1'}
                        key={'4-1'}
                      />
                    ),
                    id: '4-1',
                    checked: false,
                  },
                  {
                    render: (options) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 2'}
                        key={'4-2'}
                      />
                    ),
                    id: '4-2',
                    checked: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '1-1',
        checked: false,
        render: (options) => (
          <TreeNode
            {...options}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 1'}
            key={'1-1'}
          />
        ),
      },
      {
        id: '1-2',
        checked: false,
        render: (options) => (
          <TreeNode
            {...options}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 2'}
            key={'1-2'}
          />
        ),
      },
    ],
  },
  {
    render: (options) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 2'}
        key={'2'}
      />
    ),
    id: '2',
    checked: false,
  },
  {
    render: (options) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 3'}
        key={'3'}
      />
    ),
    id: '3',
    checked: false,
  },
  {
    render: (options) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 4'}
        key={'4'}
      />
    ),
    id: '4',
    disabled: true,
  },
];
export const demo1_TreeModel2 = [
  {
    render: (options) => (
      <TreeNode
        key={'1'}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 1'}
        {...options}
      />
    ),
    id: '1',
    checked: false,
    children: [
      {
        render: (options) => (
          <TreeNode
            key={'1-3'}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 3'}
            {...options}
          />
        ),
        id: '1-3',
        checked: false,
        children: [
          {
            render: (options) => (
              <TreeNode
                key={'2-2'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 2'}
                {...options}
              />
            ),
            id: '2-2',
          },
          {
            render: (options) => (
              <TreeNode
                key={'2-3'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 3'}
                {...options}
              />
            ),
            id: '2-3',
          },
          {
            render: (options) => (
              <TreeNode
                key={'2-4'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 4'}
                {...options}
              />
            ),
            id: '2-4',
          },
          {
            render: (options) => (
              <TreeNode
                key={'2-5'}
                icon={FolderSolid}
                label={'Текст  строки с чекбоксом, третий уровень компонента 5'}
                {...options}
              />
            ),
            id: '2-5',
            checked: false,
            children: [
              {
                render: (options) => (
                  <TreeNode
                    key={'3-1'}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 1'}
                    {...options}
                  />
                ),
                id: '3-1',
                checked: false,
              },
              {
                render: (options) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 2'}
                    key={'3-2'}
                  />
                ),
                id: '3-2',
                checked: false,
              },
              {
                render: (options) => (
                  <TreeNode
                    {...options}
                    label={
                      'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\n' +
                      '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\n' +
                      '    вложенности.'
                    }
                    key={'3-3'}
                  />
                ),
                id: '3-3',
                checked: false,
              },
              {
                render: (options) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 4'}
                    key={'3-4'}
                  />
                ),
                id: '3-4',
                checked: false,
                children: [
                  {
                    render: (options) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 1'}
                        key={'4-1'}
                      />
                    ),
                    id: '4-1',
                    checked: false,
                  },
                  {
                    render: (options) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 2'}
                        key={'4-2'}
                      />
                    ),
                    id: '4-2',
                    checked: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '1-1',
        checked: false,
        render: (options) => (
          <TreeNode
            {...options}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 1'}
            key={'1-1'}
          />
        ),
      },
      {
        id: '1-2',
        checked: false,
        render: (options) => (
          <TreeNode
            {...options}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 2'}
            key={'1-2'}
          />
        ),
      },
    ],
  },
  {
    render: (options) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 2'}
        key={'2'}
      />
    ),
    id: '2',
    checked: false,
  },
  {
    render: (options) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 3'}
        key={'3'}
      />
    ),
    id: '3',
    checked: false,
  },
  {
    render: (options) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 4'}
        key={'4'}
      />
    ),
    id: '4',
    disabled: true,
  },
];
export const demo1_TreeModel3 = [
  {
    render: (options) => (
      <TreeNode
        key={'1'}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 1'}
        {...options}
      />
    ),
    id: '1',
    checked: false,
    children: [
      {
        render: (options) => (
          <TreeNode
            key={'1-3'}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 3'}
            {...options}
          />
        ),
        id: '1-3',
        checked: false,
        children: [
          {
            render: (options) => (
              <TreeNode
                key={'2-2'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 2'}
                {...options}
              />
            ),
            id: '2-2',
          },
          {
            render: (options) => (
              <TreeNode
                key={'2-3'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 3'}
                {...options}
              />
            ),
            id: '2-3',
          },
          {
            render: (options) => (
              <TreeNode
                key={'2-4'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 4'}
                {...options}
              />
            ),
            id: '2-4',
          },
          {
            render: (options) => (
              <TreeNode
                key={'2-5'}
                icon={FolderSolid}
                label={'Текст  строки с чекбоксом, третий уровень компонента 5'}
                {...options}
              />
            ),
            id: '2-5',
            checked: false,
            children: [
              {
                render: (options) => (
                  <TreeNode
                    key={'3-1'}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 1'}
                    {...options}
                  />
                ),
                id: '3-1',
                checked: false,
              },
              {
                render: (options) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 2'}
                    key={'3-2'}
                  />
                ),
                id: '3-2',
                checked: false,
              },
              {
                render: (options) => (
                  <TreeNode
                    {...options}
                    label={
                      'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\n' +
                      '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\n' +
                      '    вложенности.'
                    }
                    key={'3-3'}
                  />
                ),
                id: '3-3',
                checked: false,
              },
              {
                render: (options) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 4'}
                    key={'3-4'}
                  />
                ),
                id: '3-4',
                checked: false,
                children: [
                  {
                    render: (options) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 1'}
                        key={'4-1'}
                      />
                    ),
                    id: '4-1',
                    checked: false,
                  },
                  {
                    render: (options) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 2'}
                        key={'4-2'}
                      />
                    ),
                    id: '4-2',
                    checked: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '1-1',
        checked: false,
        render: (options) => (
          <TreeNode
            {...options}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 1'}
            key={'1-1'}
          />
        ),
      },
      {
        id: '1-2',
        checked: false,
        render: (options) => (
          <TreeNode
            {...options}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 2'}
            key={'1-2'}
          />
        ),
      },
    ],
  },
  {
    render: (options) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 2'}
        key={'2'}
      />
    ),
    id: '2',
    checked: false,
  },
  {
    render: (options) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 3'}
        key={'3'}
      />
    ),
    id: '3',
    checked: false,
  },
  {
    render: (options) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 4'}
        key={'4'}
      />
    ),
    id: '4',
    disabled: true,
  },
];
