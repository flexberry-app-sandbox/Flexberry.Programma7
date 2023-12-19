import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-programma-7-сотрудник', 'Unit | Model | i-i-s-programma-7-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
