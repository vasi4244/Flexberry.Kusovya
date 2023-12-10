import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерРез: DS.attr('number'),
  оценка: DS.attr('number'),
  сотрудник: DS.belongsTo('i-i-s-kusovya-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  номерРез: {
    descriptionKey: 'models.i-i-s-kusovya-рез-опрос.validations.номерРез.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оценка: {
    descriptionKey: 'models.i-i-s-kusovya-рез-опрос.validations.оценка.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-kusovya-рез-опрос.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РезОпросE', 'i-i-s-kusovya-рез-опрос', {
    номерРез: attr('Номер рез', { index: 0 }),
    оценка: attr('Оценка', { index: 1 }),
    сотрудник: belongsTo('i-i-s-kusovya-сотрудник', 'Сотрудник', {
      имя: attr('Имя', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'имя' })
  });

  modelClass.defineProjection('РезОпросL', 'i-i-s-kusovya-рез-опрос', {
    номерРез: attr('Номер рез', { index: 0 }),
    оценка: attr('Оценка', { index: 1 }),
    сотрудник: belongsTo('i-i-s-kusovya-сотрудник', 'Имя', {
      имя: attr('Имя', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
