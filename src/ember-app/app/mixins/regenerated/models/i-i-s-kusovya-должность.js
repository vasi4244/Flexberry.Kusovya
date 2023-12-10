import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  номерДолжности: DS.attr('number'),
  сотрудник: DS.belongsTo('i-i-s-kusovya-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-kusovya-должность.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерДолжности: {
    descriptionKey: 'models.i-i-s-kusovya-должность.validations.номерДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-kusovya-должность.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностьE', 'i-i-s-kusovya-должность', {
    номерДолжности: attr('Номер должности', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    сотрудник: belongsTo('i-i-s-kusovya-сотрудник', 'Сотрудник', {
      имя: attr('Имя', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'имя' })
  });

  modelClass.defineProjection('ДолжностьL', 'i-i-s-kusovya-должность', {
    номерДолжности: attr('Номер должности', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    сотрудник: belongsTo('i-i-s-kusovya-сотрудник', 'Имя', {
      имя: attr('Имя', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
