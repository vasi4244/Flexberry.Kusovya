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
          caption: i18n.t('forms.application.sitemap.kusovya.caption'),
          title: i18n.t('forms.application.sitemap.kusovya.title'),
          children: [{
            link: 'i-i-s-kusovya-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.kusovya.i-i-s-kusovya-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.kusovya.i-i-s-kusovya-сотрудник-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-kusovya-должность-l',
            caption: i18n.t('forms.application.sitemap.kusovya.i-i-s-kusovya-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.kusovya.i-i-s-kusovya-должность-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-kusovya-рез-опрос-l',
            caption: i18n.t('forms.application.sitemap.kusovya.i-i-s-kusovya-рез-опрос-l.caption'),
            title: i18n.t('forms.application.sitemap.kusovya.i-i-s-kusovya-рез-опрос-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})