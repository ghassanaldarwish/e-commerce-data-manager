import { Type } from './Navbar.enum';

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
