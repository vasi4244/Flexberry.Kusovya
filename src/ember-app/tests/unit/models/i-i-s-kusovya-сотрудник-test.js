import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kusovya-сотрудник', 'Unit | Model | i-i-s-kusovya-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kusovya-должность',
    'model:i-i-s-kusovya-рез-опрос',
    'model:i-i-s-kusovya-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
