import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let _this = this;
    return Ember.$.getJSON('/mock-api-data/definitions/activities.json').then(function (activities) {
      /* return _this.get('store').push({
        data: activities
      });*/
      return activities;
    });
  }
});
