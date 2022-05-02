import * as React from 'react';

import { ComponentStory, Meta } from '@storybook/react';

import { Text } from './text';

export default {
  title: 'Atoms/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum sit dolor it amet',
  },
} as Meta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
