/* jshint node: true */
'use strict';

module.exports = {
  name: 'chartist',
  included: function included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/chartist/dist/chartist.css');
    app.import(app.bowerDirectory + '/chartist/dist/chartist.js');
    app.import('vendor/chartist.js', {
      exports: {
        Chartist: ['default']
      }
    });
  }
};
