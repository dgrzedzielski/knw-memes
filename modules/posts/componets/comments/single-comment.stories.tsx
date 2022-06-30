import * as React from 'react';

import { ComponentStory, Meta } from '@storybook/react';

import { SingleComment } from './single-comment';

export default {
  title: 'Posts/SingleComment',
  component: SingleComment,
  args: {
    author: 'pepethepope',
    body: 'Lorem ipsum dolor sit amet',
  },
} as Meta<typeof SingleComment>;

const Template: ComponentStory<typeof SingleComment> = (args) => (
  <SingleComment {...args} />
);

export const Default = Template.bind({});
