// Get polyfill so we can use full ES6 in the tests
import 'babel-polyfill'
// Create a mock DOM
import 'jsdom-global/register'

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'

import Footer from '../src/stateless/footer-views'

describe( '<Footer />', f => {

	const footer = mount( <Footer owner = "Mentor Palokaj" /> )

	it( 'Shows the copyright owner & year', done => {

		// Grab the copyright element
		let copyright = footer.find( '#copyright' ).text( )
		// Check for the owner
		expect( copyright ).contains( 'Mentor Palokaj' )
		// Check for the right year
		expect( copyright ).contains( new Date().getFullYear() )

		done( )
	} )

} )