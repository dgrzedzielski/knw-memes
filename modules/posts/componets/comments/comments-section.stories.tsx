import * as React from 'react';

import { ComponentStory, Meta } from '@storybook/react';

import { CommentsSection } from './comments-section';
import { SingleComment } from './single-comment';

export default {
  title: 'Posts/CommentsSection',
  component: CommentsSection,
  args: {
    commentsCount: 2137,
    children: [
      <SingleComment id={1} author="pepethepope" body="ahoi havranku" />,
      <SingleComment
        id={2}
        author="prime minister"
        body="test comment before tax raise"
      />,
    ],
  },
} as Meta<typeof CommentsSection>;

const Template: ComponentStory<typeof CommentsSection> = (args) => (
  <CommentsSection {...args} />
);

export const Default = Template.bind({});
