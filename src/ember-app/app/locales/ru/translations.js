import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKusovyaДолжностьLForm from './forms/i-i-s-kusovya-должность-l';
import IISKusovyaРезОпросLForm from './forms/i-i-s-kusovya-рез-опрос-l';
import IISKusovyaСотрудникLForm from './forms/i-i-s-kusovya-сотрудник-l';
import IISKusovyaДолжностьEForm from './forms/i-i-s-kusovya-должность-e';
import IISKusovyaРезОпросEForm from './forms/i-i-s-kusovya-рез-опрос-e';
import IISKusovyaСотрудникEForm from './forms/i-i-s-kusovya-сотрудник-e';
import IISKusovyaДолжностьModel from './models/i-i-s-kusovya-должность';
import IISKusovyaРезОпросModel from './models/i-i-s-kusovya-рез-опрос';
import IISKusovyaСотрудникModel from './models/i-i-s-kusovya-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kusovya-должность': IISKusovyaДолжностьModel,
    'i-i-s-kusovya-рез-опрос': IISKusovyaРезОпросModel,
    'i-i-s-kusovya-сотрудник': IISKusovyaСотрудникModel
  },

  'application-name': 'Kusovya',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kusovya',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kusovya',
          title: 'Kusovya'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        kusovya: {
          caption: 'Kusovya',
          title: 'Kusovya',
          'i-i-s-kusovya-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-kusovya-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-kusovya-рез-опрос-l': {
            caption: 'Рез опрос',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kusovya-должность-l': IISKusovyaДолжностьLForm,
    'i-i-s-kusovya-рез-опрос-l': IISKusovyaРезОпросLForm,
    'i-i-s-kusovya-сотрудник-l': IISKusovyaСотрудникLForm,
    'i-i-s-kusovya-должность-e': IISKusovyaДолжностьEForm,
    'i-i-s-kusovya-рез-опрос-e': IISKusovyaРезОпросEForm,
    'i-i-s-kusovya-сотрудник-e': IISKusovyaСотрудникEForm
  },

});

export default translations;
