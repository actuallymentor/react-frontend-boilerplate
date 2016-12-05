#! /usr/bin/env node
const fs = require( 'fs' )
const ncp = require( 'ncp' ).ncp
const colors = require( 'colors' )
// Grabbing paths
const path = {
	package: __dirname,
	current: process.cwd(  )
}

// File helper
const copy = file => {
	fs.createReadStream( path.package + '/' + file )
	.on( 'error', err => console.log( err ) )
	.pipe(
		fs.createWriteStream( path.current + '/' + file )
		.on( 'error', err => console.log( err ) )
		)
}

console.log( "\n# Generating React Frontend boilerplate".green )
console.log( colors.gray.italic( "> NPM package directory: " + path.package ) )
console.log( colors.gray.italic( "> Current working directory: " + path.current + '\n' ) )

// Copy generator files
console.log( "# Copying project files".green )

// Copy folders
console.log( '- Copying source code'.gray )
ncp( path.package + '/src', path.current + '/src', err => { if ( err ) console.log( colors.red( err ) ) } )
console.log( '- Copying web scaffold'.gray )
ncp( path.package + '/public', path.current + '/public', err => { if ( err ) console.log( colors.red( err ) ) } )

// Copy files
console.log( '- Grabbing build scripts and config files'.gray )
copy( 'webpack.config.js' )
copy( 'package.json' )
copy( '.babelrc' )
copy( '.travis.yml' )
copy( '.gitignore' )
copy( 'LICENSE.md' )
copy( 'README.md' )

console.log( "\n# If no errors ocurred you are good to go".green )
console.log( "Please run 'npm install' and use 'webpack -d --progress --watch' to trigger your first build\n".yellow )

// Thank you message
console.log( 'Enjoy writing your app'.green )
console.log( 'Github page: https://github.com/actuallymentor/react-frontend-boilerplate'.gray )
console.log( 'Full stack version: https://github.com/actuallymentor/react-node-boilerplate\n'.gray )