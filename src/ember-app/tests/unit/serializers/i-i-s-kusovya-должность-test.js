import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kusovya-должность', 'Unit | Serializer | i-i-s-kusovya-должность', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kusovya-должность',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-kusovya-должность',
    'model:i-i-s-kusovya-рез-опрос',
    'model:i-i-s-kusovya-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
