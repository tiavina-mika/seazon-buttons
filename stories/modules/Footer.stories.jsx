import React from 'react';
import Footer from '../../modules/Footer';

const meta = {
  title: 'New design system/modules/Footer',
  component: Footer,
};
export default meta;

export const FooterExample = {
  args: {
    subscribe: (email) => console.log('Subscribe: ', email),
    sections: [
      {
        title: 'Title',
        links: [
          {
            url: '#',
            label: 'Link 1',
            target: '_blank'
          },
          {
            url: '#',
            label: 'Link 2',
            target: '_blank'
          },
          {
            url: '#',
            label: 'Link 3',
            target: '_blank'
          }
        ]
      },
      {
        title: 'Title',
        links: [
          {
            url: '#',
            label: 'Link 4',
            target: '_blank'
          },
          {
            url: '#',
            label: 'Link 5',
            target: '_blank'
          },
          {
            url: '#',
            label: 'Link 6',
            target: '_blank'
          }
        ]
      }
    ]
  },
};

FooterExample.storyName = 'Footer';