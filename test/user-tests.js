var chai = require("chai");
var assert = chai.assert;
var calculator = require('../calculator');

describe('prueba unitaria: ', function() {
    describe('verificando valor retornado: assert.equal(val, val): ', function(){
        result = calculator.addTest(1,3);
        assert.equal(result, 2);
    });
});
