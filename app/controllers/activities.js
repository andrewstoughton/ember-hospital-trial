import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    orderByActivity() {
      debugger;
    }
  },
  filterByIntensity() {
    return this.get('model').filter(function(activity){
      return activity.intensity === 'moderate';
    })
  },
  orderAgain: function() {
    debugger;
  },
  sortedModel: function () {
    return this.get('model').sort(function(a, b) {
      var nameA = a.activity.toUpperCase();
      var nameB = b.activity.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }.property('@each')
});
