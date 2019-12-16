import { Type } from './Navbar.enum';
import uuid from 'uuid/v4';

export const formConfig = [
    {
        forOrigin: 'NewCategoryModal',
        title: 'Category Type',
        name: 'categoryType',
        value: '',
        type: 'dropdown',

        error: null,
        inputElement: 'dropdown',
        options: [
            {
                title: 'Nest Category',
                value: Type.Collapse,
            },
            {
                title: 'Link Category',
                value: Type.Link,
            },
            {
                title: 'Button Category',
                value: Type.Button,
            },
        ],
    },
    {
        forOrigin: 'NewCategoryModal',
        title: 'Title',
        name: 'title',
        required: true,
        value: '',
        type: 'text',
        feedback: '*Categore title is required!',
        error: null,
        inputElement: 'input',
    },
    {
        forOrigin: 'NewCategoryModal',
        title: 'Value',
        name: 'value',
        required: true,
        value: '',
        type: 'text',
        feedback: '*Categore value is required!',
        error: null,
        inputElement: 'input',
    },
    {
        forOrigin: 'NewCategoryModal',
        title: 'Image',
        name: 'image',

        value: '',
        required: true,
        type: 'text',
        feedback: '*Categore image is required!',
        error: null,
        inputElement: 'input',
    },
    {
        forOrigin: 'NewCategoryModal',
        title: 'Icon',
        name: 'htmlBefore',
        value: '',
        required: true,
        type: 'text',
        feedback: '*Categore icon is required!',
        error: null,
        inputElement: 'input',
    },
];

export const addItemModal = {
    title: 'New Category',
    value: 'newCategory',
    htmlBefore: '<i class="material-icons">add</i>',
    type: Type.Modal,
};

export const addItemCollapse = {
    title: '',
    image: '',
    value: '',
    htmlBefore: '',
    isOpen: true,
    to: '/',
    type: Type.Collapse,
    option: [],
};

export const addItemLink = {
    title: '',
    image: '',
    value: '',
    to: '/',
    htmlBefore: '',
    type: Type.Link,
};

export const addItemButton = {
    title: '',
    image: '',
    value: '',
    htmlBefore: '',
    type: Type.Button,
};

export const proteinOptions = [
    {
        key: uuid(),
        title: 'whey protein',
        affiliate: true,
        type: Type.Link,
        path: '/supplements/protein/whey_protein',
    },
    {
        key: uuid(),
        title: 'casein protein',
        affiliate: true,
        type: Type.Link,
        path: '/supplements/protein/casein_protein',
    },
];

export const performanceOptions = [
    {
        key: uuid(),
        title: 'pre workout',
        affiliate: true,
        type: Type.Link,
        path: '/supplements/performance/pre_workout',
    },
    {
        key: uuid(),
        title: 'post workout recovery',
        affiliate: true,
        type: Type.Link,
        path: '/supplements/performance/post_workout_recovery',
    },
];

export const supplementsOptions = [
    {
        key: uuid(),
        title: 'protein',
        affiliate: true,
        type: Type.Collapse,
        path: '/supplements/protein',
        options: proteinOptions,
    },
    {
        key: uuid(),
        title: 'performance',
        affiliate: true,
        type: Type.Collapse,
        path: '/supplements/performance',
        options: performanceOptions,
    },
];

export const mensClothesOptions = [
    {
        key: uuid(),
        title: 'baselayers',
        affiliate: true,
        type: Type.Link,
        path: '/mens/clothes/baselayers',
    },
    {
        key: uuid(),
        title: 'hoodies & jackets',
        affiliate: true,
        type: Type.Link,
        path: '/mens/clothes/hoodies_and_jackets',
    },
    {
        key: uuid(),
        title: 'shorts',
        affiliate: true,
        type: Type.Link,
        path: '/mens/clothes/shorts',
    },
    {
        key: uuid(),
        title: 'pants',
        affiliate: true,
        type: Type.Link,
        path: '/mens/clothes/pants',
    },
    {
        key: uuid(),
        title: 'stringers',
        affiliate: true,
        type: Type.Link,
        path: '/mens/clothes/stringers',
    },
    {
        key: uuid(),
        title: 't-Shirts & tops',
        affiliate: true,
        type: Type.Link,
        path: '/mens/clothes/t_shirts_and_tops',
    },
    {
        key: uuid(),
        title: 'sleeveless & tank tops',
        affiliate: true,
        type: Type.Link,
        path: '/mens/clothes/sleeveless_and_tank_tops',
    },
    {
        key: uuid(),
        title: 'underwear & socks',
        affiliate: true,
        type: Type.Link,
        path: '/mens/clothes/underwear_and_socks',
    },
];

