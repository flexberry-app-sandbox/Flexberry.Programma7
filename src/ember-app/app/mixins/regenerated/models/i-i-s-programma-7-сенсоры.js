import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  idДатчки: DS.attr('number'),
  тип: DS.attr('string')
});

export let ValidationRules = {
  idДатчки: {
    descriptionKey: 'models.i-i-s-programma-7-сенсоры.validations.idДатчки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-programma-7-сенсоры.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СенсорыE', 'i-i-s-programma-7-сенсоры', {
    тип: attr('Тип', { index: 0 }),
    idДатчки: attr('Id датчки', { index: 1 })
  });

  modelClass.defineProjection('СенсорыL', 'i-i-s-programma-7-сенсоры', {
    тип: attr('Тип', { index: 0 }),
    idДатчки: attr('Id датчки', { index: 1 })
  });
};
