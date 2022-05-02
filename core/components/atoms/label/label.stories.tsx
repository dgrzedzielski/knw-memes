import * as React from 'react';

import { ComponentStory, Meta } from '@storybook/react';

import { Label } from './label';

export default {
  title: 'Atoms/Label',
  component: Label,
  args: {
    children: 'Label',
  },
} as Meta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
