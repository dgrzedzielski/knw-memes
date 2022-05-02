import * as React from 'react';

import { ComponentStory, Meta } from '@storybook/react';

import { Heading } from './heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
  args: {
    children: 'Heading',
    level: 1,
  },
} as Meta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
