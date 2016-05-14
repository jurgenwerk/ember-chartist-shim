import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import chartist from 'chartist';

moduleForAcceptance('chartist shim test');

test('Installation verification', function(assert) {
  visit('/');

  andThen(function() {
    assert.ok(find('line').length >= 0, 'chart lines rendered');
    assert.equal(typeof chartist, 'object', 'chartist module ok');
  });
});
