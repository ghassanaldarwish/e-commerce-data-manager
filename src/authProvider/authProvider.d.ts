export default {
    login: ({ username, password }) => {
        /* ... */
    },
    logout: () => {
        localStorage.removeItem('access_token');
        return Promise.resolve();
    },
    // ...
};
