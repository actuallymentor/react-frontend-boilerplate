// Get polyfill so we can use full ES6 in the tests
import 'babel-polyfill'
// Create a mock DOM
import 'jsdom-global/register'

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'

import { Panel, Header } from '../src/state/head'

describe( '<Panel />', f => {

	// Render a Panel component
	const wrapper = mount( <Panel id = 'menu' /> )

	it( 'Sets id prop', done => {

		// Check if a regular render works
		expect( wrapper.props( ).id ).to.equal( 'menu' )
		done( )

	} )

	it( 'Can change id prop', done => {

		// Check if we can change it
		wrapper.setProps( {id: "changed"} )
		expect( wrapper.props( ).id ).to.equal( 'changed' )
		done( )

	} )

	it( 'Toggles visibility', done => {

		// Check if panel is hidden by default
		expect( wrapper.state( ).visible ).to.be.false
		wrapper.find( '#menu-btn' ).simulate( 'click' )
		expect( wrapper.state( ).visible ).to.be.true
		done( )

	} )

	it( 'Displays menu items', done => {

		// Check if menu item objects are rendered
		let stateItems = wrapper.state( ).menuLinks.length
		let renderedItems = wrapper.find( '.menuitem' )
		expect( renderedItems ).to.have.length( stateItems )
		done( )

	} )

} )

describe( '<Header />', f => {

	const wrapper = mount(
			<Header
				id 		 = "header"
				title 	 = "Home"
				subtitle = "Welcome stranger"
				name	 = "Identity"
				logo	 = "logo.png"
			/>
		)
	it( 'Sets header id', done => {

		// Find the header element and check the ID
		let header = wrapper.find( '#header' )
		expect( header.prop( 'id' ) ).to.equal( 'header' )
		expect( header )
		done( )

	} )

	it( 'Shows & hides the logo, and shows brand name', done => {

		// Find the logo and check visibility
		let logo = wrapper.find( 'img#logo' )
		expect( logo.prop( 'src' ) ).to.equal( 'logo.png' )
		expect( logo.prop( 'class' ) ).to.equal( undefined )

		// Remove the logo path and check for brand name
		wrapper.setProps( { logo: undefined } )
		expect( logo.prop( 'className' ) ).to.equal( 'hide' )

		// Shows brand name
		let identity = wrapper.find( '#identity' ).text( )
		expect( identity ).to.equal( 'Identity' )

		done( )
	} )

	it( 'Sets the title and subtitle', done => {
		let title = wrapper.find( '#title' ).text( )
		let subtitle = wrapper.find( '#subtitle' ).text( )

		expect( title ).to.equal( 'Home' )
		expect( subtitle ).to.equal( 'Welcome stranger' )

		done( )

	} )

} )