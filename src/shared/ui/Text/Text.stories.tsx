import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title lorem',
  text: 'comment description',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Title lorem',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'comment description',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title lorem',
  text: 'comment description',
  theme: TextTheme.ERROR,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title lorem',
  text: 'comment description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title lorem',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Title lorem',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
