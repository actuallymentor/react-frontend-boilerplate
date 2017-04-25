// Get polyfill so we can use full ES6 in the tests
import 'babel-polyfill'

// Get the expect functionality
import { expect } from 'chai'

describe( 'Testing template', f => {
	expect( 1 ).to.equal( 1 )
} )