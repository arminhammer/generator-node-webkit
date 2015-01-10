/*jshint camelcase: false*/

module.exports = function (grunt) {
    'use strict';

    // load all grunt tasks
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var config = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        nodewebkit: {
            options: {
                platforms: ['linux64','win64'], // linux32, linux64, osx32, osx64, win32, win64
                buildDir: '<%= config.dist %>'
            },
            src: ['<%= config.app %>/**/*']
        },
        config: config,
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= config.dist %>/*',
                        '<%= config.tmp %>/*'
                    ]
                }]
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: '<%= config.app %>/js/*.js'
        }
    });

    grunt.registerTask('build', [
        'nodewebkit'
    ]);

    grunt.registerTask('check', [
        'jshint'
    ]);

};
