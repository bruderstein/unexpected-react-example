/* This is the configuration for wallaby.js (http://wallabyjs.com)
 * a test runner that runs your tests as you type, and highlights coverage directly in your editor/ide
 */

var Babel = require('babel');

module.exports = function (wallaby) {

    return {
        files: [
            'src/**/*.js',
            {
                pattern: 'src/**/tests/*.spec.js',
                ignore: true
            },
            {
                pattern: 'src/testHelpers/**/*',
                instrument: false
            }],

        tests: ['src/**/*.spec.js'],
        env: {
            type: 'node',
            runner: 'node'
        },

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                babel: Babel
            }),
            '**/*.jsx': wallaby.compilers.babel({
                babel: Babel
            })
        }
    };
};