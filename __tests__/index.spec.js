(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.id should get different id every time', function () {
      var id1 = nx.id();
      var id2 = nx.id();

      expect(typeof id1).toBe('number');
      expect(id1 !== id2).toBe(true);
    });
  });
})();
