function config(readApplicationConfiguratorProvider) {
    readApplicationConfiguratorProvider.configure({
        defaultApplicationState: '/read/book',
        defaultLoginState: 'login',

        productionBaseUrl: 'http://hub.mue.in.ua/api',
        developmentBaseUrl: 'http://hub.mue.in.ua/api'
    });
}

config.$inject = ['readApplicationConfiguratorProvider'];

export default config;