import { EventEmitter } from 'events';
import { Type } from '../containers/Navbar/Navbar.enum';
import Dispatcher from './dispatcher';
import Constants from './constants';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add';

const _store = {
    menuVisible: false,
    navItems: [
        {
            title: 'Blog Dashboard',
            to: '/blog-overview',
            htmlBefore: '<i class="material-icons">dashboard</i>',
            htmlAfter: '',
            type: Type.Link,
            icon: DashboardIcon,
        },
        {
            title: 'New Category',
            value: 'newCategory',
            htmlBefore: '<i class="material-icons">add</i>',
            to: '/',
            icon: AddIcon,
            type: Type.Modal,
        },
        {
            title: 'supplement',
            image: '',
            value: 'supplement',
            htmlBefore: '',
            isOpen: true,
            to: '/',
            type: Type.Collapse,
            options: [
                {
                    title: 'New Category',
                    value: 'newCategory',
                    htmlBefore: '<i class="material-icons">add</i>',
                    to: '/',
                    icon: AddIcon,
                    type: Type.Modal,
                },
                {
                    title: 'protein',
                    image: '',
                    value: 'protein',
                    htmlBefore: '',
                    isOpen: true,
                    to: '/',
                    type: Type.Collapse,
                    options: [
                        {
                            title: 'New Category',
                            value: 'newCategory',
                            htmlBefore: '<i class="material-icons">add</i>',
                            to: '/',
                            icon: AddIcon,
                            type: Type.Modal,
                        },
                        {
                            title: 'why protein',
                            image: '',
                            value: 'whyProtein',
                            htmlBefore: '',
                            isOpen: true,
                            to: '/protein',
                            type: Type.Link,
                        },
                    ],
                },
            ],
        },
    ],
};

class Store extends EventEmitter {
    constructor() {
        super();

        this.registerToActions = this.registerToActions.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);

        Dispatcher.register(this.registerToActions.bind(this));
    }

    registerToActions({ actionType, payload }) {
        switch (actionType) {
            case Constants.TOGGLE_SIDEBAR:
                this.toggleSidebar();
                break;
            default:
        }
    }

    toggleSidebar() {
        _store.menuVisible = !_store.menuVisible;
        this.emit(Constants.CHANGE);
    }

    getMenuState() {
        return _store.menuVisible;
    }

    getSidebarItems() {
        return _store.navItems;
    }

    addChangeListener(callback) {
        this.on(Constants.CHANGE, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(Constants.CHANGE, callback);
    }
}

export default new Store();
