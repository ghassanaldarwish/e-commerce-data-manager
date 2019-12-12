export default type => {
    return import('./rest').then(factory => factory.default());
};
