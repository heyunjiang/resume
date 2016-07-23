module.exports = function (grunt) {


    grunt.initConfig({

        sass: {
            dist: {
                options: {
                    sourcemap: 'none'
                },
                files: {
                    './css/index.css': './sass/index.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    './sass/index.scss',
                    './structureSass/structure.scss'
                ],
                tasks: ['sass']
            }
        },
        uglify: {
            build: {
                src: ['js/chart.js','js/impress.js','js/style.js'],
                dest: "js/result.js"
            }
        },
        concat: {
            dist: {
                src: ['css/optiscroll.css','css/result.css'],
                dest: 'css/result.min.css'
                // src: ['js/optiscroll.min.js','js/result.js'],
                // dest: 'js/result.min.js'
            }
        },
        cssmin: {
            css: {
                src: ['css/impress-demo.css','css/index.css'],
                dest: 'css/result.css'
            }
        },
        htmlmin: {
             options: {
                removeComments: true,
                removeCommentsFromCDATA: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true
            },
            html: {
                src: 'test.html',
                dest: 'index.html'
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['watch']);

};