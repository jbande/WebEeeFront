module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		webfont: {
			icons: {
				src: 'src/assets/images/*.svg',
				dest: 'src/assets/fonts',
				destCss: 'src/assets/',
				options: {
					fonts: 'eee',
					fontFilename: 'EEE-Icons',
					fontFamilyName: 'EEE Icons',
					templateOptions: {
						baseClass: 'eee',
						classPrefix: 'i-'
					}
				}
			}
		}

	});


  grunt.loadNpmTasks('grunt-webfont');

	grunt.registerTask('fontico', ['webfont:icons']);


	grunt.registerTask('default', ['fontico']);


};
