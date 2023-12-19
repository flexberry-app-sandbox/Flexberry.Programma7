import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-programma-7-расположение', 'Unit | Serializer | i-i-s-programma-7-расположение', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-programma-7-расположение',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-programma-7-режим-сервера',

    'model:i-i-s-programma-7-должность',
    'model:i-i-s-programma-7-контроллер',
    'model:i-i-s-programma-7-отчет-о-сервере',
    'model:i-i-s-programma-7-расположение',
    'model:i-i-s-programma-7-сенсоры',
    'model:i-i-s-programma-7-серверная',
    'model:i-i-s-programma-7-сотрудник',
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
