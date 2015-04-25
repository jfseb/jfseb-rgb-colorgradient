var should = require('chai').should(),
    colorgradient = require('../client'),
    makeColor = colorgradient.makeColor,
    makeGradientHTML = colorgradient.makeGradientHTML;


describe('makeColor', function() {

   it('color for 0.5', function() {
       makeColor(0.5).should.equal('#FE4A2B');
    });
	
   it('color for 0.0', function() {
       makeColor(0.0).should.equal('#7FF21E');
    });
	
	   it('color for 1.0', function() {
       makeColor(1.0).should.equal('#7E0BDF');
    });
});