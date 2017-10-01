module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/main.css': 'sass/main.sass'
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif,jpeg}'],
                    dest: 'images-build/'
                }]
            }
        },

        watch: {
            styles: {
                files: ['sass/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },

            images: {
                files: ['images/*'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                },
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }

    });

    
    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-browser-sync');



    // Default task(s).

    grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};