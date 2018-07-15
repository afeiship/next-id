var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-id');

describe('next/id', function () {

  it('nx.id', function () {
    var id1 = nx.id();
    var id2 = nx.id();

    assert.equal(id1, 1);
    assert.equal(id2, 2);
  });

});
