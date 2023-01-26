import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, SizeButton, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
};

export const OutlineL = Template.bind({});
OutlineL.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
  size: SizeButton.L,
};

export const OutlineXl = Template.bind({});
OutlineXl.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
  size: SizeButton.Xl,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
};

export const SquareM = Template.bind({});
SquareM.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: SizeButton.M,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: SizeButton.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: SizeButton.Xl,
};
