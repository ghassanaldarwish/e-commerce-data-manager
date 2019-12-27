import Products from './containers/Products/Products.container';
import { navbarConfig } from './navbar/navbarPrototypes';

export interface Route {
    path: string;
    exact?: boolean;
    component: any;
}

const navbar = (navbar: any) => {
    const pullAllNavbarItems: any = [];
    if (!!navbar) {
        navbar.forEach((category: any) => {
            pullAllNavbarItems.push({
                path: category.path,
                exact: true,

                component: Products,
            });
            if (!!category.options) {
                category.options.forEach((subItem: any) => {
                    pullAllNavbarItems.push({
                        path: subItem.path,
                        exact: true,

                        component: Products,
                    });
                    if (!!subItem.options) {
                        subItem.options.forEach((subSubItem: any) =>
                            pullAllNavbarItems.push({
                                path: subSubItem.path,
                                exact: true,

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

const Routes = navbar(navbarConfig);

export default Routes;
