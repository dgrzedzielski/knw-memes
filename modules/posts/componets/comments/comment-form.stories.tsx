import * as React from 'react';

import { ComponentStory, Meta } from '@storybook/react';

import { CommentForm } from './comment-form';

export default {
  title: 'Posts/CommentForm',
  component: CommentForm,
  args: {},
} as Meta<typeof CommentForm>;

const Template: ComponentStory<typeof CommentForm> = (args) => (
  <CommentForm {...args} />
);

export const Default = Template.bind({});
