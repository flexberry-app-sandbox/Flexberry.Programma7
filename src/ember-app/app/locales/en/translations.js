import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProgramma_7ДолжностьLForm from './forms/i-i-s-programma-7-должность-l';
import IISProgramma_7ОтчетОСервереLForm from './forms/i-i-s-programma-7-отчет-о-сервере-l';
import IISProgramma_7РасположениеLForm from './forms/i-i-s-programma-7-расположение-l';
import IISProgramma_7СенсорыLForm from './forms/i-i-s-programma-7-сенсоры-l';
import IISProgramma_7СервернаяLForm from './forms/i-i-s-programma-7-серверная-l';
import IISProgramma_7СотрудникLForm from './forms/i-i-s-programma-7-сотрудник-l';
import IISProgramma_7ДолжностьEForm from './forms/i-i-s-programma-7-должность-e';
import IISProgramma_7ОтчетОСервереEForm from './forms/i-i-s-programma-7-отчет-о-сервере-e';
import IISProgramma_7РасположениеEForm from './forms/i-i-s-programma-7-расположение-e';
import IISProgramma_7СенсорыEForm from './forms/i-i-s-programma-7-сенсоры-e';
import IISProgramma_7СервернаяEForm from './forms/i-i-s-programma-7-серверная-e';
import IISProgramma_7СотрудникEForm from './forms/i-i-s-programma-7-сотрудник-e';
import IISProgramma_7ДолжностьModel from './models/i-i-s-programma-7-должность';
import IISProgramma_7КонтроллерModel from './models/i-i-s-programma-7-контроллер';
import IISProgramma_7ОтчетОСервереModel from './models/i-i-s-programma-7-отчет-о-сервере';
import IISProgramma_7РасположениеModel from './models/i-i-s-programma-7-расположение';
import IISProgramma_7СенсорыModel from './models/i-i-s-programma-7-сенсоры';
import IISProgramma_7СервернаяModel from './models/i-i-s-programma-7-серверная';
import IISProgramma_7СотрудникModel from './models/i-i-s-programma-7-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-programma-7-должность': IISProgramma_7ДолжностьModel,
    'i-i-s-programma-7-контроллер': IISProgramma_7КонтроллерModel,
    'i-i-s-programma-7-отчет-о-сервере': IISProgramma_7ОтчетОСервереModel,
    'i-i-s-programma-7-расположение': IISProgramma_7РасположениеModel,
    'i-i-s-programma-7-сенсоры': IISProgramma_7СенсорыModel,
    'i-i-s-programma-7-серверная': IISProgramma_7СервернаяModel,
    'i-i-s-programma-7-сотрудник': IISProgramma_7СотрудникModel
  },

  'application-name': 'Programma_7',

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
        'application-name': 'Programma_7',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Programma_7',
          title: 'Programma_7'
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
        курсовая: {
          caption: 'Курсовая',
          title: 'Курсовая',
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-programma-7-должность-l': {
              caption: 'Должность',
              title: ''
            },
            'i-i-s-programma-7-сотрудник-l': {
              caption: 'Сотрудник',
              title: ''
            }
          },
          контроллер: {
            caption: 'Контроллер',
            title: 'Контроллер',
            'i-i-s-programma-7-сенсоры-l': {
              caption: 'Сенсоры',
              title: ''
            }
          },
          сервер: {
            caption: 'Сервер',
            title: 'Сервер',
            'i-i-s-programma-7-отчет-о-сервере-l': {
              caption: 'Отчет о сервере',
              title: ''
            },
            'i-i-s-programma-7-расположение-l': {
              caption: 'Расположение',
              title: ''
            },
            'i-i-s-programma-7-серверная-l': {
              caption: 'Серверная',
              title: ''
            }
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
    'i-i-s-programma-7-должность-l': IISProgramma_7ДолжностьLForm,
    'i-i-s-programma-7-отчет-о-сервере-l': IISProgramma_7ОтчетОСервереLForm,
    'i-i-s-programma-7-расположение-l': IISProgramma_7РасположениеLForm,
    'i-i-s-programma-7-сенсоры-l': IISProgramma_7СенсорыLForm,
    'i-i-s-programma-7-серверная-l': IISProgramma_7СервернаяLForm,
    'i-i-s-programma-7-сотрудник-l': IISProgramma_7СотрудникLForm,
    'i-i-s-programma-7-должность-e': IISProgramma_7ДолжностьEForm,
    'i-i-s-programma-7-отчет-о-сервере-e': IISProgramma_7ОтчетОСервереEForm,
    'i-i-s-programma-7-расположение-e': IISProgramma_7РасположениеEForm,
    'i-i-s-programma-7-сенсоры-e': IISProgramma_7СенсорыEForm,
    'i-i-s-programma-7-серверная-e': IISProgramma_7СервернаяEForm,
    'i-i-s-programma-7-сотрудник-e': IISProgramma_7СотрудникEForm
  },

});

export default translations;
