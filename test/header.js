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
	const panel = mount( <Panel id = 'menu' /> )

	it( 'Sets id prop', done => {

		// Check if a regular render works
		expect( panel.props( ).id ).to.equal( 'menu' )
		done( )

	} )

	it( 'Can change id prop', done => {

		// Check if we can change it
		panel.setProps( {id: "changed"} )
		expect( panel.props( ).id ).to.equal( 'changed' )
		done( )

	} )

	it( 'Toggles visibility', done => {

		// Check if panel is hidden by default
		expect( panel.state( ).visible ).to.be.false
		panel.find( '#menu-btn' ).simulate( 'click' )
		expect( panel.state( ).visible ).to.be.true
		done( )

	} )

	it( 'Displays menu items', done => {

		// Check if menu item objects are rendered
		let stateItems = panel.state( ).menuLinks.length
		let renderedItems = panel.find( '.menuitem' )
		expect( renderedItems ).to.have.length( stateItems )
		done( )

	} )

} )

describe( '<Header />', f => {

	const panel = mount(
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
		let header = panel.find( '#header' )
		expect( header.prop( 'id' ) ).to.equal( 'header' )
		expect( header )
		done( )

	} )

	it( 'Shows & hides the logo, and shows brand name', done => {

		// Find the logo and check visibility
		let logo = panel.find( 'img#logo' )
		expect( logo.prop( 'src' ) ).to.equal( 'logo.png' )
		expect( logo.prop( 'class' ) ).to.equal( undefined )

		// Remove the logo path and check for brand name
		panel.setProps( { logo: undefined } )
		expect( logo.prop( 'className' ) ).to.equal( 'hide' )

		// Shows brand name
		let identity = panel.find( '#identity' ).text( )
		expect( identity ).to.equal( 'Identity' )

		done( )
	} )

	it( 'Sets the title and subtitle', done => {
		let title = panel.find( '#title' ).text( )
		let subtitle = panel.find( '#subtitle' ).text( )

		expect( title ).to.equal( 'Home' )
		expect( subtitle ).to.equal( 'Welcome stranger' )

		done( )

	} )

} )