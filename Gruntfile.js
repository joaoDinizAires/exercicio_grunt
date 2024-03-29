module.exports = (grunt) =>{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            dist:{
                options:{
                    paths:['src/styles/**/.*scss','src/styles/*.scss'],
                    compress:true
                },
                files:{
                    'dist/styles/main.min.css':'src/styles/main.less'
                }
            }
        },
        uglify:{
                options:{
                    mangle:true,
                },
                my_target:{
                    files:{
                        'dist/scripts/main.min.js':['scr/scripts/*.js','src/scripts/**/*.js']
                    }
                }
            }
        
    })
    grunt.registerTask('build',['less:dist','uglify'])
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
}