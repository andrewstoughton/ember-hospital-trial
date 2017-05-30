import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let _this = this;
    /* return Ember.$.getJSON('/mock-api-data/patients/' + params.patient_id + '/summary.json', function (summary) {
      _this.store.set('patient', summary);
    });*/

    return Ember.$.getJSON('/mock-api-data/patients/' + params.patient_id + '/summary.json').then(function (summary) {
      /* return _this.get('store').push({
        data: activities
      });*/
      return summary;
    });
  }
});
