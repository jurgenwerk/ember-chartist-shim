/*jshint node:true*/
module.exports = {
  afterInstall: function(options) {
    return this.addBowerPackageToProject('chartist');
  }
};
