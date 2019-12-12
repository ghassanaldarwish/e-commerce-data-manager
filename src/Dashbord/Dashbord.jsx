// import React, { Component } from 'react';
// import dataProvider from '../dataProvider/dataProvider.d';
// import {
//     Admin,
//     List,
//     TextField,
//     Datagrid,
//     EmailField,
//     Resource,
//     Create,
//     SimpleForm,
//     ReferenceInput,
//     SelectInput,
//     TextInput,
// } from 'react-admin';
// import PostIcon from '@material-ui/icons/Book';

// export const PostCreate = props => (
//     <Create {...props}>
//         <SimpleForm>
//             <ReferenceInput source="userId" reference="users">
//                 <SelectInput optionText="name" />
//             </ReferenceInput>
//             <TextInput source="title" />
//             <TextInput multiline source="body" />
//         </SimpleForm>
//     </Create>
// );

// export const UserList = props => (
//     <List {...props}>
//         <Datagrid rowClick="edit">
//             <TextField source="id" />
//             <TextField source="name" />
//             <TextField source="username" />
//             <EmailField source="email" />
//             <TextField source="address.street" />
//             <TextField source="phone" />
//             <TextField source="website" />
//             <TextField source="company.name" />
//         </Datagrid>
//     </List>
// );
// export class Dashbord extends Component {
//     render() {
//         return (
//             <Admin dataProvider={dataProvider}>
//                 <Resource name="users" list={UserList} />
//                 <Resource name="posts" create={PostCreate} icon={PostIcon} />
//                 <Resource name="dashbord" />
//                 <Resource name="dashbord" />
//             </Admin>
//         );
//     }
// }

// export default Dashbord;
import React, { useState, useEffect } from 'react';
import { Admin, Resource } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import authProvider from './authProvider';
import themeReducer from './themeReducer';
//import { Login, Layout } from './layout';
import { Dashboard } from './dashboard';
import customRoutes from './routes';
import englishMessages from './i18n/en';

import visitors from './visitors';
import orders from './orders';
import products from './products';
import invoices from './invoices';
import categories from './categories';
import reviews from './reviews';

import dataProviderFactory from './dataProvider';
import fakeServerFactory from './fakeServer';

const i18nProvider = polyglotI18nProvider(locale => {
    if (locale === 'fr') {
        return import('./i18n/fr').then(messages => messages.default);
    }

    // Always fallback on english
    return englishMessages;
}, 'en');

const App = () => {
    const [dataProvider, setDataProvider] = useState(null);

    useEffect(() => {
        let restoreFetch;

        const fetchDataProvider = async () => {
            restoreFetch = await fakeServerFactory(process.env.REACT_APP_DATA_PROVIDER);

            setDataProvider(await dataProviderFactory(process.env.REACT_APP_DATA_PROVIDER));
        };

        fetchDataProvider();

        return restoreFetch;
    }, []);

    if (!dataProvider) {
        return (
            <div className="loader-container">
                <div className="loader">Loading...</div>
            </div>
        );
    }

    return (
        <Admin
            title=""
            dataProvider={dataProvider}
            customReducers={{ theme: themeReducer }}
            customRoutes={customRoutes}
            authProvider={authProvider}
            dashboard={Dashboard}
            // loginPage={Login}
            // layout={Layout}
            //  i18nProvider={i18nProvider}
        >
            <Resource name="products" {...products} />
            <Resource name="customers" {...visitors} />
            <Resource name="commands" {...orders} options={{ label: 'Orders' }} />
            <Resource name="invoices" {...invoices} />

            <Resource name="categories" {...categories} />
            <Resource name="reviews" {...reviews} />
        </Admin>
    );
};

export default App;
