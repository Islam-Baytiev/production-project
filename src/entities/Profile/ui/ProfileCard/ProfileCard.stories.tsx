import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/avatar.jpg';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    age: 22,
    first: 'asd',
    lastname: 'das',
    country: Country.TURKEY,
    city: 'Grozny',
    currency: Currency.EUR,
    username: 'admin',
    avatar,
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'error',
};

export const WithIsLoading = Template.bind({});
WithIsLoading.args = {
  isLoading: true,
};
