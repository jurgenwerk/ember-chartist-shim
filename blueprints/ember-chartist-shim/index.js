/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {
    // allows to run ember -g ember-chartist-shim and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  },
  afterInstall: function(options) {
    return this.addBowerPackageToProject('chartist');
  }
};
