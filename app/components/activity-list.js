import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    orderBy: function (params) {
      let sorted = this.get('activities').sortBy(params);
      return this.set('activities', sorted);
    },
    addOne: function () {
      this.get('activities').pushObject({activity: 'kayaking', intensity: 'moderate'});
    }
  }
});
