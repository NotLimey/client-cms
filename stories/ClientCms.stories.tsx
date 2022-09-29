import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ClientCms, IClientCms } from '../src';

const meta: Meta = {
  title: 'Client Cms',
  component: ClientCms,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IClientCms<any>> = args => <ClientCms<any> {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

const props: IClientCms<any> = {
  fields: [
    {
      name: 'title',
      disabled: true,
    },
    {
      name: 'description',
      type: 'text',
      disabled: true,
    },
    {
      name: 'total',
      type: 'number',
      rules: {
        required: true,
        min: 0,
        max: 100,
      },
      disabled: true,
    },
    {
      name: 'selectBox',
      type: 'select',
      disabled: true,
      options: [
        {
          value: '1',
          label: 'One',
        },
        {
          value: '2',
          label: 'Two',
        },
      ],

      renderLabel: (option: any) => option.label,
      nullValueText: 'Select an option',
    },
    {
      name: 'image',
      type: 'file',
      disabled: true,
    },
    {
      name: 'checkbox',
      type: 'boolean',
      defaultValue: true,
      disabled: true,
    },
    {
      name: 'myDate',
      type: 'date',
      disabled: true,
    },
    {
      name: 'myCoolObject',
      type: 'object',
      disabled: true,
      fields: [
        {
          name: 'subTitle',
          defaultValue: "I'm a default value",
        },
        {
          name: 'total',
          type: 'number',
        },
      ],
    },
    {
      name: 'myArray',
      type: 'array',
      arrayType: 'string',
      defaultValue: [5032, 2012],
      disabled: true,
    },
    {
      name: 'myObjectArray',
      type: 'object-array',
      fields: [
        {
          name: 'description',
          type: 'text',
          rows: 3,
        },
        {
          name: 'quantity',
          type: 'number',
          defaultValue: 1,
        },
        {
          name: 'price',
          type: 'number',
          defaultValue: 250,
        },
      ],
      renderLabel: (item: any) => item.subTitle,
    },
  ],
};

Default.args = props;
