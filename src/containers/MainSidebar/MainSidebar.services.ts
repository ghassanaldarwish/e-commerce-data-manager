import { useState, useEffect } from 'react';
import axios from 'axios';
import { Store } from '../../flux';

const MainSidebarServices = () => {
    const [values, setValues] = useState({
        navItems: Store.getSidebarItems(),
        title: '',
        value: '',
        image: '',
        htmlBefore: '',
        affiliate: true,
        nested: false,
    });

    useEffect(() => {
        function onChange() {
            setValues({
                ...values,
                navItems: Store.getSidebarItems(),
            });
        }

        Store.addChangeListener(onChange);
        // Specify how to clean up after this effect:
        return function cleanup() {
            Store.removeChangeListener(onChange);
        };
    });
    const getNavItems = () => {
        return Store.getSidebarItems();
    };
    const create = (NewCategory: any) => {
        console.log('the data created!', NewCategory);
    };
    const onChangeField = (e: any) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const onChangeCheckbox = () => {
        setValues({ ...values, nested: !values.nested });
    };

    const onSubmitNewCategory = (e: any) => {
        e.preventDefault();
        const { title, image, value, htmlBefore } = values;
        const icon = `<i class="material-icons">${htmlBefore.toLowerCase().replace(' ', '_')}</i>`;
        const NewCategory = {
            title,
            image,
            value,
            to: value,
            htmlBefore: icon,
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
        getNavItems,
    };
};

export default MainSidebarServices;
