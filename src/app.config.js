function config(readApplicationConfiguratorProvider) {
    readApplicationConfiguratorProvider.configure({
        defaultApplicationState: '/read/book',
        defaultLoginState: 'login',

        productionBaseUrl: 'http://hub.mue.in.ua/api',
        developmentBaseUrl: 'http://localhost:20000/api'
    });
}

config.$inject = ['readApplicationConfiguratorProvider'];

export default config;