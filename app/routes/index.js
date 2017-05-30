import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(/* transition */) {
    this.transitionTo('patients'); // Implicitly aborts the on-going transition.
  }
});
