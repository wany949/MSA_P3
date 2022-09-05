import Search from "../components/Search";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { screen, userEvent, within } from '@storybook/testing-library';
import React from 'react';

export default {
    title: "Components/Search",
    component: Search,

} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({})
Default.play = async ({ canvasElement }) => {
    await userEvent.click(await within(canvasElement).getByRole("combobox"))
}

export const SearchBeidou = Template.bind({})
SearchBeidou.play = async () => {
    const input = screen.getByRole('combobox');

    await userEvent.type(input, 'Beidou', {
        delay: 500,
    })

    const searchButton = screen.getByTestId('searchButton');
    await userEvent.click(searchButton);

};



