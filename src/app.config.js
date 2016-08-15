function config(readApplicationConfiguratorProvider) {
    readApplicationConfiguratorProvider.configure({
        defaultApplicationState: 'read.book.list',
        defaultLoginState: 'login',

        productionBaseUrl: 'http://hub.mue.in.ua/api',
        developmentBaseUrl: 'http://hub.mue.in.ua/api' // 'http://localhost:20000/api'
    });
}

config.$inject = ['readApplicationConfiguratorProvider'];

export default config;