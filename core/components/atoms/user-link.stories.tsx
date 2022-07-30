import * as React from 'react';

import { ComponentStory, Meta } from '@storybook/react';

import { UserLink } from './user-link';

export default {
  title: 'Atoms/UserLink',
  component: UserLink,
  args: {
    children: 'Lorem ipsum sit dolor it amet',
  },
} as Meta<typeof UserLink>;

const Template: ComponentStory<typeof UserLink> = (args) => (
  <UserLink {...args} />
);

export const Default = Template.bind({});
