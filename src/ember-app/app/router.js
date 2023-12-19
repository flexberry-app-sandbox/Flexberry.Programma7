import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-programma-7-должность-l');
  this.route('i-i-s-programma-7-должность-e',
  { path: 'i-i-s-programma-7-должность-e/:id' });
  this.route('i-i-s-programma-7-должность-e.new',
  { path: 'i-i-s-programma-7-должность-e/new' });
  this.route('i-i-s-programma-7-отчет-о-сервере-l');
  this.route('i-i-s-programma-7-отчет-о-сервере-e',
  { path: 'i-i-s-programma-7-отчет-о-сервере-e/:id' });
  this.route('i-i-s-programma-7-отчет-о-сервере-e.new',
  { path: 'i-i-s-programma-7-отчет-о-сервере-e/new' });
  this.route('i-i-s-programma-7-расположение-l');
  this.route('i-i-s-programma-7-расположение-e',
  { path: 'i-i-s-programma-7-расположение-e/:id' });
  this.route('i-i-s-programma-7-расположение-e.new',
  { path: 'i-i-s-programma-7-расположение-e/new' });
  this.route('i-i-s-programma-7-сенсоры-l');
  this.route('i-i-s-programma-7-сенсоры-e',
  { path: 'i-i-s-programma-7-сенсоры-e/:id' });
  this.route('i-i-s-programma-7-сенсоры-e.new',
  { path: 'i-i-s-programma-7-сенсоры-e/new' });
  this.route('i-i-s-programma-7-серверная-l');
  this.route('i-i-s-programma-7-серверная-e',
  { path: 'i-i-s-programma-7-серверная-e/:id' });
  this.route('i-i-s-programma-7-серверная-e.new',
  { path: 'i-i-s-programma-7-серверная-e/new' });
  this.route('i-i-s-programma-7-сотрудник-l');
  this.route('i-i-s-programma-7-сотрудник-e',
  { path: 'i-i-s-programma-7-сотрудник-e/:id' });
  this.route('i-i-s-programma-7-сотрудник-e.new',
  { path: 'i-i-s-programma-7-сотрудник-e/new' });
});

export default Router;
