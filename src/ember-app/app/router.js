import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kusovya-должность-l');
  this.route('i-i-s-kusovya-должность-e',
  { path: 'i-i-s-kusovya-должность-e/:id' });
  this.route('i-i-s-kusovya-должность-e.new',
  { path: 'i-i-s-kusovya-должность-e/new' });
  this.route('i-i-s-kusovya-рез-опрос-l');
  this.route('i-i-s-kusovya-рез-опрос-e',
  { path: 'i-i-s-kusovya-рез-опрос-e/:id' });
  this.route('i-i-s-kusovya-рез-опрос-e.new',
  { path: 'i-i-s-kusovya-рез-опрос-e/new' });
  this.route('i-i-s-kusovya-сотрудник-l');
  this.route('i-i-s-kusovya-сотрудник-e',
  { path: 'i-i-s-kusovya-сотрудник-e/:id' });
  this.route('i-i-s-kusovya-сотрудник-e.new',
  { path: 'i-i-s-kusovya-сотрудник-e/new' });
});

export default Router;
