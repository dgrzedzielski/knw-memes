import * as React from 'react';

import { ComponentStory, Meta } from '@storybook/react';

import { SinglePost } from './single-post';

export default {
  title: 'Posts/SinglePost',
  component: SinglePost,
  args: {
    post: {
      id: 123,
      createdAt: new Date().toISOString(),
      authorNick: 'Nick Cage',
      title: 'Cage Meme',
      description: 'Nick Meme Description',
      imageUrl:
        'https://i.pinimg.com/474x/6a/45/e6/6a45e6991b87d17e413deba7ca283d48--nicolas-cage-my-dad.jpg',
      commentsCount: 21,
      likesCount: 37,
    },
  },
} as Meta<typeof SinglePost>;

const Template: ComponentStory<typeof SinglePost> = (args) => (
  <SinglePost {...args} />
);

export const Default = Template.bind({});
