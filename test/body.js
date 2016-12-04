// Get polyfill so we can use full ES6 in the tests
import 'babel-polyfill'
// Create a mock DOM
import 'jsdom-global/register'

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'

import { Main, Section } from '../src/state/body'
import Lorem from '../src/stateless/lorem-ipsum-view'

describe( '<Main />', f => {

	// Mount main with a Lorem Ipsum module
	const main = mount(
					<Main>
						<Section content = { <Lorem /> } />
					</Main>
					)
	it( 'Renders a <main> section', done => {
		expect( main.find( 'main' ) ).to.exist
		done( )
	} )

	it( 'Renders a <section> element', done => {
		expect( main.find( 'section' ) ).to.exist
		done( )
	} )

	it( 'Renders the Lorem Ipsum', done => {
		let loremTitle = main.find( 'span.lorem h1' ).text(  )
		expect( loremTitle ).contains( 'Lorem Ipsum' )
		done( )
	} )

} )