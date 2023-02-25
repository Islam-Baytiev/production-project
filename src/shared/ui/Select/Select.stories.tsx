import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from 'shared/ui/Select/Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { to: '/' },

} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select',
  options: [
    { value: '123', content: 'Первый пункт' },
    { value: '13', content: 'Второй пункт' },
    { value: '23', content: 'Третий пункт' },
  ],
};
