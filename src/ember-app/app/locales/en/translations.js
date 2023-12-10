import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kusovya',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kusovya',
          title: 'Kusovya'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
