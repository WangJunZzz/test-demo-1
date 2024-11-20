import { z } from '@vben/common-ui';

import dayjs from 'dayjs';

export const querySchema: any = [
  {
    component: 'Input',
    fieldName: 'messageType',
    label: 'messageType',
    defaultValue: 10,
    dependencies: {
      show: () => false,
      triggerFields: ['messageType'],
    },
  },
  {
    component: 'Input',
    fieldName: 'title',
    label: '标题',
  },
  {
    component: 'Input',
    fieldName: 'content',
    label: '内容',
  },
  {
    component: 'Select',
    fieldName: 'messageLevel',
    label: '级别',
    width: 120,
    componentProps: {
      options: [
        {
          label: '警告',
          value: 10,
        },
        {
          label: '正常',
          value: 20,
        },
        {
          label: '错误',
          value: 30,
        },
      ],
    },
  },
];

export const tableSchema: any = [
  { title: '序号', type: 'seq', width: 50 },
  { field: 'title', title: '标题', minWidth: '150' },
  { field: 'content', title: '内容', minWidth: '150' },
  {
    field: 'messageLevelName',
    title: '级别',
    minWidth: '150',
    slots: { default: 'messageLevel' },
  },
  { field: 'senderUserName', title: '发送人', minWidth: '150' },
  {
    field: 'creationTime',
    title: '创建时间',
    minWidth: '150',
    formatter: ({ cellValue }) => {
      return dayjs(cellValue).format('YYYY-MM-DD HH:mm:ss');
    },
  },
];

export const addFormSchema: any = [
  {
    component: 'Input',
    componentProps: {},
    fieldName: 'title',
    label: '标题',
    rules: z.string().min(1, { message: '请输入标题' }),
  },
  {
    component: 'Textarea',
    componentProps: {},
    fieldName: 'content',
    label: '内容',
    rules: z.string().min(1, { message: '请输入内容' }),
  },
  {
    component: 'Select',
    fieldName: 'messageLevel',
    label: '级别',
    required: true,
    defaultValue: 20,
    componentProps: {
      options: [
        {
          label: '警告',
          value: 10,
        },
        {
          label: '正常',
          value: 20,
        },
        {
          label: '错误',
          value: 30,
        },
      ],
    },
  },
];
