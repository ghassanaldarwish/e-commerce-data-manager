import { EventEmitter } from 'events';
import { Type } from '../containers/Navbar/Navbar.enum';
import Dispatcher from './dispatcher';
import Constants from './constants';

const _store = {
    menuVisible: false,
    navItems: [
        {
            title: 'Blog Dashboard',
            to: '/blog-overview',
            htmlBefore: '<i class="material-icons">dashboard</i>',
            htmlAfter: '',
            type: Type.Link,
        },
        {
            title: 'New Category',
            value: 'newCategory',
            htmlBefore: '<i class="material-icons">add</i>',
            to: '/',
            type: Type.Modal,
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
