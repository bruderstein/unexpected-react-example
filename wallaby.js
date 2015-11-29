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

        workers: {
            /*  In order to use jsdomify, we need to recycle the workers.
             *  Otherwise, the globals that are created by React, jsdomify, mocha are not properly cleaned up
             *  I've attempted unsuccessfully to use the `bootstrap` method to clear the require.cache, and
             *  also to clean out all globals created by mocha etc, but nothing worked :(
             *  Grateful for suggestions!
             */
            recycle: true
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