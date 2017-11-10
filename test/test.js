var assert = require("assert");
var curry = require("../curry");

function sum() {
    var args = [...arguments];
    var doubles = args.map(function(x) {
        return x * 2;
    });
    //console.log(doubles);
	return doubles;
}

var curry_second = curry(2, sum);
var curry_third = curry(3, sum);
var curry_fourth = curry(4, sum);

describe('Curryfication', function(){
	describe('All args in one call', function() {
		it('should return an array of size 3', function() {
			assert.equal(3, curry_third(1,2,3).length);
			assert.equal(3, curry_third(1,2)(3).length);
			assert.equal(2, curry_third(1)(2)(3).length);
		});
	});
});
