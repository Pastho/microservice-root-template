// should be added to .gitignore after cloning
var config = {
    development: {
        url: 'http://my.site.com',
        database: {
            host: '',
            port: '',
            db: ''
        },
        server: {
            host: '127.0.0.1',
            port: '3000'
        }
    },
    production: {
        url: 'http://my.site.com',
        database: {
            host: '127.0.0.1',
            port: '27017',
            db: 'site'
        },
        server: {
            host: '127.0.0.1',
            port: '3421'
        }
    }
};
module.exports = config;