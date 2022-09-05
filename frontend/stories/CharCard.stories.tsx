import CharCard from "../components/CharCard";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { screen, userEvent, within } from '@storybook/testing-library';
import React from 'react';

export default {
    title: "Components/Character Card",
    component: CharCard,
    argTypes: {
        vision: {
            options: ['Anemo', 'Hydro', 'Electro', 'Cryo', 'Geo', 'Pyro'],
            control: { type: 'radio' },
        },
        rarity: {
            options: [5, 4],
            control: { type: 'radio' },
        },
    },
    parameters: {
        a11y: {
            element: '#root',
            config: {
                rules: [
                    {
                        // Disable this test due to the way the grid is placed, it is not out of order visually.
                        id: 'heading-order',
                        enabled: false,
                    },
                    {
                        // Disable colour contrast due to the gradient in the background
                        id: 'color-contrast',
                        enabled: false,
                    },
                ],
            },
        },
    },

} as ComponentMeta<typeof CharCard>;

const GENSHIN_URL = "https://api.genshin.dev/"
const Template: ComponentStory<typeof CharCard> = (args) => <CharCard {...args} />;

export const TartagliaCard = Template.bind({})
TartagliaCard.args = {
    name: "Tartaglia",
    vision: "Hydro",
    weapon: "Bow",
    nation: "Snezhnaya",
    affiliation: "Fatui",
    rarity: 5,
    constellation: "Monoceros Caeli",
    birthday: "0000-07-20",
    description: "No. 11 of The Harbingers, also known as \"Childe\". His name is highly feared on the battlefield.",
    image: GENSHIN_URL + "characters/tartaglia/gacha-card"
}

export const ZhongliCard = Template.bind({})
ZhongliCard.args = {
    name: "Zhongli",
    vision: "Geo",
    weapon: "Polearm",
    nation: "Liyue",
    affiliation: "Liyue Harbor",
    rarity: 5,
    constellation: "Lapis Dei",
    birthday: "0000-12-31",
    description: "A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.",
    image: GENSHIN_URL + "characters/zhongli/gacha-card"
}