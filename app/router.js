import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('patients', function() {
    this.route('patient', { path: '/:patient_id/summary' });
  });
  this.route('activities');
});

export default Router;
