import Ember from 'ember';

export default Ember.Component.extend({
  isAscending: false,
  actions: {
    orderBy: function (params) {
      let sorted;
      if (!this.isAscending) {
        sorted = this.get('patients').sortBy(params);
      } else {
        sorted = this.get('patients').reverseObjects();
      }
      this.toggleProperty('isAscending');
      return this.set('patients', sorted);
    },
  }
});
