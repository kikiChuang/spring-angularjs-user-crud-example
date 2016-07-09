module.exports = function ( config ) {
    config.set( {
        basePath         : '../../../',
        frameworks       : ['jasmine'],
        files            : [
            'node_modules/angular/angular.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/main/webapp/WEB-INF/resources/js/**/*.module.js',
            'src/main/webapp/WEB-INF/resources/js/**/*.js',
            'src/test/js/**/*.js'
        ],
        exclude          : [],
        preprocessors    : {
            'src/main/webapp/WEB-INF/resources/js/**/*.js' : ['coverage']
        },
        reporters        : ['progress', 'coverage'],
        port             : 9876,
        colors           : true,
        logLevel         : config.LOG_INFO,
        autoWatch        : true,
        browsers         : ['Chrome'],
        singleRun        : true,
        plugins          : [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-junit-reporter',
            'karma-coverage'
        ],
        coverageReporter : {
            type : 'html',
            dir  : 'target/coverage/'
        }
    } );
};