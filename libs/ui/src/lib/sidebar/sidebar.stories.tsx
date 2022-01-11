import { Story, Meta } from '@storybook/react';

import {DURATION_IN_MINUTES, EVENT_TYPES} from '../../../../data/src';

import { Sidebar, SidebarProps } from './sidebar';

export default {
  component: Sidebar,
  title: 'Sidebar',
} as Meta;

const Template: Story<SidebarProps> = (args) => (
  <Sidebar
    durationOptions={DURATION_IN_MINUTES}
    eventTypes={EVENT_TYPES}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
