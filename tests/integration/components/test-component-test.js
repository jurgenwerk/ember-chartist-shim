import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('test-component', 'Integration | Component | test component', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{test-component}}`);
  assert.equal(this.$('.chart').length, 1);
});
