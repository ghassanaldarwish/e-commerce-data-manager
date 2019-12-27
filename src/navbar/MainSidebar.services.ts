import { useState, useEffect } from 'react';
import axios from 'axios';
import { addItemModal, navbarConfig } from './navbarPrototypes';
import { Type } from './Navbar.enum';
const MainSidebarServices = () => {
    const [values, setValues] = useState({
        navItems: navbarConfig,
        categoryType: '',
        title: '',
        value: '',
        image: '',
        htmlBefore: '',
    });

    const create = (NewCategory: any) => {
        console.log('the data created!', NewCategory);
    };

    const onChangeField = (e: any) => {
        const { name, value } = e.target;
        console.log('onChangeSelect', e.target);
        setValues({ ...values, [name]: value });
    };

    const onChangeCheckbox = () => {
        setValues({ ...values });
    };

    const onSubmitNewCategory = (e: any) => {
        e.preventDefault();

        const { title, image, value, htmlBefore, categoryType } = values;
        const icon = `<i class="material-icons">${htmlBefore.toLowerCase().replace(' ', '_')}</i>`;
        const options = categoryType === Type.Collapse ? [addItemModal] : null;
        const NewCategory = {
            categoryType,
            title,
            image,
            value,
            to: '/' + value,
            htmlBefore: icon,
            isOpen: true,
            options,
        };

        setValues({
            ...(values as any),
            navItems: [...values.navItems, NewCategory],
            title: '',
            image: '',
            value: '',
            htmlBefore: '',
        });

        create(NewCategory);
    };
    return {
        values,
        create,
        onChangeField,
        onSubmitNewCategory,
        onChangeCheckbox,
    };
};

export default MainSidebarServices;
