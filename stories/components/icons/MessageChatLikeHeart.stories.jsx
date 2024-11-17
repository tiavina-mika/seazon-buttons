import React from 'react';
import MessageChatLikeHeartIcon from '../../../components/icons/MessageChatLikeHeart';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/MessageChatLikeHeart',
  component: MessageChatLikeHeartIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const MessageChatLikeHeart = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
MessageChatLikeHeart.storyName = 'MessageChatLikeHeart'