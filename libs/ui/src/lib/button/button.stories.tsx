import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, {ButtonProps} from './button';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    variant: {
      options: ['contained', 'outline', 'text'],
      control: { type: 'radio' }
    },
    onClick: {
      action: 'onClick'
    }
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Today</Button>
);

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  onClick: () => {}
};
