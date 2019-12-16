import { FunctionComponent } from 'react';

import { DefaultLayout } from './layouts';
import BlogOverview from './views/BlogOverview';
import UserProfileLite from './views/UserProfileLite';
import AddNewPost from './views/AddNewPost';
import Errors from './views/Errors';
import ComponentsOverview from './views/ComponentsOverview';
import Tables from './views/Tables';
import BlogPosts from './views/BlogPosts';
import { Store } from './flux';
import Products from './templates/Products/Products';

export interface Route {
    path: string;
    exact?: boolean;
    layout: FunctionComponent<any>;
    component: any;
}

const navbar = (navbar: any) => {
    const pullAllNavbarItems: any = [];
    if (!!navbar) {
        navbar.forEach((category: any) => {
            pullAllNavbarItems.push({
                path: category.path,
                exact: true,
                layout: DefaultLayout,
                component: Products,
            });
            if (!!category.options) {
                category.options.forEach((subItem: any) => {
                    pullAllNavbarItems.push({
                        path: subItem.path,
                        exact: true,
                        layout: DefaultLayout,
                        component: Products,
                    });
                    if (!!subItem.options) {
                        subItem.options.forEach((subSubItem: any) =>
                            pullAllNavbarItems.push({
                                path: subSubItem.path,
                                exact: true,
                                layout: DefaultLayout,
                                component: Products,
                            }),
                        );
                    }
                });
            }
        });
    }

    if (pullAllNavbarItems.length >= navbar.length) {
        return pullAllNavbarItems as Route[];
    }
};

const navBarRoutes = navbar(Store.getSidebarItems());

const Routes: Route[] = [
    {
        path: '/',
        exact: true,
        layout: DefaultLayout,
        component: BlogOverview,
    },
    {
        path: '/blog-overview',
        layout: DefaultLayout,
        component: BlogOverview,
    },
    {
        path: '/user-profile-lite',
        layout: DefaultLayout,
        component: UserProfileLite,
    },
    {
        path: '/add-new-post',
        layout: DefaultLayout,
        component: AddNewPost,
    },
    {
        path: '/errors',
        layout: DefaultLayout,
        component: Errors,
    },
    {
        path: '/components-overview',
        layout: DefaultLayout,
        component: ComponentsOverview,
    },
    {
        path: '/tables',
        layout: DefaultLayout,
        component: Tables,
    },
    {
        path: '/blog-posts',
        layout: DefaultLayout,
        component: BlogPosts,
    },
    ...navBarRoutes,
];

export default Routes;
