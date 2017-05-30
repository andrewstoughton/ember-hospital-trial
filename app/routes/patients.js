import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return Ember.$.getJSON('/mock-api-data/patients.json');

    var content = [];
    var _this = this;

    $.ajax({
      url: '/mock-api-data/patients.json',
      success: function(patients) {
        content.pushObjects(patients);

        // _this.store.push(patients);
      }
    });

    return content;
  }
});
