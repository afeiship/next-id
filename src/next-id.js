(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var id = 0;

  nx.id = function () {
    return ++id;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.id;
  }

}());
