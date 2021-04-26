(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
var id = 0;

  nx.id = function () {
    return ++id;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.id;
  }
})();
