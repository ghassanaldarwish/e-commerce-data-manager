import React from 'react';
import { Nav } from 'shards-react';

import SidebarNavItem from './SidebarNavItem';
import { Store } from '../../../flux';
import NewCategoryModal from '../../components-overview/NewCategorn/NewCategorn';
import InputField from '../../components-overview/InputField/InputField';

const formConfig = [
    {
        forOrigin: 'NewCategoryModal',
        title: 'Title',
        name: 'title',
        required: true,
        value: '',
        type: 'text',
        feedback: '*Categore title is required!',
        error: null,
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
    },
];

class SidebarNavItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navItems: Store.getSidebarItems(),
            title: '',
            value: '',
            image: '',
            htmlBefore: '',
        };

        this.onChange = this.onChange.bind(this);
    }

    onChangeField = e => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value });
    };

    onSubmitNewCategory = e => {
        e.preventDefault();
        const { title, image, value, navItems, htmlBefore } = this.state;
        const icon = `<i class="material-icons">${htmlBefore.toLowerCase().replace(' ', '_')}</i>`;
        const NewCategory = {
            title,
            image,
            value,
            to: value,
            htmlBefore: icon,
        };

        this.setState(prevState => ({
            ...this.state,
            navItems: [...prevState.navItems, NewCategory],
            title: '',
            image: '',
            value: '',
            htmlBefore: '',
        }));
        console.log('the date submited!', NewCategory, [...navItems, NewCategory]);
    };

    renderModal = (modal, toggle) => {
        return (
            <NewCategoryModal onSubmitNewCategory={this.onSubmitNewCategory} modal={modal} toggle={toggle}>
                {formConfig.map((config, index) => (
                    <InputField onChangeField={this.onChangeField} key={index} {...config} />
                ))}
            </NewCategoryModal>
        );
    };

    componentWillMount() {
        Store.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        Store.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState({
            ...this.state,
            navItems: Store.getSidebarItems(),
        });
    }
    render() {
        // console.log('state ==>', this.state)
        const { navItems: items } = this.state;
        return (
            <div className="nav-wrapper">
                <Nav className="nav--no-borders flex-column">
                    {items.map((item, idx) => (
                        <SidebarNavItem renderModal={this.renderModal} key={idx} item={item} />
                    ))}
                </Nav>
            </div>
        );
    }
}

export default SidebarNavItems;
