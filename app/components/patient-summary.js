import Ember from 'ember';

export default Ember.Component.extend({
  totalTime: Ember.computed(function () {
    let summaryModel = this.get('summary');
    let timeIncremement = 0;

    summaryModel.forEach(function (activity) {
      timeIncremement += activity.minutes;
    });

    return `${timeIncremement}`;
  }).property('minutes')
});
