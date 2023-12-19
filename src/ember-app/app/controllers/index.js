import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.курсовая.caption'),
          title: i18n.t('forms.application.sitemap.курсовая.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.курсовая.сотрудники.caption'),
            title: i18n.t('forms.application.sitemap.курсовая.сотрудники.title'),
            children: [{
              link: 'i-i-s-programma-7-должность-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-programma-7-должность-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-programma-7-должность-l.title'),
              icon: 'suitcase',
              children: null
            }, {
              link: 'i-i-s-programma-7-сотрудник-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-programma-7-сотрудник-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-programma-7-сотрудник-l.title'),
              icon: 'tags',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.курсовая.контроллер.caption'),
            title: i18n.t('forms.application.sitemap.курсовая.контроллер.title'),
            children: [{
              link: 'i-i-s-programma-7-сенсоры-l',
              caption: i18n.t('forms.application.sitemap.курсовая.контроллер.i-i-s-programma-7-сенсоры-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.контроллер.i-i-s-programma-7-сенсоры-l.title'),
              icon: 'address card',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.курсовая.сервер.caption'),
            title: i18n.t('forms.application.sitemap.курсовая.сервер.title'),
            children: [{
              link: 'i-i-s-programma-7-отчет-о-сервере-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сервер.i-i-s-programma-7-отчет-о-сервере-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сервер.i-i-s-programma-7-отчет-о-сервере-l.title'),
              icon: 'folder',
              children: null
            }, {
              link: 'i-i-s-programma-7-расположение-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сервер.i-i-s-programma-7-расположение-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сервер.i-i-s-programma-7-расположение-l.title'),
              icon: 'phone',
              children: null
            }, {
              link: 'i-i-s-programma-7-серверная-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сервер.i-i-s-programma-7-серверная-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сервер.i-i-s-programma-7-серверная-l.title'),
              icon: 'edit',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})