export const mensAccessoriesOptions = [
    {
        key: uuid(),
        title: 'belts',
        affiliate: true,
        type: Type.Link,
        path: '/mens/accessories/belts',
    },
    {
        key: uuid(),
        title: 'sunglasses & eyewear',
        affiliate: true,
        type: Type.Link,
        path: '/mens/accessories/sunglasses_and_eyewear',
    },
    {
        key: uuid(),
        title: 'scarves & wraps',
        affiliate: true,
        type: Type.Link,
        path: '/mens/accessories/scarves_and_wraps',
    },
    {
        key: uuid(),
        title: 'gloves & mittens',
        affiliate: true,
        type: Type.Link,
        path: '/mens/accessories/gloves_and_mittens',
    },
    {
        key: uuid(),
        title: 'hats & caps',
        affiliate: true,
        type: Type.Link,
        path: '/mens/accessories/hats_and_caps',
    },
    {
        key: uuid(),
        title: 'earmuffs',
        affiliate: true,
        type: Type.Link,
        path: '/mens/accessories/earmuffs',
    },
    {
        key: uuid(),
        title: 'handbag ',
        affiliate: true,
        type: Type.Link,
        path: '/mens/accessories/handbag ',
    },
    {
        key: uuid(),
        title: 'keyrings & keychains',
        affiliate: true,
        type: Type.Link,
        path: '/mens/accessories/keyrings_and_keychains',
    },
    {
        key: uuid(),
        title: 'wallets & card cases',
        affiliate: true,
        type: Type.Link,
        path: '/mens/accessories/wallets_and_card_cases',
    },
    {
        key: uuid(),
        title: 'suspenders',
        affiliate: true,
        type: Type.Link,
        path: '/mens/accessories/suspenders',
    },
];

export const mensSportShoesOptions = [];

export const mensOptions = [
    {
        key: uuid(),
        title: 'clothes',
        affiliate: true,
        type: Type.Collapse,
        path: '/mens/clothes',
        options: mensClothesOptions,
    },
    {
        key: uuid(),
        title: 'accessories',
        affiliate: true,
        type: Type.Collapse,
        path: '/mens/accessories',
        options: mensAccessoriesOptions,
    },
    {
        key: uuid(),
        title: 'sport shoes',
        affiliate: true,
        type: Type.Collapse,
        path: '/mens/sport_shoes',
        options: mensSportShoesOptions,
    },
];
export const womensClothesOptions = [
    {
        key: uuid(),
        title: 'crop tops',
        affiliate: true,
        type: Type.Link,
        path: '/womens/clothes/crop_tops',
    },
    {
        key: uuid(),
        title: 'hoodies & jackets',
        affiliate: true,
        type: Type.Link,
        path: '/womens/clothes/hoodies_and_jackets',
    },
    {
        key: uuid(),
        title: 'shorts',
        affiliate: true,
        type: Type.Link,
        path: '/womens/clothes/shorts',
    },
    {
        key: uuid(),
        title: 'pants & leggings',
        affiliate: true,
        type: Type.Link,
        path: '/womens/clothes/pants_and_leggings',
    },
    {
        key: uuid(),
        title: 'swimwear',
        affiliate: true,
        type: Type.Link,
        path: '/womens/clothes/swimwear',
    },
    {
        key: uuid(),
        title: 't-Shirts & tops',
        affiliate: true,
        type: Type.Link,
        path: '/womens/clothes/t_shirts_and_tops',
    },
    {
        key: uuid(),
        title: 'sleeveless & tank tops',
        affiliate: true,
        type: Type.Link,
        path: '/womens/clothes/sleeveless_and_tank_tops',
    },
    {
        key: uuid(),
        title: 'underwear & socks',
        affiliate: true,
        type: Type.Link,
        path: '/womens/clothes/underwear_and_socks',
    },
];
export const womensAccessoriesOptions = [
    {
        key: uuid(),
        title: 'sunglasses & eyewear',
        affiliate: true,
        type: Type.Link,
        path: '/womens/accessories/sunglasses_and_eyewear',
    },
    {
        key: uuid(),
        title: 'scarves & wraps',
        affiliate: true,
        type: Type.Link,
        path: '/womens/accessories/scarves_and_wraps',
    },
    {
        key: uuid(),
        title: 'gloves & mittens',
        affiliate: true,
        type: Type.Link,
        path: '/womens/accessories/gloves_and_mittens',
    },
    {
        key: uuid(),
        title: 'hats & caps',
        affiliate: true,
        type: Type.Link,
        path: '/womens/accessories/hats_and_caps',
    },
    {
        key: uuid(),
        title: 'earmuffs',
        affiliate: true,
        type: Type.Link,
        path: '/womens/accessories/earmuffs',
    },
    {
        key: uuid(),
        title: 'handbag ',
        affiliate: true,
        type: Type.Link,
        path: '/womens/accessories/handbag ',
    },
    {
        key: uuid(),
        title: 'keyrings & keychains',
        affiliate: true,
        type: Type.Link,
        path: '/womens/accessories/keyrings_and_keychains',
    },
    {
        key: uuid(),
        title: 'wallets & card cases',
        affiliate: true,
        type: Type.Link,
        path: '/womens/accessories/wallets_and_card_cases',
    },
];
export const womensSportShoesOptions = [];

export const womensOptions = [
    {
        key: uuid(),
        title: 'clothes',
        affiliate: true,
        type: Type.Collapse,
        path: '/womens/clothes',
        options: womensClothesOptions,
    },
    {
        key: uuid(),
        title: 'accessories',
        affiliate: true,
        type: Type.Collapse,
        path: '/womens/accessories',
        options: womensAccessoriesOptions,
    },
    {
        key: uuid(),
        title: 'sport shoes',
        affiliate: true,
        type: Type.Collapse,
        path: '/womens/sport_shoes',
        options: womensSportShoesOptions,
    },
];

export const navbarConfig = [
    {
        key: uuid(),
        title: 'supplements',
        affiliate: true,
        type: Type.Collapse,
        path: '/supplements',
        options: supplementsOptions,
    },
    {
        key: uuid(),
        title: 'mens',
        affiliate: true,
        type: Type.Collapse,
        path: '/mens',
        options: mensOptions,
    },
    {
        key: uuid(),

        title: 'womens',
        affiliate: true,
        type: Type.Collapse,
        path: '/womens',
        options: womensOptions,
    },
];
